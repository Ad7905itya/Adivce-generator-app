const btnRandom = document.querySelector('.btn-random');
const id = document.querySelector('.id');
const statement = document.querySelector('.statement');

const url = 'https://api.adviceslip.com/advice';

fetch(url).then(res => res.json())
    .then((json) => {
        reloadValue(json.slip)
    })

function reloadValue(data) {
    id.innerText = data.id
    statement.innerText = data.advice
}


btnRandom.addEventListener('click', () => {
    const url = 'https://api.adviceslip.com/advice';

    fetch(url).then(res => res.json())
        .then((json) => {
            addValue(json.slip)
        }).catch((err) => {
            console.log(err)
        })
})

function addValue(data) {
    id.innerText = data.id;
    statement.innerText = data.advice;
}