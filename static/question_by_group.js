import { display_question_info } from "./helpers.js";

async function get_question_by_category() {
    const res = await fetch(`https://anyguesser.com/api/v1/questions?amount=1&group=${group_name}`);
    const res_json = await res.json();
    let question = res_json['questions'][0];
    return question;
}

display_question_info(get_question_by_category())