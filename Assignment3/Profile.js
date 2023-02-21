import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem('userInfo');
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
  }, []);
  
  if (!userInfo) {
    return (
      <div>
        <p>No user info found.</p>
        <a href="/">Go to registration page</a>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <label>First Name:</label>
        <p>{userInfo.firstName}</p>
      </div>
      <div>
        <label>Last Name:</label>
        <p>{userInfo.lastName}</p>
      </div>
      <div>
        <label>About Yourself:</label>
        <p>{userInfo.about}</p>
      </div>
      <div>
        <label>Profile Pic:</label>
        <img src={URL.createObjectURL(userInfo.profilePic)} alt="Profile Pic" />
      </div>
      <div>
        <label>Age:</label>
        <p>{userInfo.age}</p>
      </div>
      <div>
        <label>Gender:</label>
        <p>{userInfo.gender}</p>
      </div>
      <div>
        <label>Skills:</label>
        <ul>
          {userInfo.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
