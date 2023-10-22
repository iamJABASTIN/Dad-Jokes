const jokeEl = document.getElementById('joke')

const jokeBtn = document.getElementById('jokeButton')

generateJoke()

jokeBtn.addEventListener('click',generateJoke)

function generateJoke(){

    const config = {
        headers : {
            Accept : 'application/json',

        },
    }

    fetch('https://icanhazdadjoke.com', config).then((res) => res.json()).then( (data) => {
        jokeEl.innerHTML = data.joke
    })
}
