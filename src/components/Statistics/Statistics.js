import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
  <div className={styles.container}>
    <p>Statistics</p>

    <div className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li className={styles.item} id={stat.id} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
