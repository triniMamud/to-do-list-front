const { axios } = require('axios');
const { Button } = require('react-bootstrap');
const { React } = require('react');
const { useHistory } = require("react-router");

const EditItem = () => {

    let history = useHistory();

    const editItem = (event) => {
        const value = document.getElementById("itemValue").value;
        const item = {
            value
        };

        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            data: item,
            url: 'http://localhost:8080/item/update'
        };
        axios(options)
            .then((response) => {})
            .catch(error => {
                console.log( 'the error has occured: ' + error);
                this.setState({
                    resp: error.response.data
                })
            })

        redirect();
        event.stopPropagation();
        event.preventDefault();
    }

    const redirect = () => {
        history.push("/item");
    }

    return (
        <div>
            <h2>Editing Task {this.state.value}</h2>
            <div className="p-3 mr-5 ml-5 container">
                <input id="itemValue" type="text" value={this.state.value}/>
                <div>
                    <Button className="mt-5 mb-5 mr-2 ml-2" size="sm" variant="info" type="submit" onClick={editItem}>Save</Button>
                    <Button className="mt-5 mb-5 mr-2 ml-2" size="sm" variant="info" onClick={redirect}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default EditItem;