function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }

    let totalCost = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                     onclick="openModal('${item.name}', '${item.descriptionKey}')">
                <div class="cart-item-details">
                    <p><strong>Название:</strong> ${item.name}</p>
                    <p><strong>Цена:</strong> ${item.price} руб.</p>
                    <button onclick="removeFromCart(${index})">Удалить</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
        totalCost += item.price;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `
        <p><strong>Итого:</strong> ${totalCost} руб.</p>
        <button onclick="proceedToCheckout()" class="checkout-button">Перейти к оплате</button>
    `;
    cartItemsContainer.appendChild(totalElement);
}

function proceedToCheckout() {
    // Здесь будет логика для перехода к оплате
    alert('Переход к оплате...');
    // Можно добавить перенаправление на страницу оплаты
    // window.location.href = 'checkout.html';
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Удаляем выбранный товар
    localStorage.setItem('cart', JSON.stringify(cart)); // Обновляем `localStorage`
    displayCartItems(); // Обновляем отображение корзины
}

// Функция перехода к оплате
function proceedToCheckout() {
    alert('Переход к оплате...');
    // Здесь можно добавить действия для обработки оплаты
}

// Загружаем товары в корзине при загрузке страницы
displayCartItems();

function openModal(title, descriptionKey) {
    // Код открытия модального окна (такой же, как в других файлах)
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

