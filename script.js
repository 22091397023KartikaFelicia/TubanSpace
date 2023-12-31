// save file js dengan nama script

// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {

// Add an event listener that runs a function when the "click" event is triggered
star.addEventListener("click", () => {

// Loop through the "stars" NodeList Again
stars.forEach((star, index2) => {

// Add the "active" class to the clicked star and any stars with a lower index
// and remove the "active" class from any stars with a higher index
index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
});
});
});

// Search Button
const button = document.querySelector(".button");

    button.addEventListener("mousedown", () => button.classList.add("Clicked"));
    button.addEventListener("mouseup", () => button.classList.remove("Clicked"));

// CheckBox
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    })
})
