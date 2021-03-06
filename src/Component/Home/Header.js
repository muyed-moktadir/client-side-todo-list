import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    const menuItems = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/completeTask">Complete Task</Link>
          </li>
          <li>
            <Link to="/todoList">Todo List</Link>
          </li>
          <li>
            <Link to="/calender">Calender</Link>
          </li>
        </>
      );

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-warning normal-case text-xl">
            Todo List
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {/* add end sidebar (74.8) add for and tabindex 1 */}
          <label
            htmlFor="dashboard-sidebar"
            tabIndex="1"
            className="btn btn-ghost lg:hidden my-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    );
};

export default Header;