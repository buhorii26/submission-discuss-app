import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import Loading from '../components/Loading';
import Leaderboard from '../components/Leaderboard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Loading />
      <section className="leaderboards-page">
        <div className="leaderboards-page__card">
          <title className="leaderboards-page__title">Leaderboards</title>
          <div className="leaderboards-page__grid-container">
            <div className="leaderboards-page__grid-item">
              <h5 className="leaderboards-page__subtitle">Pengguna Teratas</h5>
            </div>
            <div className="leaderboards-page_grid-item">
              <h5 className="leaderboards-page__subtitle">Skor</h5>
            </div>
          </div>
          {leaderboards.map(({ user, score }) => (
            <Leaderboard key={user.id} user={user} score={score} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default LeaderboardsPage;
