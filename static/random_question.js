// displays the question
const question_p = document.querySelector('#question');
// displays the category
const category_p = document.querySelector('#category');
// displays the subtopic
const subtopic_p = document.querySelector('#subtopic')
// where the user inputs their answer
const user_answer_input = document.querySelector('#user-answer');
// button for user to check thier answer
const check_answer = document.querySelector('#check');
// tells the user if they got the question right or wrong
const feedback = document.querySelector('#feedback');
// tells the user the right answer once they have answered the question
const correct_answer_p = document.querySelector('#correct-answer');
// next question button 
const next_question_btn = document.querySelector('#next-question');
// shows user their streak
const streak_p = document.querySelector('#streak')


// global variables
let question;
let streak = 0;


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


function update_streak() {
    streak_p.innerHTML = 'Streak: ' + streak.toString();
    console.log('streak updated')
}


// signal to user they got the right answer
function correct_answer() {
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    feedback.innerHTML = 'Correct';
    // add 1 to streak
    streak = streak + 1;
    console.log('incremented streak')
}

// signal to user they got the wrong answer
function incorrect_answer() {
    feedback.classList.remove('correct');
    feedback.classList.add('incorrect');
    feedback.innerHTML = 'Incorrect';
    // reset streak
    streak = 0;
    console.log('reset streak')
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
    update_streak();
}


// check offical answer with answer user given when check button clicked
check_answer.addEventListener('click', function () {
    correct = false;
    // get users answer
    let user_answer = user_answer_input.value.toLowerCase();
    // get official answer from question
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
        }
    } else {
        correct = true;
    }
    give_feedback(correct, answer)
    // question has been answered so next button should say next
    next_question_btn.innerHTML = 'Next';
});


// display a new question when user clicks next question button
next_question_btn.addEventListener('click', () => {
    new_random_question()
});
