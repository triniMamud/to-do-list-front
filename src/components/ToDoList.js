import '../styles/FindShipInformation.css';

const { axios } = require('axios');
const { Button, Table } = require('react-bootstrap');
const { React, useState } = require('react');
const { useHistory } = require("react-router");


const ToDoList = () => {

    const [items, setItem] = useState([]);
    const history = useHistory();

    const componentDidMount = () => {

        axios.get('http://localhost:8080/item/list')
        .then(res => {
            this.setItem(res.data);
        })
        .catch(error => {
            console.log( 'the error has occured: ' + error);
            this.setItems(error.response.data)
        }) 
    }

    let addTask = (event) => {

        const value = document.getElementById("itemValue").value;
        const item = {
            value
        };

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: item,
            url: 'http://localhost:8080/item/new'
        };
        axios(options)
            .then((response) => {})
            .catch(error => {
                console.log( 'the error has occured: ' + error);
                this.setState({
                    resp: error.response.data
                })
            })

        event.stopPropagation();
        event.preventDefault();
    }

    const editItem = (value) => {
        history.push("/update");
        this.setState({item: value});
    }

    const deleteItem = (value) => {
        const options = {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            data: value,
            url: 'http://localhost:8080/item/delete'
        };
        axios(options)
            .then((response) => {})
            .catch(error => {
                console.log( 'the error has occured: ' + error);
                this.setState({
                    resp: error.response.data
                })
            })
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <Table class='table borderless'>
                <tbody>
                    {items.map(item =>
                        <tr>
                            <td>
                                <input type= "checkbox"> {item.value} </input>
                            </td>
                            <td>
                                <Button onClick={()=>editItem(item.value)}>Edit</Button>
                            </td>
                            <td>
                                <Button color="danger" onClick={()=>deleteItem(item.value)}>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
                </Table>
            <div className="p-3 mr-5 ml-5 container">
                <input id="itemValue" type="text" placeholder="New task"/>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="sm" variant="info" type="submit" onClick={addTask}>Add</Button>
            </div>
        </div>
    )

}

export default ToDoList;