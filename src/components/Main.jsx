import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import ThreadList from './ThreadList';
import Loading from './Loading';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
} from '../states/threads/action';

function Main() {
  const {
    users = [],
    threads = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVoteThread = (id) => {
    dispatch(asyncNeutralVoteThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
  }));

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <div className="content">
            <h1>Diskusi Aktif</h1>
            <div className="card">
              <ThreadList
                threads={threadsList}
                upVote={onUpVoteThread}
                downVote={onDownVoteThread}
                neutralVote={onNeutralVoteThread}
              />
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <main>
        <div className="content">
          <h1>Diskusi Aktif</h1>
          <div className="card">
            <ThreadList
              threads={threadsList}
              upVote={onUpVoteThread}
              downVote={onDownVoteThread}
              neutralVote={onNeutralVoteThread}
            />
            <Link to="/new">
              <Fab
                aria-label="add"
                sx={{
                  bottom: 40,
                  right: 40,
                  position: 'fixed',
                  bgcolor: '#00796b',
                }}
              >
                <IoMdAdd style={{ fontSize: '30px', color: 'black' }} />
              </Fab>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
export default Main;
