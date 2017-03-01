import React, { Component } from 'react';

// componentWillMount is a life cycle method, it will be called automatically
// by React whenever our component is about to be rendered to the DOM
// for the first time, it will not be called on subsuquesent re-renders
// Great place to place our action creator to fetch data
class PostIndex extends Component {
  componentWillMount() {
    console.log("Good time to call action creator");
  }
  render () {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
