import React from 'react'
import './Sidebar.css'

export class Sidebar extends React.Component {
    render() {
        return <div className="block2__column1">
            <h4 className="block2__column1-h4">Морская рыба</h4>

            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Акула</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Окунь</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Палтус</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Треска</label>
            </div>


            <h4 className="block2__column1-h4">Пресноводная рыба</h4>

            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Белоглазка</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Осётр</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Речной угорь</label>
            </div>
            <div className="block2__column1-check">
                <input type="checkbox" id="checkbox1"/><label htmlFor="">Налим</label>
            </div>
        </div>
    }
}