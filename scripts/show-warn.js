var countTry = 0;
var passwordTry = []; 
var  choosenMessageIndex = 0;

var warningMessages = [
    "Pegamos você! Seus dados foram capturados com sucesso. Mas calma, foi só um teste... ou será que não?",
    "Você clicou. A gente avisou. Seus dados agora fazem parte da nossa coleção secreta de distrações digitais.",
    "Obrigado por contribuir com nossos testes de engenharia social. Seus dados foram embalados com carinho!",
    "Buuu! Seus dados foram assustadoramente capturados. Hora de revisar as lições de segurança!"
];

var didntWork = [
    "Nem álcool 70 limpa esse vacilo... Seus dados foram capturados! Mas relaxa, é só uma simulação",
    "Essa dose veio com efeito colateral: seus dados foram parar na UTI da segurança cibernética.",
    "Clique contaminado! Seus dados foram expostos, mas a equipe de segurança já está de plantão."
];

const actionButtonSubmit = document.getElementById("submit-informations");
actionButtonSubmit.addEventListener("click", () => {
    password = document.getElementById("password");
    
    if(countTry == 0) {
        passwordTry.push(password.value);
        console.log(passwordTry[0]);
        alert("Senha Incorreta, repita!");
        countTry++;
    } else if(countTry == 1) {
        passwordTry.push(password.value);
        console.log(passwordTry[1]);

        if(passwordTry[0] == passwordTry[1]) {
            choosenMessageIndex = Math.floor(Math.random() * (4 - 0) + 0);
            
            alert(warningMessages[choosenMessageIndex]);
        }

        countTry++;
    } else {
        passwordTry = [];
        countTry = 0;

        choosenMessageIndex = Math.floor(Math.random() * (4 - 0) + 0);
        alert(warningMessages[choosenMessageIndex]);
    }
});