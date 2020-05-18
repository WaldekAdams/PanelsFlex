const divPanels = document.querySelectorAll('.panels .panel');

activePanel = function (e) {
    // console.log('ok')
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active')
    }
}
openPanel = function () {
    this.classList.toggle('open')
}

divPanels.forEach(panel => panel.addEventListener('transitionend', activePanel))
divPanels.forEach(panel => panel.addEventListener('click', openPanel))