import React from "react";
import './App.css';
import {Cards} from "./forms/card/Cards";
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Footer} from "./components/footer/Footer";
import {WorkArea} from "./forms/work-area/WorkArea";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="block2__container">
                        <Sidebar/>

                    <div className="block2__column2">
                        <WorkArea/>
                        <h3 className="block2__column2-h3">Популярные</h3>
                            <Cards/>
                            {/*{apiResponse.map((elem, index) => <Card name={elem.name} key={index}/>)}*/}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
