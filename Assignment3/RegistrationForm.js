import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };
  
  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  };
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const handleSkillsChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      firstName,
      lastName,
      about,
      profilePic,
      age,
      gender,
      skills,
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location.href = '/profile';
  };
}
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" value={firstName} onChange={handleFirstNameChange} required />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" value={lastName} onChange={handleLastNameChange} required />
      </div>
      <div>
        <label htmlFor="about">About Yourself:</label>
        <textarea id="about" value={about} onChange={handleAboutChange} required />
      </div>
      <div>
        <label htmlFor="profile-pic">Profile Pic:</label>
        <input type="file" id="profile-pic" accept="image/*" onChange={handleProfilePicChange} required />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <select id="age" value={age} onChange={handleAgeChange} required>
          <option value="">--Select Age--</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} required />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female"></input>
          </div>
          </div>

          </form>
  )
        

