import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Header() {
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (
    <header>
      <div className="jumbotron">
        <h1>Aplikasi Diskusi TES</h1>
        <p>
          Sebuah aplikasi memudahkan pengguna untuk berdikusi sesuatu topik.
        </p>
      </div>
      <Navigation signOut={onSignOut} />
    </header>
  );
}

export default Header;
