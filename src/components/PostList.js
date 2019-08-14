import React, { Component } from "react"
import { fetchPosts } from "../actions"
import { connect } from "react-redux"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  renderList() {
    return this.props.posts.map(post => (
      <div className='item' key={post.id}>
        <i className='large middle aligned icon user' />
        <div className='content'>
          <div className='description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    ))
  }
  render() {
    return (
      <div>
        <h1>Post List</h1>
        <div className='ui relaxed divided list'>{this.renderList()}</div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { posts: state.posts }
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList)
