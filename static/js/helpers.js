import { check_for_skip } from "./marker.js";

// show question, question category and question subtopic on fashcard
export function display_question_info(question) {
    // display question
    question_p.innerHTML = question['question'];
    // display category
    let category = question['category']['name'];
    category_p.innerHTML = 'Category: ' + category;
    // display subtopic
    let subtopic = question['subtopic'];
    subtopic_p.innerHTML = 'Subtopic: ' + subtopic;
}


// reset all the info on the flashcard
export function reset_flashcard() { 
    // hide feedback
    feedback.classList.add('hide');
    feedback.classList.remove('correct');
    feedback.classList.remove('incorrect');
    correct_answer_p.innerHTML = '';
    correct_answer_p.classList.add('hide');
    // question has not been answered so next button should say skip
    next_question_btn.innerHTML = 'Skip';
    // clear users last answer
    user_answer_input.value = '';
    user_answer_input.innerHTML = '';
}



import { new_random_question } from "./random_question.js";
import { new_group_question } from "./question_by_group.js";
// display a new question when user clicks next question button
next_question_btn.addEventListener('click', () => {
    check_for_skip();
    if (gamemode === 'random') {
        new_random_question();
    } else if (gamemode === 'group') {
        new_group_question();
    }
});
