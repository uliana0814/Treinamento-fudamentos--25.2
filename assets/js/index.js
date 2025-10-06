const cart_count_element = document.getElementById('cart-count');
const add_buttons = document.querySelectorAll('.add');
const remove_buttons = document.querySelectorAll('.remove');

let cart_item_count = 0;

function update_cart_count() {
    cart_count_element.textContent = cart_item_count;
}

function add_to_cart() {
    cart_item_count++;
    update_cart_count(); 
}

function remove_from_cart() {
    if (cart_item_count > 0) {
        cart_item_count--; 
        update_cart_count(); 
    }
}

add_buttons.forEach(button => {
        button.addEventListener('click', add_to_cart);
});

remove_buttons.forEach(button => {
    button.addEventListener('click', remove_from_cart);
});