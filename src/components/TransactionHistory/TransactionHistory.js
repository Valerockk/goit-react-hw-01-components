import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => (
  <div className={styles.container}>
    <p>TransactionHistory</p>

    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.headRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr className={styles.row} key={transaction.id}>
            <td className={styles.rowTitle}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
