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
        appendAlert('Letra E - A crítica direcionada ao governo espanhol contra a chamada “lei da mordaça” surge a partir da estratégia política da Espanha em conter as manifestações populares separatistas e de outros movimentos sociais. O objetivo é conter o apelo popular e o clamor por elas gerado na comunidade internacional. ')
    })
}