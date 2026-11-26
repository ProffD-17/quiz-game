// displays the question
const question_p = document.querySelector('#question');
// displays the category
const category_p = document.querySelector('#category');
// displays the subtopic
const subtopic_p = document.querySelector('#subtopic');
// tells the user the right answer once they have answered the question
const correct_answer_p = document.querySelector('#correct-answer');
// next question button 
const next_question_btn = document.querySelector('#next-question');
// users answer
const user_answer_input = document.querySelector('#user-answer');
// tells the user if they got the question right or wrong
const feedback = document.querySelector('#feedback');


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