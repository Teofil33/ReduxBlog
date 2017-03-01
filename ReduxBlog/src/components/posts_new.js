import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render () {
    return (
    <form className="col-sm-8 col-sm-offset-2">
      <h3>Create a New Post</h3>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea className="form-control" />
      </div>
      <button type="submit" className="btn btn-info btn-block">Create</button>
    </form>
    );
  };
}

export default reduxForm ({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);

// https://github.com/erikras/redux-form
// npm install --save redux-form
