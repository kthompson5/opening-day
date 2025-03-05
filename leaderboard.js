
function loadLeaderboard() {
    const picks = JSON.parse(localStorage.getItem('picks')) || {};
    const results = JSON.parse(localStorage.getItem('results')) || {};
    let score = 0;

    if (picks.game1 === results.game1) score += 1;
    if (picks.game2 === results.game2) score += 1;
    if (picks.bigGame === results.bigGame) score += 6;

    document.getElementById('leaderboard').innerHTML = `Your Score: ${score} points`;
}
window.onload = loadLeaderboard;
