import { useParams } from "react-router-dom"
import BookArticle from "../components/Book/BookArticle"
import BookType from '../models/Book'

type Props = {
  bookList : BookType[]
}

function DetailedView({ bookList } : Props) {
  const { id } = useParams()

  let bookId : number
  if( id !== undefined) {
    bookId = parseInt(id)
  }
  
  
  
  const book : BookType | undefined = bookList.find(book => book.id === bookId)
  console.log(`Boken är  ${book?.id}` );
  

  if(!book) {
    return <section>Book not found</section>
  }
  
  return (
    <div>
      <BookArticle book = { book } />
    </div>
  )
}

export default DetailedView
