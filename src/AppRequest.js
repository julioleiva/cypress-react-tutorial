import React, { useState, useEffect } from 'react';

export default function _App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data), setIsLoading(false))
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Random User</h1>
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map((user) => {
          const { username, name, email } = user;
          return (
            <div key={username}>
              <p>Name: {name}</p>
              <p>Email Address: {email}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
