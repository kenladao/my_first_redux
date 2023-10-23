import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomePage() {
    const balance = useSelector(state => {
        console.log("State", state);
        return state.balanceReducer.balance
    });
    const loan = useSelector(state => state.loanReducer.loan);
    const dispatch = useDispatch();
    function applyLoandHandle() {
        dispatch({ type: "APPLY" });
    }
    return (
        <div>
            <h1>Balance: {balance}</h1>
            <h1>{loan ? "Loan Applied" : "Load Needed"}</h1>
            <button 
            className="button-style" 
            disabled={loan ? true : false} 
            onClick={applyLoandHandle}>{loan ? "Loan Applied" : 'Apply for loan' }</button>
        </div>
    )
}

export default HomePage
