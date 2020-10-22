const app = document.getElementById('app');

createBlock();

function createBlock() {
    for (let i = 0; i < 420; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        app.appendChild(block);
    }
    let list = app.childNodes;

    list.forEach(item => {
        item.addEventListener('mouseover', (el) => {
            el.target.style.background = `rgb(${randomInteger(1,255)}, ${randomInteger(1,255)}, ${randomInteger(1,255)})`;
        });
        item.addEventListener('mouseout', (el) => {
           setTimeout(() => {
               el.target.style.background = `rgb(29,29,29)`;
           }, 2000)
        });
    })

}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
