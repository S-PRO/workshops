import React from 'react';


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: props.author || '',
      title: props.title || '',
      content: props.content || '',
    }
  };


  onChangeField = (field, value) => {
    this.setState({
      [field]: value,
    })
  };

  render() {
    const { author, title, content } = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="author" className="col-sm-2 control-label">Author</label>
          <input
            className="form-control"
            id="author"
            value={author}
            onChange={e => this.onChangeField('author', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">Title</label>
          <input
            className="form-control"
            id="title"
            value={title}
            onChange={e => this.onChangeField('title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="col-sm-2 control-label">Content</label>
          <input
            className="form-control"
            id="content"
            value={content}
            onChange={e => this.onChangeField('content', e.target.value)}
          />
        </div>
        <button
          onClick={() => this.props.onSubmit(this.state)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    )
  }
}