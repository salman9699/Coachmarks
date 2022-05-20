var coachmark = document.querySelector(".coachmark");
var coachmarkSelector = document.querySelector(".coachmark__selector");
var coachmarkTitle = document.querySelector(".coachmark__header h5");
var coachmarkText = document.querySelector(".coachmark__text p");
var backBtn = document.querySelector(".back-btn");
var nextBtn = document.querySelector(".next-btn");

var itemIndex = 0;
var items = [
    {
        element: "#vk",
        title: "Virat Kohli",
        text: "Virat kohli is an Indian international cricketer and former captain of the India national cricket team"
    },
    {
        element: "#cr7",
        title: "Cristiano Ronaldo",
        text: "Cristiano Ronaldo is a Portuguese professional footballer, Often considered the best player in the world and widely regarded as one of the greatest players of all time."
    },
    {
        element: "#usain",
        title: "Usain Bolt",
        text: "Usain Bolt is a retired Jamaican sprinter, widely considered to be the greatest sprinter of all time."
    },
    {
        element: "#khabib",
        title: "Khabib Nurmagomedov",
        text: "Khabib Nurmagomedov is a Russian former professional mixed martial artist."
    },
    {
        element: ".my-text",
        title: "This is paragraph lorem",
        text: "This is text Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
   
]


function showCoachMark() {
    selectorPosition(itemIndex);
    coachmark.classList.add('show');
}

function hideCoachMark() {
    coachmark.classList.remove('show');
    coachmarkSelector.style.top = "0px";
    coachmarkSelector.style.left = "0px";
    coachmarkSelector.style.height = "0px";
    coachmarkSelector.style.width = "0px";
    itemIndex = 0;
}

function selectorPosition(index) {
    if(index > 0){
        backBtn.style.display = "block";
    }else{
        backBtn.style.display = "none";
    }
    if(index == (items.length - 1)){
        nextBtn.style.display = "none";
    }else{
        nextBtn.style.display = "block";
    }
    
    var item = items[index];
    var element = document.querySelector(item.element);
    var elementDimensions = element.getBoundingClientRect();
    coachmarkSelector.style.top = elementDimensions.top + "px";
    coachmarkSelector.style.left = elementDimensions.left + "px";
    coachmarkSelector.style.height = elementDimensions.height + "px";
    coachmarkSelector.style.width = elementDimensions.width + "px";

    coachmarkTitle.innerHTML = item.title;
    coachmarkText.innerHTML = item.text;

}

function step(type) {
    
    if (type == 'next') {
        itemIndex = itemIndex + 1;
        selectorPosition(itemIndex);
    } else if (type == 'back') {
        itemIndex = itemIndex - 1;
        selectorPosition(itemIndex);
    }
}