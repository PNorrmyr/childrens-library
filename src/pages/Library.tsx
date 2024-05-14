import BookList from "../components/Library/BookList"
import BookType from '../models/Book'

type Props = {
  bookList : BookType[],
  setSelectedBookId : (id : number | undefined) => void
}

function Library({ bookList, setSelectedBookId } : Props) {
  return (
    <section className="Library">
        <h1>8 Classic Children Books</h1>

        <section className="book-wrapper">
            <BookList 
              setSelectedBookId = { setSelectedBookId }
              bookList = { bookList } 
            />
        </section>
    </section>
  )
}

export default Library
