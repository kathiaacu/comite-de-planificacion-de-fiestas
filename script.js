const messages = [
    "¿Falso? ¿O verdadero? (Falso)",
    "¿Quieres que llame a seguridad?",
    "¡I DECLARE... VALENTINE'S!",
    "Eres el Scranton Strangler, me asfixias.",
    "That's what SHE said... y ella dijo SÍ.",
    "¡Di que sí o llamo a Dwight! 💼"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
