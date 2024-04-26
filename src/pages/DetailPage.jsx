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
import CommentList from '../components/CommnentList';
import CommentInput from '../components/CommentInput';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DetailPage() {
  const { threadId } = useParams();
  const {
    threadDetail: thread,
    authUser,
  } = useSelector((states) => states);
  const { threadDetail = {}, loading = true } = thread;
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

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeutralVoteComment = (id) => {
    dispatch(asyncNeutralVoteComment(id));
  };

  return (
    <section className="detail-page">
      <div className="detail-page__card">
        {loading ? <Loading /> : (
          <>
            <Header />
            <ThreadDetail
              {...threadDetail}
              authUser={authUser.id}
              upVoteThreadDetail={onUpVoteThreadDetail}
              downVoteThreadDetail={onDownVoteThreadDetail}
              neutralizeVoteThreadDetail={onNeutralVoteThreadDetail}
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
              neutralizeVoteComment={onNeutralVoteComment}
            />
            <Footer />
          </>
        ) }
      </div>
    </section>
  );
}

export default DetailPage;
