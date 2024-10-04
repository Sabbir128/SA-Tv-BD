document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById('searchBar');
    const contentItems = document.querySelectorAll('.content-item');

    searchBar.addEventListener('keyup', function (e) {
        const searchText = e.target.value.toLowerCase();

        contentItems.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
