
function saveResults() {
    const results = {
        game1: document.getElementById('result1').value,
        game2: document.getElementById('result2').value,
        bigGame: document.getElementById('bigResult').value
    };
    localStorage.setItem('results', JSON.stringify(results));
    alert('Results saved!');
}
