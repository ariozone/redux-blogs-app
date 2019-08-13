import React, { Component } from "react"
import { fetchPosts } from "../actions"
import { connect } from "react-redux"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        <h1>Post List</h1>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {}
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList)
