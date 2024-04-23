

const darkModeToggle = document.getElementById('darkModeToggle');

// Butona tıklama olayını dinle
darkModeToggle.addEventListener('click', () => {
    // body etiketine 'dark-mode' sınıfını ekle veya çıkar
    document.body.classList.toggle('dark-mode');
});