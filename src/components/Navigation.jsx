import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BsBoxArrowRight } from 'react-icons/bs';

function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Threads</Link>
          </li>
          <li>
            <Link to="/leaderboards">Leaderboards</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Threads</Link>
        </li>
        <li>
          <Link to="/leaderboards">Leaderboards</Link>
        </li>
        <li>
          <BsBoxArrowRight
            size={20}
            color="white"
            type="button"
            onClick={signOut}
            className="signOut"
          />
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
