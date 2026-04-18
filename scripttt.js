// Product data
const products = [
    {
        id: 2,
        name: 'MacBook Air M2',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Áo Thun Nam',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Dell XPS 13',
        price: 32000000,
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop'
    },
    {
        id: 8,
        name: 'Nike Air Max',
        price: 2800000,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'
    },
    {
        id: 9,
        name: 'Sony WH-1000XM5',
        price: 12000000,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    },
    {
        id: 10,
        name: 'Apple Watch Series 9',
        price: 15000000,
        image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop'
    },
    {
        id: 12,
        name: 'Balo Laptop',
        price: 600000,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
    },
    {
        id: 13,
        name: 'Google Pixel 8 Pro',
        price: 24000000,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop'
    },
    {
        id: 16,
        name: 'Lenovo ThinkPad X1',
        price: 30000000,
        image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop'
    },
    {
        id: 18,
        name: 'HP Pavilion 14',
        price: 13000000,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
    },
    {
        id: 20,
        name: 'Quần Short Nam',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop'
    },
    {
        id: 25,
        name: 'Giày Thể Thao Nữ',
        price: 1800000,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop'
    },
    {
        id: 26,
        name: 'Túi Xách Nữ',
        price: 850000,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop'
    },
    {
        id: 27,
        name: 'Đồng Hồ Thông Minh',
        price: 8000000,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
    },
    {
        id: 29,
        name: 'Pin Dự Phòng 20000mAh',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop'
    },
    {
        id: 30,
        name: 'Cáp Sạc Nhanh USB-C',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop'
    }
];

let cart = [];
let filteredProducts = products;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(filteredProducts);
    setupEventListeners();
    updateCheckoutSummary();
});

function renderProducts(list = products) {
    const grid = document.getElementById('productsGrid');

    if (list.length === 0) {
        grid.innerHTML = '<div class="no-results">Không tìm thấy sản phẩm phù hợp.</div>';
        return;
    }

    grid.innerHTML = list.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}đ</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, this)">
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    `).join('');
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function addToCart(productId, button) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    animateAddToCart(button);
    updateCartUI();
}

function animateAddToCart(button) {
    if (button) {
        button.classList.add('adding');
        setTimeout(() => button.classList.remove('adding'), 350);
    }

    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.classList.add('added');
        setTimeout(() => cartIcon.classList.remove('added'), 450);
    }
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    document.querySelector('.cart-count').textContent = count || '';
    updateCheckoutSummary();
}

function setupEventListeners() {
    // Cart modal
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.querySelector('.close').addEventListener('click', closeCart);
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cartModal');
        if (e.target === modal) closeCart();
    });

    // Chatbot
    document.getElementById('chatToggle').addEventListener('click', toggleChat);
    document.getElementById('closeChat').addEventListener('click', closeChat);
    document.getElementById('sendMessage').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    document.getElementById('orderForm').addEventListener('submit', handleOrderSubmit);
    document.getElementById('checkoutButton').addEventListener('click', goToCheckout);
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('searchButton').addEventListener('click', filterProducts);
}

function filterProducts(event) {
    if (event) event.preventDefault();

    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
    }

    renderProducts(filteredProducts);
}

function goToCheckout() {
    closeCart();
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    document.querySelector('.cart-count').textContent = count || '';
    const checkoutButton = document.getElementById('checkoutButton');
    if (checkoutButton) {
        checkoutButton.disabled = count === 0;
    }
    updateCheckoutSummary();
}

function handleOrderSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert('Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi đặt hàng.');
        return;
    }

    const name = document.getElementById('customerName').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!name || !email || !phone || !address || !paymentMethod) {
        alert('Vui lòng điền đầy đủ thông tin và chọn phương thức thanh toán.');
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Cảm ơn ${name}! Đơn hàng của bạn đã được tiếp nhận. Tổng thanh toán: ${formatPrice(totalPrice)}đ`);

    document.getElementById('orderForm').reset();
    cart = [];
    updateCartUI();
    renderCartItems();
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    if (!summary) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        summary.innerHTML = '<p>Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm để đặt hàng.</p>';
    } else {
        summary.innerHTML = `
            <p><strong>Số sản phẩm:</strong> ${totalItems}</p>
            <p><strong>Tổng thanh toán:</strong> ${formatPrice(totalPrice)}đ</p>
        `;
    }
}


