import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  fetchUsers = () => {
    axios
      .get("http://localhost:3500/api/bosch/all")
      .then(function(response) {
        // handle success
        return JSON.stringify(response);
      })
      .then(resp => {
        return JSON.parse(resp).data;
      })
      .then(obj => this.setState({ data: obj }))
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }
  componentDidUpdate() {}
  mapUsers = () => {
    const { data } = this.state;
    if (data) {
      return data.map(element => (
        <h1>
          Usuario #{element.id} <br />
          Nombre: {element.name}
          <br />
          Apellido {element.lastname} <br />
          Nombre: {element.name}
          <br />
          Email: {element.email} <br />
          Área: {element.area}
        </h1>
      ));
    }
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">HACKATÓN 2019 BOSCH</h1>
        {this.mapUsers()}
      </div>
    );
  }
}
export default Main;
