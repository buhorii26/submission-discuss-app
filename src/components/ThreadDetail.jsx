import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import CardActions from '@mui/material/CardActions';
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
}) {
  return (
    <section className="thread-detail">
      <header>
        <div className="thread-detail__user-info">
          <button type="button" className="thread-item__category">
            #
            {category}
          </button>
        </div>
      </header>
      <article>
        <p className="thread-detail__user-name">{owner.name}</p>
        <p className="thread-detail__title">{title}</p>
        <p className="thread-detail__body">{parse(body)}</p>
      </article>
      <CardActions>
        <VoteButton
          id={id}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <p className="thread-item__user-name">
          Dibuat oleh
          {' '}
          <strong>{owner.name}</strong>
          {' '}
          {postedAt(createdAt)}
        </p>
      </CardActions>
    </section>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
