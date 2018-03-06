import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchBook from './searchBook.js'
import * as BooksAPI from './BooksAPI'
import Book from './book.js'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books)=> {
      this.setState( {books:books} )
      console.log(books)
    })

  }

  render() {
    return (
      <div className="app">
      <Route path="/SearchPage" component={SearchBook}/>

      <Route exact path="/" render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <Book books={this.state.books.filter((b) => b.shelf === 'currentlyReading')} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                  <Book books={this.state.books.filter((b) => b.shelf === 'wantToRead')} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                  <Book books={this.state.books.filter((b) => b.shelf === 'read')} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link
              to="/SearchPage">Add a book</Link>
          </div>
        </div>
      )}/>
      </div>
    )
  }
}

export default BooksApp
