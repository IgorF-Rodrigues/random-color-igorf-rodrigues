const btn = document.querySelector('.btn');
const colorBox = document.querySelector('.colorBox');
const screen = document.querySelector('.screen');

colorList = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

btn.onclick = () => {
    const cor = ['#'];
    colorBox.innerHTML = 'Cor: ';
    
    for(let c = 0; c < 6; c++) {
        let numero = Math.floor(Math.random() * 15);

        cor.push(colorList[numero]);
    }    
    
    colorBox.innerHTML += cor.join('').toUpperCase();

    screen.style.backgroundColor = cor.join('')
}