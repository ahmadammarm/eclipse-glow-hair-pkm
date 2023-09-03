const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

let isMenuActive = false; // Track whether menu is active or not

// Scrolling tidak ada ketika loading
// Hide scrollbars
document.documentElement.style.overflow = "hidden";

// Function to hide loading screen and show content
function hideLoadingScreenAndShowContent() {
  // Your existing code to hide the loading screen

  // Show scrollbars again
  document.documentElement.style.overflow = "visible";
}

// Wait for content to load and then call the function
window.addEventListener("load", function () {
  setTimeout(hideLoadingScreenAndShowContent, 5000);
});

// Loading
window.addEventListener("load", function () {
  setTimeout(function () {
    var aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach(function (element) {
      element.classList.add("aos-animate");
    });
  }, 5000); // Menjalankan setelah 5 detik (5000 ms)
});

menuBar.addEventListener("click", () => {
  if (!isMenuActive) {
    menuNav.classList.add("menu-active");
    isMenuActive = true;
  } else {
    menuNav.classList.remove("menu-active");
    isMenuActive = false;
  }
});

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

// Menutup menu saat mengklik di luar elemen navbar dan menu-bar
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  // Periksa apakah elemen yang diklik bukan bagian dari navbar atau menu-bar
  if (!navBar.contains(targetElement) && !menuBar.contains(targetElement)) {
    menuNav.classList.remove("menu-active");
    isMenuActive = false;
  }
});

// Fungsi untuk menghilangkan loading setelah 2 detik
function hideLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
}

function hideLoadingScreenAndShowHome() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContainer = document.querySelector(".main-container");

  // Menghilangkan loading screen
  loadingScreen.style.display = "none";

  // Menampilkan bagian Home dengan menghapus class "active" dari bagian lain
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById("home").classList.add("active");

  // Mengaktifkan konten utama
  mainContainer.style.display = "block";
}

// Menunggu konten website selesai dimuat
window.addEventListener("load", function () {
  // Setelah 2 detik, panggil fungsi hideLoadingScreenAndShowHome untuk menghilangkan loading dan menampilkan bagian Home
  setTimeout(hideLoadingScreenAndShowHome, 5000);
});

document.getElementById("aboutButton").addEventListener("click", function () {
  // Mengarahkan pengguna ke bagian "about" saat tombol diklik
  window.location.href = "#about";
});

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuCardImgs = document.querySelectorAll(".menu-card-img");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  menuCardImgs.forEach((img) => {
    img.addEventListener("click", (event) => {
      const card = img.closest(".menu-card");
      const productName = card.querySelector(".menu-card-title").textContent;

      popup.querySelector("#popup-title").textContent = productName;
      popup.classList.add("active");
    });
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".testimoni-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
  });
});