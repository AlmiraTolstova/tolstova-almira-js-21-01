import React, {useState} from "react";
import './comment.css'
import {apiData} from "../../apiData/api";

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {done: false};
        this.removeItem = this.removeItem.bind(this);
    }

    handleClick() {
        this.setState({done: true})
    }

    removeItem(removeIndex) {
        apiData.splice(removeIndex, 1)
    }

    render() {
        return <div className="card">
            <div onClick={this.handleClick}>
                {this.props.index + ": "}
                {this.props.text}
                {this.state.done ? ' Выполнено' : ' Не выполнено'}
            </div>
            <button className="btn" onClick={() => this.removeItem(this.props.index)}>Удалить</button>
        </div>
    }
}