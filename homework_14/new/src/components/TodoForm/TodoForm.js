import React, {useState} from 'react';
import './TodoForm.css'
import {apiData} from "../../apiData/api";
import {Todolist} from "../TodolList/Todolist";

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handleWrite = this.handleWrite.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleWrite() {
        const value = document.getElementById('title').value;
        const arr = {};
        arr['text'] = value;
        apiData.push(arr);
        // console.log(apiData);
        this.setState({counter: this.state.counter + 1});
    }

    handleUpdate() {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return <div>
            <input className="input" id='title' type="text" name="input"/>
            <button className="btn" onClick={this.handleWrite}>Записать</button>
            <button className="btn" onClick={this.handleUpdate}>Обновить</button>
            <Todolist apiData={apiData}/>
        </div>
    }
}