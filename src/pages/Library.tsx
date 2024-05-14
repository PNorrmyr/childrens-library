import Book from "../components/Book/BookItem"
import BookList from "../components/Library/BookList"

function Library() {
  return (
    <section className="Library">
        <h1>8 Classic Children Books</h1>

        <section className="book-wrapper">

            <BookList />

        </section>
      
    </section>
  )
}

export default Library
