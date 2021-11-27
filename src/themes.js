import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'

const lightGreen = green[300]

let retro = createMuiTheme({

	palette: {
	    type: 'dark',
		primary: green,
		secondary: orange,
		background: {default : "black"}
	},
	status: {
		danger: 'yellow'
	},
	 overrides: {

		MuiPaper: {
			root : {
				color: lightGreen,
				backgroundColor: "black",
			}
		},

		MuiCard: {
			root : {
				width : "40vw",
				marginLeft:"30vw",
				height : "40vh",
				marginTop:"30vh"
			}
		},

 		MuiInputBase: {
			input : {
				color: lightGreen
			},
			label : {
				color: lightGreen
			},			

		},
		
		MuiInputLabel: {
			root : {
				color: lightGreen
			},

		},

		MuiButton: {
			text: {
				color: lightGreen
			}
		},

		MuiTypography: {
			colorPrimary: {
				color : lightGreen
			}
		}
  	}
})

retro = responsiveFontSizes(retro)

export {retro}