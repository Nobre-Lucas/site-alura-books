const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => button.addEventListener('click', filterBooks))

function filterBooks() {
    const buttonElement = document.getElementById(this.id)
    const category = buttonElement.value;
    console.log(category)
    let filteredBooks = category == 'disponivel' ? fillterByDisponibility() : filterByCategory(category)
    displayBooks(filteredBooks)
    if (category == 'disponivel') {
        const totalPrice = sumBookPrices(filteredBooks)
        displayDisponibleBooksTotalPrice(totalPrice)
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function fillterByDisponibility() {
    return books.filter(book => book.quantidade > 0);
}

function displayDisponibleBooksTotalPrice(totalPrice) {
    disponibleBooksTotalPriceElement.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
        </div>
    `
}