
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getProductName(id) {
    const mapping = productKeys[id];
    if (!mapping) return id;
    return translations[currentLang][mapping.section][mapping.key];
}

function addToCart(id, price, quantity, img, unit) {
    const cart = getCart();
    const finalPrice = getDiscountedPrice(id, Number(price));
    const originalPrice = Number(price);

    const existing = cart.find(item =>
        item.id === id && item.quantity === Number(quantity)
    );

    if (existing) {
        existing.sets += 1;
    } else {
        cart.push({
            id,
            price: finalPrice,
            originalPrice: originalPrice,
            quantity: Number(quantity),
            sets: 1,
            img,
            unit
        });
    }

    saveCart(cart);
    updateCartCounter();
    showAddedModal(id, img, originalPrice, Number(quantity), unit);
}

function changeSets(id, quantity, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === id && i.quantity === quantity);

    if (item) {
        item.sets += delta;
        if (item.sets <= 0) {
            removeFromCart(id, quantity);
            return;
        }
    }

    saveCart(cart);
    renderCart();
}

function removeFromCart(id, quantity) {
    let cart = getCart();
    cart = cart.filter(item =>
        !(item.id === id && item.quantity === quantity)
    );
    saveCart(cart);
    renderCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    renderCart();
    updateCartCounter();
}

function renderCart() {
    const cart = getCart();
    const emptyCart = document.getElementById('cartEmpty');
    const filledCart = document.getElementById('cartFull');

    if (!emptyCart || !filledCart) return;

    if (!cart || cart.length === 0) {
        emptyCart.style.display = 'block';
        filledCart.style.display = 'none';
        updateCartCounter();
        return;
    }

    emptyCart.style.display = 'none';
    filledCart.style.display = 'grid';

    const cartItems = document.getElementById('cart-item');
    cartItems.innerHTML = cart.map(item => {
        const hasDiscount = item.originalPrice && item.originalPrice !== item.price;
        return `
        <div class="cart-item" data-id="${item.id}">
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}', ${item.quantity})">✕</button>

            <img src="${item.img}" alt="${getProductName(item.id)}" class="cart-item-img">
            
            <div class="cart-item-info">
                <div class="cart-item-text">
                    <h4>${getProductName(item.id)}</h4>
                    <p>
                        ${item.quantity} ${getUnit(item.unit, item.quantity)} — 
                        ${hasDiscount ? `<s>${item.originalPrice}₴</s> <b>${item.price}₴</b>` : `${item.price}₴`}
                    </p>
                </div>

                <div class="cart-item-quantity">
                    <button id="cart-add-quantity" onclick="changeSets('${item.id}', ${item.quantity}, -1)"><p>−</p></button>
                    <span>${item.sets}</span>
                    <button id="cart-remove-quantity" onclick="changeSets('${item.id}', ${item.quantity}, +1)"><p>+</p></button>
                </div>
                
                <p class="cart-item-subtotal">
                    ${translations[currentLang].cart.total}: 
                    ${hasDiscount ? `<s>${item.originalPrice * item.sets}₴</s> <b>${item.price * item.sets}₴</b>` : `${item.price * item.sets}₴`}
                </p>
            </div>
        </div>
    `}).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.sets), 0);
    document.getElementById('totalSum').textContent = `${total}₴`;

    updateCartCounter();
}

document.querySelector('#cartForm').addEventListener('submit', function(e) {
    const cart = getCart();
    
    const orderText = cart.map(item => {
        const unitLabel = getUnit(item.unit || 'pcs', item.quantity);
        return `${getProductName(item.id)} ${item.quantity} ${unitLabel} — ${item.price}₴`;
    }).join(', ');

    const total = cart.reduce((sum, item) => sum + (item.price * item.sets), 0);

    document.getElementById('orderItemsHidden').value = orderText || 'Корзина пуста';
    document.getElementById('totalPriceHidden').value = `${total}₴`;
});


const clearCartBtn = document.getElementById('clearCartBtn');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', function() {
        const message =
            currentLang === 'ua' ? 'Очистити кошик?' :
            currentLang === 'ru' ? 'Очистить корзину?' :
            'Clear cart?';

        if (confirm(message)) {
            clearCart();
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
    if (document.getElementById('cartEmpty')) {
        renderCart();
    }
});


window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartCounter();
        if (document.getElementById('cartEmpty')) {
            renderCart();
        }
    }
});
