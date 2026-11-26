// get helper functions
import { display_question_info, reset_flashcard } from "./helpers.js";


// next question button 
const next_question_btn = document.querySelector('#next-question');


// global variables
export let question;


// get and display random question
async function new_random_question() {
    reset_flashcard()
    // get random question
    let res = await fetch('https://anyguesser.com/api/v1/questions?difficulty=' + difficulty.toString());
    let response_json = await res.json();
    question = response_json['questions'][0];
    display_question_info(question)
    console.log(question['answer']) // so I can cheat ... I mean debug
}
new_random_question()


// display a new question when user clicks next question button
next_question_btn.addEventListener('click', () => {
    new_random_question()
});
