import React from 'react';

const AdditionalOptions = ({ handleAddDescription, handleUploadImage, handleAddDocument, description, setDescription }) => {
  return (
    <div className="additional-options-container">
      <div className="additional-options">
        {/* Add Description */}
        <div className="option">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Add description"
          />
          <button onClick={handleAddDescription}>Add Description</button>
        </div>

        {/* Upload Image */}
        <div className="option">
          <label>
            Upload Image
            <input type="file" accept="image/*" onChange={handleUploadImage} style={{ display: 'none' }} />
          </label>
        </div>

        {/* Add Document */}
        <div className="option">
          <label>
            Add Document
            <input type="file" onChange={handleAddDocument} style={{ display: 'none' }} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
