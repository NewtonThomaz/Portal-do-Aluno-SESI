const carrosel = document.querySelector(".carrosel-1");
let carroselNum = 0;
let numCarrosel = 1;

const carroselAutomatico = () =>  {
    if (carroselNum === 0) {
        carrosel.setAttribute('src', '../img/1.jpg');
        carroselNum++;
    } else if (carroselNum === 1) {
        carrosel.setAttribute('src', '../img/2.jpg');
        carroselNum++;
    } else if (carroselNum === 2) {
        carrosel.setAttribute('src', '../img/3.jpg');
        carroselNum++;
    } else if (carroselNum === 3) {
        carrosel.setAttribute('src', '../img/1.jpg');
        carroselNum = 0;
    }
}
setInterval(carroselAutomatico, 3500);

const passar = document.getElementById('passar');
const voltar = document.getElementById('voltar');
const carroselNormal = document.getElementById('carrosel-normal');
const p1 = document.getElementById('1');
const p2 = document.getElementById('2');
const p3 = document.getElementById('3');
const p4 = document.getElementById('4');

passar.addEventListener('click', function () {
    (numCarrosel < 4) ? numCarrosel++ : numCarrosel = 1;
    carroselNormal.setAttribute('src', '../img/'+numCarrosel+'.jpg');
});
voltar.addEventListener('click', function () {
    (numCarrosel > 1) ? numCarrosel-- : numCarrosel = 4;
    carroselNormal.setAttribute('src', '../img/'+numCarrosel+'.jpg');
});
