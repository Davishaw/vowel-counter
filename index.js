const button = document.getElementById('btn');
const errMessage = document.getElementById('err-message');
const modal = document.getElementById('modal');
const p = document.querySelector('p');
let counter = 0;


function reloadPage() {
    location.reload()
};



button.addEventListener('click', () => {
    const input = document.getElementById('txt').value;
    const split = input.split('');

    
    for(let i = 0; i < split.length; i++) {
        console.log(split[i])
        if(split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u') {
            counter++
        }
        if(counter > 1) {
            modal.style.display = 'block'
            p.textContent = `There are ${counter} vowels`
        } else if (counter === 1) {
            modal.style.display = 'block'
            p.textContent = `There is ${counter} vowel`
        } else {
            modal.style.display = 'block'
            p.textContent = ` No vowel`
        }
        const timeout = setTimeout(reloadPage, 2500)
    }
    
    if(input === '') {
        showErrMessage('Please enter some words')
    };

    const txt = document.getElementById('txt');
    txt.value = ''
    
});



function showErrMessage(msg) {
    errMessage.textContent = msg;
}

function resetErrMessage() {
    errMessage.textContent = '';
};