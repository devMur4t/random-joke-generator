const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=religious,political,racist,sexist,explicit&idRange=0-319";


let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(response => {
        jokeContainer.textContent = `${response.joke}`
        jokeContainer.classList.add("fade");
    })
    .catch(err => console.log(err));
}

btn.addEventListener("click", getJoke);
