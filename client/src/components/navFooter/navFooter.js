import React from 'react';
import styles from './navFooter.module.css';

const NavFooter = ({questions, setNewImage}) => {
    return(
        <section className={styles['page-layout__footer']}>
            {questions.map(el => {
                return <button onClick={() => setNewImage(el)}>{el.getQuestionId()}</button>
            })}
        </section>
    )
}

export default NavFooter;