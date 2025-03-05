
function savePicks() {
    const picks = {
        game1: document.getElementById('game1').value,
        game2: document.getElementById('game2').value,
        bigGame: document.getElementById('bigGame').value
    };
    localStorage.setItem('picks', JSON.stringify(picks));
    document.getElementById('batCrack').play();
    alert('Picks saved!');
}
