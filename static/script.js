const form = document.getElementById('add-form');
const list = document.getElementById('book-list');

async function loadBooks() {
    const res = await fetch('/api/books');
    const books = await res.json();
    list.innerHTML = books.map(b => `<li>${b.title} — ${b.author} (${b.year || '—'}) <button data-id="${b.id}">Удалить</button></li>`).join('');
    document.querySelectorAll('#book-list button').forEach(btn => {
        btn.addEventListener('click', async () => {
            await fetch(`/api/books/${btn.dataset.id}`, { method: 'DELETE' });
            loadBooks();
        });
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, year: year ? parseInt(year) : null })
    });
    form.reset();
    loadBooks();
});

loadBooks();
