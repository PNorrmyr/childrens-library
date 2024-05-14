import BookArticle from "../components/Book/BookArticle"
import BookType from '../models/Book'

type Props = {
  bookList : BookType[]
}

function DetailedView({ bookList } : Props) {



  return (
    <div>
      <BookArticle bookList = { bookList } />
    </div>
  )
}

export default DetailedView
