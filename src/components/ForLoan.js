import React from 'react';
import {Table, Button} from 'semantic-ui-react';


export default class ForLoan extends React.Component {
    
    loanBookFromLibrary = (id) => {
        this.props.loanBookFromLibrary(id);
    }

    removeBookFromLibrary = (id) => {
        this.props.removeBookFromLibrary(id);
    }

    render() {
        let books = this.props.booksForLoan.map((book) => { 
            return (
            <Table.Row key={book.id}>
                <Table.Cell>{book.name}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.pages}</Table.Cell>
                <Table.Cell>{book.genre}</Table.Cell>
                <Table.Cell><Button 
                        name={book.id}
                        onClick={() => this.loanBookFromLibrary(book.id)}
                >Loan</Button></Table.Cell>
                <Table.Cell><Button
                        name={book.id}
                        onClick={() => this.removeBookFromLibrary(book.id)}
                >Remove</Button></Table.Cell>
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
                        <Table.HeaderCell>Loan</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {books}
                </Table.Body>
            </Table>
        )
    }
}