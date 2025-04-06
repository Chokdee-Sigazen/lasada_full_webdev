document.addEventListener('DOMContentLoaded', function() {
    initProductAdder();
    initSearchFunction();
    initCountdown();
});


function initProductAdder() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    let productCount = productGrid.querySelectorAll('.product-card').length;
    const addProductBtn = document.querySelector('.add-product-button');
    const productTemplates = [
        {
            image: "./image/01.avif",
            title: "Samsung Galaxy S22 Ultra สมาร์ทโฟนรุ่นเรือธง จอ 6.8 นิ้ว RAM 12GB",
            salePrice: "฿29,990.00",
            originalPrice: "฿36,900.00",
            discount: "-19%"
        },
        {
            image: "./image/02.avif",
            title: "ชุดผ้าปูที่นอนผ้าไมโครไฟเบอร์ 6 ฟุต 6 ชิ้น พร้อมผ้านวม นุ่มสบาย",
            salePrice: "฿799.00",
            originalPrice: "฿1,299.00",
            discount: "-39%"
        },
        {
            image: "./image/03.avif",
            title: "หม้อหุงข้าวไฟฟ้าขนาด 1.8 ลิตร มัลติฟังก์ชั่น ระบบดิจิตอล รุ่นใหม่",
            salePrice: "฿890.00",
            originalPrice: "฿1,290.00",
            discount: "-31%"
        },
        {
            image: "./image/04.avif",
            title: "น้ำหอมแบรนด์เนม กลิ่นหอมติดทนนาน ขนาดพกพา 100ml สำหรับทุกเพศ",
            salePrice: "฿1,450.00",
            originalPrice: "฿1,890.00",
            discount: "-23%"
        },
        {
            image: "./image/05.avif",
            title: "เครื่องปั่นน้ำผลไม้พกพา ชาร์จไฟได้ ทำน้ำผลไม้สดได้ทุกที่ ขนาด 300ml",
            salePrice: "฿459.00",
            originalPrice: "฿759.00",
            discount: "-40%"
        }
    ];

    productTemplates.forEach((template, index) => {
        const newProduct = document.createElement('div');
        newProduct.className = 'product-card';
        newProduct.innerHTML = `
            <img src="${template.image}" alt="Product ${index + 1}" class="product-image">
            <div class="product-info">
                <p class="product-title">${template.title}</p>
                <p class="sale-price">${template.salePrice}</p>
                <p class="original-price">${template.originalPrice} <span class="discount">${template.discount}</span></p>
            </div>
        `;
        productGrid.appendChild(newProduct);
    }
    );
    
    addProductBtn.addEventListener('click', function() {
        productCount++;
        const template = productTemplates[(productCount - 1) % productTemplates.length];
        
        const newProduct = document.createElement('div');
        newProduct.className = 'product-card';
                newProduct.innerHTML = `
            <img src="${template.image}" alt="Product ${productCount}" class="product-image">
            <div class="product-info">
                <p class="product-title">${template.title} (${productCount})</p>
                <p class="sale-price">${template.salePrice}</p>
                <p class="original-price">${template.originalPrice} <span class="discount">${template.discount}</span></p>
            </div>
        `;
        productGrid.appendChild(newProduct);
        console.log(`Product #${productCount} has been added.`);
        newProduct.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}


//Search Function for searchbox
function initSearchFunction() {
    const searchBox = document.querySelector('.search-bar');
    const searchInput = searchBox.querySelector('input[type="text"]');
    const searchButton = searchBox.querySelector('button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const title = product.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}

// Add countdown timer
function initCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const endTime = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Flash Sale Ended!";
            clearInterval(countdownInterval);
            return;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
}
