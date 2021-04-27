import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML Is For Information' },
        { id: 2, title: 'CSS', desc: 'CSS Is For Design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript Is For Interactive' },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className='App'>
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
          <h1>
            <a
              href='/'
              onClick={function (e) {
                console.log(e);
                e.preventDefault();
                // this.state.mode = 'welcome'; : test this에 아무 값도 없어 state를 읽을 수 없음 -> bind(this)를 함수 끝난 직후에 추가해주기 -> 그럼 this가 본 컴포넌트가 됨! + 문법에도 맞지 않음
                this.setState({
                  // 요렇게 직접 변경 말고 함수 형태로 변경해야  함test
                  mode: 'welcome',
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
