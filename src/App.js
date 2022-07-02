import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './Component/Home/Header';
import Home from './Component/Home/Home';
import MyTodoLists from './Component/MytodoLists/MyTodoLists';
import TodoList from './Component/TodoList/TodoList';
import Footer from './Component/others/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todoList' element={<TodoList></TodoList>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
