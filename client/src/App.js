import React, {Component} from 'react';
import './App.css';
import axios from 'axios'; // to process and handle any incoming requests

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setGameName: '',
			setGameDescription: '',
			setGameUrl: '',
			fetchData: [],
			newUrl: ''
		};
	}

	insertHandler = (event) => {
		let name = event.target.name;
		let val = event.target.value;
		this.setState({
			[name]: val
		});
	};

	updateHandler = (event) => {
		this.setState({
			newDesc: event.target.value
		});
	};

	componentDidMount() {
		axios.get('/api/get').then((response) => {
			this.setState({
				fetchData: response.data
			});
		});
	};

	submit = () => {
		axios.post('/api/insert', this.state).then(() => {
			alert('Posted to DB');
		});
		console.log(this.state);
		document.location.reload();
	};

	delete = (id) => {
		axios.delete(`/api/delete/${id}`);
		document.location.reload();
	};
	
	edit = (id) => {
		axios.put(`/api/update/${id}`, this.state);
		document.location.reload();
	};


	render() {
		let sect = this.state.fetchData.map((val, key) => {
			return (
				<article>
					<h3>{val.name}</h3>
					<p>{val.description}</p>
					<a href={val.url}> Go to Game </a>
					<input name='gameDescUpdate'
						onChange={this.updateHandler}
						placeholder='Rewrite Description'>
					</input>
					<button onClick={()=> { this.edit(val.id) }}>Update</button>
					<button onClick={()=> { this.delete(val.id) }}>Delete</button>
				</article>
			);
		});

		return (
			<main className='App'>
				<h1>Game Library</h1>
				<form>
					<input name='setGameName' placeholder='Game Name' onChange={this.insertHandler} />
					<input name='setGameDesc' placeholder='Description' onChange={this.insertHandler} />
					<button onClick={this.submit}>Hello</button>
				</form>

				<section>
					{sect}
				</section>
			</main>
		)
	};
}

export default App;
