import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addThread({ title, category, body });
  };

  return (
    <form className="thread-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={setTitle}
        placeholder="Judul"
      />
      <input
        type="text"
        value={category}
        onChange={setCategory}
        placeholder="Kategori"
      />
      <textarea
        type="text"
        value={body}
        onChange={setBody}
        placeholder="Body"
      />
      <p className="thread-input__char-left">
        <strong>
          Panjang Karakter Body :
          {body.length}
        </strong>
        /320
      </p>
      <button type="submit">Buat Thread</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
