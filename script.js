// Frases para el botón "NO" (Referencias de The Office de mujer a mujer)
const messages = [
    "¿Falso? ¿O verdadero? (Falso)",
    "Estás siendo muy Toby ahora mismo...",
    "¿Quieres que llame a seguridad para que te escolten?",
    "Me siento como Kevin tirando su chili al suelo.",
    "Bears, Beets, Battlestar Galactica... Di que sí.",
    "¿Es por mi olor a pino? (Serenity by Jan)",
    "¡I DECLARE... VALENTINE'S! (Es legal ahora)",
    "Eres como el Scranton Strangler, me estás asfixiando.",
    "That's what SHE said... y ella dijo que SÍ.",
    "¡Es broma! Di que sí o llamo a Dwight para que te escolte."
];

let messageIndex = 0;

// Función para cuando hace clic en "NO"
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Cambia el texto del botón NO por las frases de la lista
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Hace que el botón SÍ crezca cada vez que ella intenta decir que no
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Función para cuando hace clic en "SÍ"
function handleYesClick() {
    // Redirige a la página final con el GIF de Jim y Pam
    window.location.href = "yes_page.html";
}

// Esto asegura que los botones funcionen al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.querySelector('.no-button');
    const btnYes = document.querySelector('.yes-button');
    
    if(btnNo) {
        btnNo.onclick = handleNoClick;
    }
    if(btnYes) {
        btnYes.onclick = handleYesClick;
    }
});
