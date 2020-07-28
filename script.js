const userName = window.prompt("What is your name?");
// const userName = 'Kostia';
const div = document.querySelector('div');
let counter = 0;

if (userName == 'Kostia'){
    mainPage();
} else if (userName == 'CapySloth'){
    easterEgg();
} else {
     alert('You are not the birthday boy I am looking for');
}

function mainPage(){
    createCharacters(7);
    addButtonEvents();
}

function easterEgg(){
    //I love you, cutie <3
    createCharacters(2);
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
    removeButtons();
    buildCharacterPage();
    updateDialogue(intro);
}

function removeButtons(){
    const removedButtons = document.querySelectorAll('button');
    removedButtons.forEach((button) => {
        div.removeChild(button);
    });
}

function buildCharacterPage(){
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.pinimg.com/originals/d0/91/3d/d0913dd3950bdf008f337f5be6b70d20.jpg');
    image.style.height = '300px';
    div.appendChild(image);
    
    const textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'talk');
    div.appendChild(textDiv);
    
    const dialogueBox = document.createElement('p');
    dialogueBox.setAttribute('id', 'dialogueBox');
    dialogueBox.textContent = 'Meow meow meow';
    textDiv.appendChild(dialogueBox);
    
    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    textDiv.appendChild(nextButton);
}

function updateDialogue(option){
    const dialogueBox = document.querySelector('#dialogueBox');
    const nextButton = document.querySelector('#nextButton');
    nextButton.addEventListener('click', () => {
        if (counter < option.length){
            dialogueBox.textContent = option[counter];
            counter++;
        };
    });
    counter = 0;
}

const intro = [
    'Moo moo moo',
    'Ruff ruff ruff',
    'Hey hey hey',
];