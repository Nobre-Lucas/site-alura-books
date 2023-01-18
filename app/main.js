let books = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBooksFromAPI()
const bookElement = document.getElementById('livros')

async function getBooksFromAPI() {
    const response = await fetch(endpointAPI)
    books = await response.json()
    let booksWithDiscount = applyDiscount(books)
    displayBooks(booksWithDiscount)
}