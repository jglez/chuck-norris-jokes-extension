const jokeBtn = document.querySelector("#joke-btn");
jokeBtn.addEventListener("click", getJoke);
const jokeContainer = document.querySelector("#joke-container");

async function getJoke() {
  try {
    res = await fetch("https://api.chucknorris.io/jokes/random");
    const jokeJSON = await res.json();
    const jokeText = jokeJSON.value;
    
    jokeParagraph = document.createElement("p");
    jokeParagraph.innerHTML = jokeText;
    jokeContainer.replaceChild(jokeParagraph, jokeContainer.childNodes[0]);
  } catch (err) {
    console.log(err);
  }
}