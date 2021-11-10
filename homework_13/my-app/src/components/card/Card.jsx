import React from 'react'
import './Card.css'

export class Card extends React.Component{
    render() {
        return <div className="block2__column2-grid-card flex">
            <div className="block2__column2-grid-img"></div>
            <div className="block2__column2-grid-buttons">
                <a className="block2__column2-grid-a" >{this.props.name}</a>
                <button className="block2__column2-grid-btn">Купить</button>
            </div>
        </div>
    }
}

// export class Card extends React.Component{
//     render() {
//         return <div className="block2__column2">
//
//             <h1 className="block2__column2-h1">Рыбы на любой вкус </h1>
//             <p className="block2__column2-p">Мы продаем рыбов, а не только показываем!</p>
//             <div className="block2__column2-cards" id="block2__cards">
//
//                 <div className="block2__column2-card">
//                     <a className="block2__column2-card-a" href="">Замороженные рыбы</a>
//                     <p>Мы заморозили рыбов для вас</p>
//                 </div>
//                 <div className="block2__column2-card">
//                     <a className="block2__column2-card-a" href="">Живые рыбы</a>
//                     <p>На кухню или на разведение</p>
//                 </div>
//             </div>
//
//             <h3 className="block2__column2-h3">Популярные</h3>
//             <div className="block2__column2-grid">
//                 <div className="block2__column2-grid-card flex">
//                     <div className="block2__column2-grid-img"></div>
//                     <div className="block2__column2-grid-buttons">
//                         <a className="block2__column2-grid-a" href="">{this.props.name}</a>
//                         <button className="block2__column2-grid-btn">Купить</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     }
// }