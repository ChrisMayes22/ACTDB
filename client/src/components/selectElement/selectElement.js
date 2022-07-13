import React from 'react';
import styles from './selectElement.module.css';

const SelectElement = ({selectId, changed, options}) => {
    return(
        <div>
            <label htmlFor={selectId}>Filter by {selectId}</label>
            <select id={selectId} onChange={e => changed(e)}>
                <option>Any</option>
                {options.map((el) => {
                    return <option>{el}</option>
                })}
            </select>
        </div>
    )
}

export default SelectElement;