import React, { Component } from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class LoginPanel extends Component {

	constructor(props) {
		
		super(props)
		this.state = {
			username: '',
			password: ''
		};
		
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleUsername(event) {
		this.setState({username: event.target.value});
	}

	handlePassword(event) {
		this.setState({password: event.target.value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.username + " " + this.state.password);
		event.preventDefault();
	}


	render() {

		return (

			<form onSubmit={this.handleSubmit}>
				<Card>				
					<CardContent>
						<Typography color="primary" gutterBottom>
							Welcome to the Star Wars Fans Club
						</Typography>

						<br></br>
						
						<FormGroup>
						
							<FormControl>
								<TextField id="username" 
									placeholder="Username"
									variant="outlined"
									value={this.state.username} 
									onChange={this.handleUsername} 
								/>
							</FormControl>

							<br></br>
							

							<FormControl>
								<TextField id="password" 
								placeholder="Password"
								type="password"
								variant="outlined"
								value={this.state.password} 
								onChange={this.handlePassword}  
								/>
							</FormControl>

						</FormGroup>

					</CardContent>
					
					<CardActions>
						<Button 
							type="submit" >Login</Button>
					</CardActions>
				
				</Card>
			</form>

		)
		
	}

}