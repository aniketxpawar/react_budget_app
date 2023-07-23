import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [budgetUpdated, setBudgetUpdated] = useState(budget);

    const budgetLimit = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onBudgetUpdated = (e) => {
        // Set the upper limit value to 20,000
        if (budgetUpdated > budgetLimit) {
            alert("Budget cannot exceed "+currency +" "+budgetLimit);
            setBudgetUpdated(budget);
        } else if (budgetUpdated < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setBudgetUpdated(totalExpenses);
        } else {
            setBudgetUpdated(e.target.value)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budgetUpdated}
                    style={{ size: 10}}
                    onChange={(event) => onBudgetUpdated(event)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;