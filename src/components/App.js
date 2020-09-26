import React from "react";

/*Импорт JSONs файлов*/
import users from "./Profile/user.json";
import statisticalData from "./Statistics/statistical-data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

/*Импорт компонентомв*/
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile users={users} />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions}/>
    </>
  );
}
