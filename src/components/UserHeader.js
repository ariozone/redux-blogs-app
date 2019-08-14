import React, { Component } from "react"
import { fetchUser } from "../actions"
import { connect } from "react-redux"

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }
  render() {
    return <h1>Name: </h1>
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader)
