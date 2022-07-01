import React from "react";
import PropTypes from 'prop-types';

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        update: PropTypes.func.isRequired
    }

    render() {
        const { book, update } = this.props;
        const { imageLinks, title, authors, shelf} = book;
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : ''}")` }}></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => {update(book, event.target.value)}}
                        value={shelf ? shelf : 'none'}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{title ? title : 'Unknown'}</div>
                <div className="book-authors">{authors ? authors.join(' & ') : 'Unknown'}</div>
            </div>
        );
    }
}

export default Book;