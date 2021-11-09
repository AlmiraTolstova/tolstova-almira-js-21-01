import React from "react";
// import logo from './logo.svg';
import './App.css';
import {Card} from "./components/card/Card";
import {apiResponse} from "./api-mock/api";
import {Header} from "./components/header/Header";


class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Header/>
          {/*<Card name="Палтус"/>*/}
          {/*<Card name="Сёмга"/>*/}
          {/*<Card name="Сом"/>*/}
          {/*<Card name="Мойва"/>*/}
          {/*<Card name="Сельдь"/>*/}
          {/*<Card name="Тунец"/>*/}
            {apiResponse.map((elem,index)=><Card name={elem.name} key={index}/>)}
        </div>
    );
  }
}

export default App;
