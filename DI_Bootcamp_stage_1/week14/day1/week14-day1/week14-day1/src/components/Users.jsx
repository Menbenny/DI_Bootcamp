import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      text: "",
    };
    // console.log("constructor");
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ users: data });
      });
  };

  componentDidMount = () => {
    // console.log("componentDidMount");
    this.getUsers();
  };

  //   componentDidUpdate = () => {
  //     // console.log("componentDidUpdate");
  //   };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  render() {
    // console.log("render");

    const { users, text } = this.state;
    
    const filteredUsers = users.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });

    return (
      <>
        <div>
          {/* <button onClick={() => this.getUsers()}> Get Users</button> */}
          <input
            onChange={(e) => this.handleChange(e)}
            placeholder='Search by name...'
          />
        </div>
        <div>
          <h2>Users</h2>
          {filteredUsers.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </>
    );
  }
}
export default Users;
