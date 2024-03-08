import React from 'react';
import css from './Profile.module.css';

const Profile = ({name, tag, location, image, stats}) => {
  return (
      <div className={css.profileBox}>
          <div className={css.profileImageBox}>
              <img className={css.profileImage} src={image} alt="User avatar" />
              <p className={css.profileTitle}>{name}</p>
              <p className={css.profileParag}>@{tag}</p>
              <p className={css.profileParag}>{location}</p>
         </div>
          
          <ul className={css.profileList}>
              <li className={css.profileListItem}>
                  <span className={css.listSpanTitle}>Followers</span>
                  <span className={css.listSpanTitle}>{stats.followers}</span>
              </li>
              <li className={css.profileListItem}>
                  <span className={css.listSpanTitle}>Views</span>
                  <span className={css.listSpanTitle}>{stats.views}</span>
              </li>
              <li className={css.profileListItem}>
                  <span className={css.listSpanTitle}>Likes</span>
                  <span className={css.listSpanTitle}>{stats.likes}</span>
              </li>
          </ul>
    </div>
  )
}

export default Profile;