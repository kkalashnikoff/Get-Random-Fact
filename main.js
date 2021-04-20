
const newFactBtn = document.getElementById('new-fact-btn');
const factText = document.getElementById('fact-text');
const sourceUrl = document.getElementById('source');


document.addEventListener("DOMContentLoaded", getRandomFact);
newFactBtn.addEventListener('click', getRandomFact);


function getRandomFact() {
    fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
    .then(res => res.json())
    .then(data => {
            factText.innerHTML = `${data.text}`;
            sourceUrl.innerText = `${data.source}`;        
    })
}


