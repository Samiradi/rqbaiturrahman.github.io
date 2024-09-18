document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  navMenu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navMenu.classList.remove("show");
    }
  });

  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

  let slideIndex = 0;
  let smallSlideIndex = 0;

  const slides = document.querySelectorAll(".slide");
  const smallSlides = document.querySelectorAll(".small-slide");
  const slider = document.querySelector(".slides");
  const smallSlider = document.querySelector(".small-slides");

  slides[slideIndex].classList.add("active");

  function showSlides() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }

  function updateSmallSlidePosition() {
    const offset = smallSlideIndex * -100;
    smallSlider.style.transform = `translateX(${offset}%)`;
  }

  setInterval(() => {
    showSlides();
  }, 9000);

  const navLeft = document.querySelector(".slide-nav.left");
  const navRight = document.querySelector(".slide-nav.right");

  navLeft.addEventListener("click", function () {
    smallSlideIndex--;
    if (smallSlideIndex < 0) {
      smallSlideIndex = smallSlides.length - 1;
    }
    updateSmallSlidePosition();
  });

  navRight.addEventListener("click", function () {
    smallSlideIndex++;
    if (smallSlideIndex >= smallSlides.length) {
      smallSlideIndex = 0;
    }
    updateSmallSlidePosition();
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const buttons = document.querySelector(".image-slide-buttons");

    if (header && buttons) {
      const headerHeight = header.offsetHeight;

      if (window.scrollY > headerHeight) {
        buttons.classList.add("hidden");
      } else {
        buttons.classList.remove("hidden");
      }
    }
  });
});

// Mendapatkan elemen tombol
let topBtn = document.getElementById("topBtn");

// Ketika pengguna menggulir halaman lebih dari 20px dari atas, tampilkan tombol
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Ketika tombol diklik, gulir kembali ke atas halaman
topBtn.onclick = function () {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
};

const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0;
const totalItems = carouselItems.length;

// Fungsi untuk menampilkan item carousel berdasarkan indeks
function showCarouselItem(index) {
  // Pastikan indeks berada dalam rentang yang benar
  if (index < 0) {
    currentIndex = totalItems - 1;
  } else if (index >= totalItems) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Geser carousel berdasarkan indeks
  carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener untuk tombol sebelumnya
prevButton.addEventListener("click", () => {
  showCarouselItem(currentIndex - 1);
});

// Event listener untuk tombol berikutnya
nextButton.addEventListener("click", () => {
  showCarouselItem(currentIndex + 1);
});

// Inisialisasi: tampilkan item pertama
showCarouselItem(currentIndex);