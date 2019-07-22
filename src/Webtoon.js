import React, { Component } from 'react';
import './App.css'
class Webtoon extends Component {
    
    render() {
        const {name, img, href} = this.props;
        const link = "https://comic.naver.com"+href;
        
        return (
            <div>
                <a href={link}><img className="thumb-img" src={img} alt={name}></img></a>
                <p className="thumb-title">{name}</p>
            </div>
        )
    }
}

export default Webtoon;