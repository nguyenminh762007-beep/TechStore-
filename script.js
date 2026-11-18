
const products = [
    {
        id: 1,
        name: "Laptop văn phòng",
        category: "Laptop",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
        description: "Hiệu năng ổn định cho học tập."
    },
    {
        id: 2,
        name: "Laptop gaming",
        category: "Laptop",
        price: 22500000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",
        description: "Phù hợp chơi game và đồ họa."
    },
    {
        id: 3,
        name: "Samsung Galaxy S25",
        category: "Android",
        price: 21990000,
        image: "https://image-us.samsung.com/us/smartphones/galaxy-s25/images/galaxy-s25-features-kv.jpg?imbypass=true",
        description: "Thiết kế gọn nhẹ, hiệu năng mạnh mẽ."
    },
    {
        id: 13,
        name: "Samsung Galaxy S25 Ultra",
        category: "Android",
        price: 33990000,
        image: "https://image-us.samsung.com/us/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-kv.jpg?imbypass=true",
        description: "Màn hình lớn, camera độ phân giải cao."
    },
    {
        id: 14,
        name: "Xiaomi 15",
        category: "Android",
        price: 19990000,
        image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15/pc/2fb551f068f8de5461069dab5cf84556.jpg?f=webp",
        description: "Thiết kế hiện đại, hiệu năng mạnh mẽ."
    },
    {
        id: 15,
        name: "Samsung Galaxy Z Fold7",
        category: "Android",
        price: 49990000,
        image: "https://image-us.samsung.com/us/smartphones/galaxy-z-fold7/images/galaxy-z-fold7-features-kv.jpg?imbypass=true&nocache=true",
        description: "Điện thoại màn hình gập, không gian hiển thị rộng."
    },
    {
        id: 4,
        name: "Tai nghe Bluetooth",
        category: "Phụ kiện",
        subcategory: "Tai nghe",
        price: 650000,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        description: "Âm thanh rõ, kết nối không dây."
    },
    {
        id: 5,
        name: "Bàn phím cơ",
        category: "Phụ kiện",
        subcategory: "Chuột bàn phím",
        price: 890000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
        description: "Gõ phím thoải mái, bền bỉ."
    },
    {
        id: 6,
        name: "Chuột không dây",
        category: "Phụ kiện",
        subcategory: "Chuột bàn phím",
        price: 350000,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80",
        description: "Nhỏ gọn, tiện lợi khi di chuyển."
    },
    {
        id: 7,
        name: "iPhone 14",
        category: "iPhone",
        price: 18990000,
        image: "https://www.apple.com/v/iphone/home/cl/images/overview/select/iphone_17e__fes2iqci8aaa_large.jpg",
        description: "Màn hình đẹp, hiệu năng mạnh."
    },
    {
        id: 9,
        name: "iPhone 15",
        category: "iPhone",
        price: 21990000,
        image: "https://www.apple.com/v/iphone/home/cl/images/overview/select/iphone_air__behibcx1cfde_large.jpg",
        description: "Màn hình đẹp, hiệu năng mạnh."
    },
    {
        id: 10,
        name: "iPhone 16",
        category: "iPhone",
        price: 24990000,
        image: "https://www.apple.com/v/iphone/home/cl/images/overview/select/iphone_16__feoq604c6fe6_large.jpg",
        description: "Màn hình đẹp, hiệu năng mạnh."
    },
    {
        id: 11,
        name: "iPhone 17",
        category: "iPhone",
        price: 27990000,
        image: "https://www.apple.com/v/iphone/home/cl/images/overview/select/iphone_17__cuyljf3ic8k2_large.jpg",
        description: "Màn hình đẹp, hiệu năng mạnh."
    },
    {
        id: 12,
        name: "iPhone 18",
        category: "iPhone",
        price: 30990000,
        image: "https://www.apple.com/v/iphone/home/cl/images/overview/select/iphone_18_pro__feg8kpsix2ie_large.jpg",
        description: "Màn hình đẹp, hiệu năng mạnh."
    },
    {
        id: 8,
        name: "Màn hình máy tính",
        category: "Phụ kiện",
        subcategory: "Laptop",
        price: 3290000,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80",
        description: "Màn hình rộng cho góc làm việc."
    },
    {
        id: 16,
        name: "Cáp sạc USB-C",
        category: "Phụ kiện",
        subcategory: "Cáp sạc",
        price: 180000,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
        description: "Cáp sạc nhanh, truyền dữ liệu ổn định."
    },
    {
        id: 17,
        name: "Sạc nhanh 20W",
        category: "Phụ kiện",
        subcategory: "Cáp sạc",
        price: 390000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        description: "Sạc an toàn cho điện thoại và thiết bị di động."
    },
    {
        id: 18,
        name: "Pin sạc dự phòng 10.000mAh",
        category: "Phụ kiện",
        subcategory: "Pin sạc",
        price: 590000,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80",
        description: "Dung lượng lớn, dễ mang theo."
    },
    {
        id: 19,
        name: "Ốp lưng silicon",
        category: "Phụ kiện",
        subcategory: "Ốp lưng",
        price: 220000,
        image: "https://images.unsplash.com/photo-1603313011101-574fd5e3c8da?auto=format&fit=crop&w=700&q=80",
        description: "Chống trơn trượt, bảo vệ máy."
    },
    {
        id: 20,
        name: "Dán màn hình cường lực",
        category: "Phụ kiện",
        subcategory: "Dán màn hình",
        price: 150000,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
        description: "Chống trầy xước và vân tay."
    },
    {
        id: 22,
        name: "Máy ảnh mirrorless",
        category: "Phụ kiện",
        subcategory: "Máy ảnh",
        price: 18990000,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
        description: "Ảnh sắc nét, phù hợp quay vlog."
    },
    {
        id: 23,
        name: "Bộ phụ kiện Apple",
        category: "Phụ kiện",
        subcategory: "Tai nghe",
        price: 790000,
        image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=700&q=80",
        description: "Phụ kiện tiện ích cho hệ sinh thái Apple."
    },
    {
        id: 24,
        name: "Túi đựng phụ kiện điện thoại",
        category: "Phụ kiện",
        subcategory: "Phụ kiện điện thoại",
        price: 260000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
        description: "Ngăn nắp, bảo quản cáp và phụ kiện."
    },
    {
        id: 25,
        name: "Đế tản nhiệt laptop",
        category: "Phụ kiện",
        subcategory: "Laptop",
        price: 450000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",
        description: "Giảm nhiệt, hỗ trợ góc đặt thoải mái."
    }
];

