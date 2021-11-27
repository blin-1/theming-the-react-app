import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'

const lightGreen = green[400] //Fluorescent green
const black = 'black'

const baseColors = {
	color: lightGreen,
	backgroundColor: black,
}

let retro = createMuiTheme({

	palette: {
	    type: 'dark',
		primary: green,
		secondary: orange,
		background: {default : black}
	},
	status: {
		danger: 'yellow'
	},
	 overrides: {

		MuiPaper: {
			root : baseColors
		},

		MuiTabs: {
			root : baseColors
		},

 		MuiCard: {
			root : {
				width : "50%",
				marginLeft: "25%",
				height : "50%",
				marginTop: "10%"
			}
		},

 		MuiInputBase: {
			input : baseColors
		},
		
		MuiInputLabel: {
			root : baseColors

		},

		MuiButton: {
			text: baseColors
		},

		MuiTypography: {
			colorPrimary: baseColors
		}
  	}
})

retro = responsiveFontSizes(retro)

export {retro}