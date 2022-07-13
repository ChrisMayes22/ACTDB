import {React, useState } from 'react';
import styles from './crud.module.css';
import PromptSection from '../../components/promptSection/promptSection';
import SelectElement from '../../components/selectElement/selectElement';

const Crud = ({questions, getData}) => {

    const [filter, setFilter ] = useState({
        "rules": "any",
        "difficulty": "any",
        "testId": "any"
    });

    const handleFilterChange = e => {
        const filterCopy = {...filter};
        filterCopy[e.target.id] = e.target.value.toLowerCase();
        setFilter(filterCopy);
    }

    return (
        <div className={styles['page-layout__container']}>
            <PromptSection questions={questions}/>
            <section className="page-layout__footer">
                <form className={styles['filter-form']}>
                    <SelectElement
                        selectId="rules"
                        changed={handleFilterChange}
                        options={['Inference', 'Possessives', 'Prepositions']}
                    />
                    <SelectElement
                        selectId="difficulty"
                        changed={handleFilterChange}
                        options={['Easy', 'Medium', 'Hard']}
                    />
                    <SelectElement
                        selectId="testId"
                        changed={handleFilterChange}
                        options={['72F1', '72F2']}
                    />
                    <button onClick={(e) => getData(e, filter)}>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Crud;