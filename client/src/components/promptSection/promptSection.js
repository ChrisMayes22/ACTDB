import React from 'react';
import styles from './promptSection.module.css';

const PromptSection = ({questions}) => {
    return(
        <section className={styles['prompt-section']}>
            <div className={styles['questions-rows']}>
                <div className={styles['questions-column']}>
                    <div className={styles['questions__table-cell']}>
                        Question ID
                    </div>
                    <div className={styles['questions__table-cell']}>
                        Test ID                    
                    </div>
                    <div className={styles['questions__table-cell']}>
                        Difficulty
                    </div>
                    <div className={styles['questions__table-cell']}>
                        Rule Tested                    
                    </div>
                </div>
                {questions.map(el => {
                    return (
                    <div className={styles['questions-column']}>
                        <div className={styles['questions__table-cell']}>{el.getQuestionId()}</div>
                        <div className={styles['questions__table-cell']}>{el.getTestId()}</div>
                        <div className={styles['questions__table-cell']}>{el.getDifficulty()}</div>
                        <div className={styles['questions__table-cell']}>{el.getRule()}</div>
                    </div>
                    );
                })}
            </div>
        </section>
    )
}

export default PromptSection;