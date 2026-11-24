const question_p = document.querySelector('#question');
const user_answer_input = document.querySelector('#user-answer');
const check_answer = document.querySelector('#check');

// make question global
let question;

// get a random question
async function get_question() {
    let res = await fetch('https://anyguesser.com/api/v1/questions')
    let question_json = await res.json()
    let question = question_json['questions'][0]
    return question
}

// display question
async function display_question() {
    question = await get_question()
    console.log(question)
    question_p.innerHTML = question['question']
}
display_question()


// signal to user they got the right answer
function correct_answer() {
    console.log('correct')
}

// signal to user they got the wrong answer
function incorrect_answer() {
    console.log('incorrect')
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
        correct_answer()
    } else {
        incorrect_answer()
    }
});