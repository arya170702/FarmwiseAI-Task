import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from '../redux/actions';

const AddFields = () => {
  const dispatch = useDispatch();
  const [field, setField] = useState({
    name: '',
    type: 'text',
    validation: '',
    data: [],
  });

  const handleAddField = () => {
    if (field.name && field.validation) {
      dispatch(addField(field));
      setField({
        name: '',
        type: 'text',
        validation: '',
        data: [],
      });
    } else {
      alert('Please fill in Field Name and Validation');
    }
  };

  const handleTypeChange = (selectedType) => {
    setField({ ...field, type: selectedType });
  };

  const handleDataChange = (e) => {
    setField({ ...field, data: e.target.value.split(',') });
  };

  return (
    <div>
      <h2>Add Fields</h2>
      <label>
        Field Name:
        <input
          type="text"
          value={field.name}
          onChange={(e) => setField({ ...field, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Field Type:
        <select value={field.type} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="text">Text Box</option>
          <option value="dropdown">Drop-Down</option>
          <option value="date">Date Picker</option>
        </select>
      </label>
      <br />
      {field.type === 'dropdown' && (
        <label>
          Field Data (comma-separated):
          <input type="text" value={field.data.join(',')} onChange={handleDataChange} />
        </label>
      )}
      <br />
      <label>
        Field Validation:
        <input
          type="text"
          value={field.validation}
          onChange={(e) => setField({ ...field, validation: e.target.value })}
        />
      </label>
      <br />
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default AddFields;
