import React, { Component } from "react"
import { fetchPosts } from "../actions"
import { connect } from "react-redux"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h1>Post List</h1>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
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
