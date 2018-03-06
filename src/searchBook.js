import React from 'react'
import { Link } from 'react-router-dom'
import Book from './book.js'
import * as BooksAPI from './BooksAPI'
//import propTypes from 'prop-types'

class SearchBook extends React.Component {
  state = {
    books:[],
    query:''
  }
  //This set the query state to the new input value. (the search term)
  handleChange = (e) => {
    this.setState({query:e.target.value });
  }

  //When pressing enter the searchQuery function gets invoked.
  keyPress = (e) => {
    // 13 is Enter
    if(e.keyCode === 13){
      this.searchQuery();
     }
  }

  //Makes the call to the bookAPI when the user pres enter after input value to search.
  searchQuery = () =>{
    BooksAPI.search(this.state.query).then((books)=> {
      console.log(books);
      this.setState( {books:books} )
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/#">
          </Link>
          <div className="search-books-input-wrapper">
            <input
              className="search-books"
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onKeyDown={this.keyPress}
              onChange={this.handleChange}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Book books={this.state.books}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
