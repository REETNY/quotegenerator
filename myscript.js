const screen = document.getElementById("quote_screen");
const spinner = document.getElementsByClassName("spinner-cont")[0];
const getQuote = document.getElementById("js-new-quote");
const shareQuote = document.getElementById("share-quote");
const quoteApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


async function fetchQuote(){
    const serverResponse = await fetch(quoteApi);
    const resp = await serverResponse.json();
    const response = resp.message;
    const data = response;
    return data;
}

getQuote.addEventListener("click", async() => {
    screen.textContent = ``;
    spinner.classList.remove("hide");

    const data = await fetchQuote();
    screen.textContent = `${data}`;

    spinner.classList.add("hide");

    shareQuote.addEventListener("click", () => {
        
        shareQuote.setAttribute("href", `https://twitter.com/intent/tweet?text=${data}`)
    });

});

