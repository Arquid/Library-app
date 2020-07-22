import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export default class Loaned extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = {
			loanIndex:-1
		}
	}
    
    returnBookToLibrary = (id) => {
        console.log(id)
        this.props.returnBookToLibrary(id);
    }

    render() {
        let books = this.props.loanedBooks.map((book) => { 
            return (
            <Table.Row key={book.id}>
                <Table.Cell>{book.name}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.pages}</Table.Cell>
                <Table.Cell>{book.genre}</Table.Cell>
                <Table.Cell><Button 
                        name={book.id}
                        onClick={() => this.returnBookToLibrary(book.id)}
                >Return</Button></Table.Cell>
            </Table.Row>
            )
        })
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Pages</Table.HeaderCell>
                        <Table.HeaderCell>Genre</Table.HeaderCell>
                        <Table.HeaderCell>Return</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {books}
                </Table.Body>
            </Table>
        )
    }
}