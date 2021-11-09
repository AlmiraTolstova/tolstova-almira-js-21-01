import React from 'react'
import './Comment.css'

export class Comment extends React.Component{
    render() {
        return <div className="block2__column2-grid-card flex">
            <div className="block2__column2-grid-img"></div>
            <div className="block2__column2-grid-buttons">
                <a className="block2__column2-grid-a" href="">Палтус</a>
                <button className="block2__column2-grid-btn">Купить</button>
            </div>
        </div>
    }
}