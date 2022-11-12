import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      uname: "",
      passwd: "",
      cpasswd: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, uname, passwd, cpasswd } = this.state;

    if (passwd !== cpasswd) {
      alert("Password don't match");
    } else {
      const response = await axios.post(
        "http://localhost:8000/register",
        this.state
      );
      if (response.data == "exist") {
        alert(uname + " already exist try different username");
      }
    }
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            id="fname"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            id="lname"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uname">User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            id="uname"
            onChange={(e) => this.setState({ uname: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwd">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            id="passwd"
            onChange={(e) => this.setState({ passwd: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwd">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            id="cpasswd"
            onChange={(e) => this.setState({ cpasswd: e.target.value })}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
