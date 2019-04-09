import React, { Component } from 'react';
import { withPost } from '../context/PostProvider'
import './../book-retreat.css'

class BookRetreat extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getRecentPosts()
    }
    
    render() {
        const price = this.props.posts.length ? this.props.posts[this.props.posts.length - 1].price : null
            return (
                <div className="background-sides">
                    <div className="body-background">
            <div id='book-retreat'>
                <div className='retreat-flex'>
                <h4>8-day Ayahuasca Retreat</h4>
                    <p>Price: ${price}</p>
                    <button style={{ background: '#00800070', marginTop: '25%' }}>Purchase</button>
                        </div>
                        </div>
                        </div>
            </div>
        );
    }
}

export default withPost(BookRetreat);