import './App.css';
import {TodoForm} from './components/TodoForm/TodoForm';
import {Comment} from "./components/Comments/comment";
import {Todolist} from "./components/TodolList/Todolist";
import {Header} from "./components/Header/Header";


function App() {
  return ( <div className="App">
          <Header/>
      <TodoForm/>

    </div>
  );
}

export default App;
