import React from "react";

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
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, uname, passwd, cpasswd } = this.state;
    console.log(fname, lname, uname, passwd, cpasswd);
    if (passwd !== cpasswd) {
      alert("Password don't match");
    } else {
      fetch("http://localhost:8000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          uname,
          passwd,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
        });
    }
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h1>signup</h1>

        <div className="mb-3">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            id="fname"
            onChange={(e) => this.setState({ fname: e.target.value })}
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
