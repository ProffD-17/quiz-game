// get helper functions
import { display_question_info, reset_flashcard } from "./helpers.js";
// get the question variable
import { question } from "./status.js";
import { update_question } from "./status.js";


// get and display random question
export async function new_random_question() {
    reset_flashcard();
    // get random question
    let res = await fetch('https://anyguesser.com/api/v1/questions?difficulty=' + difficulty.toString());
    let response_json = await res.json();
    let new_question = response_json['questions'][0];
    update_question(new_question);
    display_question_info(question);
    console.log(question['answer']); // so I can cheat ... I mean debug
}
if (gamemode === 'random') {
    new_random_question();
}
