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
			loanedBooks: []
		}
	}

	componentDidMount() {
		this.getBookList();
		this.getLoanedBookList();
	}

	getBookList = () => {
		let request = {
			method: "GET",
			mode: "cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/booksforloan", request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						booksForLoan: data
					})
				}).catch(error => {
					console.log("Failed to parse JSON. Reason: " + error);
				})
			} else {
				console.log("Server responsed with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

	addBookToList = (book) => {
		let request = {
			method: "POST",
			mode: "cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(book)
		}
		fetch("/api/booksforloan", request).then(response => {
			if(response.ok) {
				this.getBookList();
			} else {
				console.log("Server responded with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

	getLoanedBookList = () => {
		let request = {
			method: "GET",
			mode: "cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/loanedbooks", request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						loanedBooks:data
					})
				}).catch(error => {
					console.log("Failed to parse JSON. Reason: " + error);
				})
			} else {
				console.log("Server responsed with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

	loanBookFromLibrary = (id) => {
		let request = {
			method: "PUT",
			mode: "cors",
			headers: {"Content-type":"application/json"}
		}
		fetch("/api/booksforloan/"+id, request).then(response => {
			if(response.ok) {
				this.getBookList();
				this.getLoanedBookList();
			} else {
				console.log("Server responded with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

	removeBookFromLibrary = (id) => {
		let request = {
			method: "DELETE",
			mode: "cors",
			headers: {"Content-type":"application/json"}
		}
		fetch("/api/booksforloan/"+id, request).then(response => {
			if(response.ok) {
				this.getBookList();
				this.getLoanedBookList();
			} else {
				console.log("Server responded with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

	returnBookToLibrary = (id) => {
		let request = {
			method: "PUT",
			mode: "cors",
			headers: {"Content-type":"application/json"}
		}
		fetch("/api/loanedbooks/"+id, request).then(response => {
			if(response.ok) {
				this.getLoanedBookList();
				this.getBookList();
			} else {
				console.log("Server responded with status: " + response.status);
			}
		}).catch(error => {
			console.log("Server responsed with an error: " + error);
		})
	}

  	render() {
    	return (
      		<div className="App">
				<BookForm addBookToList={this.addBookToList}/>
				<h1>Books for loan:</h1>
				<ForLoan booksForLoan={this.state.booksForLoan}
						loanBookFromLibrary={this.loanBookFromLibrary}
						removeBookFromLibrary={this.removeBookFromLibrary}
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
