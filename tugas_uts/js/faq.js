const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.faqs-tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Hapus semua class aktif
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Tambahkan class aktif ke tab dan konten yang sesuai
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
