let dynaComplete = 0;

const dynaNoButton = document.querySelector(".no-dynamax");
const dynaYesButton = document.querySelector(".yes-dynamax");

const completedText = document.querySelector(".completed");
const chanceText = document.querySelector(".chance");

CalculateDynamax();

function CalculateDynamax() {
    const notChance = Math.round(Math.pow(.99, (dynaComplete + 1) * 4) * 100);
    const yesChance = 100 - notChance;
    return yesChance.toString();
}

dynaNoButton.addEventListener('click', () => {
    dynaComplete++;
    completedText.innerText = dynaComplete.toString();
    chanceText.innerText = `${CalculateDynamax()}%`;
});

dynaYesButton.addEventListener('click', () => {
    dynaComplete = 0;
    completedText.innerText = dynaComplete.toString();
    chanceText.innerText = `${CalculateDynamax()}%`;
});

