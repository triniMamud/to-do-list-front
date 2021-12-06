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
          <Route exact path='/item' component={(props)=><ToDoList {...props} state={props}/>}/>
          <Route exact path='/item/update' component={()=><EditItem/>}/>
          <Route exact path='/folder' component={()=><Folders/>}/>
        </BrowserRouter>   
    );
}

export default App;