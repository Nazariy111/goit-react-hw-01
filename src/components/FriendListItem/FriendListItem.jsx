import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const classes = [css.friendStatus];

  if (friend.isOnline) { 
    classes.push(css.isOnline);
  } else { 
    classes.push(css.isOffline);
  };

  return (
    <>
      <li className={css.friendListItem}>
        <img className={css.friendAvatar} src={friend.avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{friend.name}</p>
        <p className={classes.join(' ')}>{friend.isOnline ? 'Online' : 'Offline'}</p>
      </li>
          
    </>
  )
}

export default FriendListItem;