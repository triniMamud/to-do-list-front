import ToDoList from './components/ToDoList';
import EditItem from './components/EditItem';
import Folders from './components/Folders';
import './App.css';

const { React} = require("react");
const { BrowserRouter, Route, Redirect } = require("react-router-dom");

function App() {
    return (
        <BrowserRouter>
          <Redirect to="/item" />
          <Route exact path='/item' render={(props)=><ToDoList {...props} state={props}/>}/>
          <Route exact path='/item/update' render={()=><EditItem/>}/>
          <Route exact path='/folder' render={()=><Folders/>}/>
        </BrowserRouter>   
    );
}

export default App;