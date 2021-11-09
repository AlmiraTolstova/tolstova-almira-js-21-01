import React from 'react'
import './Header.css'

export class Header extends React.Component{
    render() {
        return <div className='header'>
            <div className="block1">
                <div className="block1__container">
                    <header>
                        <h2>Интернет-магазин "Не только красивое"</h2>
                    </header>
                </div>
            </div>
        </div>
    }
}