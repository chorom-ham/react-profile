import React, {Component} from 'react';

class Introduction extends Component {
  render() {
    var data = this.props.data;
    var animalData = this.props.data.animal;
    var animalList = [];
    var index=0;

    while(index<animalData.length){
        animalList.push(<li>{animalData[index]}</li>);
        index++;
    }

    return <div className="Introduction">
        <h1> {data.name} </h1>
        <article> 
            <p>안녕하세요 저는 {data.university}대학교의 {data.major}과에 다니고 있습니다.</p>
            <p>올해는 {data.age}살인데 내년엔 {data.age+1}이에요.</p>
            <p>지금 기분은 {data.emotion}해요!</p>
        </article>
        <h2>좋아하는 동물</h2>
        <ul>
            {animalList}
        </ul>
    </div>;
    }
}

export default Introduction;
