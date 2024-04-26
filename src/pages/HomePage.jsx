import React from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Loading />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
