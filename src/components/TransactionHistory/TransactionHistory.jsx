import React from 'react';
import css from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                
                <tbody>
                    {Array.isArray(items) && items.map((item) => {
                        return <TransactionHistoryItem key={item.id} item={item} />;})}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistory;