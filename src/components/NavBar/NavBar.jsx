import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';
import React from 'react';
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/plants">Main Plant Page</Link>
      &nbsp; | &nbsp;
      <Link to="/plants/add">Add Plant</Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/plants/update"></Link>
      &nbsp; | &nbsp;
      {/* <Link to="/plants/delete">Delete Plant</Link> */}
      {/* &nbsp; | &nbsp; */}
      {/* <Link to="/plants/comments">Comments</Link> */}
      &nbsp;&nbsp;
      <span>Current User, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}