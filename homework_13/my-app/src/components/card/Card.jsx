import React from 'react'
import {apiResponse} from "../../api-mock/api";
import './Card.css'

export class Card extends React.Component {
    render() {
        return <div className="block2__column2-grid-card flex">
            <div className="block2__column2-grid-img"></div>
            <div className="block2__column2-grid-buttons">
                <a className="block2__column2-grid-a" href="">{this.props.name}</a>
                <button className="block2__column2-grid-btn">Купить</button>
            </div>
        </div>
    }
}

