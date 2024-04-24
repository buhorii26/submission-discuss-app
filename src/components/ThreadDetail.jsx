import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadDetail({
  id, title, body, owner, createdAt, authUser,upVotesBy, downVotesBy,comments
}) {
  const isTalkLiked = likes.includes(authUser);

  return (
    <section className="thread-detail">
      <header>
        <img src={owner.avatar} alt={owner} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner.name}</p>
          <p className="thread-detail__user-id">
            @
            {user.id}
          </p>
        </div>
      </header>
      <article>
        <p className="talk-detail__text">{text}</p>
      </article>
      <footer>
        <div className="talk-detail__like">
          <button type="button" aria-label="like" onClick={() => likeTalk(id)}>
            { isTalkLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
          <span>
            {likes.length}
            {' '}
            Likes
          </span>
        </div>
        <p className="talk-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  likeTalk: PropTypes.func.isRequired,
};

export default ThreadDetail;
