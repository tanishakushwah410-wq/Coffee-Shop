 const scrollReveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 100) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', scrollReveal);

        let cart = [];
        function addToCart(name, price) {
            cart.push({name, price});
            document.getElementById('cart-count').innerText = cart.length;
            renderCart();
            const badge = document.getElementById('cart-count');
            badge.style.transform = "scale(1.5)";
            setTimeout(() => badge.style.transform = "scale(1)", 200);
        }

        function renderCart() {
            const list = document.getElementById('cart-items');
            const totalDisplay = document.getElementById('cart-total');
            list.innerHTML = cart.length === 0 ? "<p>Your cart is empty.</p>" : "";
            let total = 0;
            cart.forEach((item) => {
                total += item.price;
                list.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                </div>`;
            });
            totalDisplay.innerText = total.toFixed(2);
        }

        function toggleCart() {
            const m = document.getElementById('cart-modal');
            m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
        }

        function checkout() {
            if(cart.length === 0) return alert("Add some coffee first!");
            alert("Order received! Our baristas are on it.");
            cart = [];
            document.getElementById('cart-count').innerText = "0";
            toggleCart();
        }

        scrollReveal();