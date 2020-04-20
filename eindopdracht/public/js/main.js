// elements
const page = document.querySelector('.page');
const menu_toggle = document.querySelector('.menu_toggle');
const menu_items = document.querySelector('.menu_items');
const content = document.querySelector('.content');
const vid = document.querySelector('#backgroundVideo');
const audio = document.querySelector('#audio');
const music_button = document.querySelector('.audio_button');
const page_content = document.querySelector('.content_block');

menu_toggle.onclick = function(){
    if(document.querySelector('.menu') === null){
        content.classList.add('content_toggled');
        page.classList.add('menu');
        menu_items.style.display = "block";
        if(vid !== null){
            vid.pause();
            audio.pause();
        }
    } else {
        page.classList.remove('menu');
        menu_items.style.display = "none";
        if(vid !== null && vid.style.display === "block"){
            playVid();
        }
    }
};

content.onclick = function(){
    if(document.querySelector('.menu') !== null) {
        page.classList.remove('menu');
        menu_items.style.display = "none";
        if(vid.style.display === "block"){
            playVid();
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