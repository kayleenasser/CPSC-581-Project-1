const data = {
    "Litter Boxes": {
        "fact": "Cats are very clean animals, and they will stop using a dirty litter box! Got to keep it clean :)",
        "opinion": "I have a cat, and I don't like cleaning it, but I am glad she uses it!",
        "percent": "40",
        "image": "../assets/litterbox.png"
    },
    "Pork": {
        "fact": "Pork is the most widely eaten meat in the world!",
        "opinion": "I really don't like pork. I think it smells bad and it makes me sick when I eat it.",
        "percent": "3",
        "image": "../assets/pork.png"
    },
    "Public Restrooms": {
        "fact": "The first toilet cubeicle is typically the least used!",
        "opinion": "I think there should be more! Nothing worse than being out and about and not being able to find a bathroom.",
        "percent": "60",
        "image": "../assets/publictoilet.png"
    },
    "Styrofoam": {
        "fact": "You can't recycle it....",
        "opinion": "They're good for shipping things, but I hate the sound they make when they rub together. I hate unpacking things with styrofoam.",
        "percent": "13",
        "image": "../assets/styrofoam.png"
    },
    "Workplace Injury": {
        "fact": "Overexertion is one of the main causes of workplace injuries! Take it easy, you don't owe your company your health!",
        "opinion": "...I got a concussion at work once, sooo definitely not a fan of workplace injuries.",
        "percent": "9",
        "image": "../assets/workplaceouch.png"
    },
    "Ripe Fruit": {
        "fact": "Apples, peaches and raspberries are all members of the rose family!!",
        "opinion": "Nothing is better than a perfectly ripe peach in the summer. I'm a fan of MOST ripe fruit.",
        "percent": "74",
        "image": "../assets/ripe.png"
    },
    "Bikes": {
        "fact": "The first commercially available bikes were created in France in the 1860s",
        "opinion": "I want to like bikes, but I'm scared of riding them because I got hit by a car one time. They're cool and good though.",
        "percent": "55",
        "image": "../assets/bike.png"
    },
    "Trains": {
        "fact": "Trains are the biggest users of rail networks... this may shock you.",
        "opinion": "I love trains, I love not having to drive, I want more public transit!!!",
        "percent": "90",
        "image": "../assets/train.png"
    },
    "Sushi": {
        "fact": "Sushi was once accepted at currency in 8th century Japan!",
        "opinion": "I loveee sushi, one of my favourite foods hehehe",
        "percent": "98",
        "image": "../assets/sushi.png"
    },
    "Pokemon": {
        "fact": "Mr Mime is probably just a dude trying to avoid responsibilities...",
        "opinion": "Currently I play a lot of pokemon go, and I used to play pokemon platium on my DS!",
        "percent": "70",
        "image": "../assets/pokemon.png"
    },
    "Dirt": {
        "fact": "Dirt is made up of so many things! Minerals, air, water, living and dead material!",
        "opinion": "I think dirt is one of the building blocks of life. Big fan.",
        "percent": "80",
        "image": "../assets/dirt.png"
    },
    "Calgary Flames": {
        "fact": "The franchise was originally located in Atlanta where they were called the Atlanta Flames!",
        "opinion": "My favourite hockey team! Love cheering for them every year!",
        "percent": "92",
        "image": "../assets/flames.png"
    },
    "Ottawa Senators": {
        "fact": "The original Sens were founded in 1883 but when under in 1934 and didn't exist again until 1992.",
        "opinion": "I don't think I've ever felt more neutral about a sports franchise....",
        "percent": "50",
        "image": "../assets/sens.png"
    },
    "Daisy": {
        "fact": "She almost a year old, and already 3ft long! She will get to be about 5ft!",
        "opinion": "I love Daisy so much! She is my favourite little noodle :)",
        "percent": "100",
        "image": "../assets/daisy.png"
    },
    "Dylan": {
        "fact": "He is terrified of most bugs (he is 6'4\", +200lbs)",
        "opinion": "He is my lover!! One of my favourite people on the planet :D",
        "percent": "100",
        "image": "../assets/dylan.png"
    },
    "Diet Drinks": {
        "fact": "A can of normal coke sinks in water, but diet coke will actually float since its less dense!",
        "opinion": "I despise the taste of diet/zero calorie things... but i understand their use for others.",
        "percent": "15",
        "image": "../assets/dietdrink.png"
    },
    "Ceiling Fan": {
        "fact": "If they're installed correctly they should be on the ceiling!",
        "opinion": "I don't trust them not to kill me in cartoonish fashion, but they keep me cool...",
        "percent": "52",
        "image": "../assets/ceilingfan.png"
    },
    "Wet Socks": {
        "fact": "squelch...",
        "opinion": "yucky gross worse than dry socks",
        "percent": "0",
        "image": "../assets/wetsocks.png"
    },
    "Socks": {
        "fact": "The earliest known socks date back 1500 years!!",
        "opinion": "I hate socks. They make my feet feel weird and gross >:(",
        "percent": "10",
        "image": "../assets/socks.png"
    },
    "Nuts": {
        "fact": "Peanuts are not the same as tree nuts, they are legumes.",
        "opinion": "I am sad I cannot eat delicious lebanese treats due to the presence of nuts and my allergies :(",
        "percent": "40",
        "image": "../assets/nuts.png"
    },
    "Jazzy": {
        "fact": "This is my cat! She's a weird little beast!",
        "opinion": "Jazzy is one of my favourite things in the entire world :)",
        "percent": "100",
        "image": "../assets/jazzy.png"
    },
    "Bananas": {
        "fact": "Bananas are actually big herbs, not trees!",
        "opinion": "I HATE BANANAS!! There isn't any other food I am so repulsed by.",
        "percent": "0",
        "image": "../assets/banana.png"
    }
};

