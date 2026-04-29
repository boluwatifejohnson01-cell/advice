let refreshButton = document.querySelector("#refreshBtn");
let adviceContent = document.querySelector("#refreshContent");
let textNumber = document.querySelector("#textNumber");

let getApi = async () => {
  let adviceApi = await fetch("https://api.adviceslip.com/advice");
  let convertedApi = await adviceApi.json();
  console.log(convertedApi);

  adviceContent.textContent = `"${convertedApi.slip.advice}"`;
  textNumber.textContent = `ADVICE #${convertedApi.slip.id}`;
};

getApi();

refreshButton.addEventListener("click", getApi);
