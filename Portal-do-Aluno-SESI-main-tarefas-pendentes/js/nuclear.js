const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Letra A - Em agosto de 1945, a guerra já havia sido finalizada na Europa e arrastava-se na Ásia com indefinição mediante a recusa japonesa de render-se. Mesmo com a nação arruinada e um exército extremamente debilitado, o Japão insistia em realizar uma grande resistência final, que poderia vencer a guerra. As bombas atômicas, portanto, foram vistas como a arma final, com a qual os americanos conseguiriam a vitória definitiva sobre o Japão. ')
    })
}