function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    renderCartItems();
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('cartTotalItems').textContent = totalItems;
    document.getElementById('cartTotalPrice').textContent = formatPrice(totalPrice);
    
    if (cart.length === 0) {
        container.innerHTML = '<p>Giỏ hàng trống</p>';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover; border-radius:5px;">
            <div>
                <strong>${item.name}</strong><br>
                ${item.quantity}x ${formatPrice(item.price)}đ
            </div>
            <div>${formatPrice(item.price * item.quantity)}đ</div>
        </div>
    `).join('');
}

// Chatbot functions
function toggleChat() {
    const window = document.getElementById('chatWindow');
    window.classList.toggle('active');
}

function closeChat() {
    document.getElementById('chatWindow').classList.remove('active');
}

const botResponses = {
    'xin chào|hello|hi|chào|chào buổi sáng|buổi chiều': [
        'Chào bạn! 👋 Chào mừng đến với Web Bán Hàng. Tôi có thể giúp gì cho bạn?',
        'Xin chào! Bạn cần tìm sản phẩm nào hôm nay?',
        'Chào bạn! Vui lòng nhắn tin cho tôi nếu bạn cần hỗ trợ.',
        'Chào mừng bạn! Hôm nay tôi sẽ giúp bạn tìm những sản phẩm tuyệt vời! 🎁'
    ],
    'giá|bao nhiêu|cost|price|giá cả': [
        'Giá sản phẩm được hiển thị rõ ràng dưới mỗi sản phẩm. 💰 Chúng tôi có rất nhiều sản phẩm từ giá rẻ đến cao cấp!',
        'Các sản phẩm của chúng tôi có giá cạnh tranh. Hãy xem danh sách sản phẩm để tìm thứ bạn thích!',
        'Bạn có thể xem giá chi tiết của từng sản phẩm trên trang chính. Tôi cũng có thể giúp bạn tìm sản phẩm trong tầm giá của bạn!',
        'Tất cả các giá đều đã bao gồm VAT. Không có phí ẩn nào hết! 😊'
    ],
    'giỏ hàng|cart|đơn hàng|order|đặt hàng': [
        'Giỏ hàng của bạn nằm ở góc phải trên, hãy nhấp vào icon 🛒 để xem! Bạn có thể thêm hoặc xóa sản phẩm dễ dàng.',
        'Bạn có thể quản lý giỏ hàng bằng cách nhấp vào icon giỏ ở phía trên cùng bên phải. Rất tiện lợi!',
        'Giỏ hàng của bạn hiển thị tất cả các sản phẩm bạn đã chọn. Nhấp vào icon giỏ để xem chi tiết đơn hàng của bạn.',
        'Bạn có thể chỉnh sửa số lượng hoặc xóa sản phẩm khỏi giỏ bất kỳ lúc nào!'
    ],
    'sản phẩm|hàng|product|item|mua': [
        'Chúng tôi có nhiều sản phẩm tuyệt vời! 🎁 Từ điện thoại, laptop đến thời trang và phụ kiện. Bạn quan tâm thứ gì?',
        'Các sản phẩm của chúng tôi đều chất lượng cao và giá cạnh tranh. Hãy cuộn xuống để xem tất cả danh sách!',
        'Bạn có muốn tìm một loại sản phẩm cụ thể? Tôi có thể giúp bạn tìm thứ phù hợp nhất!',
        'Chúng tôi bán hơn 100 sản phẩm khác nhau. Chắc chắn có thứ gì đó bạn sẽ thích!'
    ],
    'điện thoại|iphone|samsung|phone|smartphone': [
        'Chúng tôi có rất nhiều điện thoại cao cấp! 📱 iPhone 15 Pro, Samsung Galaxy S24, và nhiều loại khác với giá cực hấp dẫn!',
        'Điện thoại của chúng tôi đều là hàng chính hãng, bảo hành đầy đủ. Bạn muốn xem những model nào?',
        'Các điện thoại mới nhất đã có sẵn! Bạn có thích iPhone hay Samsung?',
        'Tất cả điện thoại đều đi kèm bảo hành chính hãng 12 tháng và hỗ trợ miễn phí.'
    ],
    'laptop|macbook|dell|asus|máy tính': [
        'Laptop của chúng tôi rất mạnh và hiệu năng cao! 💻 Có MacBook Air, Dell XPS, và nhiều dòng khác.',
        'Bạn đang tìm laptop để làm việc hay chơi game? Tôi có thể giúp bạn chọn cái phù hợp nhất!',
        'MacBook Air M2 và Dell XPS 13 là những bestseller của chúng tôi. Bạn quan tâm không?',
        'Tất cả laptop đều có SSD nhanh và RAM đủ để xử lý các công việc nặng.'
    ],
    'thời trang|quần|áo|dress|clothes': [
        'Thời trang của chúng tôi luôn cập nhật theo xu hướng mới! 👔 Từ áo thun, quần jeans đến váy dạ tiệc.',
        'Chúng tôi có bộ sưu tập quần áo cho cả nam và nữ. Bạn muốn xem những kiểu nào?',
        'Áo thun nam, quần jeans nữ, váy dạ tiệc - tất cả đều có sẵn với giá hợp lý!',
        'Tất cả các sản phẩm thời trang đều được kiểm tra chất lượng kỹ lưỡng trước khi gửi đi.'
    ],
    'phụ kiện|tai nghe|headphone|airpods|watch': [
        'Phụ kiện của chúng tôi rất đa dạng! 🎧 AirPods Pro, Sony WH-1000XM5, Apple Watch và nhiều thứ khác.',
        'Bạn cần tai nghe hay phụ kiện khác? Chúng tôi có tất cả!',
        'AirPods Pro 2 và Apple Watch Series 9 đang được giảm giá đặc biệt!',
        'Tất cả phụ kiện đều tương thích với các thiết bị phổ biến.'
    ],
    'thanh toán|payment|pay|chi tiền|cách thanh toán': [
        'Hiện tại chúng tôi hỗ trợ nhiều phương thức thanh toán. 💳 Bạn có thể thanh toán bằng thẻ tín dụng, chuyển khoản, hoặc ví điện tử.',
        'Thanh toán rất an toàn và bảo mật ở cửa hàng của chúng tôi. Vui lòng liên hệ với đội hỗ trợ để được tư vấn!',
        'Chúng tôi chấp nhận: Thẻ Visa, Mastercard, chuyển khoản ngân hàng, Momo, ZaloPay.',
        'Thanh toán hoàn toàn an toàn với công nghệ mã hóa SSL mới nhất.'
    ],
    'giao hàng|shipping|deliver|vận chuyển|giao': [
        'Chúng tôi giao hàng nhanh chóng đến tất cả các khu vực! 🚚 Vui lòng liên hệ để biết chi phí giao hàng cụ thể.',
        'Giao hàng miễn phí cho đơn hàng trên 500.000đ. Hãy hỏi tôi để biết thêm chi tiết!',
        'Thời gian giao hàng thường là 1-3 ngày tùy theo khu vực. Tôi có thể giúp bạn theo dõi đơn hàng!',
        'Chúng tôi hợp tác với các công ty vận chuyển uy tín nhất.'
    ],
    'khuyến mại|discount|sale|giảm giá|ưu đãi': [
        '🎉 Chúng tôi thường xuyên có các chương trình khuyến mại hấp dẫn! Hãy quay lại để xem các ưu đãi mới nhất.',
        'Chúng tôi có nhiều sản phẩm đang giảm giá lên đến 50%. Bạn nên kiểm tra thường xuyên để không bỏ lỡ các deal tốt!',
        'Các thành viên thân thiết có quyền lợi khuyến mại đặc biệt. Bạn muốn tham gia không?',
        'Hàng tuần chúng tôi cập nhật các sản phẩm giảm giá mới. Hãy theo dõi để không bỏ lỡ!'
    ],
    'trả hàng|hoàn tiền|refund|return|đổi hàng': [
        '♻️ Chúng tôi có chính sách hoàn trả 30 ngày không có điều kiện! Nếu không hài lòng, bạn có thể hoàn trả hoặc đổi sản phẩm khác.',
        'Bạn có 30 ngày để trả lại sản phẩm nếu không hài lòng. Chúng tôi sẽ hoàn lại tiền đầy đủ!',
        'Chính sách đổi trả rất dễ dàng. Chỉ cần liên hệ với chúng tôi và cung cấp hóa đơn mua hàng.',
        'Sản phẩm phải còn nguyên vẹn và chưa sử dụng để đủ điều kiện hoàn trả.'
    ],
    'bảo hành|warranty|hỏng hóc': [
        '✅ Tất cả sản phẩm điện tử đều có bảo hành chính hãng 12 tháng! Nếu sản phẩm bị lỗi, chúng tôi sẽ sửa hoặc thay mới.',
        'Bảo hành bao gồm các lỗi kỹ thuật nhưng không bao gồm thiệt hại do con người gây ra.',
        'Quá trình bảo hành rất nhanh chóng. Thường chỉ cần 3-5 ngày để xử lý.',
        'Chúng tôi sẽ chi trả toàn bộ chi phí sửa chữa nếu sản phẩm còn trong thời hạn bảo hành.'
    ],
    'cảm ơn|thank|thanks|quá tuyệt': [
        'Không có gì! 😊 Chúc bạn mua sắm vui vẻ!',
        'Rất vui được giúp bạn! Hãy quay lại nếu bạn cần hỗ trợ thêm.',
        'Cảm ơn bạn đã tin tưởng chúng tôi! 🎊 Hẹn gặp lại bạn.',
        'Mình cảm ơn bạn! Hy vọng bạn sẽ hài lòng với sản phẩm! ❤️'
    ],
    'chất lượng|quality|tốt|chắc chắn': [
        '✅ Chất lượng sản phẩm của chúng tôi được đảm bảo 100%! Tất cả sản phẩm đều qua kiểm định kỹ lưỡng.',
        'Chúng tôi chỉ bán những sản phẩm chất lượng cao từ các hãng uy tín. Bạn có thể yên tâm!',
        'Mỗi sản phẩm đều có bảo hành và chính sách hoàn trả trong 30 ngày nếu không hài lòng.',
        'Tất cả hàng hóa đều qua kiểm tra chất lượng nghiêm ngặt trước khi bán cho bạn.'
    ],
    'hỗ trợ|help|trợ giúp|support|liên hệ': [
        '📞 Đội hỗ trợ của chúng tôi sẵn sàng giúp bạn 24/7! Bạn cần giúp gì?',
        'Tôi có thể giúp bạn với bất kỳ câu hỏi nào về sản phẩm, giá cả, hoặc đơn hàng!',
        'Nếu bạn cần hỗ trợ bổ sung, vui lòng liên hệ với chúng tôi qua email hoặc điện thoại!',
        'Chúng tôi có email hỗ trợ và hotline sẵn sàng phục vụ bạn mọi lúc.'
    ],
    'tìm|search|cần gì': [
        'Bạn đang tìm cái gì? Tôi có thể giúp bạn tìm sản phẩm nhanh chóng! 🔍',
        'Bạn muốn tìm điện thoại, laptop, hay thời trang?',
        'Hãy cho tôi biết bạn tìm gì, tôi sẽ gợi ý những sản phẩm tốt nhất cho bạn!'
    ],
    'tư vấn|advice|gợi ý|chọn': [
        'Tôi rất vui được tư vấn cho bạn! 💡 Bạn có thể cho biết budget và nhu cầu của bạn không?',
        'Tôi sẽ giúp bạn chọn sản phẩm phù hợp nhất với nhu cầu của bạn!',
        'Hãy cho tôi biết bạn muốn dùng nó để làm gì, tôi sẽ gợi ý những option tốt nhất!'
    ],
    'mới|new|hàng mới': [
        '🆕 Chúng tôi luôn cập nhật những sản phẩm mới nhất trên thị trường!',
        'Sản phẩm mới được bổ sung hàng tuần. Bạn muốn xem gì?',
        'Những chiếc iPhone 15 Pro và Galaxy S24 vừa về hàng!'
    ],
    'tuyệt vời|great|awesome|hay|chất': [
        'Cảm ơn bạn! 😄 Chúng tôi luôn cố gắng cung cấp dịch vụ tốt nhất!',
        'Rất vui khi bạn hài lòng! Hãy chia sẻ với bạn bè của bạn!',
        'Chúng tôi cam kết luôn cho bạn trải nghiệm mua sắm tốt nhất!'
    ],
    'thành viên|member|tài khoản|account': [
        '👤 Bạn có thể tạo tài khoản để nhận những ưu đãi đặc biệt! Thành viên của chúng tôi được hưởng nhiều lợi ích.',
        'Đăng ký thành viên để theo dõi đơn hàng của bạn và nhận khuyến mại độc quyền!',
        'Thành viên VIP được giảm thêm 10% và miễn phí vận chuyển cho mọi đơn hàng!'
    ],
    'hỏi đáp|faq|câu hỏi|thường gặp': [
        '❓ Bạn có thể hỏi tôi về: sản phẩm, giá cả, giao hàng, thanh toán, hoàn trả, bảo hành, v.v.',
        'Tôi đây để trả lời mọi câu hỏi của bạn! Hãy cứ hỏi tôi đi.',
        'Có bất kỳ câu hỏi nào? Tôi sẽ cố gắng trả lời hết!'
    ],
    'liên hệ|email|phone|điện thoại|hotline': [
        '📧 Email: support@webbanhang.vn | 📞 Hotline: 1800-xxxx | 💬 Chat 24/7',
        'Bạn có thể liên hệ chúng tôi bằng nhiều cách. Chúng tôi sẵn sàng hỗ trợ!',
        'Hãy liên hệ chúng tôi qua email, điện thoại, hoặc chat. Chúng tôi sẽ phản hồi nhanh nhất!'
    ],
    'vận chuyển|giao nhanh|delivery|express': [
        'Chúng tôi hỗ trợ giao hàng tiêu chuẩn (1-3 ngày) và giao hàng nhanh (next day)! 🚀',
        'Giao hàng nhanh chỉ thêm 50.000đ và đảm bảo đến hôm sau!',
        'Chúng tôi giao hàng đến tất cả các quận huyện trong thành phố.'
    ],
    'đánh giá|review|rate|sao': [
        '⭐ Đánh giá của khách hàng là rất quan trọng với chúng tôi! Bạn có thể để lại đánh giá sau khi mua hàng.',
        'Khách hàng của chúng tôi rất hài lòng với chất lượng sản phẩm và dịch vụ!',
        'Bạn có thể xem các đánh giá từ khách hàng khác trước khi mua.'
    ],
    'quốc tế|nước ngoài|ship|international': [
        '🌍 Hiện tại chúng tôi chỉ giao hàng trong nước. Tuy nhiên, bạn có thể liên hệ để hỏi thêm.',
        'Chúng tôi đang phát triển dịch vụ giao hàng quốc tế. Hãy quay lại sớm!',
        'Nếu bạn ở nước ngoài, bạn có thể liên hệ để thảo luận các tùy chọn khác.'
    ],
    'hôm nay|today': [
        'Hôm nay là ngày tuyệt vời để mua sắm! 🛍️ Hãy xem những sản phẩm mới nhất của chúng tôi!',
        'Có gì đặc biệt bạn muốn tìm hôm nay?',
        'Chúng tôi có những deal đặc biệt cho bạn hôm nay! 🎉'
    ],
    'tối|đêm|sáng': [
        'Chúng tôi mở 24/7 để phục vụ bạn! 🌙 Bạn có thể mua sắm bất kỳ lúc nào.',
        'Hãy tận hưởng mua sắm online vào bất kỳ thời gian nào bạn muốn!'
    ],
    'default': [
        '😊 Tôi chưa hiểu lắm. Bạn có thể hỏi về: sản phẩm, giá cả, giỏ hàng, giao hàng, thanh toán, hoàn trả, bảo hành?',
        'Xin lỗi, bạn có thể rephrase câu hỏi của bạn? Tôi đây để giúp bạn!',
        'Tôi là chatbot hỗ trợ khách hàng. Bạn có câu hỏi gì về cửa hàng của chúng tôi không?',
        '🤔 Tôi không chắc hiểu ý bạn. Bạn có thể nói rõ hơn không?'
    ]
};

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim().toLowerCase();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        let response = botResponses['default'];
        
        // Search for matching keywords
        for (const [keywords, responses] of Object.entries(botResponses)) {
            if (keywords === 'default') continue;
            
            const keywordArray = keywords.split('|');
            if (keywordArray.some(keyword => message.includes(keyword))) {
                response = Array.isArray(responses) ? responses : [responses];
                response = response[Math.floor(Math.random() * response.length)];
                break;
            }
        }
        
        // If no match found, use random default response
        if (!response || response === botResponses['default']) {
            const defaultResponses = botResponses['default'];
            response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }
        
        addMessage(response, 'bot');
    }, 800);
}

function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}
