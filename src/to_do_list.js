import React, { Component } from 'react';
import List from './list_element';


export class ToDoList extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        userInput: '',
        list: [],
    }
}



changeUserInput = event => {
    this.setState({
        userInput: event.target.value
    });

}

handleOnKey = event => {
    if(event.key === 'Enter') {
        let listArr = this.state.list;
        listArr.push(this.state.userInput);
        this.setState({ userInput: '' });

    }
}

addToList() {

    if(this.state.userInput === '') {return}
    
    let listArr = this.state.list;
    listArr.push(this.state.userInput);
    this.setState({ userInput: '' });
    this.userInput.focus();

}

deleteElement(index) {
    let listArr = this.state.list;
    listArr.splice(index, 1);
    this.setState({ list: listArr});
}

    render() {

        let list = this.state.list.map((val, key) => {
            return <List key={key} text={val}
                    deleteMethod={ () => this.deleteElement(key)}
                    />
        })
        return (
           <div className="container">
            <div className="header">To do list:</div>
            <div className="addingArea">
                <input 
                    autoFocus
                    type="text"
                    ref={((input) => this.userInput = input)}
                    className="textInput"
                    value={this.state.userInput}
                    onChange={this.changeUserInput}
                    onKeyPress={this.handleOnKey.bind(this)}
                />
                <button className="btn" onClick={this.addToList.bind(this)}>Add</button>
                {list}
            </div>
           </div>
        );
    }
}

