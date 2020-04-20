const success_message = document.querySelector('.success_message');
const success_close_button = document.querySelector('.success_close');
const contact_button = document.querySelector('.contact_button');
const form = document.querySelector('#cf');


form.onsubmit = async function(){
    event.preventDefault();
    let name = form.elements["name"].value;
    await createSuccessMessage(name);
};

async function createSuccessMessage(name) {
    success_message.className += " fadeIn animated";
    success_message.style.display = "block";
    const message_text = document.querySelector('.success_content_text');
    message_text.innerHTML = "Dear " + name + ", your message has been received!";
    await new Promise(r => setTimeout(r, 5000));
    await removeItem(success_message);
    success_message.className = "success_message";
}

success_close_button.onclick = async function(){
    await removeItem(success_message);
    success_message.className = "success_message";
};

async function removeItem(success_message){
    success_message.className += " fadeOut animated";
    await new Promise(r => setTimeout(r, 500));
}
