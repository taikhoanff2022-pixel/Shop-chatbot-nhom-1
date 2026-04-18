// Product data with categories
const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        price: 25000000,
        description: 'Camera 48MP Pro với zoom 5x, chip A17 Bionic siêu mạnh, màn Dynamic Island, pin 23 giờ',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop', // iPhone on table
        category: 'dien-thoai'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24',
        price: 22000000,
        description: 'Màn AMOLED 6.2" 120Hz, camera 50MP, chip Snapdragon 8 Gen 3, pin 4000mAh',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop', // Samsung phone
        category: 'dien-thoai'
    },
    {
        id: 3,
        name: 'Áo thun nam cao cấp',
        price: 450000,
        description: 'Chất liệu cotton cao cấp, thoáng mát, form slim fit, in logo tinh tế',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop', // Men's t-shirt
        category: 'thoi-trang'
    },
    {
        id: 4,
        name: 'Quần jeans nữ',
        price: 850000,
        description: 'Quần jeans skinny fit, chất liệu denim bền đẹp, co giãn thoải mái, nhiều size',
        image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=300&fit=crop', // Women's jeans
        category: 'thoi-trang'
    },
    {
        id: 5,
        name: 'Son môi MAC',
        price: 750000,
        description: 'Son lì lâu trôi, màu sắc tự nhiên, dưỡng môi, hương thơm nhẹ nhàng',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop', // Lipstick
        category: 'my-pham'
    },
    {
        id: 6,
        name: 'Kem nền L\'Oreal',
        price: 620000,
        description: 'Kem nền che khuyết điểm hoàn hảo, mỏng nhẹ, lâu trôi, phù hợp mọi loại da',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop', // Foundation makeup
        category: 'my-pham'
    },
    {
        id: 7,
        name: 'MacBook Pro M3',
        price: 45000000,
        description: 'Chip M3 mạnh mẽ, màn Retina 14.2", pin 18 giờ, thiết kế siêu mỏng nhẹ',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop', // MacBook laptop
        category: 'dien-thoai'  // Electronics as phone-related
    },
    {
        id: 8,
        name: 'Áo khoác da nữ mùa đông',
        price: 1200000,
        description: 'Áo khoác da thật cao cấp, ấm áp, phong cách Hàn Quốc, phù hợp mùa đông',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop', // Winter coat
        category: 'thoi-trang'
    },
    {
        id: 9,
        name: 'Giày sneaker nam Adidas',
        price: 2500000,
        description: 'Giày sneaker Adidas chính hãng, đế cao su bền, thoáng khí, phong cách thể thao',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop', // Adidas sneakers
        category: 'thoi-trang'
    },
    {
        id: 10,
        name: 'Nước hoa Chanel No.5',
        price: 3500000,
        description: 'Nước hoa nữ Chanel No.5 cổ điển, hương thơm quyến rũ, lâu bền, chai 100ml',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=300&fit=crop', // Perfume bottle
        category: 'my-pham'
    },
   
    {
        id: 12,
        name: 'Đồng hồ thông minh Samsung Galaxy Watch 6',
        price: 8000000,
        description: 'Đồng hồ thông minh màn AMOLED, theo dõi sức khỏe 24/7, pin 40 ngày, chống nước',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop', // Smartwatch
        category: 'dien-thoai'
    },
    {
        id: 13,
        name: 'Máy ảnh Canon EOS R5',
        price: 65000000,
        description: 'Máy ảnh full-frame 45MP, quay 8K, chống rung IBIS, ống kính RF mount',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop', // DSLR camera
        category: 'dien-thoai'
    },
    {
        id: 14,
        name: 'Váy dạ tiệc nữ',
        price: 1800000,
        description: 'Váy dạ tiệc dáng ôm, chất liệu lụa cao cấp, thiết kế thanh lịch, nhiều màu',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop', // Evening dress
        category: 'thoi-trang'
    },
    {
        id: 15,
        name: 'Sữa rửa mặt Cetaphil',
        price: 350000,
        description: 'Sữa rửa mặt dịu nhẹ cho da nhạy cảm, không chứa xà phòng, làm sạch sâu mà không khô da',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop', // Facial cleanser
        category: 'my-pham'
    },
    {
        id: 16,
        name: 'iPad Pro 12.9 inch',
        price: 28000000,
        description: 'Màn Liquid Retina XDR 12.9", chip M2, camera 12MP, Apple Pencil Pro, pin 10 giờ',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
        category: 'dien-thoai'
    },
    {
        id: 17,
        name: 'Áo hoodie nam',
        price: 750000,
        description: 'Áo hoodie nỉ bông dày dặn, form rộng thoải mái, in logo phong cách, nhiều màu',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 18,
        name: 'Quần short nữ',
        price: 450000,
        description: 'Quần short nữ cotton thoáng mát, form chuẩn, đường may tinh tế, phù hợp mùa hè',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 19,
        name: 'Mascara Maybelline',
        price: 280000,
        description: 'Mascara volumizing, làm dài và cong mi, chống nước, dễ tháo, màu đen tự nhiên',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
        category: 'my-pham'
    },
    {
        id: 20,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 12000000,
        description: 'Tai nghe chống ồn chủ động, âm thanh Hi-Res, pin 30 giờ, sạc nhanh, microphone HD',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
        category: 'dien-thoai'
    },
    {
        id: 21,
        name: 'Áo sơ mi nam công sở',
        price: 650000,
        description: 'Áo sơ mi nam cotton cao cấp, form slim fit, cổ bẻ, phù hợp công sở và dạo phố',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 22,
        name: 'Túi xách nữ da thật',
        price: 2500000,
        description: 'Túi xách da bò thật cao cấp, thiết kế thời trang, nhiều ngăn tiện lợi, size vừa',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 23,
        name: 'Phấn mắt Huda Beauty',
        price: 850000,
        description: 'Phấn mắt palette 18 màu, chất phấn mịn, lên màu chuẩn, lâu trôi, nhiều tone',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
        category: 'my-pham'
    },
    {
        id: 24,
        name: 'Máy chơi game PlayStation 5',
        price: 15000000,
        description: 'PS5 Digital Edition, ổ SSD siêu nhanh, controller DualSense, đồ họa 4K, chơi game đỉnh cao',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop',
        category: 'dien-thoai'
    },
    {
        id: 25,
        name: 'Áo thun nữ',
        price: 950000,
        description: 'Áo len len cashmere pha, ấm áp, form ôm body, cổ lọ, nhiều màu pastel',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 26,
        name: 'Giày boot nữ',
        price: 1800000,
        description: 'Giày boot da cao cấp, đế cao 5cm, chống nước, phong cách rock chic, bền đẹp',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 27,
        name: 'Dưỡng môi Burt\'s Bees',
        price: 220000,
        description: 'Son dưỡng Burt\'s Bees, chiết xuất tự nhiên, dưỡng ẩm sâu, màu nude tự nhiên',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop',
        category: 'my-pham'
    },
    {
        id: 28,
        name: 'Máy ảnh Sony Alpha A7',
        price: 35000000,
        description: 'Máy ảnh full-frame 24MP, quay 4K, chống rung 5 trục, EVF OLED, ống kính E-mount',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
        category: 'dien-thoai'
    },
    {
        id: 29,
        name: 'Áo khoác da nữ',
        price: 2200000,
        description: 'Áo khoác da PU cao cấp, form trench coat, khoá kéo hai chiều, phong cách Hàn Quốc',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
        category: 'thoi-trang'
    },
    {
        id: 30,
        name: 'Nước hoa hồng Simple',
        price: 180000,
        description: 'Nước hoa hồng Simple dưỡng ẩm, cân bằng pH, làm dịu da kích ứng, không cồn',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
        category: 'my-pham'
    }
];

