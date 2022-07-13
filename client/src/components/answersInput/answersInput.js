import React from 'react';
import styles from './answersInput.module.css';

const AnswersInput = ({currQuestion}) => {
    return(
        <section className={styles['input-section']}>
            <h5>{`${currQuestion.getQuestionId()} ${currQuestion.getPrompt() ? currQuestion.getPrompt() : ''}`}</h5>
            {currQuestion.getAnswers().map((el,i) => {
                const answers = {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
                return(
                    <div>
                        <button className={styles['input-button']}>
                            {answers[i]}
                        </button>
                        {el}
                    </div>
                )
            })}
        </section>
    )
}

export default AnswersInput;