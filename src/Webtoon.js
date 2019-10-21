import React, { Component } from 'react';
import './App.css'
class Webtoon extends Component {
    
    render() {
        const {name, img, href, provider} = this.props;
        const prefixHref = provider === "NAVER" ? "https://comic.naver.com" : "http://webtoon.daum.net";
        const link =  prefixHref + href;
        
        return (
            <div className="webtoon-item">
                <a href={link} target="_sub"><img className="thumb-img" src={img} alt={name}></img></a>
                <p className="thumb-title">{name}</p>
            </div>
        )
    }
}

export default Webtoon;