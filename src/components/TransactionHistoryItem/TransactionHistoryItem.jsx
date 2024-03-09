import React from 'react';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({item}) => {
    return (
        <>
            <tr>
                <td className={css.itemType}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        </>
    )
}

export default TransactionHistoryItem;