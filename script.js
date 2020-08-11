const Liana = {
    name: 'Liana',
    picture: "images/liana.png",
    colour: '#99c3b9',
    intro: [
        'A wonderful midnight, 25 years ago...',
        'I met you for the first time!',
    ],
    option0: [
        'You are the most generous kid and you grew up to be a very gentle, fair and generous man.',
        'I love you so much, Kostia!',
    ],
    option1: [
        'Every memory with you is special for me.',
        'I really like our trip to Algonquin, 2 years ago.',
        'Lida and I woke you up (and all the habitants of Mad Masher) when the fire alarm went on when we lit up the candles on your birthday cake.',
        'Also BBQ, hiking and canoeing in the park.',
        'I have many stories to share!',
    ],
    option2: [
        'Always.',
    ],
    option3: [
        'Спасибо, князь.',
        'Вы настоящий дворянин.',
        'И программист.',
    ],
    option4: [
        'Can\'t review you.',
        'I love you too much.',
    ],
};

const Lida = {
    name: 'Lida',
    picture: "images/lida.jpg",
    colour: '#000099',
    intro: [
        'Hello, Brat!',
    ],
    option0: [
        'I like your selfless kindness and unshakable sense of justice.',
        'You also have an awesome memory for small details that most would forget, but never held a grudge on anybody.',
        'You manage to bring a smile to my face and make me (and those around you) feel better even in the darkest of days.',
    ],
    option1: [
        'From our brother-sister trip to Montreal…',
        'when we went to see the LI-AAAAEEE-GHTS towards the bridge and met a leprosy-scary lady on the way back!!!',
    ],
    option2: [
        'You help every time when you give me one of your ‘bear’ hugs without making a single comment, just guided by the feeling that I am not doing well.',
    ],
    option3: [
        'Listen to me, your sister is always right.',
    ],
    option4: [
        'Five out of five stars for a steady stream of waggish word-play puns.',
    ],
};

