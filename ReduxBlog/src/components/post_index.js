import React, { Component } from 'react';
// This is a container
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

// componentWillMount is a life cycle method, it will be called automatically
// by React whenever our component is about to be rendered to the DOM
// for the first time, it will not be called on subsuquesent re-renders
// Great place to place our action creator to fetch data
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render () {
    return (
      <div>List of blog posts</div>
    );
  }
}

// This is a container
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

//export default connect(null, mapDispatchToProps)(PostsIndex);

//export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);
