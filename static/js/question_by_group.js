import { display_question_info } from "./helpers.js";
// get the question variable
import { question } from "./status.js";
import { update_question } from "./status.js";

async function get_question_by_category() {
    const res = await fetch(`https://anyguesser.com/api/v1/questions?amount=1&group=${group_name}`);
    const res_json = await res.json();
    let new_question = res_json['questions'][0];
    update_question(new_question);
    return question;
}

export async function new_group_question() {
    display_question_info(await get_question_by_category());
}
if (gamemode === 'group') {
    new_group_question();
}

