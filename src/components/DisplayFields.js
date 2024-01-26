// DisplayFields.js

import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayFields.css'; // Import the CSS file

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields);
  const selectedUserType = useSelector((state) => state.selectedUserType);

  const renderFieldsForUserType = () => {
    const userSpecificFields = fields.filter((field) => field.userType === selectedUserType);

    if (userSpecificFields.length === 0) {
      return <p>No fields for {selectedUserType}</p>;
    }

    return (
      <table className="display-fields-table">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Field Validation</th>
            <th>Field Data</th>
          </tr>
        </thead>
        <tbody>
          {userSpecificFields.map((field, index) => (
            <tr key={index}>
              <td>{field.fieldName}</td>
              <td>{field.fieldType}</td>
              <td>{field.fieldValidation}</td>
              <td>{field.fieldData}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="display-fields-container">
      <h2>Display Fields</h2>
      {selectedUserType ? (
        <>
          <h3>Fields for {selectedUserType}</h3>
          {renderFieldsForUserType()}
        </>
      ) : (
        <p>Select a user type to display fields.</p>
      )}
    </div>
  );
};

export default DisplayFields;
