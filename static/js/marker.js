// get question
import { question } from "./status.js";

import { reset_streak } from "./streak.js";
import { increment_streak } from "./streak.js";


// signal to user they got the right answer
function correct_answer() {
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    feedback.innerHTML = 'Correct';
    increment_streak();
}


// signal to user they got the wrong answer
function incorrect_answer() {
    feedback.classList.remove('correct');
    feedback.classList.add('incorrect');
    feedback.innerHTML = 'Incorrect';
    reset_streak();
}


// signal to the user if they got the answer right or wrong and what the right answer was
function give_feedback(correct, answer) {
    // show feedback element
    feedback.classList.remove('hide');
    // display correct answer
    correct_answer_p.innerHTML = 'Correct answer: ' + answer;
    correct_answer_p.classList.remove('hide');
    if (correct) {
        correct_answer();
    } else {
        incorrect_answer();
    }
}


export let correct;

// check answer in answer box with correct and acceptible answers
function check_answer() {
    correct = false;
    if (!question) {
        return;
    }
    console.log('before checked  ', correct);
    // get users answer
    let user_answer = user_answer_input.value.toLowerCase();
    // get official answer from question
    console.log('question:  ', question);
    let answer = question['answer'];
    let answer_lowercase = question['answer'].toLowerCase();
    // check users answer with offical answer and acceptible answers
    if (user_answer != answer_lowercase) {
        // also check acceptable_answers
        let acceptible_answers = question['acceptable_answers'];
        if (acceptible_answers.length > 0) {
            for (let i = 0; i < acceptible_answers.length; i++) {
                if (user_answer === acceptible_answers[i].toLowerCase()) {
                    correct = true;
                    break;
                }
            }
        } else {
            correct = false;
        }
    } else {
        correct = true;
    }
    give_feedback(correct, answer)
    // question has been answered so next button should say next
    next_question_btn.innerHTML = 'Next';
    console.log('after checked     ', correct)
}

// check offical answer with answer user given when check button clicked
check_answer_btn.addEventListener('click', check_answer);

export function check_for_skip() {
    check_answer();
    console.log('moving on   ', correct);
    if (!correct) {
        reset_streak();
    }
}