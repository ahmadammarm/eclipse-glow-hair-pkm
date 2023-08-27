const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

// Loading
window.addEventListener("load", function () {
    setTimeout(function () {
      var aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach(function (element) {
        element.classList.add("aos-animate");
      });
    }, 5000); // Menjalankan setelah 5 detik (5000 ms)
  });

menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
});

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', windowPosition);
});

// Menutup navbar saat mengklik di luar elemen navbar
document.addEventListener('click', (event) => {
    const targetElement = event.target;

    // Periksa apakah elemen yang diklik bukan bagian dari navbar
    if (!navBar.contains(targetElement) && !menuBar.contains(targetElement)) {
        menuNav.classList.remove('menu-active');
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