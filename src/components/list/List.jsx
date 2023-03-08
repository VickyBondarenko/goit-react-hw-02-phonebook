export const List = ({ options }) => {
  return (
    <ul>
      {options.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button style={{ width: '60px' }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
