import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadItem from '../components/ThreadItem';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeutralVoteThreadDetail = () => {
    dispatch(asyncNeutralVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncAddComment({ content }));
  };

  const onUpVoteComment = () => {
    dispatch(asyncUpVoteComment());
  };

  const onDownVoteComment = () => {
    dispatch(asyncDownVoteComment());
  };

  const onNeutralVoteComment = () => {
    dispatch(asyncNeutralVoteComment());
  };

  if (!threadDetail) {
    return (
      <>
        <Header />
        <p>Thread Tidak ditemukan!</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="detail-page">
        <Loading />
        {threadDetail.parent && (
        <div className="detail-page__card">
          <h3>Comment To</h3>
          <ThreadItem {...threadDetail.parent} authUser="user.id" />
        </div>
        )}
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neutralVoteThreadDetail={onNeutralVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <p className="detail-page__comment-count">
          Komentar(
          {threadDetail?.comments?.length}
          )
        </p>
        <CommentList
          authUser={authUser.id}
          comments={threadDetail?.comments}
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
