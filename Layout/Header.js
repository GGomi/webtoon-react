import React, { Component } from 'react';

class Header extends Component {

    search(){
        
    };
    render() {
        return (
            <div className="title-bar">
                <input id="searchBox"type="text"/>
                <button className="btn search-btn" onClick={this.search()}><img src={require("../commons/images/search-btn.png")} alt="search"></img></button>
            </div>
        );
    }
}

export default Header;