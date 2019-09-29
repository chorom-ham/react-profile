import React, { Component } from 'react';
import Introduction from './Introduction';

import styled, { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  html{
    font-size = 10px
  }
  `

const Row = styled.div`
    display:flex;
    flex-direction:row;
  `
const Introductions = ({array}) => (
  array.map(value => <Introduction data={value}/>)
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          key: 1,
          id: 1,
          name: "최수민",
          university: "서강",
          major: "컴퓨터공학",
          age: 25,
          emotion: "행복",
          animal: ["사자", "토끼", "뱀"]
        },
        {
          key: 2,
          id: 2,
          name: "이한길",
          university: "홍익",
          major: "법학",
          age: 29,
          emotion: "불행",
          animal: ["펭귄"]
        },
        {
          key: 3,
          id: 3,
          name: "김서영",
          university: "이화여자",
          major: "사이버보안학",
          age: 22,
          emotion: "불행",
          animal: ["웜", "트로이목마"]
        }
      ]
    }
  }

  render() {
    var whileInfoList = [];
    var forInfoList = [];
    var forEachInfoList = [];
    
    var whileIndex = 0;
    while (whileIndex < this.state.info.length) {
      whileInfoList.push(<Introduction data={this.state.info[whileIndex]}/>)
      whileIndex++;
    }

    this.state.info.forEach(value => {
      forEachInfoList.push(<Introduction data={value}/>)
    })

    return <div className="App">
      <div>
        여기에 이름이 표시됩니다.
      </div>

      <Row>
        <Introduction data={this.state.info[0]}></Introduction>
        <Introduction data={this.state.info[1]}></Introduction>
        <Introduction data={this.state.info[2]}></Introduction>
      </Row>
      <Row>
        {whileInfoList}
      </Row>
      <Row>
        {forEachInfoList}
      </Row>
      <Row>
        <Introductions array={this.state.info} />
      </Row>
    </div>;
  }
}


export default App;
