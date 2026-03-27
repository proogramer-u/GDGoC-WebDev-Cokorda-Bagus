// Toggle dark mode
const toggleBtn = document.getElementById('toggleDark');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        // Simpan preferensi dark mode di localStorage
        if(document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    // Cek preferensi dark mode saat load
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
        alert('Nama dan email wajib diisi!');
        return;
    }
    alert('Terima kasih, ' + name + '! Pesanmu sudah terkirim.');
    form.reset();
});
