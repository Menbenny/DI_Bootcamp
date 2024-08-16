import { useState, useEffect } from "react";

const UsersF = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // this.setState({ users: data });
        setUsers(data);
      });
  };

  return (
    <>
      <h2>Users</h2>
      <button onClick={() => getUsers()}> Get User's names</button>
      <div>
        {users.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};
export default UsersF;
