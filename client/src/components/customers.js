import React, { Component } from "react";
import "./styles/customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers }, () =>
          console.log("Customers fetched...", customers)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
