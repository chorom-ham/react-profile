import React, {Component} from 'react';
import Introduction from './Introduction';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info:[
        {
          key:1,
          id:1, 
          name:"최수민", 
          university:"서강", 
          major:"컴퓨터공학", 
          age:25, 
          emotion:"행복", 
          animal:["사자", "토끼", "뱀"]
        },
      {
        key:2, 
        id:2, 
        name:"이한길", 
        university:"홍익" , 
        major:"법학", 
        age:29, 
        emotion:"불행", 
        animal:["펭귄"]
      }, 
      {
        key:3, 
        id:3, 
        name:"김서영", 
        university:"이화여자", 
        major:"사이버보안학", 
        age:22, 
        emotion:"불행", 
        animal:["웜", "트로이목마"]
      }
    ]
    }
  }

  render() {
    return <div className="App"> 
      <Introduction data={this.state.info[0]}></Introduction>
      <Introduction data={this.state.info[1]}></Introduction>
      <Introduction data={this.state.info[2]}></Introduction>
    </div>;
  }

}
export default App;
