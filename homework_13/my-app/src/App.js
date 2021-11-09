import React from "react";
// import logo from './logo.svg';
import './App.css';
import {Card} from "./components/card/Card";


class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Card name="Палтус"/>
          <Card name="Сёмга"/>
          <Card name="Сом"/>
          <Card name="Мойва"/>
          <Card name="Сельдь"/>
          <Card name="Тунец"/>
        </div>
    );
  }
}

export default App;