const cartStorageKey = "techstore-cart";
const iphoneStorageOptions = ["128GB", "256GB", "512GB"];
const iphoneStorageSurcharges = {
    "128GB": 0,
    "256GB": 500000,
    "512GB": 1000000
};
let cart = loadCart();
let selectedCategory = "Tất cả";

const money = value =>
    value.toLocaleString("vi-VN") + " ₫";

function getProductPrice(product, storage) {
    return product.price +
        (product.category === "iPhone"
            ? iphoneStorageSurcharges[storage]
            : 0);
}

function loadCart() {
    const savedCart = localStorage.getItem(cartStorageKey);
    if (!savedCart) return [];

    try {
        const parsedCart = JSON.parse(savedCart);
        if (!Array.isArray(parsedCart)) {
            throw new TypeError("Dữ liệu giỏ hàng không hợp lệ.");
        }

        return parsedCart.reduce((items, savedItem) => {
            const product = products.find(item => item.id === savedItem.id);
            const quantity = Number(savedItem.quantity);

            const storage = savedItem.storage ||
                (product && product.category === "iPhone" ? "128GB" : null);
            const validStorage = product &&
                (product.category === "iPhone"
                    ? iphoneStorageOptions.includes(storage)
                    : storage === null);

            if (product && validStorage &&
                Number.isInteger(quantity) && quantity > 0) {
                items.push({
                    ...product,
                    price: getProductPrice(product, storage),
                    storage,
                    quantity
                });
            }

            return items;
        }, []);
    } catch (error) {
        console.error("Không thể đọc dữ liệu giỏ hàng đã lưu:", error);
        return [];
    }
}

function saveCart() {
    localStorage.setItem(
        cartStorageKey,
        JSON.stringify(cart.map(({ id, storage, quantity }) => ({
            id,
            storage,
            quantity
        })))
    );
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    const keyword = document
        .getElementById("search")
        .value.trim().toLowerCase();

    const filtered = products.filter(product => {
        const matchName = product.name
            .toLowerCase()
            .includes(keyword);

        const matchCategory =
            selectedCategory === "Tất cả" ||
            product.category === selectedCategory;

        return matchName && matchCategory;
    });

    productList.innerHTML =
        filtered.map(product => `
            <article class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                ${product.category === "iPhone" ? `
                    <label class="storage-label" for="storage-${product.id}">
                        Dung lượng
                    </label>
                    <select class="storage-select" id="storage-${product.id}"
                        data-storage="${product.id}">
                        ${iphoneStorageOptions.map(storage => `
                            <option value="${storage}">${storage}</option>
                        `).join("")}
                    </select>
                ` : ""}
                <p class="price">${money(getProductPrice(
                    product,
                    product.category === "iPhone" ? "128GB" : null
                ))}</p>
                <button class="add-button"
                    data-add="${product.id}">
                    + Thêm vào giỏ
                </button>
            </article>
        `).join("");

    document.getElementById("empty-message").hidden =
        filtered.length > 0;
}

function addToCart(id, storage = null) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    if (product.category === "iPhone") {
        if (!iphoneStorageOptions.includes(storage)) return;
    } else {
        storage = null;
    }

    const item = cart.find(item =>
        item.id === id && item.storage === storage
    );

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            ...product,
            price: getProductPrice(product, storage),
            storage,
            quantity: 1
        });
    }

    saveCart();
    window.location.href = "cart.html";
}

function changeQuantity(id, storage, amount) {
    const item = cart.find(item =>
        item.id === id && item.storage === storage
    );
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item =>
            item.id !== id || item.storage !== storage
        );
    }

    saveCart();
    renderCart();
}

