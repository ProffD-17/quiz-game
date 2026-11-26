// shows user their streak
const streak_p = document.querySelector('#streak')
// shows user their top streak
const top_streak_p = document.querySelector('#top-streak')

// global variables
let streak = 0;
let top_streak = 0;

function update_streak() {
    streak_p.innerHTML = 'Streak: ' + streak.toString();
    if (streak > top_streak) {
        top_streak = streak;
        top_streak_p.innerHTML = 'Top streak: ' + top_streak.toString()
    }
    console.log('streak updated')
}