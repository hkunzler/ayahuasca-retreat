import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
const adminAxios = axios.create()

adminAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const AdminContext = React.createContext()

class AdminProvider extends Component {
    constructor() {
        super()
        this.state = {
            admin: JSON.parse(localStorage.getItem("admin")) || {},
            token: localStorage.token || "",
            errMsg: ''
        }
    }
    login = credentials => {
        axios.post('/auth/login', credentials).then(res => {
        const { admin, token } = res.data
        localStorage.setItem('admin', JSON.stringify(admin))
        localStorage.setItem('token', token)
        this.setState({admin, token, errMsg: ''})
        }).catch(err => 
            this.handleErr(err.response.data.errMsg)
        )
    }
    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        this.setState({ admin: {}, token: ''})
    }
    handleErr = errMsg => this.setState({ errMsg })
    render() {
        return (
            <AdminContext.Provider
                value={{
                    ...this.state,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </AdminContext.Provider>
        );
    }
}

export default withRouter(AdminProvider);

export const withAdmin = C => props => (
    <AdminContext.Consumer>
        {value => <C {...props}{...value}/>}
    </AdminContext.Consumer>
)