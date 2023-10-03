let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let whileRunning = true;
    let num;
    while (whileRunning) {
        num =  prompt("Give a number between 1 - 100", "42");

        if (parseInt(num) >= 1  && parseInt(num) <= 100) {
            whileRunning = false;
            createDivs(parseInt(num));
        }
    }
})


// generates a grid of divs that change color when you hover over them for a variable num which represent the with and height

function createDivs(num) {
    const container = document.querySelector('#container')

    if (container.hasChildNodes()) {
        let childElements = Array.from(container.children);
        childElements.forEach(element => {
            element.remove();
        });
    }

    for (let index = 0; index < num; index++) {
        for (let j = 0; j < num; j++) {
            let div = document.createElement('div');
            div.classList.add('grid-element')
            div.style.cssText = `background-color: purple; width: calc(480px / ${num}); height: calc(480px / ${num})`;
            div.addEventListener('mouseover', (event) => {
                event.target.style['background-color'] = 'blue';
            })

            container.appendChild(div);    
        }
    }
}



createDivs(64)