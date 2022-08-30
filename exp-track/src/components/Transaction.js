import React from "react";

export const Transaction = ({ transaction }) => {
    console.log(transaction.description);
    return (
        <li className="plus">
            {transaction.description}
            <span>${transaction.transactionAmount}</span>
            <button className="delete-btn">
                X
            </button>
        </li>
    )
}