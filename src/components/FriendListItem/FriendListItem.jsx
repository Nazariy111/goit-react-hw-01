import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
      <div>
          <li>
              <img src={avatar} alt="Avatar" width="48" />
              <p>{name}</p>
              <p>Friend status</p>
          </li>
          
    </div>
  )
}

export default FriendListItem