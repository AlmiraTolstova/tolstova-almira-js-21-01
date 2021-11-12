import React from 'react'
import './WorkArea.css'

export class WorkArea extends React.Component{
    render() {
        return <div className="block2__column2-cards" id="block2__cards">
            <div className="block2__column2-card">
                <a className="block2__column2-card-a" href="">Замороженные рыбы</a>
                <p>Мы заморозили рыбов для вас</p>
            </div>
            <div className="block2__column2-card">
                <a className="block2__column2-card-a" href="">Живые рыбы</a>
                <p>На кухню или на разведение</p>
            </div>
        </div>
    }
}