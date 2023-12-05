import React, { useState } from 'react';
import './style/comment.css';
import commentIcon from "../assets/right-arrow (2) 1.png"
import profile from "../assets/avatar.png"

const Comment = () => {
  const userInitials = 'JD'; // Replace with user's initials
  const userName = "Fuad Adigun"
  const timeAgo = '1 day ago'; // Replace with actual time
  const commentText = 'Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' // Replace with actual comment
const userNameTwo = "Hope Faith"
  return (
    <div>
    <div className="comment">
      <div className="user-info">
        <div className="user-initials">{userInitials}</div>
        <input type="text" placeholder="comment..." />
        <div className="right-arrow">
          <img src={commentIcon} />
        </div>
      </div>

      <div className="comment-details">
        <img src={profile} alt="Profile Icon" />
        <div className="user-meta">
          <span className="user-name">{userName}</span>
          <span className="time-ago">{timeAgo}</span>
          <p className="comment-text">{commentText}</p>
        </div>
       
     

     
       
      </div>
      <div className="comment-details">
        <img src={profile} alt="Profile Icon" />
        <div className="user-meta">
          <span className="user-name">{userNameTwo}</span>
          <span className="time-ago">{timeAgo}</span>
          <p className="comment-text">{commentText}</p>
        </div>
    </div>
  </div>
  </div>
  )}

export default Comment;
