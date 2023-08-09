import React, { useState } from 'react';

const PhotoUploadForm = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleNickChange = (event) => {
    setNick(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Фотографія завантажена!');
    console.log('Нік:', nick);
    console.log('Пароль:', password);
    console.log('Електронна адреса:', email);
    console.log('Фотографія:', photo);
    console.log('Опис фотографії:', description);
    console.log('Теги:', tags);
   
    setNick('');
    setPassword('');
    setEmail('');
    setPhoto(null);
    setDescription('');
    setTags('');
  };

  return (
    <div>
      <h2>Форма завантаження фотографії</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Нік:
            <input type="text" value={nick} onChange={handleNickChange} required />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
        </div>
        <div>
          <label>
            Електронна адреса:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
        </div>
        <div>
          <label>
            Фотографія:
            <input type="file" onChange={handlePhotoChange} required />
          </label>
        </div>
        <div>
          <label>
            Опис фотографії:
            <textarea value={description} onChange={handleDescriptionChange} required />
          </label>
        </div>
        <div>
          <label>
            Теги:
            <input type="text" value={tags} onChange={handleTagsChange} required />
          </label>
        </div>
        <button type="submit">Завантажити</button>
      </form>
    </div>
  );
};

export default PhotoUploadForm;