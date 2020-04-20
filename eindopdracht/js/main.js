// elements
const page = document.querySelector('.page');
const menu_toggle = document.querySelector('.menu_toggle');
const menu_items = document.querySelector('.menu_items');
let menu_item = document.querySelectorAll('.menu_item');
const content = document.querySelector('.content');
const vid = document.querySelector('#backgroundVideo');
const audio = document.querySelector('#audio');
const music_button = document.querySelector('.audio_button');
const page_content = document.querySelector('.content_block');

menu_toggle.onclick = async function(){
    if(document.querySelector('.menu') === null){
        content.classList.add('content_toggled');
        page.classList.add('menu');
        slideInMenuItems();
        if(vid !== null){
            vid.pause();
            audio.pause();
        }
        await new Promise(r => setTimeout(r, 800));
        menu_items.className = "menu_items";
    } else {
        await slideOutMenuItems();
        page.classList.remove('menu');
        if(vid !== null && vid.style.display === "block"){
            playVid();
        }
    }
};


document.body.onload = async function(){
    page.className += " fadeIn animated";
    await new Promise(r => setTimeout(r, 500));
    page.className = "page";
};


for(let i = 0; i < menu_item.length; i++) {
    let item = menu_item[i];
    item.onclick = async function() {
        const link = item.dataset.link;
        page.className += " fadeOut animated";
        await new Promise(r => setTimeout(r, 500));
        window.location = link;
    };
}

content.onclick = async function(){
    if(document.querySelector('.menu') !== null) {
        await slideOutMenuItems();
        page.classList.remove('menu');

        if(vid !== null && vid.style.display === "block"){
            await playVid();
        }
    }
};

if(music_button !== null){
    music_button.onclick = function(){
        playVid();
    };
}


async function playVid(){
    if(vid !== null){
        page_content.classList.add("hide");
        vid.style.display = "block";
        vid.play();
        audio.play();
    }
}

function slideInMenuItems(){
    menu_items.className += " slideInLeft animated";
    menu_items.style.display = "block";
}

async function slideOutMenuItems(){
    menu_items.className += " slideOutLeft animated";
    await new Promise(r => setTimeout(r, 200));
    menu_items.className = "menu_items";
}