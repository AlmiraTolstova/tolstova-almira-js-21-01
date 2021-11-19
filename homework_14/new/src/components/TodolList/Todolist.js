import React, {useState} from "react";
import {apiData} from "../../apiData/api";
import {Comment} from "../Comments/comment";

export class Todolist extends React.Component {
    render() {
        return <div>
            {this.props.apiData.map((elem, index) => <Comment text={elem.text} index={index} key={index}/>)}
        </div>
    }
}