function removeFromCart(id, storage) {
    cart = cart.filter(item =>
        item.id !== id || item.storage !== storage
    );
    saveCart();
    renderCart();
}

function renderCart() {
    const count = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");
    const checkoutButton = document.querySelector(
        "#checkout-form button[type='submit']"
    );

    if (cartCount) cartCount.textContent = count;
    if (cartTotal) cartTotal.textContent = money(total);
    if (checkoutButton) checkoutButton.disabled = cart.length === 0;
    if (!cartItems) return;

    cartItems.innerHTML =
        cart.length === 0
            ? `<div class="empty-cart">
                   <p>Giỏ hàng đang trống.</p>
                   <a href="QuanLyWebBanHang.html" class="primary-button">
                       Khám phá sản phẩm
                   </a>
               </div>`
            : cart.map(item => `
                <div class="cart-item">
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="${item.image}" alt="" loading="lazy">
                        </div>
                        <div>
                        <strong>${item.name}</strong>
                            ${item.storage ? `<p>${item.storage}</p>` : ""}
                            <p>${money(item.price)} / sản phẩm</p>
                            <strong class="cart-line-total">
                                ${money(item.price * item.quantity)}
                            </strong>
                        </div>
                    </div>
                    <div class="quantity">
                        <button data-minus="${item.id}"
                            data-storage="${item.storage || ""}"
                            aria-label="Giảm số lượng ${item.name}">−</button>
                        <span aria-label="Số lượng">${item.quantity}</span>
                        <button data-plus="${item.id}"
                            data-storage="${item.storage || ""}"
                            aria-label="Tăng số lượng ${item.name}">+</button>
                        <button class="remove-button"
                            data-remove="${item.id}"
                            data-storage="${item.storage || ""}"
                            aria-label="Xóa ${item.name}">Xóa</button>
                    </div>
                </div>
            `).join("");
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

function openAccessoryModal(subcategory = null) {
    const modal = document.getElementById("accessory-modal");
    const title = document.getElementById("accessory-modal-title");
    const productList = document.getElementById("accessory-modal-products");
    if (!modal || !title || !productList) return;

    const accessoryProducts = products.filter(product =>
        product.category === "Phụ kiện"
    );
    const filteredProducts = subcategory
        ? accessoryProducts.filter(product =>
            product.subcategory === subcategory)
        : accessoryProducts;

    title.textContent = subcategory || "Tất cả phụ kiện";
    productList.innerHTML = filteredProducts.map(product => `
        <article class="accessory-modal-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">${money(product.price)}</p>
            <button class="add-button" data-add="${product.id}">
                + Thêm vào giỏ
            </button>
        </article>
    `).join("");

    modal.hidden = false;
    document.body.classList.add("modal-open");
}

function closeAccessoryModal() {
    const modal = document.getElementById("accessory-modal");
    if (!modal) return;

    modal.hidden = true;
    document.body.classList.remove("modal-open");
}

// Xử lý các nút bằng event delegation
document.addEventListener("click", event => {
    if (event.target.closest("[data-close-accessories]")) {
        closeAccessoryModal();
        return;
    }

    const button = event.target.closest("button");
    if (!button) return;

    if (button.matches("[data-show-accessories]")) {
        openAccessoryModal();
        return;
    }

    if (button.matches("[data-accessory]")) {
        openAccessoryModal(button.dataset.accessory);
        return;
    }

    if (button.dataset.add) {
        const id = Number(button.dataset.add);
        const storageSelect = button.closest(".product-card")
            .querySelector(".storage-select");
        addToCart(id, storageSelect ? storageSelect.value : null);
    }

    if (button.dataset.minus) {
        changeQuantity(
            Number(button.dataset.minus),
            button.dataset.storage || null,
            -1
        );
    }

    if (button.dataset.plus) {
        changeQuantity(
            Number(button.dataset.plus),
            button.dataset.storage || null,
            1
        );
    }

    if (button.dataset.remove) {
        removeFromCart(
            Number(button.dataset.remove),
            button.dataset.storage || null
        );
    }

    if (button.classList.contains("category")) {
        selectedCategory = button.dataset.category;

        document.querySelectorAll(".category").forEach(btn => {
            btn.classList.toggle("active", btn === button);
        });

        renderProducts();
    }
});

const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeAccessoryModal();
});

document.addEventListener("change", event => {
    if (!event.target.matches(".storage-select")) return;

    const productId = Number(event.target.dataset.storage);
    const product = products.find(item => item.id === productId);
    const price = event.target.closest(".product-card").querySelector(".price");

    if (product && price) {
        price.textContent = money(getProductPrice(product, event.target.value));
    }
});

// Đặt hàng mô phỏng, chưa lưu vào cơ sở dữ liệu
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
    checkoutForm.addEventListener("submit", event => {
        event.preventDefault();

        if (cart.length === 0) {
            showToast("Vui lòng thêm sản phẩm vào giỏ!");
            return;
        }

        const form = event.currentTarget;

        if (!form.reportValidity()) return;

        cart = [];
        saveCart();
        window.location.href = "thank-you.html";
    });
}

renderProducts();
renderCart();
