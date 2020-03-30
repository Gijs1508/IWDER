// elements
const next_button = document.querySelector(".next");
const previous_button = document.querySelector(".previous");
let displayed_item = 1;
let first_element = document.getElementById(displayed_item.toString());

window.onload = function(){
    first_element.style.display = "block";
};

next_button.onclick = function(){
    changeView(1);
};

previous_button.onclick = function () {
    changeView(-1);
};

function changeView(index) {
    const old_element = document.getElementById(displayed_item.toString());
    let new_element = document.getElementById((displayed_item + index).toString());
    if(displayed_item === 1 && index === -1){
        new_element = document.getElementById('3');
        displayed_item = 3;

    } else if(displayed_item === 3 && index === 1){
        new_element = document.getElementById('1');
        displayed_item = 1;
    } else {
        displayed_item += index;
    }

    showNewPage(old_element, new_element, index);
}

async function showNewPage(old_element, new_element, index) {

    if(index === 1){
        new_element.className += (" slideInRight animated");
    } else if(index === -1){
        new_element.className += (" slideInLeft animated");
    }
    new_element.style.display = "block";
    old_element.style.display = "none";

    await new Promise(r => setTimeout(r, 1000));
    new_element.className = ("section");
}