let selectedItems = [];
let percentNumber = 0;
let isRunning = false;

window.onload = function() {
    updateDisplay();
  };

var reaction = document.getElementById("reaction");
var inflate = document.getElementById("inflate");
var deflate = document.getElementById("deflate");
var next = document.getElementById("next");
var percent = document.getElementById("percent");
var prompt = document.getElementById("prompt");
var item = document.getElementById("name");
var fact = document.getElementById("fact");
var opinion = document.getElementById("opinion");
var image = document.getElementById("image");
var wrong = document.getElementById("wrong");
var wrongimage = document.getElementById("wrong-image");
var correct = document.getElementById("correct");
var correctimage = document.getElementById("correct-image");
var yippieSound = document.getElementById("yippieSound");
var wompSound = document.getElementById("wompSound");
var heartballoon = document.getElementById("heartballoon");
var cursor = document.getElementById("cursor");

wompSound.volume = 0.5;
wompSound.playbackRate= 1.5;
yippieSound.playbackRate= 1.5;

function typeText(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId); 
    element.innerHTML = ''; 
    function typeNextChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); 
            i++;
            setTimeout(typeNextChar, speed); 
        }
    }
    typeNextChar(); 
}

async function swapCursor()   {
    if (cursor.src.search(/flate.png/)!=-1){
        cursor.src = cursor.src.replace(".png", ".gif");
        setTimeout(function(){
            cursor.src = cursor.src.replace(".gif", ".png");
        }, 1040);
    } else if (next.style.display === "inline-block" && percent.style.display === "block"){
        cursor.src = "../assets/cursers/next.png"
    } else if (cursor.src.search(/next.png/)!=-1){
        cursor.src = "../assets/cursers/inflate.png"
    }
}

function HeartBalloonButton() {
    if (isRunning) {
        console.log("isRunning is true, returning");
        return;
    } else if (inflate.style.display === "inline-block") {
        inflateHeart();
    } else if (deflate.style.display === "inline-block") {
        deflateHeart();
    } else if (next.style.display === "inline-block" && percent.style.display === "none") {
        CheckAnswer(); // Not working yet
        KayleeReaction();
        displayResults();
    } else if (next.style.display === "inline-block" && percent.style.display === "block") {
        updateDisplay();
        ResetAnswersOnNext();
    }
    else {
        console.log("HeartBalloonButton error");
    }
}


function SwitchTools() {
    if (inflate.style.display === "inline-block") {
        cursor.src = "../assets/cursers/deflate.png";
        inflate.style.display = "none";
        deflate.style.display = "inline-block";
    } else if (deflate.style.display === "inline-block") {
        cursor.src = "../assets/cursers/check.png";
        deflate.style.display = "none";
        next.style.display = "inline-block";
    } else if (next.style.display === "inline-block" && percent.style.display === "none") {
        cursor.src = "../assets/cursers/inflate.png";
        document.body.style.cursor="default";
        next.style.display = "none";
        inflate.style.display = "inline-block";
    } else {
        console.log("Cannot switch tools until you move to the next question");
    }
}

function displayResults() { 
    InflateBalloonToAnswer();
    fact.style.display = "none";
    opinion.style.display = "block";
    percent.style.display = "block";
    disableButtons();
    AnimatePercentChange();
}

