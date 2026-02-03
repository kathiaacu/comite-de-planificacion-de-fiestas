(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [

    "¿Falso? ¿O verdadero? (Falso)",

    "Are you sure?",

    "¿Quieres que llame a seguridad?",

    "Really sure??",

    "Ok fine, I will stop asking...",

    "Just think about it!",

    "¡I DECLARE... VALENTINE'S!",

    "Eres el Scranton Strangler, me asfixias.",

    "That's what SHE said... y ella dijo SÍ.",

    "¡Di que sí o llamo a Dwight! 💼"

];



let messageIndex = 0;



// Función para cuando hace clic en "NO"

function handleNoClick() {

    const noButton = document.querySelector('.no-button');

    const yesButton = document.querySelector('.yes-button');

    

    // Cambia el texto del botón NO

    noButton.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;

    

    // Hace que el botón SÍ crezca para que sea imposible no darle

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.fontSize = `${currentSize * 1.5}px`;

}



// Función para cuando hace clic en "SÍ"

function handleYesClick() {

    // Redirige a la página de confirmación

    window.location.href = "yes_page.html";

}



// --- NO TOCAR ESTO ---

// Esto es para que el código sepa qué botones buscar en tu página

document.addEventListener("DOMContentLoaded", () => {

    const btnNo = document.querySelector('.no-button');

    const btnYes = document.querySelector('.yes-button');

    

    if(btnNo) btnNo.onclick = handleNoClick;

    if(btnYes) btnYes.onclick = handleYesClick;

});
