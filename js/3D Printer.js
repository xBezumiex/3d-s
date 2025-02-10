function openModal(title, descriptionKey) {
    const descriptions = {
        tevoDescription: `
            <p><strong>Бренд:</strong> TEVO</p>
            <p><strong>Страна производитель:</strong> Китай</p>
            <p>Если вы ищете надежный и производительный 3D принтер, TEVO — это именно то, что вам нужно! Этот модульный принтер с открытым корпусом подходит как для новичков, так и для опытных пользователей, предоставляя массу возможностей для творчества.</p>
            <ul>
                <li><strong>Материал печати:</strong> PLA, ABS, PETG</li>
                <li><strong>Технология печати:</strong> FDM / FFF</li>
                <li><strong>Диаметр нити:</strong> 1.75 мм</li>
                <li><strong>Температура экструдера:</strong> До 260 °C</li>
                <li><strong>Температура стола:</strong> До 110 °C</li>
                <li><strong>Область печати:</strong> 300х300х400 мм</li>
                <li><strong>Скорость печати:</strong> До 150 мм/с</li>
                <li><strong>Толщина слоя:</strong> 50 мкм</li>
                <li><strong>Подогреваемый стол:</strong> Да</li>
            </ul>
            <p>Совместимость с ОС: Windows, Linux. Интерфейсы: USB, SD Card.</p>
            <p><strong>Габариты:</strong> 500х600х620 мм. <strong>Вес:</strong> 13 кг.</p>
            <button class="buy-now" onclick="addToCart('TEVO', 'img/74777254e9d8e6b34f07515d90199f04-removebg-preview.png.')">Приобрести</button>
        `,
        artilleryDescription: `
            <p><strong>Бренд:</strong> Artillery</p>
            <p><strong>Страна производитель:</strong> Китай</p>
            <p>Artillery Sidewinder X1 - это принтер нового поколения, который идеально подходит для создания больших и сложных моделей. С ним вы получите высокое качество печати и отличную стабильность.</p>
            <ul>
                <li><strong>Материал печати:</strong> PLA, ABS, PETG</li>
                <li><strong>Технология печати:</strong> FDM / FFF</li>
                <li><strong>Диаметр нити:</strong> 1.75 мм</li>
                <li><strong>Температура экструдера:</strong> До 260 °C</li>
                <li><strong>Температура стола:</strong> До 110 °C</li>
                <li><strong>Область печати:</strong> 300х300х400 мм</li>
                <li><strong>Скорость печати:</strong> До 150 мм/с</li>
                <li><strong>Толщина слоя:</strong> 50 мкм</li>
                <li><strong>Подогреваемый стол:</strong> Да</li>
            </ul>
            <p>Совместимость с ОС: Windows, Linux. Интерфейсы: USB, SD Card.</p>
            <p><strong>Габариты:</strong> 520х470х620 мм. <strong>Вес:</strong> 16 кг.</p>
            <button class="buy-now" onclick="addToCart('Artillery', 'img/photo_2024-10-29_23-18-36-removebg-preview.png')">Приобрести</button>
        `,
        Crealityk1Description: `
            <p><strong>Бренд:</strong> Creality</p>
            <p><strong>Страна производитель:</strong> Китай</p>
            <p>Creality K1 - это высокоскоростной 3D-принтер, обеспечивающий точность и стабильность благодаря передовым технологиям. Принтер имеет множество полезных функций, таких как закрытая камера печати и возможность возобновления прерванной печати.</p>
        <ul>
          <li><strong>Материал печати:</strong> ABS, PLA, TPU, PETG, PET, PA, ASA</li>
        <li><strong>Технология печати:</strong> FDM / FFF</li>
    <li><strong>Диаметр нити:</strong> 1.75 мм</li>
    <li><strong>Температура экструдера:</strong> До 300 °C</li>
    <li><strong>Температура стола:</strong> До 100 °C</li>
    <li><strong>Область печати:</strong> 250x220x220 мм</li>
    <li><strong>Скорость печати:</strong> До 600 мм/с</li>
    <li><strong>Толщина слоя:</strong> От 100 мкм</li>
    <li><strong>Подогреваемый стол:</strong> Да</li>
    <li><strong>Количество экструдеров:</strong> 1, тип - Direct</li>
    <li><strong>Дополнительные функции:</strong> закрытая камера печати, возобновление прерванной печати, датчик филамента</li>
</ul>
<p>Принтер поддерживает передачу данных через USB и Wi-Fi. Совместимые программы: Creality Print, Cura, Simplify3D, PrusaSlicer.</p>
<p><strong>Габариты:</strong> 355x355x480 мм. <strong>Вес:</strong> 12.5 кг.</p>
<p>Creality K1 оснащен 4.3" сенсорным экраном и имеет мощность 350 Вт.</p>
<button class="buy-now" onclick="addToCart('Creality', 'img/98572-removebg-preview.png')">Приобрести</button>
    `,

    Raise3DDescription:`<p><strong>Бренд:</strong> Raise3D</p>
<p><strong>Страна производитель:</strong> Китай</p>
<p>Raise3D - это мощный 3D-принтер, идеально подходящий для профессионального использования. Он поддерживает широкий спектр печатных материалов и обеспечивает высокую точность печати, что делает его отличным выбором для сложных проектов.</p>
<ul>
    <li><strong>Технология печати:</strong> FDM</li>
    <li><strong>Материал печати:</strong> Пластик</li>
    <li><strong>Поддерживаемые материалы:</strong> ABS, BF Bronze, Carbon, FLEX, HIPS, Nylon, PC, PETG, PLA, PP, PVA, TPE, TPU, Wood</li>
    <li><strong>Поле печати:</strong> 300х300х300 мм</li>
    <li><strong>Воздушный фильтр:</strong> HEPA-фильтр - Да</li>
    <li><strong>Количество печатных головок:</strong> 2</li>
    <li><strong>Толщина слоя:</strong> 10-250 мкм</li>
    <li><strong>Точность позиционирования по оси XY:</strong> 0.78125 мкм</li>
    <li><strong>Точность позиционирования по оси Z:</strong> 0.078125 мкм</li>
    <li><strong>Диаметр сопла:</strong> 0.4 мм (дополнительно: 0.2/0.6/0.8/1.0 мм)</li>
    <li><strong>Диаметр нити:</strong> 1.75 мм</li>
    <li><strong>Скорость печати:</strong> 30-150 мм/с</li>
    <li><strong>Температура экструдера:</strong> до 300 °C</li>
    <li><strong>Печатный стол:</strong> гибкий, стальной</li>
    <li><strong>Температура платформы:</strong> до 120 °C</li>
    <li><strong>Интерфейс подключения:</strong> LAN, USB, Wi-Fi</li>
    <li><strong>Программное обеспечение:</strong> IdeaMaker</li>
    <li><strong>Операционная система:</strong> Linux, Mac OS, Windows</li>
    <li><strong>Поддерживаемые форматы файлов:</strong> STL, OBJ, 3MF, OLTP</li>
    <li><strong>Автокалибровка:</strong> Да</li>
    <li><strong>Видеокамера (встроенная):</strong> Да</li>
    <li><strong>Дисплей:</strong> 7-дюймовый сенсорный экран (1024х600)</li>
    <li><strong>Память:</strong> 1 Гб, встроенная флеш-память 8 Гб</li>
    <li><strong>Устройство позиционного управления:</strong> Atmel ARM Cortex-M4 120 МГц FPU</li>
    <li><strong>Контроллер:</strong> NXP ARM Cortex-A9 Quad 1 ГГц</li>
    <li><strong>Шум при работе:</strong> < 55 дБ</li>
    <li><strong>Материал корпуса:</strong> Алюминий</li>
    <li><strong>Электропитание:</strong> 100-240 V AC, 50/60 Hz 230 V @ 3.3 A</li>
    <li><strong>Размеры (без упаковки):</strong> 620х626х760 мм</li>
    <li><strong>Вес (без упаковки):</strong> 52,5 кг</li>
    <button class="buy-now" onclick="addToCart('Raise3D', 'img/image-removebg-preview (1).png')">Приобрести</button>
</ul>
`,

BIQUDescription:`<p><strong>Бренд:</strong> BIQU</p>
<p><strong>Тип устройства:</strong> 3D принтер</p>
<p>BIQU - это компактный и надежный настольный 3D-принтер с технологией FDM, подходящий для работы с различными материалами. Принтер обладает высокой точностью и стабильностью, что делает его идеальным выбором для профессионалов и энтузиастов.</p>
<ul>
    <li><strong>Технология печати:</strong> FDM</li>
    <li><strong>Количество экструдеров:</strong> 1</li>
    <li><strong>Рабочие материалы:</strong> ABS, PET-G, PLA, TPU</li>
    <li><strong>Скорость построения:</strong> до 100 мм/с</li>
    <li><strong>Рабочее пространство:</strong> 250x250x250 мм</li>
    <li><strong>Размещение:</strong> Настольное</li>
    <li><strong>Интерфейсы:</strong> USB 2.0</li>
    <li><strong>Сенсорный дисплей:</strong> Да</li>
    <li><strong>Цвет корпуса:</strong> Черный</li>
    <li><strong>Материал корпуса:</strong> Металл</li>
    <li><strong>Программные требования:</strong> Поддержка Windows</li>
    <li><strong>Поддерживаемые форматы файлов:</strong> AMF, OBJ, STL</li>
    <li><strong>Габариты (ШхВхГ):</strong> 25x25x25 см</li>
    <button class="buy-now" onclick="addToCart('BIQU', 'img/image-removebg-preview (2).png')">Приобрести</button>
</ul>
`,

ANYCUBICI3MegaDescription:`<p><strong>Бренд:</strong> ANYCUBIC</p>
<p>3D-принтер ANYCUBIC I3 Mega - надежный и простой в использовании принтер с технологией FDM, который обеспечивает высокую точность и стабильность. Подходит как для домашних пользователей, так и для профессионалов.</p>
<ul>
    <li><strong>Зона печати:</strong> 210x210x205 мм</li>
    <li><strong>Скорость печати:</strong> до 120 мм/с</li>
    <li><strong>Тип экструдера:</strong> Bowden</li>
    <li><strong>Диаметр нити:</strong> 1,75 мм</li>
    <li><strong>Точность по осям:</strong> X/Y: 0,0125 мм; Z: 0,002 мм</li>
    <li><strong>Толщина слоя:</strong> 0,05 - 0,3 мм</li>
    <li><strong>Количество печатных головок:</strong> 1</li>
    <li><strong>Диаметр сопла:</strong> 0,4 мм</li>
    <li><strong>Технология печати:</strong> FDM</li>
    <li><strong>Датчик филамента:</strong> Есть</li>
    <li><strong>Возобновление печати после аварийного отключения:</strong> Есть</li>
    <li><strong>Калибровка печатной головки:</strong> Ручная</li>
    <li><strong>Управление:</strong> Сенсорный LCD-дисплей</li>
    <li><strong>Подогреваемая платформа:</strong> Да</li>
    <li><strong>Ось Z - количество двигателей и винтов:</strong> 2</li>
    <li><strong>Тип механики:</strong> Cartesian XZ-head / Y-platform</li>
    <li><strong>Каркас:</strong> Металлический</li>
    <li><strong>Интерфейсы:</strong> Card Reader, USB</li>
    <li><strong>Тип поддерживаемого пластика:</strong> ABS, PLA, HIPS, Woodfill, PVA</li>
    <li><strong>Программное обеспечение:</strong> Cura, Repetier-Host</li>
    <li><strong>Операционная система:</strong> Windows XP, Win 7, Win 8, Win 10, Linux, Mac OS</li>
    <li><strong>Доступные языки интерфейса:</strong> Английский, Китайский</li>
    <li><strong>Габариты:</strong> 405x410x453 мм</li>
    <li><strong>Вес:</strong> 11 кг</li>
    <button class="buy-now" onclick="addToCart('ANYCUBIC', 'img/image-removebg-preview (3).png')">Приобрести</button>
</ul>
`,

BIQU5Description:`<p><strong>Бренд:</strong> BIQU5</p>
<p>3D-принтер BIQU - удобное настольное устройство с технологией FDM, которое позволяет создавать модели с использованием ABS и PLA материалов. Принтер оснащен современными интерфейсами и подходит для домашних и профессиональных задач.</p>
<ul>
    <li><strong>Тип устройства:</strong> 3D-принтер</li>
    <li><strong>Тип печати:</strong> 3D</li>
    <li><strong>Технология печати:</strong> FDM</li>
    <li><strong>Количество экструдеров:</strong> 1</li>
    <li><strong>Диаметр сопла:</strong> 0,4 мм</li>
    <li><strong>Рабочий материал:</strong> ABS, PLA</li>
    <li><strong>Толщина слоя:</strong> от 0,1 до 0,3 мм</li>
    <li><strong>Скорость печати:</strong> до 100 мм/с</li>
    <li><strong>Рабочее пространство:</strong> 220x225x260 мм</li>
    <li><strong>Размещение:</strong> Настольное</li>
    <li><strong>Интерфейсы:</strong> USB 2.0, Wi-Fi</li>
    <li><strong>Поддержка Wi-Fi:</strong> Да</li>
</ul>
<p>BIQU обеспечивает простоту в использовании и высокое качество печати, идеально подходя для разнообразных задач в сфере 3D моделирования.</p>
<button class="buy-now" onclick="addToCart('BIQU5', 'img/image-removebg-preview (4).png')">Приобрести</button>
`,

PhrozenSonicMighty12KDescription:`<p><strong>Технология печати:</strong> LCD</p>
<p>3D-принтер с технологией LCD обеспечивает высокую точность и скорость печати, идеально подходя для создания детализированных моделей из фотополимеров. Принтер оснащен удобным управлением и современными интерфейсами для подключения.</p>
<ul>
    <li><strong>Размер области построения:</strong> 218×123×235 мм</li>
    <li><strong>Длина УФ-волны:</strong> 405 нм</li>
    <li><strong>Толщина слоя:</strong> 0,01–0,30 мм</li>
    <li><strong>Скорость печати:</strong> до 400 мм/час</li>
    <li><strong>Точность по оси XY:</strong> 19×24 мкм</li>
    <li><strong>Источник света:</strong> LED-модуль линейной проекции</li>
    <li><strong>Тип материала:</strong> Фотополимеры</li>
    <li><strong>Энергопотребление:</strong> 24 В постоянного тока; 5A макс.</li>
    <li><strong>Дисплей:</strong> 10,1-дюймовый монохромный ЖК-дисплей 12K</li>
    <li><strong>Управление:</strong> 5-дюймовый сенсорный экран</li>
    <li><strong>Подключение:</strong> Ethernet, USB, Wi-Fi</li>
    <li><strong>Размеры:</strong> 337×337×516 мм</li>
    <li><strong>Вес:</strong> 14,3 кг</li>
    <li><strong>Программное обеспечение:</strong> CHITUBOX 1.9 и более поздние версии</li>
    <li><strong>Поддерживаемые форматы файлов:</strong> .CTB, .PRZ</li>
</ul>
<p>Этот принтер идеально подходит для профессионалов и любителей, которые ценят точность и качество печати.</p>
<button class="buy-now" onclick="addToCart('Phrozen Sonic Mighty 12K', 'img/image-removebg-preview (5).png')">Приобрести</button>
`

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






function applyAllFilters() {
    const searchFilter = document.getElementById("search-filter").value.toLowerCase();
    const minPrice = parseInt(document.getElementById("min-price").value) || 0;
    const maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;
    const minHeight = parseInt(document.getElementById("min-height").value) || 0;
    const maxHeight = parseInt(document.getElementById("max-height").value) || Infinity;

    const printers = document.querySelectorAll(".printer-item");

    printers.forEach(printer => {
        const name = printer.getAttribute("data-name").toLowerCase();
        const price = parseInt(printer.getAttribute("data-price"));
        const height = parseInt(printer.getAttribute("data-height"));

        // Проверяем, удовлетворяет ли принтер всем условиям фильтров
        const matchesSearch = name.includes(searchFilter);
        const matchesPrice = price >= minPrice && price <= maxPrice;
        const matchesHeight = height >= minHeight && height <= maxHeight;

        // Если все условия выполняются, показываем принтер, иначе скрываем
        if (matchesSearch && matchesPrice && matchesHeight) {
            printer.style.display = "block";
        } else {
            printer.style.display = "none";
        }
    });
}






function addToCart(product, imageSrc) {
    const prices = {
        'TEVO': 35000,
        'Artillery': 42000,
        'Creality': 55000,
        'Raise3D': 150000,
        'BIQU': 28000,
        'ANYCUBIC': 32000,
        'BIQU5': 25000,
        'Phrozen Sonic Mighty 12K': 180000
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
