import React from "react"
import './Cards.css'
import {apiResponse} from "../../api-mock/api";
import {Card} from "../../components/card/Card";

export class Cards extends React.Component{
    render() {
        return <div className='block2__column2-grid'>
            {apiResponse.map((elem, index) => <Card name={elem.name} key={index}/>)}
    </div>
    }
}