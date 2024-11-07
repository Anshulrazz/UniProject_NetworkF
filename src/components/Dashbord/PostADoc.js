import React, { useState } from 'react';
import axios from 'axios';

const UploadDocument = () => {
  const [name, setName] = useState('');
  const [relatedPhoto, setRelatedPhoto] = useState(null);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !name || !relatedPhoto || !caption || !category) {
      setError('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('related_photo', relatedPhoto);
    formData.append('caption', caption);
    formData.append('category', category);
    formData.append('file', file);

    try {
      const response = await axios.post(`/api/document/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Document uploaded:', response.data);
      // Reset form or handle success response here
    } catch (err) {
      setError('Upload failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Related Photo:</label>
          <input type="file" accept="image/*" onChange={(e) => setRelatedPhoto(e.target.files[0])} required />
        </div>
        <div>
          <label>Caption:</label>
          <textarea value={caption} onChange={(e) => setCaption(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Document File:</label>
          <input type="file" accept="*/*" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadDocument;
