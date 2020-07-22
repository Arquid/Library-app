import React from 'react';
import './App.css';
import BookForm from './components/BookForm';
import ForLoan from './components/ForLoan';
import Loaned from './components/Loaned';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			booksForLoan: [],
			loanedBooks: [],
			id: 100
		}
	}

	addBookToList = (book) => {
		book.id = this.state.id;
		let tempList = this.state.booksForLoan.concat(book);
		let tempId = this.state.id+1;
		this.setState({
			booksForLoan: tempList,
			id:tempId
		})
	}

	loanBookFromLibrary = (id) => {
		let tempId = parseInt(id,10);
		let tempArr = this.state.loanedBooks.concat(this.state.booksForLoan.filter(book => book.id === tempId));
		let tempList = this.state.booksForLoan.filter(book => book.id !== tempId)
		this.setState({
			booksForLoan: tempList,
			loanedBooks: tempArr
		})
	}

	returnBookToLibrary = (id) => {
		console.log("id:" + id)
		let tempId = parseInt(id,10);
		let tempArr = this.state.booksForLoan.concat(this.state.loanedBooks.filter(book => book.id === tempId));
		let tempList = this.state.loanedBooks.filter(book => book.id !== tempId)
		this.setState({
			loanedBooks: tempList,
			booksForLoan: tempArr
		})
	}

  	render() {
    	return (
      		<div className="App">
				<BookForm addBookToList={this.addBookToList}/>
				<h1>Books for loan:</h1>
				<ForLoan booksForLoan={this.state.booksForLoan}
						loanBookFromLibrary={this.loanBookFromLibrary}
				/>
				<h1>Loaned books:</h1>
				<Loaned loanedBooks={this.state.loanedBooks} 
						returnBookToLibrary={this.returnBookToLibrary}
				/>
      		</div>
    	);
  	}  
}

export default App;
