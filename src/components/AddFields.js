// AddFields.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField, setUserType } from '../actions/fieldActions';
import './AddFields.css';

const AddFields = () => {
  const dispatch = useDispatch();
  const [userType, setUserTypeLocal] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('text');
  const [fieldDataType, setFieldDataType] = useState('string');
  const [isMandatory, setIsMandatory] = useState('No');
  const [fieldValidation, setFieldValidation] = useState('');
  const [fieldData, setFieldData] = useState('');

  const handleAddField = () => {
    const field = {
      userType,
      fieldName,
      fieldType,
      fieldDataType,
      isMandatory,
      fieldValidation,
      fieldData,
    };

    dispatch(addField(field));
    dispatch(setUserType(userType));
    clearForm();
  };

  const clearForm = () => {
    setUserTypeLocal('');
    setFieldName('');
    setFieldType('text');
    setFieldDataType('string');
    setIsMandatory('No');
    setFieldValidation('');
    setFieldData('');
  };

  return (
    <div className="add-fields-container">
      <div className='userHolder'>
        <div className="form-group">
          <label className="form-label">
            User Type:
            <select
              value={userType}
              onChange={(e) => setUserTypeLocal(e.target.value)}
              className="form-input"
            >
              <option value="">Select User Type</option>
              <option value="Student">Student</option>
              <option value="Salaried">Salaried</option>
              <option value="Business">Business</option>
            </select>
          </label>
        </div>
      </div>
      <h2>Add Fields</h2>
      <div className='fields'>
        <div className="form-group">
          <label className="form-label">
            Field Name:
            <input
              type="text"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Field Type:
            <select
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
              className="form-input"
            >
              <option value="text">Text Box</option>
              <option value="dropdown">Drop-Down</option>
              <option value="date">Date Picker</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Field Data Type:
            <select
              value={fieldDataType}
              onChange={(e) => setFieldDataType(e.target.value)}
              className="form-input"
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Mandatory:
            <select
              value={isMandatory}
              onChange={(e) => setIsMandatory(e.target.value)}
              className="form-input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Field Validation:
            <input
              type="text"
              value={fieldValidation}
              onChange={(e) => setFieldValidation(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Field Data:
            <input
              type="text"
              value={fieldData}
              onChange={(e) => setFieldData(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <button onClick={handleAddField} className="form-button">
            Add Field
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFields;
