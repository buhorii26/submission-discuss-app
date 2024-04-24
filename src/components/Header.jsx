import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div className="jumbotron">
        <h1>Aplikasi Diskusi</h1>
        <p>
          Sebuah aplikasi memudahkan pengguna untuk berdikusi sesuatu topik.
        </p>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
