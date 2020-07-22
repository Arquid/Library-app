import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class BookForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			author: "",
			pages: 0,
			Genre: ""
		}
	}

	onChange = (e) => {
		let state = {};
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	onSubmit = (e) => {
		e.preventDefault();
		let book = {
			name: this.state.name,
			author: this.state.author,
			pages: this.state.pages,
			genre: this.state.genre
		}
		this.props.addBookToList(book);
		this.setState({
			name: "",
			author: "",
			pages: 0,
			genre: ""
		})
	}

  	render() {
      	return(
          	<Form onSubmit={this.onSubmit} >
              	<Form.Field inline>
                	<label htmlFor='name'>Name:</label>
          			<input type='text' 
					  		name='name'
							onChange={this.onChange}
							value={this.state.name} />
        		</Form.Field>
        		<Form.Field inline>
					<label htmlFor='author'>Author:</label>
					<input type='text'
							name='author'
							onChange={this.onChange}
							value={this.state.author} />
        		</Form.Field>
				<Form.Field inline>
					<label htmlFor='pages'>Pages:</label>
					<input type='number'
							name='pages'
							onChange={this.onChange}
							value={this.state.pages} />
        		</Form.Field>
				<Form.Field inline>
					<label htmlFor='genre'>Genre:</label>
					<input type='text'
							name='genre'
							onChange={this.onChange}
							value={this.state.genre} />
        		</Form.Field>
				<Button onSubmit={this.onSubmit}>Add book</Button>
      </Form>
    )
  }
}