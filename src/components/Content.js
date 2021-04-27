import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.dsc}
      </article>
    );
  }
}

export default Content;
