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
    addButtonEvents('button', talkToCharacter);
}

function easterEgg(){
    //I love you, cutie <3
    createCharacters(2);
    addButtonEvents('button', talkToCharacter);
}

function createCharacters(number){
    for (let i=0; i<number; i++){
        const button = document.createElement('button');
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

function talkToCharacter(){
    removeButtons();
    backToMain();
    buildCharacterPage();
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
        selection = intro;
        counter = 0;
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

function buildCharacterPage(){
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.pinimg.com/originals/d0/91/3d/d0913dd3950bdf008f337f5be6b70d20.jpg');
    div.appendChild(image);

    const textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'text');
    div.appendChild(textDiv);

    const dialogueBox = document.createElement('p');
    dialogueBox.setAttribute('id', 'dialogueBox');
    dialogueBox.textContent = 'Meow meow meow';
    textDiv.appendChild(dialogueBox);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    textDiv.appendChild(nextButton);
    nextButton.addEventListener('click', () => updateDialogue(intro));
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

    // nextButton.removeEventListener('click', test1);
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

function checkOption(option){
    switch (option){
        case 'option0':
            selection = option0;
            break;
        case 'option1':
            selection = option1;
            break;
        default: ;
    };
}

const intro = [
    'Moo moo moo',
    'Ruff ruff ruff',
    'Hey hey hey',
];

const option0 = [
    'I love you',
    'You love me',
    'We are one big inting family',
];

const option1 = [
    'Pitou',
    'is the',
    'cutest cat',
];

let selection = intro;