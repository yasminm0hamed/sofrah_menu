const carousels = document.querySelectorAll(".products-carousel");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".products-track");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let currentIndex = 0;

  function moveCarousel() {
    const cards = carousel.querySelectorAll(".product-card");

    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    const move = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(${move}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const cards = carousel.querySelectorAll(".product-card");

    const visibleCards = parseInt(
      getComputedStyle(track).getPropertyValue("--visible-cards"),
    );

    const maxIndex = cards.length - visibleCards;

    if (currentIndex < maxIndex) {
      currentIndex++;
      moveCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveCarousel();
    }
  });
});

const orderForm = document.getElementById("order-form");

const customerName = document.getElementById("customerName");

const customerOrder = document.getElementById("customerOrder");

const orderNotes = document.getElementById("orderNotes");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values from inputs
  const name = customerName.value.trim();

  const order = customerOrder.value.trim();

  const notes = orderNotes.value.trim();

  // WhatsApp number
  const phoneNumber = "201061789925";

  // Create message
  const message = `
        السلام عليكم، أريد عمل طلب من مطعم سُفرة 🍽️

        الاسم: ${name}

        الطلب:
        ${order}

        ملاحظات:
        ${notes || "لا توجد ملاحظات"}

        شكرًا ❤️
        `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});
