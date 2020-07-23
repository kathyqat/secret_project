// const userName = window.prompt("What is your name?");

const userName = 'Kostia';
const div = document.querySelector('div');

if (userName == 'Kostia'){
    main();
} else if (userName == 'CapySloth'){
    easterEgg();
} else {
     alert('You are not the birthday boy I am looking for');
}

function main(){
    createCharacters(7);
    addButtonEvents();
}

function createCharacters(number){
    for (let i=0; i<number; i++){
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        div.appendChild(button);
    };
}

function addButtonEvents(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', talkToCharacter);
    });
}

function talkToCharacter(){
    buildCharacter();
}

function buildCharacter(){
    removeButtons();

    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.pinimg.com/originals/d0/91/3d/d0913dd3950bdf008f337f5be6b70d20.jpg');
    image.style.height = '300px';
    div.appendChild(image);
    
    const dialogueBox = document.createElement('p');
    dialogueBox.setAttribute('id', 'dialogueBox');
    dialogueBox.textContent = 'Meow meow meow';
    div.appendChild(dialogueBox);
}

function removeButtons(){
    const removedButtons = document.querySelectorAll('button');
    removedButtons.forEach((button) => {
        div.removeChild(button);
    });
}

function easterEgg(){
    createCharacters(2);
    addButtonEvents();
}