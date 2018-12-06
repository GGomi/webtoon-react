import React, {Component} from 'react';
import Webtoon from './Webtoon';
// import Button from './Layout/TabBtn';
import Header from './Layout/Header';
class App extends Component {
  constructor(){
    super()
    this.state={
      data: undefined
    }
  }
  
  componentDidMount() {
    document.title = "MyToon | JeongminOh";

    fetch("/list").then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    const { data } = this.state;
    let date = new Date();
    date = date.getDay();
    
    if(date === 0) {
      date = 6;
    } else {
      date = date - 1;
    }

    if (!data) {
      return <h2>로딩중........</h2>
    } else {
      const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
      
      return (
        <div>
          <Header></Header>
          <div className="webtoon-list">
            {weekArr.map(function (object, i) {
              const column = data[object].map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
              let className = "daliy-list side";
              if(i === date) {
                className = "daliy-list side today";
              } 

              return (
                <div className={className} key={i}>
                  <div className="date-header">{weekArr[i]}</div>
                  {column}
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;