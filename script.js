const userName = window.prompt("What is your name?");
// const userName = 'Kostia';
const div = document.querySelector('div');
let counter = 1;

if (userName == 'Kostia'){
    mainPage();
} else if (userName == 'CapySloth'){
    easterEgg();
} else {
    alert('You are not the birthday boy I am looking for');
}

function mainPage(){
    createCharacters(7);
    addButtonEvents('button', (e) => talkToCharacter(e.target));
}
  
function easterEgg(){
    //I love you, cutie <3
    createCharacters(2);
    addButtonEvents('button', (e) => talkToCharacter(e.target));
}
  
function createCharacters(number){
    for (let i=0; i<number; i++){
        const button = document.createElement('button');
        button.setAttribute('id', `character${i}`);
        // button.setAttribute('class', 'characters');
        button.setAttribute('type', 'button');
        div.appendChild(button);
    };
}
  
function addButtonEvents(type, event){
    const buttons = document.querySelectorAll(`${type}`);
    buttons.forEach((button) => {
         button.addEventListener('click', event);
    });
}
  
function talkToCharacter(option){
    const characterID = option.getAttribute('id');
    removeButtons();
    backToMain();
    buildCharacterPage(characterID);
    skipButton();
}
  
function removeButtons(){
    const removedButtons = document.querySelectorAll('button');
    removedButtons.forEach((button) => {
        div.removeChild(button);
    });
}
  
function backToMain(){
    const backButton = document.createElement('button');
    backButton.setAttribute('id', 'backButton');
    backButton.setAttribute('type', 'button');
    div.appendChild(backButton);
    
    backButton.addEventListener('click', () => {
        div.removeChild(backButton);
        const image = document.querySelector('img');
        div.removeChild(image);
        const textDiv = document.querySelector('#text');
        div.removeChild(textDiv);
        const skipButton = document.querySelector('#skipButton');
        div.removeChild(skipButton);
        const optionsDiv = document.querySelector('#options');
        if (optionsDiv){
            div.removeChild(optionsDiv);
        };
        mainPage();
        counter = 1;
    });
}
  
function skipButton(){
    const skipButton = document.createElement('button');
    skipButton.setAttribute('id', 'skipButton');
    skipButton.setAttribute('type', 'button');
    div.appendChild(skipButton);
    skipButton.addEventListener('click', () => skipAll(selection));
}
  
function skipAll(option){
    counter = option.length - 1;
    updateDialogue(option);
}
  
function buildCharacterPage(character){
    checkCharacter(character);
    selection = info.intro;
    
    const image = document.createElement('img');
    image.setAttribute('src', `${info.picture}`);
    div.appendChild(image);
    
    const textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'text');
    div.appendChild(textDiv);
    
    const dialogueBox = document.createElement('p');
    dialogueBox.setAttribute('id', 'dialogueBox');
    dialogueBox.textContent = info.intro[0];
    textDiv.appendChild(dialogueBox);
    
    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    textDiv.appendChild(nextButton);
    nextButton.addEventListener('click', () => updateDialogue(info.intro));
}
  
function updateDialogue(option){
    if (counter <= option.length){
        dialogueBox.textContent = option[counter];
        counter++;
        if (counter == option.length){
            const image = document.querySelector('img');
            image.setAttribute('id', 'small');
            displayOptions();
            counter++;
        };
    };
}
  
function displayOptions(){
    const optionsDiv = document.createElement('div');
    optionsDiv.setAttribute('id', 'options');
    div.appendChild(optionsDiv);
    
    for (let i=0; i<5; i++){
        const button = document.createElement('button');
        button.setAttribute('id', `option${i}`);
        button.setAttribute('class', 'options');
        button.setAttribute('type', 'button');
        optionsDiv.appendChild(button);
    };
    addButtonEvents('.options', (e) => selectOption(e.target));
}
  
function selectOption(option){
    const optionsDiv = document.querySelector('#options');
    div.removeChild(optionsDiv);
    
    const image = document.querySelector('img');
    image.removeAttribute('id', 'small');
    
    const dialogueBox = document.querySelector('#dialogueBox');
    const optionID = option.getAttribute('id');
    dialogueBox.textContent = `So ${optionID}`;
    
    recreateNextButton();
    checkOption(optionID);
    counter = 0;
    nextButton.addEventListener('click', () => updateDialogue(selection));
}
  
function recreateNextButton(){
    const textDiv = document.querySelector('#text');
    let nextButton = document.querySelector('#nextButton');
    textDiv.removeChild(nextButton);
    nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    textDiv.appendChild(nextButton);
}
  
function checkCharacter(option){
    switch (option){
        case 'character0':
            info = character0;
            break;
        case 'character1':
            info = character1;
            break;
        default: ;
    };
}
  
function checkOption(option){
    switch (option){
        case 'option0':
            selection = info.option0;
            break;
        case 'option1':
            selection = info.option1;
            break;
        default: ;
    };
}
  
const character0 = {
    picture: "images/ragdoll.jpg",
    intro: [
        'Meow meow meow',
        'Moo moo moo',
        'Ruff ruff ruff',
    ],
    option0: [
        'I love you',
        'You love me',
        'We are one big inting family',
    ],
    option1: [
        'Pitou',
        'is the',
        'cutest cat',
    ],
}
  
const character1 = {
    picture: "images/sadCat.jpg",
    intro: ['idk', 'halp', 'pls'],
    option0: ['hope', 'this', 'works'],
    option1: ['I', 'never worked', 'with objects before'],
}
  
let info = character0;
let selection = info.intro;