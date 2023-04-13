import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      if (Auth.getUserType() === "seller") {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/storeDashboard">Store Dashboard</Link>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      }
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/Buyer">Customer Sign-up</Link>
          </li>
          <li className="mx-1">
            <Link to="/Seller">Store Sign-up</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="lemon">
            🍋
          </span>
          Kid-Starter
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