function InflateBalloonToAnswer() {
    var target = Math.round(percentNumber / 5);
    var regex = /heart-(\d+)\.png$/;
    var match = heartballoon.src.match(regex);
    var userHeartIndex = match ? parseInt(match[1], 10) : 1;
    var interval = setInterval(function() {
        if (userHeartIndex === target) {
            clearInterval(interval);
        }
        if (userHeartIndex > target) {
            deflateHeart();
            userHeartIndex--;
        } else if (userHeartIndex < target) {
            inflateHeart();
            userHeartIndex++;
        }
    }, 50);
}

function inflateHeart() {
    const regex = /heart-(\d+)\.png$/;
    const match = heartballoon.src.match(regex);
    var currentHeartIndex = match ? parseInt(match[1], 10) : 1;
    if (currentHeartIndex < 20) {
        currentHeartIndex++;
        heartballoon.src = `../assets/heart-balloon/heart-${currentHeartIndex}.png`;
    }
}

function deflateHeart() {
    const regex = /heart-(\d+)\.png$/;
    const match = heartballoon.src.match(regex);
    var currentHeartIndex = match ? parseInt(match[1], 10) : 1;
    if (currentHeartIndex > 1) {
        currentHeartIndex--;
        heartballoon.src = `../assets/heart-balloon/heart-${currentHeartIndex}.png`;
    }
}

function updateDisplay() {
    const keys = Object.keys(data);

    if (selectedItems.length === keys.length) {
        console.log("resetting list");
        selectedItems = [];
    }
    const availableKeys = keys.filter(key => !selectedItems.includes(key));
    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    const selectedItem = data[randomKey];
    selectedItems.push(randomKey);
    console.log("selected item:", randomKey, "selected items list:", selectedItems);
    item.innerText = randomKey;
    typeText(selectedItem.fact, "fact", 30);
    opinion.innerText = selectedItem.opinion;
    percent.innerText = selectedItem.percent + "%";
    image.src = selectedItem.image;
    percentNumber = selectedItem.percent;
}

function AnimatePercentChange() {
    var target = parseInt(percent.innerText, 10);
    var starting_percent = 0;
    var interval = setInterval(function() {
        if (starting_percent >= target) {
            clearInterval(interval);
            enableButtons();
        }
        percent.innerText = starting_percent + "%";
        starting_percent++;
    }, 15);
}

function CheckAnswer() {
    var regex = /heart-(\d+)\.png$/;
    var match = heartballoon.src.match(regex);
    var userHeartIndex = match ? parseInt(match[1], 10) : 1;
    var userPercent = userHeartIndex * 5;
    var correctPercent = parseInt(percentNumber, 10);
    var lowerBound = parseInt(correctPercent) - 10;
    var upperBound = parseInt(correctPercent) + 10;

    console.log(`Correct Percent: ${correctPercent}`);
    console.log(`User Percent: ${userPercent}`);
    console.log(`Lower Bound: ${lowerBound}`);
    console.log(`Upper Bound: ${upperBound}`);

    if (userPercent > lowerBound && userPercent < upperBound) {
        correct.style.display = "block";
        correctimage.style.display = "block";
        yippieSound.play(); 
        correct.addEventListener('animationend', () => {
            correct.style.display = 'none';
        });
    } else {
        wrong.style.display = "block";
        wrongimage.style.display = "block";
        wompSound.play();
        wrong.addEventListener('animationend', () => {
            wrong.style.display = 'none';
        });
    }
}

function ResetAnswersOnNext() {
    correct.style.display = "none";
    correct.style.opacity = 1;
    wrong.style.display = "none";
    wrong.style.opacity = 1;
    reaction.src = "../assets/kaylee/kaylee.png";
    percent.style.display = "none";
    fact.style.display = "block";
    opinion.style.display = "none";
    inflate.style.display = "inline-block";
    deflate.style.display = "none";
    next.style.display = "none";
    heartballoon.src = "../assets/heart-balloon/heart-1.png";
    inflationNumber = 0;
}

function KayleeReaction() {
    if (percentNumber >= 80) {
        reaction.src = "../assets/kaylee/lovekaylee.png";
    } else if (percentNumber <= 12) {
        reaction.src = "../assets/kaylee/angrykaylee.png";
    } else if (percentNumber >= 50) {
        reaction.src = "../assets/kaylee/contentkaylee.png";
    } else if (percentNumber < 50) {
        reaction.src = "../assets/kaylee/unsurekaylee.png";
    } else {
        reaction.src = "../assets/kaylee/kaylee.png";
    }
}

function disableButtons() {
    inflate.disabled = true;
    deflate.disabled = true;
    next.disabled = true;
    isRunning = true;
}

function enableButtons() {
    inflate.disabled = false;
    deflate.disabled = false;
    next.disabled = false;
    isRunning = false;
}

