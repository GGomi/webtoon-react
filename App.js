import React, {Component} from 'react';
import Webtoon from './Webtoon'
// import Header from './Layout/Header'
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
    }
    
    const monList = data.MON.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const tueList = data.TUE.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const wedList = data.WED.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const thuList = data.THU.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const friList = data.FRI.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const satList = data.SAT.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);
    const sunList = data.SUN.map((value, index) => <Webtoon name={value.toon_name} day={value.serialize_day} img={value.toon_imgsrc} href={value.toon_href} key={index} />);

    return (
      <div className="webtoon-list">
        <div className="daliy-list">
          <p className="date-header">월요일</p>
          {monList}
        </div>
        <div className="daliy-list">
          <p className="date-header">화요일</p>
          {tueList}
        </div>
        <div className="daliy-list">
          <p className="date-header">수요일</p>
          {wedList}
        </div>
        <div className="daliy-list">
          <p className="date-header">목요일</p>
          {thuList}
        </div>
        <div className="daliy-list">
          <p className="date-header">금요일</p>
          {friList}
        </div>
        <div className="daliy-list">
          <p className="date-header">토요일</p>
          {satList}
        </div>
        <div className="daliy-list">
          <p className="date-header">일요일</p>
          {sunList}
        </div>
      </div>
    );



  }
}

export default App;