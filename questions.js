import Question from './classes/questions.js';

const questions = [
    new Question(
        'Which choice provides information that is relevant to the passage?',
        'images/act_72F_E_prompt1.jpg', 
        ['NO CHANGE', 'woodcarvers', 'farmers', 'duo'],
        '1',
        '72F1',
        1
    ),
    new Question(
        null,
        'images/act_72F_E_prompt1.jpg', 
        ['NO CHANGE', 'by its', 'for its', 'of its'],
        '2',
        '72F1',
        2
    ),
    new Question(
        null,
        'images/act_72F_E_prompt2.jpg', 
        ['NO CHANGE', 'departed', 'there', 'away'],
        '16',
        '72F2',
        3
    ),
    new Question(
        'Which of the following provides the best explanation for the situation described in the first part of the sentence?',
        'images/act_72F_E_prompt2.jpg', 
        [
            'NO CHANGE',
            'The place where he was born in 1964',
            'An astonishing amount of people',
            'located in southern Mexico'
        ],
        '17',
        '72F2',
        0
    ),
];

export default questions;