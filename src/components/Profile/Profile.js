import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ users }) => (
  <div className={styles.container}>
    <p>Profile</p>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={users.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{users.name}</p>
        <p className={styles.tagAndLocation}>{users.tag}</p>
        <p className={styles.tagAndLocation}>{users.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{users.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{users.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{users.stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);


/* Прототипы */
Profile.prototype = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default Profile;
