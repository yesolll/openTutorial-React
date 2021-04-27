import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href='/'
            onClick={function (e) {
              e.preventDefault(); // 페이지 바뀌는 것 막고 Subject의 onChangePage로 함수 전달, 그 함수를
              this.props.onChangePage(); // 받음
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
