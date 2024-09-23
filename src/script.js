const data = {
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
var like = document.getElementById("like");
var dislike = document.getElementById("dislike");
var next = document.getElementById("next");
var percent = document.getElementById("percent");
var prompt = document.getElementById("prompt");
var item = document.getElementById("name");
var fact = document.getElementById("fact");
var opinion = document.getElementById("opinion");
var image = document.getElementById("image");

function ToggleButtons() {
    if (next.style.display === "none") {
        disableButtons();
        like.style.display = "none";
        dislike.style.display = "none";
        prompt.style.display = "none";
        fact.style.display = "none";
        next.style.display = "block";
        percent.style.display = "block";
        opinion.style.display = "block";
        AnimatePercentChange();
    } else {
        like.style.display = "block";
        dislike.style.display = "block";
        prompt.style.display = "block";
        fact.style.display = "block";
        next.style.display = "none";
        percent.style.display = "none";
        opinion.style.display = "none";
        updateDisplay();
    }
}

function disableButtons() {
    like.disabled = true;
    dislike.disabled = true;
    prompt.disabled = true;
    next.disabled = true;
}

function enableButtons() {
    like.disabled = false;
    dislike.disabled = false;
    prompt.disabled = false;
    next.disabled = false;
}

window.onload = function() {
    updateDisplay();
  };

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
    fact.innerText = selectedItem.fact; 
    opinion.innerText = selectedItem.opinion;
    percent.innerText = selectedItem.percent + "%";
    image.src = selectedItem.image;
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
