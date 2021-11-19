import React from "react";
import'./Header.css'

export class Header extends React.Component{
    render() {
        return<div>
            <h1  className="header">Список запланированных дел</h1>
            <p>Примечание: после удаления нажмите кнопку "Обновить"</p>
        </div>
    }
}