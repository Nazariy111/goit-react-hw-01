import React from 'react';
import css from './'

const Profile = ({name, tag, location, image, stats}) => {
  return (
      <div className='profileBox'>
          <div>
              <img className='profileImage' src={image} alt="User avatar" />
              <p className='profileTitle'>{name}</p>
              <p className='profileParag'>@{tag}</p>
              <p className='profileParag'>{location}</p>
         </div>
          
          <ul className='profileList'>
              <li className='profileListItem'>
                  <span>Followers</span>
                  <span>{stats.followers}</span>
              </li>
              <li className='profileListItem'>
                  <span>Views</span>
                  <span>{stats.views}</span>
              </li>
              <li className='profileListItem'>
                  <span>Likes</span>
                  <span>{stats.likes}</span>
              </li>
          </ul>
    </div>
  )
}

export default Profile;