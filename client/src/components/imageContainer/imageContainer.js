import React from 'react';
import styles from './imageContainer.module.css';

const ImageContainer = ({currQuestion}) => {
    return(
        <section className={styles['prompt-section']}>
            <img 
                src={currQuestion.getPassage()} 
                alt="question"
                className={styles['prompt-image']}
            />
        </section>
    )
}

export default ImageContainer;