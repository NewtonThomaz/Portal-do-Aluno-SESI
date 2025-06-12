const escondido1 = document.getElementById('escondido1');
const seta1 = document.getElementById('seta1');
const pop1 = document.getElementById('pop1');

const escondido2 = document.getElementById('escondido2');
const seta2 = document.getElementById('seta2');
const pop2 = document.getElementById('pop2');


const escondido3 = document.getElementById('escondido3');
const seta3 = document.getElementById('seta3');
const pop3 = document.getElementById('pop3');

pop1.addEventListener("click", () => {
    if (escondido1.classList.contains("d-none")) {
        escondido1.classList.remove("d-none")
        seta1.classList.add('invertey')
    } else {
        escondido1.classList.add("d-none")
        seta1.classList.remove('invertey')
    }
});

pop2.addEventListener("click", () => {
    if (escondido2.classList.contains("d-none")) {
        escondido2.classList.remove("d-none")
        seta2.classList.add('invertey')
    } else {
        escondido2.classList.add("d-none")
        seta2.classList.remove('invertey')
    }
});


pop3.addEventListener("click", () => {
    if (escondido3.classList.contains("d-none")) {
        escondido3.classList.remove("d-none")
        seta3.classList.add('invertey')
    } else {
        escondido3.classList.add("d-none")
        seta3.classList.remove('invertey')
    }
});


const options = document.querySelectorAll('.option');
const correctAnswer = 'a';
let answered = false;

options.forEach(option => {
    option.addEventListener('click', () => {
        if (answered) return;

        const selected = option.getAttribute('data-answer');

        if (selected === correctAnswer) {
            option.classList.add('correct');
            document.getElementById('result').textContent = "✅ Você acertou!";
        } else {
            option.classList.add('wrong');
            document.querySelector(`.option[data-answer="${correctAnswer}"]`).classList.add('correct');
            document.getElementById('result').textContent = "❌ Você errou.";
        }

        answered = true;

        // Desabilita outros cliques
        options.forEach(opt => opt.style.pointerEvents = 'none');
    });
});