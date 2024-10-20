function addBook (title, author, category) {
  const newBook = { title, author, category }
  libraryCatalog.push(newBook)
}

function clear () {
  libraryCatalog = []
}

function search (substring) {
  return libraryCatalog.filter((book) => {
    return book.title.includes(substring) || book.author.includes(substring)
  })
}

function borrow (title) {
  const book = libraryCatalog.find((book) => title === book.title)
  if (!book) {
    console.log('Book was not found!!')
    return
  }
  if (book.onLoan) {
    console.log('Book already on loan! Come back later....')
    return
  }
  book.onLoan = true
  console.log('Book borrowed successfully. Enjoy your reading.')
}

function returnBook (bookTitle) {
  const book = libraryCatalog.find((book) => {
    return bookTitle === book.title
  })
  if (!book) {
    console.log('Book was not found!!')
    return
  }
  if (!book.onLoan) {
    console.log('Book not on loan! Consider donating it instead.')
    return
  }
  delete book.onLoan
  console.log('Book returned successfully. Come back soon!')
}

let libraryCatalog = []

export { returnBook, borrow, search, clear, addBook, libraryCatalog }
