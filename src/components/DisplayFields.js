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
        <ul>
          {fields.map((field, index) => (
            <li key={index}>
              <strong>Field Name:</strong> {field.name}, <strong>Type:</strong> {field.type},{' '}
              <strong>Validation:</strong> {field.validation}
              {field.type === 'dropdown' && (
                <>
                  , <strong>Data:</strong> {field.data.join(', ')}
                </>
              )}
              <button onClick={() => handleRemoveField(index)}>Remove Field</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayFields;
