const modal = document.querySelector('.product_modal');
const content_items = document.querySelector('.content_items');
const product_button = document.querySelectorAll('.product_button');
const close_button = document.querySelector('.close_button');
const form = document.querySelector('.modal_form');
const success_message = document.querySelector('.success_message');
const success_close_button = document.querySelector('.success_close');
const modal_img = document.querySelector('.modal_img');
const modal_heading = document.querySelector('.modal_heading');
const modal_content = document.querySelector('.modal_content');
const modal_price = document.querySelector('.modal_price');

for(let i = 0; i < product_button.length; i++){
    let product = product_button[i];
    product.onclick = function(){
        const name = product.dataset.name;
        const desc = product.dataset.desc;
        const price = product.dataset.price;
        const img = product.dataset.img;
        createModal(name, desc, price, img);
    };
}

close_button.onclick = async function(){
    await removeItem(modal);
    modal.className = "product_modal";
};

async function createModal(name, desc, price, img) {
    modal.className += " fadeIn animated";
    modal.style.display = "flex";
    content_items.style.overflow = "hidden";

    modal_img.src = "media/shop/" + img;
    modal_heading.innerHTML = name;
    modal_content.innerHTML = desc;
    modal_price.innerHTML = price;
    await new Promise(r => setTimeout(r, 500));
    modal.className = "product_modal";
}

async function removeItem(item){
    item.className += " fadeOut animated";
    item.style.overflow = "auto";
    await new Promise(r => setTimeout(r, 500));
    item.style.display = "none";
    content_items.style.overflow = "auto";
}

form.onsubmit = async function(){
    event.preventDefault();
    await removeItem(modal);
    modal.className = "product_modal";
    let name = form.elements["name"].value;
    let productName = modal_heading.innerHTML;
    createSuccessMessage(name, productName);
};

async function createSuccessMessage(name, productName) {
    success_message.className += " fadeIn animated";
    success_message.style.display = "block";
    const message_text = document.querySelector('.success_content_text');
    message_text.innerHTML = "Dear " + name + ", your order has been received! You ordered a " + productName + ".";
    await new Promise(r => setTimeout(r, 5000));
    await removeItem(success_message);
    success_message.className = "success_message";
}

success_close_button.onclick = async function(){
    await removeItem(success_message);
    success_message.className = "success_message";
};