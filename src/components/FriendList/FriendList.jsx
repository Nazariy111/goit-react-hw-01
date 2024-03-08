import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
      <div>
          <ul>
              {Array.isArray(friends) &&
                  friends.map((friend) => {
                      return <FriendListItem key={friend.id} friend={friend} />;
                  })
          }</ul>
    </div>
  )
}

export default FriendList;