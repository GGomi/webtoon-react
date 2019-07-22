import React, {Component} from 'react';
import Webtoon from './Webtoon';
// import Button from './Layout/TabBtn';
import ReactModal from 'react-modal';
import Header from './Layout/Header';
class App extends Component {
  constructor(){
    super()
    this.state={
      data: undefined,
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  componentDidMount() {
    document.title = "MyToon | JeongminOh";

    fetch("/list").then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      });
  }

  render() {
    const { data } = this.state;
    let date = new Date();
    date = date.getDay();
    // const signup = document.getElementById("signUp");
    // signup.onclick => () {

    // };
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
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Modal Example"
            className="popup-modal"
          >
            <button onClick={this.handleCloseModal}>닫기</button>
          </ReactModal>
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