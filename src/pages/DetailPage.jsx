import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveDetailThread,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncNeutralVoteDetailThread,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../states/detailThread/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DetailPage() {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onUpVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncUpVoteDetailThread());
    }
  };

  const onDownVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncDownVoteDetailThread());
    }
  };

  const onNeutralVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncNeutralVoteDetailThread());
    }
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncAddComment({ content }));
  };

  const onUpVoteComment = (commentId) => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncUpVoteComment(commentId));
    }
  };

  const onDownVoteComment = (commentId) => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncDownVoteComment(commentId));
    }
  };

  const onNeutralVoteComment = (commentId) => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncNeutralVoteComment(commentId));
    }
  };

  if (!detailThread) {
    return (
      <>
        <Header />
        <p>Thread Tidak ditemukan!</p>
        <Footer />
      </>
    );
  }

  if (authUser === null) {
    return (
      <>
        <Header />
        <section className="detail-page">
          <Loading />
          <ThreadDetail
            {...detailThread}
            upVote={onUpVoteThreadDetail}
            downVote={onDownVoteThreadDetail}
            neutralVote={onNeutralVoteThreadDetail}
          />
          <p className="detail-page__comment-count">
            <Link to="/login">Login</Link>
            {' '}
            <span>untuk memberi komentar</span>
          </p>
          <br />
          <CommentList
            comments={detailThread?.comments}
            upVoteComment={onUpVoteComment}
            downVoteComment={onDownVoteComment}
            neutralVoteComment={onNeutralVoteComment}
          />
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="detail-page">
        <Loading />
        <ThreadDetail
          {...detailThread}
          upVote={onUpVoteThreadDetail}
          downVote={onDownVoteThreadDetail}
          neutralVote={onNeutralVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <p className="detail-page__comment-count">
          Komentar (
          {detailThread?.comments?.length}
          )
        </p>
        <CommentList
          comments={detailThread?.comments}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neutralVoteComment={onNeutralVoteComment}
        />
      </section>
      <Footer />
    </>
  );
}

export default DetailPage;
