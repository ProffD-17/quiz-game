// global variables
let streak = 0;
let top_streak = 0;

function update_streak() {
    streak_p.innerHTML = 'Streak: ' + streak.toString();
    if (streak > top_streak) {
        top_streak = streak;
        top_streak_p.innerHTML = 'Top streak: ' + top_streak.toString();
    }
}

export function reset_streak() {
    streak = 0;
    update_streak();
}

export function increment_streak() {
    streak = streak + 1; // HOW DOES ++ WORK IN THIS LANGUAGE?!
    update_streak();
}

