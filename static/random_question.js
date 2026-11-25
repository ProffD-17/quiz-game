// displays the question
const question_p = document.querySelector('#question');
// users answer
const user_answer_input = document.querySelector('#user-answer');
// button for user to check thier answer
const check_answer = document.querySelector('#check');
// tells the user if they got the question right or wrong
const feedback = document.querySelector('#feedback')
// next question button 
const next_question_btn = document.querySelector('#next-question');

// make question global
let question;

// display random question
async function new_random_question() {
    // get random question
    let res = await fetch('https://anyguesser.com/api/v1/questions');
    let question_json = await res.json();
    question = question_json['questions'][0];
    // display question
    question_p.innerHTML = question['question'];
    // hide feedback
    feedback.classList.add('hide');
    // question has not been answered so next button should say skip
    next_question_btn.innerHTML = 'Skip';
    // clear users last answer
    user_answer_input.value = '';
    user_answer_input.innerHTML = '';

    console.log(question);
}
new_random_question()


// signal to user they got the right answer
function correct_answer() {
    feedback.classList.remove('incorrect');
    feedback.classList.remove('hide');
    feedback.classList.add('correct');
    feedback.innerHTML = 'Correct';
}

// signal to user they got the wrong answer
function incorrect_answer() {
    feedback.classList.remove('hide');
    feedback.classList.remove('correct');
    feedback.classList.add('incorrect');
    feedback.innerHTML = 'Incorrect';
}


// check offical answer with answer user given when check button clicked
check_answer.addEventListener('click', function () {
    correct = false;
    // get users answer
    let user_answer = user_answer_input.value.toLowerCase();
    // get official answer from question
    let answer = question['answer'].toLowerCase();
    // check users answer with offical answer and acceptible answers
    if (user_answer != answer) {
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
    if (correct) {
        correct_answer();
    } else {
        incorrect_answer();
    }
    // question has been answered so next button should say next
    next_question_btn.innerHTML = 'Next';
});


// display a new question when user clicks next question button
next_question_btn.addEventListener('click', () => {
    new_random_question()
});
