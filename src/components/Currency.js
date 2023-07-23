import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Currency(){
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload:val
        })
    }

    return (<div className='alert alert-success'>
    Currency {
        <select id="Currency" name="Currency" className='selectpicker' onChange={(e) => changeCurrency(e.target.value)} style={{backgroundColor:'inherit'}}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
        </select>
    }</div>)
}

export default Currency;