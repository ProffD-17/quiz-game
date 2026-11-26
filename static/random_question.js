// displays the question
const question_p = document.querySelector('#question');
// displays the category
const category_p = document.querySelector('#category');
// displays the subtopic
const subtopic_p = document.querySelector('#subtopic')
// where the user inputs their answer

// next question button 
const next_question_btn = document.querySelector('#next-question');



// global variables
let question;


// reset all the info on the flashcard
function reset_flashcard() { 
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


// show question, question category and question subtopic on fashcard
function display_question_info(question) {
    // display question
    question_p.innerHTML = question['question'];
    // display category
    let category = question['category']['name'];
    category_p.innerHTML = 'Category: ' + category;
    // display subtopic
    let subtopic = question['subtopic'];
    subtopic_p.innerHTML = 'Subtopic: ' + subtopic;
}

// display random question
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
