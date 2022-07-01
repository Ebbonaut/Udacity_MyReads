import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksOverview from './BooksOverview'
import Search from './Search'
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }));
      });
  }

  updateBook = (book, shelf) => {
    this.setState((currentState) => {
      if (currentState.books.some(b => b.id===book.id)){
        return {
          books: currentState.books.map(b => {
            if (book.id===b.id){
              b.shelf=shelf;
            }
            return b;
          })
        }
      } else {
        book.shelf = shelf;
        return  {
          books: [...currentState.books, book]
        }
      }
    });
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksOverview
            books={this.state.books}
            update={this.updateBook}
          />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            books={this.state.books}
            update={this.updateBook}
          />
        )} />
          
      </div>
    )
    
  }
}

export default BooksApp
