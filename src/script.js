function ToggleButtons() {
    var like = document.getElementById("like");
    var dislike = document.getElementById("dislike");
    var next = document.getElementById("next");
    var precent = document.getElementById("precent");
    var prompt = document.getElementById("prompt");
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
        ShowNextImage();
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

let items = [];
let currentIndex = 0;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        items = data;
        displayCurrentItem();
    })
    .catch(error => console.error('Error loading items:', error));

function displayCurrentItem(){
    if (currentIndex < items.length) {
        const item = items[currentIndex];
        print(item);
        document.getElementById("item-name").innerText = item.name;
        //document.getElementById("item-fact").innerText = item.fact;
        //document.getElementById("item-opinion").innerText = item.opinion;
        document.getElementById("item-image").src = "../assets/socks.png";
    }
}

function ShowNextImage(){
    currentIndex++;
    if (currentIndex < items.length) {
        displayCurrentItem();
        document.getElementById("next").style.display = "none"; 
        document.getElementById("precent").style.display = "none";
        ToggleButtons(); 
    } else {
        alert("No more items!");
    }
}
