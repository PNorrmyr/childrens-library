import Book from "../components/Book/BookItem"
import BookList from "../components/Library/BookList"

type Props = {
  setSelectedBook : (id : number | undefined) => void
}

function Library({ setSelectedBook } : Props) {
  return (
    <section className="Library">
        <h1>8 Classic Children Books</h1>

        <section className="book-wrapper">

            <BookList setSelectedBook = { setSelectedBook } />

        </section>
      
    </section>
  )
}

export default Library
