import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai';

function VoteButton({
  id,
  upVote,
  downVote,
  neutralVote,
  upVotesBy,
  downVotesBy,
}) {
  const isUpVoted = upVotesBy;
  const isDownVoted = downVotesBy;

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralVoteClick = () => {
    neutralVote(id);
  };

  return (
    <>
      {isUpVoted ? (
        <AiOutlineLike
          onClick={onNeutralVoteClick}
        />
      ) : (
        <AiFillLike
          onClick={onUpVoteClick}
        />
      )}
      <p className="vote-button_upvotes">{upVotesBy.length}</p>
      {isDownVoted ? (
        <AiOutlineDislike
          onClick={onNeutralVoteClick}
        />
      ) : (
        <AiFillDislike
          onClick={onDownVoteClick}
        />
      )}
      <p className="vote-button_downvotes">{downVotesBy.length}</p>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VoteButton;
