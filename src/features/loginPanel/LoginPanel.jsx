import React from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { useSelector, useDispatch } from 'react-redux'
import {
  logon,
  // eslint-disable-next-line
  logoff,
  setUsername,
  setPassword,
  // eslint-disable-next-line
  logonAsync,
  selectUsername,
  selectPassword
} from './login.slice'

function LoginPanel () {

	const username = useSelector(selectUsername);
	const password = useSelector(selectPassword);
  	const dispatch = useDispatch();

	return (

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
								value={username}
								onChange={e => dispatch(setUsername(e.target.value))}
							/>
						</FormControl>

						<br></br>
		

						<FormControl>
							<TextField id="password" 
								placeholder="Password"
								type="password"
								variant="outlined"
								value={password} 
								onChange={e => dispatch(setPassword(e.target.value))}
							/>
						</FormControl>

					</FormGroup>

				</CardContent>
				
				<CardActions>
					<Button
						onClick={() =>
							dispatch(logon({username: username,password: password}))
						}						
						>
						Login
					</Button>
					<Button
						onClick={() =>
							dispatch(logon({username: username,password: password}))
						}						
						>
						Google Login
					</Button>
				</CardActions>
			
			</Card>


	)
		
}
export default LoginPanel