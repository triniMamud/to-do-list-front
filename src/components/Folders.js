import ToDoList from './ToDoList';

const { axios } = require('axios');
const { Button, Table } = require('react-bootstrap');
const { React, useState } = require('react');

const Folders = () => {

    const [folders, setFolders] = useState([]);

    const componentDidMount = () => {
        axios.get('http://localhost:8080/folder/list')
        .then(res => {
            this.setItem(res.data);
        })
        .catch(error => {
            console.log( 'the error has occured: ' + error);
            this.setItems(error.response.data)
        }) 
    }

    const addFolder = (event) => {
        const value = document.getElementById("folderName").value;
        const folder = {
            value
        };

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: folder,
            url: 'http://localhost:8080/folder/new'
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

    const deleteFolder = (name) => {
        const options = {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            data: name,
            url: 'http://localhost:8080/folder/delete'
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
            <div className="p-3 mr-5 ml-5 container">
            </div>
            <h2>Folders</h2>
            <Table class='table borderless'>
                <tbody>
                    {folders.map(folder =>
                        <tr>
                            <td>
                                <input type= "checkbox"> {folder.name} </input>
                            </td>
                            <td>
                                <Button onClick={()=> <ToDoList/> }>View items</Button>
                            </td>
                            <td>
                                <Button color="danger" onClick={()=>deleteFolder(folder.name)}>Remove</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className="p-3 mr-5 ml-5 container">
                <input id="folderName" type="text" placeholder="New folder"/>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="sm" variant="info" type="submit" onClick={addFolder}>Add</Button>
            </div>
        </div>
    )

}

export default Folders;