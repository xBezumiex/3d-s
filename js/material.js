function openModal(title, descriptionKey) {
    const descriptions = {
        PlaDescription: `
            <h2>Катушка с пластиком PLA</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PLA</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Синий</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        

<h3>Габариты и вес</h3>
<p><strong>Вес товара:</strong> 800 г</p>
<button class="buy-now" onclick="addToCart('PLA', 'img/PLA.jpg')">Приобрести</button>

        `,
        Pla1Description: `
            <h2>Катушка с пластиком PLA</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PLA</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Бежевый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>

        <h3>Габариты и вес</h3>
        <p><strong>Вес товара:</strong> 800 г</p>
        <button class="buy-now" onclick="addToCart('PLA', 'img/PLA1.jpg')">Приобрести</button>
        `,
        Pla3Description: `
            <h2>Катушка с пластиком PLA</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PLA</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Коричневый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PLA', 'img/PLA3.jpeg')">Приобрести</button>
    `,

        Pla4Description: `<h2>Катушка с пластиком PLA</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PLA</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Черный</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PLA', 'img/PLA4.jpeg')">Приобрести</button>
`,

        Pla5Description: `
<h2>Катушка с пластиком PLA</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PLA</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Фиолетовый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PLA', 'img/PLA5.jpeg')">Приобрести</button>
`,

        ABSDescription: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Красный</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('ABS', 'img/ABS.png')">Приобрести</button>
`,

        ABS1Description: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Зеленый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('ABS', 'img/ABS7.jpeg')">Приобрести</button>

`,

        ABS10Description: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Зеленый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('ABS', 'img/ABS10.jpeg')">Приобрести</button>

`,
        ABS11Description: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong> Белый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('ABS', 'img/ABS11.jpeg')">Приобрести</button>

`,
        ABS8Description: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Фиолетовый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
       <button class="buy-now" onclick="addToCart('ABS', 'img/ABS8.jpeg')">Приобрести</button>

`,

        ABS9Description: `<h2>Катушка с пластиком ABS</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> ABS</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Золотой</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('ABS', 'img/ABS9.jpeg')">Приобрести</button>

`,
    PETGDescription:`<h2>Катушка с пластиком PETG</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PETG</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Голубой</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PETG', 'img/PETG.png')">Приобрести</button>

`,

PETG3Description:`<h2>Катушка с пластиком PETG</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PETG</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Розовый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PETG', 'img/PETG3.jpeg')">Приобрести</button>

`,
PETG4Description:`<h2>Катушка с пластиком PETG</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PETG</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Желтый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
       <button class="buy-now" onclick="addToCart('PETG', 'img/PETG4.jpeg')">Приобрести</button>

`,

PETG5Description:`<h2>Катушка с пластиком PETG</h2>
            <h3>Характеристики</h3>
        <ul>
            <li><strong>Тип:</strong> Пластик для 3D-принтера</li>
            <li><strong>Тип пластика для 3D-печати:</strong> PETG</li>
            <li><strong>Диаметр:</strong> 1.75 мм</li>
            <li><strong>Цвет:</strong>Зеленый</li>
            <li><strong>Технология 3D печати:</strong> FDM, FFF</li>
            <li><strong>Твердость по Шору:</strong> 1.24</li>
            <li><strong>Количество:</strong> 1 шт.</li>
            <li><strong>Страна-изготовитель:</strong> Россия</li>
        </ul>
        <button class="buy-now" onclick="addToCart('PETG', 'img/PETG5.jpeg')">Приобрести</button>

`,

    };
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerHTML = descriptions[descriptionKey];
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Закрытие модального окна при клике за его пределами
window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}






// Получаем элементы фильтров
const searchInput = document.getElementById('search-filter');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const minWeightInput = document.getElementById('min-height');
const maxWeightInput = document.getElementById('max-height');

// Получаем список всех материалов
const materials = document.querySelectorAll('.printer-item');

// Функция фильтрации
function applyAllFilters() {
    const searchQuery = searchInput.value.toLowerCase();
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    const minWeight = parseFloat(minWeightInput.value) || 0;
    const maxWeight = parseFloat(maxWeightInput.value) || Infinity;

    materials.forEach(material => {
        const title = material.querySelector('p').textContent.toLowerCase();
        const price = parseFloat(material.getAttribute('data-price')) || 0;
        const weight = parseFloat(material.getAttribute('data-weight')) || 0;

        // Проверяем все фильтры
        const matchesSearch = title.includes(searchQuery);
        const matchesPrice = price >= minPrice && price <= maxPrice;
        const matchesWeight = weight >= minWeight && weight <= maxWeight;

        // Показываем/скрываем материал
        if (matchesSearch && matchesPrice && matchesWeight) {
            material.style.display = 'block';
        } else {
            material.style.display = 'none';
        }
    });
}





function addToCart(product, imageSrc) {
    const prices = {
        'PLA': 2500,
        'PLA1': 2500,
        'PLA3': 2500,
        'PLA4': 2500,
        'PLA5': 2500,
        'ABS': 2800,
        'ABS1': 2800,
        'ABS8': 2800,
        'ABS9': 2800,
        'ABS10': 2800,
        'ABS11': 2800,
        'PETG': 3000,
        'PETG3': 3000,
        'PETG4': 3000,
        'PETG5': 3000
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        name: product,
        price: prices[product],
        image: imageSrc,
        descriptionKey: `${product}Description`
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Товар ${product} добавлен в корзину! Цена: ${prices[product]} руб.`);
}








document.getElementById('search-filter').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('.printer-item');

    items.forEach(item => {
        const title = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(filter)) {
            item.style.display = 'block'; // Показываем элемент
        } else {
            item.style.display = 'none'; // Скрываем элемент
        }
    });
});
