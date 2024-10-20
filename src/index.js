import askQuestion from "./askQuestion.js"
import { addBook, search, borrow, returnBook, libraryCatalog } from "./library.js"
let exit = false
do {
  printMenu()
  const choice = await askQuestion("Enter the number for the command: ")
  console.log(`Your choice was ${choice}`)
  switch (choice) {
    case '1': {
      const title = await askQuestion("What's the title?")
      const author = await askQuestion("Who authored the book?")
      const category = await askQuestion("What category?")
      addBook(title, author, category)
      break
    }
    case '2':
      console.log(libraryCatalog)
      break
    case '3': {
      const searchTitle = await askQuestion('Which title are you looking for?')
      const result = search(searchTitle)
      console.log(result)
      break
    }
    case '4': {
      const borrowTitle = await askQuestion('Which title do you want to borrow?')
      borrow(borrowTitle)
      break
    }
    case '5': {
      const borrowedTitle = await askQuestion("What's the title of the book to return")
      returnBook(borrowedTitle)
      break
    }
    case 'x':
      console.log("Thank you for using our library. Exiting.")
      exit = true
      break
    default:
      console.log('Unrecognized command. Please try again!')
  }
} while (!exit)

process.exit()

function printMenu () {
  console.log("Welcome to the library. What do you want to do?")
  console.log("1) Add a book")
  console.log("2) print list of books")
  console.log("3) search in title and author")
  console.log("4) borrow book by title")
  console.log("5) return borrowed book")
}
