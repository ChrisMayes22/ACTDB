import { React } from 'react';
import styles from './home.module.css';
import ImageContainer from '../../components/imageContainer/imageContainer';
import AnswersInput from '../../components/answersInput/answersInput';
import NavFooter from '../../components/navFooter/navFooter';

const Home = ({questions, currQuestion, setCurrQuestion}) => {

    return (
        <div className={styles['page-layout__container']}>
            <div className={styles['page-layout__main-content']}>
                <ImageContainer currQuestion={currQuestion}/>
                <AnswersInput currQuestion={currQuestion}/>
            </div>
            <NavFooter
                questions={questions}
                setNewImage={setCurrQuestion}
            />
        </div>
    );
}

export default Home;