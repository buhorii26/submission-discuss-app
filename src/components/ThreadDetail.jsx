import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralVote,
  authUser,
}) {
  return (
    <section className="thread-detail">
      <header>
        <img src={owner.avatar} alt={owner} className="thread-detail__avatar" />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner.name}</p>
        </div>
      </header>
      <article>
        <p className="thread-detail__category">{category}</p>
        <p className="thread-detail__title">{title}</p>
        <p className="thread-detail__body">{parse(body)}</p>
      </article>
      <footer>
        <div className="thread-detail__like">
          <VoteButton
            id={id}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
          <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
        </div>
      </footer>
    </section>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
