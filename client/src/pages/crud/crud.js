import React from 'react';
import styles from './crud.module.css';

const Crud = () => {
    return (
        <div className={styles['page-layout__container']}>
            <section className={styles['prompt-section']}>
                Section 1
            </section>
            <section className="page-layout__footer">
                Section 3
            </section>
        </div>
    );
}

export default Crud;