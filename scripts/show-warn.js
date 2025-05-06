var countTry = 0; // Count how many times the form was sended
var passwordTry = [];  // For each interation, it will save the password, for further comparations 
var  choosenMessageIndex = 0; // Random index

// Messages to be displayed in case firstTry == secondTry
var warningMessages = [
    "Pegamos você! Seus dados foram capturados com sucesso. Mas calma, foi só um teste... ou será que não?",
    "Você clicou. A gente avisou. Seus dados agora fazem parte da nossa coleção secreta de distrações digitais.",
    "Obrigado por contribuir com nossos testes de engenharia social. Seus dados foram embalados com carinho!",
    "Buuu! Seus dados foram assustadoramente capturados. Hora de revisar as lições de segurança!"
];

// Messages to be displayed in case the user dont get the concept haha
var didntWork = [
    "Nem álcool 70 limpa esse vacilo... Seus dados foram capturados! Mas relaxa, é só uma simulação",
    "Essa dose veio com efeito colateral: seus dados foram parar na UTI da segurança cibernética.",
    "Clique contaminado! Seus dados foram expostos, mas a equipe de segurança já está de plantão."
];

// Add an event when button is clicked 
const actionButtonSubmit = document.getElementById("submit-informations");
actionButtonSubmit.addEventListener("click", () => {
    // Get the password submmited
    password = document.getElementById("password");
    
    // First Try
    if(countTry == 0) {
        // Push the password to array
        passwordTry.push(password.value);

        // Ask for repeat password
        alert("Senha Incorreta, repita!");
        countTry++;
    } else if(countTry == 1) {
        // Push the password to array
        passwordTry.push(password.value);

        //If the two attemps give the same password  
        if(passwordTry[0] == passwordTry[1]) {
            choosenMessageIndex = Math.floor(Math.random() * (4 - 0) + 0);
            
            alert(warningMessages[choosenMessageIndex]);
        } else {
            // Choose a random index to show the message 
            choosenMessageIndex = Math.floor(Math.random() * (4 - 0) + 0);

            // Show
            alert(warningMessages[choosenMessageIndex]);
        }
        
        // Increment for enter in else
        countTry++;
    } else {
        // Reset
        passwordTry = [];
        countTry = 0;

        // Show message
        choosenMessageIndex = Math.floor(Math.random() * (4 - 0) + 0);
        alert(warningMessages[choosenMessageIndex]);
    }
});