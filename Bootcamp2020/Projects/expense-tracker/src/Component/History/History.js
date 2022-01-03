import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { expenseTrackerContext } from "../../context&reducer/expenseTrackerContext";
import HistoryItem from "./HistoryItem";

const History = () => {
  console.log("in hisotry main");
  const { transactions } = useContext(expenseTrackerContext);

  return (
    <Fragment>
      {transactions.map((transaction) => 
        <HistoryItem transaction={transaction} key={transactions.id}/>
      )}
    </Fragment>
  );
};

History.propTypes = {};

export default History;
