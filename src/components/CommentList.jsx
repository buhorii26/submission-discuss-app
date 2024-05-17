import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentShape } from './CommentItem';

function CommentList({
  comments,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
}) {
  return (
    <div className="comments-list">
      {comments.length ? comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralVote={neutralVoteComment}
        />
      ))
        : null }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
};

export default CommentList;
