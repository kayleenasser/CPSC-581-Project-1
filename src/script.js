let items = [];  
let currentIndex = 0;  
let isFactDisplayed = true;  

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        items = data;
        displayCurrentItem();  
    })
    .catch(error => console.error('Error loading items:', error));

function displayCurrentItem() {
    if (currentIndex < items.length) {
        const item = items[currentIndex];
        document.getElementById("item-name").innerText = item.name;
        document.getElementById("item-fact").innerText = item.fact; 
        document.getElementById("item-image").src = item.image;
        document.getElementById("precent").innerText = item.percent + "%";

        isFactDisplayed = true;  
    } else {
        alert("No more items!");
    }
}

function ToggleButtons() {
    const like = document.getElementById("like");
    const dislike = document.getElementById("dislike");
    const next = document.getElementById("next");
    const precent = document.getElementById("precent");
    const prompt = document.getElementById("prompt");

    if (next.style.display === "none") {
        like.style.display = "none";
        dislike.style.display = "none";
        prompt.style.display = "none";
        next.style.display = "block";
        precent.style.display = "block";
        AnimatePrecentChange();
    } else {
        like.style.display = "block";
        dislike.style.display = "block";
        prompt.style.display = "block";
        next.style.display = "none";
        precent.style.display = "none";
        
        currentIndex++;
        displayCurrentItem();
    }
}

function AnimatePrecentChange() {
    var precent = document.getElementById("precent");
    var target = precent.innerHTML;
    target = target.replace(/[^a-zA-Z0-9 ]/g, ""); // Remove % if exists for next reset
    var starting_precent = 0;
    var interval = setInterval(function() {
        if (starting_precent >= target)
            clearInterval(interval);				
        precent.innerHTML = starting_precent + "%";
        starting_precent++;
    }, 15);
}

function showOpinion() {
    if (isFactDisplayed) {
        const item = items[currentIndex];
        document.getElementById("item-fact").innerText = item.opinion; 
        isFactDisplayed = false;  
    }

    ToggleButtons();
}

document.getElementById("next").addEventListener('click', function() {
    if (currentIndex < items.length - 1) {
        ToggleButtons();  
    } else {
        alert("No more items!");  
    }
});

document.getElementById("like").addEventListener('click', showOpinion);
document.getElementById("dislike").addEventListener('click', showOpinion);
