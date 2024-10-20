import { addBook, clear, search, libraryCatalog } from '../src/library'

describe('Library System', () => {
  it('should be empty at start', () => {
    expect(libraryCatalog).toEqual([])
  })
  it('should add a book to the library catalog', () => {
    addBook('1984', 'George Orwell', 'novel')
    expect(libraryCatalog).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
  it('should add a second book', () => {
    addBook('The great adventures of PO Bengtsson', 'Lisa Bengtsson', 'fiction')
    expect(libraryCatalog[1]).toEqual({ title: 'The great adventures of PO Bengtsson', author: 'Lisa Bengtsson', category: 'fiction' })
  })
  describe('when having two books', function () {
    describe('when serching for a title that exists in the library', () => {
      it('finds one of the books', () => {
        clear()
        const title = 'some title'
        const author = 'author'
        const category = 'fiction'
        addBook(title, author, category)
        const expectedTitle = 'some other title'
        const expectedAuthor = 'another author'
        const expectedCategory = 'friction'
        addBook(expectedTitle, expectedAuthor, expectedCategory)
        const actualBook = search(expectedTitle)
        expect(actualBook).toEqual([{ title: expectedTitle, author: expectedAuthor, category: expectedCategory }])
      })
      it('finds the other books too', () => {
        clear()
        const expectedTitle = 'some title'
        const expectedAuthor = 'author'
        const expectedCategory = 'fiction'
        addBook(expectedTitle, expectedAuthor, expectedCategory)
        const title = 'some other title'
        const author = 'another author'
        const category = 'friction'
        addBook(title, author, category)
        expect(search(expectedTitle)).toEqual([{ title: expectedTitle, author: expectedAuthor, category: expectedCategory }])
      })
    })
  })
})
