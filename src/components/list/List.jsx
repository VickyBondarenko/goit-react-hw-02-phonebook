import PropTypes from 'prop-types';

export const List = ({ options, onDeleteUser }) => {
  function handleDelete(e) {
    onDeleteUser(e.target.id);
  }
  return (
    <ul>
      {options.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={handleDelete} id={id} style={{ width: '60px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
