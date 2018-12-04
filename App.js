import React, {Component} from 'react';
import Webtoon from './Webtoon'
import Header from './Layout/Header'
class App extends Component {
  constructor(){
    super()
    this.state={
      data: undefined
    }
  }
  
  componentDidMount(){
    fetch("/list").then(res=> res.json())
    .then(data=> {
      this.setState({
         data : data
      })
    })
  }

  render() {
    const {data} = this.state;

    if(!data){
      return <h2>로딩 중...</h2>
    } else {
      
      const weekArr = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
      
      return (
        <div className="webtoon-list">
          <Header></Header>
          {weekArr.map(function (object, i) {
            const column = data[object].map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
            return (
              <div className="daliy-list">
                <h3>{weekArr[i]}</h3>
                {column}
              </div>
            )
          })}
        </div>
      );
    }
  }
}

export default App;