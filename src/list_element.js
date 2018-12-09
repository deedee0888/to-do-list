import React, { Component } from 'react';
import './App.css';


class List extends Component {

    render() {
        return (
           <div className="listElement">
            {this.props.text}
            <button className="dltBtn" onClick={this.props.deleteMethod}></button>
           </div>
        );
    }
}

export default List;