// Cart and filter state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [...products];
let selectedCategory = 'all';
let searchQuery = '';

// Chatbot context
let chatContext = {
    lastTopic: null,
    userName: null,
    interestedProducts: [],
    conversationHistory: []
};

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = count;
    
    // Animation for cart count
    if (count > 0) {
        cartCountElement.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            cartCountElement.style.animation = '';
        }, 500);
    }
}

function filterProducts() {
    currentProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProducts();
}

// Render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = currentProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category.replace('-', ' ').toUpperCase()}</span>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    🛒 Thêm vào giỏ
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Success animation
    const button = event.target.closest('.add-to-cart');
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Đã thêm!';
    button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    button.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.transform = '';
    }, 1500);
    
    // Show toast notification
    showToast(`Đã thêm ${product.name} vào giỏ hàng!`);
}

// Toast notification function
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Auto hide after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// Category filter
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            filterProducts();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterProducts();
    });
});

// Chatbot functionality (unchanged)
const chatToggle = document.getElementById('chatToggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');

chatToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatbot.classList.remove('active');
});

sendChat.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.innerHTML += `
        <div class="message user">${message}</div>
    `;

    chatInput.value = '';

    setTimeout(() => {
        const response = generateBotResponse(message.toLowerCase());
        chatMessages.innerHTML += `<div class="message bot">${response}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500 + Math.random() * 500); // Random delay for more natural feel

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(message) {
    const responses = {
        // Greetings
        greeting: [
            'Xin chào! 👋 Rất vui được phục vụ bạn! Shop chúng tôi có gì có thể giúp được không?',
            'Chào bạn! 🌟 Chào mừng đến với Shop Văn Mạnh. Bạn cần tìm sản phẩm gì hôm nay?',
            'Hi! 😊 Tôi là trợ lý ảo của Shop Văn Mạnh. Hãy cho tôi biết bạn đang tìm gì nhé!'
        ],

        // Farewell
        farewell: [
            'Cảm ơn bạn đã ghé thăm! Hẹn gặp lại lần sau nhé! 👋',
            'Rất vui được chat với bạn! Nếu cần gì cứ hỏi nhé! 😊',
            'Chúc bạn một ngày tốt lành! Hẹn gặp lại! 🌟'
        ],

        // Price related
        price: [
            'Giá hiển thị trực tiếp trên sản phẩm. Bạn cần giá cụ thể sản phẩm nào?',
            'Tất cả giá đã bao gồm VAT. Bạn muốn biết giá sản phẩm gì?',
            'Giá cạnh tranh, chất lượng đảm bảo. Sản phẩm nào bạn quan tâm?'
        ],

        // Shipping
        shipping: [
            '🚚 Giao hàng: Miền Bắc 1-2 ngày, Nam 2-4 ngày, nội thành Hà Nội 1 ngày. Miễn phí từ 500k.',
            'Ship toàn quốc:Miền Bắc 1-2 ngày, miền Nam 1-3 ngày, miền Bắc 3-5 ngày. COD, miễn phí đơn từ 500k.',
            'Giao tận nơi: Nội thành 24h, miền Nam 1-2 ngày, miền Bắc 2-4 ngày. Phí ship 30k-50k, miễn phí từ 500k.',
            
        ],

        // Cart
        cart: [
            `🛒 Giỏ hàng có ${cart.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm. Click "Xem giỏ hàng" để chi tiết.`,
            'Giỏ hàng của bạn đã lưu. Xem và chỉnh sửa đơn hàng dễ dàng.',
            'Sản phẩm trong giỏ được giữ 30 ngày. Kiểm tra đơn hàng ngay!'
        ],

        // Categories
        fashion: [
            '👗 Thời trang: Áo thun nam 450k, Quần jeans nữ 850k, Áo khoác da nữ 1.2 triệu, Giày sneaker Adidas 2.5 triệu.',
            'Thời trang đa dạng: Áo sơ mi nam 650k, Váy dạ tiệc nữ 1.8 triệu, Túi xách da 2.5 triệu, Áo len mùa đông 950k.',
            'Phụ kiện thời trang: Giày boot nữ 1.8 triệu, Áo hoodie nam 750k, Quần short nữ 450k. Nhiều size và màu.'
        ],

        phone: [
            '📱 Điện thoại: iPhone 15 Pro 25 triệu, Samsung Galaxy S24 22 triệu, MacBook Pro M3 45 triệu.',
            'Công nghệ: iPad Pro 12.9" 28 triệu, Tai nghe Sony WH-1000XM5 12 triệu, Đồng hồ Samsung Watch 6 8 triệu.',
            'Gaming & Camera: PlayStation 5 15 triệu, Máy ảnh Canon EOS R5 65 triệu, Máy ảnh Sony Alpha A7 35 triệu.'
        ],

        beauty: [
            '💄 Mỹ phẩm: Son môi MAC 750k, Kem nền L\'Oreal 620k, Nước hoa Chanel No.5 3.5 triệu.',
            'Chăm sóc da: Sữa rửa mặt Cetaphil 350k, Nước hoa hồng Simple 180k, Mascara Maybelline 280k.',
            'Trang điểm: Phấn mắt Huda Beauty 850k, Dưỡng môi Burt\'s Bees 220k. Tư vấn da chuyên nghiệp.'
        ],

        // Specific products
        iphone: [
            'iPhone 15 Pro: camera 48MP, chip A17, pin 23 giờ. Giá 25 triệu.',
            'iPhone 15 Pro Max: màn 6.7", camera 48MP, chip A17. Giá 30 triệu.',
            'iPhone 15: camera 48MP, chip A16. Giá 20 triệu.'
        ],

        samsung: [
            'Galaxy S24: màn 6.2" 120Hz, camera 50MP. Giá 22 triệu.',
            'Galaxy S24 Ultra: màn 6.8", camera 200MP, S Pen. Giá 32 triệu.',
            'Galaxy S24+: màn 6.7", camera 50MP. Giá 27 triệu.'
        ],

        // Help
        help: [
            'Tôi có thể giúp bạn: tìm sản phẩm, tư vấn giá, thông tin giao hàng, hoặc hỗ trợ đặt hàng.',
            'Hãy hỏi tôi về: sản phẩm, giá cả, giao hàng, hoặc bất kỳ thắc mắc nào!',
            'Cần hỗ trợ gì không? Tôi luôn sẵn sàng giúp đỡ! 🤗'
        ],

        // Purchase/Order
        purchase: [
            '🎉 Đặt hàng: Thêm vào giỏ → Điền thông tin → Đặt hàng. COD toàn quốc.',
            'Quy trình đơn giản: Chọn sản phẩm → Giỏ hàng → Thông tin → Đặt hàng.',
            'Mua hàng online dễ dàng với thanh toán COD khi nhận hàng.'
        ],

        // Promotion/Discount
        promotion: [
            '🔥 Khuyến mãi: Miễn phí ship từ 500k, giảm giá combo.',
            'Ưu đãi: Voucher giảm 100k, trả góp 0%, sinh nhật shop giảm 15%.',
            'Sale đặc biệt: Combo mỹ phẩm giảm 20%, thời trang giảm 25%.'
        ],

        // Quality/Guarantee
        quality: [
            '✅ Chính hãng 100%, bảo hành 12 tháng, đổi trả 7 ngày.',
            'Uy tín: Hàng chính hãng, tem bảo hành, hóa đơn VAT.',
            'Cam kết chất lượng: Bảo hành tận nơi, hỗ trợ 24/7.'
        ],

        // Feedback/Review
        feedback: [
            '⭐ Cảm ơn bạn đã ủng hộ! Hãy để lại đánh giá 5 sao nhé!',
            'Ý kiến của bạn rất quý giá! Chúng tôi luôn cải thiện để phục vụ tốt hơn.',
            'Cảm ơn feedback! Bạn có góp ý gì để shop tốt hơn không?'
        ],

        // Fun/Playful
        fun: [
            '😄 Bạn hỏi cái gì hay thế! Tôi cũng thích shopping lắm! 🛍️',
            'Haha, câu hỏi thú vị! Bạn có sở thích mua sắm gì đặc biệt không?',
            '🎉 Thật vui khi chat với bạn! Cùng khám phá sản phẩm nào!'
        ],

        // Time/Availability
        time: [
            '🕐 Shop mở cửa 8:00 - 22:00 hàng ngày. Tư vấn online 24/7 qua chatbot!',
            'Chúng tôi phục vụ bạn bất cứ lúc nào! Chatbot luôn sẵn sàng.',
            'Không giới hạn thời gian! Bạn có thể mua sắm bất cứ lúc nào.'
        ],

        // Location/Contact
        contact: [
            '📍 Địa chỉ: 123 Đường ABC, Phường XYZ, Quận 1, TP.HCM. Giờ mở cửa: 8:00-22:00 hàng ngày. 📞 Hotline: 0123 456 789 (tư vấn 24/7). 💌 Email: info@shopvanmanh.com',
            'Liên hệ chúng tôi: Shop tại 123 Đường ABC, Q.1, TP.HCM. Tư vấn online qua chatbot, gọi điện hoặc inbox fanpage. Đội ngũ chăm sóc khách hàng chuyên nghiệp, nhiệt tình.',
            'Thông tin liên hệ: Địa chỉ giao dịch 123 Đường ABC, TP.HCM. SĐT: 0123 456 789. Email: info@shopvanmanh.com. Website: shopvanmanh.com. Fanpage: fb.com/shopvanmanh'
        ],

        // Help
        help: [
            'Tôi có thể hỗ trợ: 🔍 Tìm sản phẩm theo nhu cầu, 💰 Tư vấn giá và khuyến mãi, 🚚 Thông tin giao hàng, 📱 Hướng dẫn đặt hàng, ⭐ Tư vấn sản phẩm chi tiết, 🛒 Quản lý giỏ hàng.',
            'Dịch vụ hỗ trợ: Tư vấn sản phẩm chuyên sâu, so sánh giá, hướng dẫn sử dụng, giải đáp thắc mắc, hỗ trợ kỹ thuật, chăm sóc sau bán hàng. Bạn cần giúp gì cụ thể?',
            'Tôi hỗ trợ mọi vấn đề: Tìm sản phẩm phù hợp budget, tư vấn theo nhu cầu sử dụng, hướng dẫn mua hàng online, thông tin bảo hành, giải đáp khiếu nại. Hãy hỏi tôi!'
        ]
    };

    // Check for specific product names first
    for (let product of products) {
        if (message.toLowerCase().includes(product.name.toLowerCase())) {
            return `${product.name}: ${product.description}. Giá: ${formatPrice(product.price)}. Danh mục: ${product.category.replace('-', ' ').toUpperCase()}. Thêm vào giỏ hàng ngay! 🛒`;
        }
    }

    // Check for keywords and return appropriate response
    if (message.includes('chào') || message.includes('hello') || message.includes('hi') || message.includes('xin chào')) {
        return getRandomResponse(responses.greeting);
    }

    if (message.includes('tạm biệt') || message.includes('bye') || message.includes('goodbye') || message.includes('cảm ơn')) {
        return getRandomResponse(responses.farewell);
    }

    if (message.includes('giá') || message.includes('bao nhiêu') || message.includes('tiền')) {
        return getRandomResponse(responses.price);
    }

    if (message.includes('giao hàng') || message.includes('ship') || message.includes('vận chuyển')) {
        return getRandomResponse(responses.shipping);
    }

    if (message.includes('giỏ') || message.includes('cart')) {
        return getRandomResponse(responses.cart);
    }

    if (message.includes('thời trang') || message.includes('quần áo') || message.includes('giày') || message.includes('áo')) {
        return getRandomResponse(responses.fashion);
    }

    if (message.includes('điện thoại') || message.includes('phone') || message.includes('laptop') || message.includes('máy tính')) {
        return getRandomResponse(responses.phone);
    }

    if (message.includes('mỹ phẩm') || message.includes('làm đẹp') || message.includes('son') || message.includes('kem')) {
        return getRandomResponse(responses.beauty);
    }

    if (message.includes('iphone') || message.includes('apple')) {
        return getRandomResponse(responses.iphone);
    }

    if (message.includes('samsung') || message.includes('galaxy')) {
        return getRandomResponse(responses.samsung);
    }

    if (message.includes('mua') || message.includes('đặt hàng') || message.includes('order') || message.includes('mua hàng')) {
        return getRandomResponse(responses.purchase);
    }

    if (message.includes('khuyến mãi') || message.includes('giảm giá') || message.includes('ưu đãi') || message.includes('sale')) {
        return getRandomResponse(responses.promotion);
    }

    if (message.includes('chất lượng') || message.includes('bảo hành') || message.includes('đảm bảo') || message.includes('chính hãng')) {
        return getRandomResponse(responses.quality);
    }

    if (message.includes('địa chỉ') || message.includes('liên hệ') || message.includes('contact') || message.includes('sđt')) {
        return getRandomResponse(responses.contact);
    }

    if (message.includes('đánh giá') || message.includes('feedback') || message.includes('phản hồi')) {
        return getRandomResponse(responses.feedback);
    }

    if (message.includes('thời gian') || message.includes('giờ') || message.includes('mở cửa') || message.includes('online')) {
        return getRandomResponse(responses.time);
    }

    if (message.includes('haha') || message.includes('hihi') || message.includes('lol') || message.includes('thú vị') || message.includes('hay')) {
        return getRandomResponse(responses.fun);
    }

    if (message.includes('giúp') || message.includes('hỗ trợ') || message.includes('help')) {
        return getRandomResponse(responses.help);
    }

    // Smart suggestions based on keywords
    if (message.includes('gaming') || message.includes('chơi game') || message.includes('game')) {
        return '🎮 Gaming: PlayStation 5 (15 triệu) hoặc laptop gaming. Bạn cần cấu hình gì?';
    }

    if (message.includes('chụp ảnh') || message.includes('camera') || message.includes('máy ảnh')) {
        return '📸 Chụp ảnh: iPhone 15 Pro (25 triệu) hoặc Canon EOS R5 (65 triệu).';
    }

    if (message.includes('laptop') || message.includes('máy tính') || message.includes('làm việc')) {
        return '💻 Laptop: MacBook Pro M3 (45 triệu) hoặc Windows từ 15 triệu.';
    }

    if (message.includes('trẻ em') || message.includes('kids') || message.includes('bé')) {
        return '👶 Sản phẩm cho bé: thời trang, đồ chơi, phụ kiện an toàn.';
    }

    if (message.includes('quà tặng') || message.includes('quà') || message.includes('gift')) {
        return '🎁 Quà tặng: nước hoa Chanel, đồng hồ, túi xách cao cấp.';
    }
}

function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    
    // Cart modal functionality
    const viewCartBtn = document.getElementById('viewCartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const checkoutForm = document.getElementById('checkoutForm');
    
    viewCartBtn.addEventListener('click', () => {
        renderCartItems();
        cartModal.style.display = 'block';
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            showToast('🛒 Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi đặt hàng.');
            return;
        }
        
        const orderData = {
            customer: {
                name: document.getElementById('customerName').value,
                phone: document.getElementById('customerPhone').value,
                email: document.getElementById('customerEmail').value,
                address: document.getElementById('customerAddress').value,
                note: document.getElementById('customerNote').value
            },
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderDate: new Date().toLocaleString('vi-VN')
        };
        
        // Save order to localStorage (in real app, this would be sent to server)
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show success message
        showToast(`🎉 Đặt hàng thành công! Cảm ơn ${orderData.customer.name}!`);
        
        // Reset form and close modal
        checkoutForm.reset();
        cartModal.style.display = 'none';
        renderCartItems();
    });
});

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Giỏ hàng trống</p>';
        cartTotal.innerHTML = '<strong>Tổng cộng: 0 VNĐ</strong>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>Số lượng: ${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Xóa</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerHTML = `<strong>Tổng cộng: ${formatPrice(total)}</strong>`;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}
