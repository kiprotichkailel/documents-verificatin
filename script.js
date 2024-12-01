// script.js
function searchDocuments() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const documentItems = document.querySelectorAll('.document-item');

    documentItems.forEach(item => {
        const documentName = item.querySelector('a').textContent.toLowerCase();
        if (documentName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
