import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App   from 'app/app'
import Store from 'app/store'

import * as serviceWorker from 'app/serviceWorker'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline       from "@material-ui/core/CssBaseline"
import Theme             from "themes/retro.theme.js"

ReactDOM.render(
			<Provider store={Store}>
				<ThemeProvider theme={Theme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</Provider>,  
			document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
