let buttonSortByPrice = document.getElementById('btnOrdenarPorPreco')

buttonSortByPrice.addEventListener('click', sortBooksByPrice)

function sortBooksByPrice() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco)
    displayBooks(sortedBooks)
}