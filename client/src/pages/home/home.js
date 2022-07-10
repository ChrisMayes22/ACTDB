import { React, useState } from 'react';
import styles from './home.module.css';
import Question from '../../classes/questions.js';
import e from 'express';

const Home = () => {

    const [currQuestion, setCurrQuestion] = useState(
        new Question(
            'Which choice provides information that is relevant to the passage?',
            'http://localhost:5000/images/act_72F_E_prompt1.jpg', 
            ['NO CHANGE', 'woodcarvers', 'farmers', 'duo'],
            '1',
            '72F1',
            1
        )
    )

    console.log(currQuestion);

    return (
        <div className={styles['page-layout__container']}>
            <div className={styles['page-layout__main-content']}>
                <section className={styles['prompt-section']}>
                    <img src={currQuestion.passage} alt="question"/>
                </section>
                <section className={styles['input-section']}>
                    {currQuestion.answers.map((el,i) => {
                        const answers = {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
                        return(
                            <div>
                                <button>
                                    {answers[i]};
                                </button>
                                {el}
                            </div>

                        )
                    })}
                </section>
            </div>
            <section className="page-layout__footer">
                Section 3
            </section>
        </div>
    );
}

export default Home;