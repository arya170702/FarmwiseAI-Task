import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeField } from '../redux/actions';

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields);
  const dispatch = useDispatch();

  const handleRemoveField = (index) => {
    dispatch(removeField(index));
  };

  return (
    <div>
      <h2>Display Fields</h2>
      {fields.length === 0 ? (
        <p>No fields added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Type</th>
              <th>Validation</th>
              <th>Data</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td>{field.name}</td>
                <td>{field.type}</td>
                <td>{field.validation}</td>
                <td>{field.type === 'dropdown' ? field.data.join(', ') : '-'}</td>
                <td>
                  <button onClick={() => handleRemoveField(index)}>Remove Field</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayFields;
