const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const responseMessage = document.getElementById('response-message');

function showYipee() {
    responseMessage.textContent = 'YIPEEEEE :D';
    responseMessage.classList.add('visible');
}

yesButton.addEventListener('click', showYipee);
noButton.addEventListener('click', showYipee);
