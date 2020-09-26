import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <div className={styles.container}>
    <p>FriendList</p>

    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.isActiveStatus : styles.notActiveStatus
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
