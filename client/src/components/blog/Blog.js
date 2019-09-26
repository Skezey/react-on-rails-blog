import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Post from './Post';
import PostForm from './PostForm';

class Blog extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  renderPost = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} />)
  }

  addPost = (post) => {
    axios.post('/api/posts', { post })
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: [...posts, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <Header>Blog</Header>
        <PostForm add={this.addPost} />
        { this.renderPost() }
      </>
    )
  }
}

export default Blog;
