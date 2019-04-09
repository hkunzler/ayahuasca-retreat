import React, { Component } from 'react';
import axios from 'axios'
const postAxios = axios.create()
const PostContext = React.createContext()

postAxios.interceptors.request.use((config) => {
    const token = localStorage.token
    config.headers.Authorization = `Bearer ${token}`
    return config
})


class PostProvider extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e, newPost) => {
        e.preventDefault()
        console.log(newPost)
        this.createPost(newPost)
    }
    getRecentPosts = () => {
            console.log("recent working");
            axios.get('/public').then(res => {
                    this.setState({
                        posts: res.data
                    })
                }).catch(err => console.log(err));
            }
    
    createPost = newPost => {
        console.log(newPost)
        console.log("create working");
        postAxios.post('/api/posts', newPost).then(res => {
            console.log('here')
            this.setState({ posts: res.data })
        }).catch(err => console.log(err))
    }
    render() {
    return(
        <PostContext.Provider
            value={{
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                createPost: this.createPost,
                getRecentPosts: this.getRecentPosts,
                ...this.state
            }}
        >
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export default PostProvider;

export const withPost = C => props => (
    <PostContext.Consumer>
        {value => <C {...props} {...value}/>}
    </PostContext.Consumer>
)