const MizzCristall = {
    name: 'Mizz Cristall',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const Anna = {
    name: '',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const Josh = {
    name: 'Josh',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const Chris = {
    name: '',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const Stefan = {
    name: 'Stefan',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        'This is Huge Jackedman, and it\'s not Chris.',
        'I\'m also not huge.',
        'Or jacked.',
    ],
    option0: [
        'I love your genuine smile, personality and kind heart.',
    ],
    option1: [
        'One of my favorite times, where I felt so much at peace was going to your place after school.',
        'Getting snacks and watching Silicon Valley.',
    ],
    option2: [
        'Always love your presence, but especially in hard times.',
        'Because you truly listen and have empathy.',
    ],
    option3: [
        'Running on empty, fooooooooood review!',
    ],
    option4: [
        'I give you a perfect 5/7 score.',
    ],
};

const Kathy = {
    name: '',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const Pitou = {
    name: '',
    picture: "images/stefan2.jpg",
    colour: '#00f00c',
    intro: [
        '',
    ],
    option0: [
        '',
    ],
    option1: [
        '',
    ],
    option2: [
        '',
    ],
    option3: [
        '',
    ],
    option4: [
        '',
    ],
};

const profilePics = [Liana.picture, Lida.picture, MizzCristall.picture, Anna.picture, Josh.picture, Chris.picture, Stefan.picture, Kathy.picture, Pitou.picture];
const profileColours = [Liana.colour, Lida.colour, MizzCristall.colour, Anna.colour, Josh.colour, Chris.colour, Stefan.colour, Kathy.colour, Pitou.colour];

let info = Liana;
let selection = info.intro;
let counter = 1;

// const userName = window.prompt("What is your name?");
const userName = 'Kostia';
const div = document.querySelector('div');

if (userName == 'Kostia'){
    mainPage();
} else if (userName == 'CapySloth'){
    easterEgg();
} else {
    alert('You are not the birthday boy I\'m looking for');
}

function mainPage(){
    div.setAttribute('id', 'main');
    div.style.backgroundImage = 'none';
    createCharacters(9);
    addButtonEvents('.characters', (e) => talkToCharacter(e.target));
    endScreen();
}
  
function easterEgg(){
    //I love you, cutie <3
    createCharacters(2);
    addButtonEvents('.characters', (e) => talkToCharacter(e.target));
    endScreen();
}
  
function createCharacters(number){
    for (let i=0; i<number; i++){
        const button = document.createElement('button');
        button.setAttribute('id', `character${i}`);
        button.setAttribute('class', 'characters');
        button.setAttribute('type', 'button');
        button.style.backgroundImage = `url(${profilePics[i]})`;
        button.style.backgroundColor = profileColours[i];
        div.appendChild(button);
    };
}
  
function addButtonEvents(type, event){
    const buttons = document.querySelectorAll(`${type}`);
    buttons.forEach((button) => {
         button.addEventListener('click', event);
    });
}

function endScreen(){
    const endButton = document.createElement('button');
    endButton.setAttribute('id', 'endButton');
    endButton.textContent = 'Finish';
    div.appendChild(endButton);
    
    endButton.addEventListener('click', () => {
        removeButtons();
        div.setAttribute('id', 'endScreen');
        
        const p1 = document.createElement('p');
        p1.setAttribute('class', 'endScreen');
        p1.textContent = 'HAPPY BIRTHDAY, KOSTIA';
        div.appendChild(p1);
        
        const p2 = document.createElement('p');
        p2.setAttribute('class', 'endScreen');
        p2.textContent = 'from all of us with love <3';
        div.appendChild(p2);
        
        const a = document.createElement('a');
        a.setAttribute('id', 'secretLink');
        a.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        a.textContent = 'Secret Link';
        div.appendChild(a);
    });
}
  
function talkToCharacter(option){
    div.removeAttribute('id', 'main');
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
    backButton.textContent = '◄';
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
    skipButton.textContent = '⏭';
    div.appendChild(skipButton);
    skipButton.addEventListener('click', () => skipAll(selection));
}
  
function skipAll(option){
    counter = option.length - 1;
    dialogueBox.textContent = option[counter];
    counter++;
    updateDialogue(option);
}
  
function buildCharacterPage(character){
    checkCharacter(character);
    selection = info.intro;
    div.style.backgroundImage = `linear-gradient(${info.colour}, white)`;
    
    const image = document.createElement('img');
    image.setAttribute('src', `${info.picture}`);
    div.appendChild(image);
    
    const textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'text');
    div.appendChild(textDiv);

    const nameLabel = document.createElement('p');
    nameLabel.setAttribute('id', 'name');
    nameLabel.textContent = info.name;
    textDiv.appendChild(nameLabel);
    
    const dialogueBox = document.createElement('p');
    dialogueBox.setAttribute('id', 'dialogueBox');
    dialogueBox.textContent = info.intro[0];
    textDiv.appendChild(dialogueBox);
    
    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = '➡';
    textDiv.appendChild(nextButton);
    nextButton.addEventListener('click', () => updateDialogue(info.intro));
}
  
function updateDialogue(option){
    if (counter <= option.length){
        if (counter == option.length){
            const image = document.querySelector('img');
            image.setAttribute('id', 'small');
            displayOptions();
        } else {
            dialogueBox.textContent = option[counter];
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
        button.textContent = options[i];
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
    recreateNextButton();
    checkOption(optionID);
    dialogueBox.textContent = selection[0];
    counter = 1;
    nextButton.addEventListener('click', () => updateDialogue(selection));
}
  
function recreateNextButton(){
    const textDiv = document.querySelector('#text');
    let nextButton = document.querySelector('#nextButton');
    textDiv.removeChild(nextButton);
    nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = '➡';
    textDiv.appendChild(nextButton);
}
  
function checkCharacter(option){
    switch (option){
        case 'character0':
            info = Liana;
            break;
        case 'character1':
            info = Lida;
            break;
        case 'character2':
            info = MizzCristall;
            break;
        case 'character3':
            info = Anna;
            break;
        case 'character4':
            info = Josh;
            break;
        case 'character5':
            info = Chris;
            break;
        case 'character6':
            info = Stefan;
            break;
        case 'character7':
            info = Kathy;
            break;
        case 'character8':
            info = Pitou;
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
        case 'option2':
            selection = info.option2;
            break;
        case 'option3':
            selection = info.option3;
            break;
        case 'option4':
            selection = info.option4;
            break;
        default: ;
    };
}

const options = [
    'What do you think of me?',
    'What is one of your favourite memories?',
    'Have I ever helped you? Or did I int you?',
    'Tell me an inside joke.',
    'For real tho, what do you really think of me?',
];