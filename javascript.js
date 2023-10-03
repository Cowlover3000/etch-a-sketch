function createDivs() {
    const container = document.querySelector('#container')
    for (let index = 0; index < 16; index++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div');
            div.classList.add('grid-element')
            container.appendChild(div);    
        }
    }
}

createDivs()