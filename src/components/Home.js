import video from '../assets/Advertisement.webm';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import product from '../assets/product.jpg';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';

const theme = createTheme();

theme.typography.h2 = {
	fontSize: '1.2rem',
	'@media (min-width:600px)': {
		fontSize: '1.5rem'
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '3rem'
	}
};

const useStyles = makeStyles((theme) => ({
	jumbotron: {
		position: 'relative',
		overflow: 'hidden',
		marginTop: '56px'
	},
	video: {
		width: '100%',
		display: 'block',
		maxHeight: '90vh',
		objectFit: 'cover',
		objectPosition: 'center center'
	},
	tagline: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		padding: theme.spacing(3)
	},
	text: {
		color: 'white',
		fontWeight: 'bold'
	},
	cta: {
		margin: '0 auto',
		display: 'flex',
		width: '50%',
		borderRadius: '5em',
		background: 'black'
	},
	container: {
		padding: theme.spacing(3)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Box className={classes.jumbotron}>
				<video className={classes.video} autoPlay loop muted>
					<source src={video} type="video/webm" />
				</video>
				<Box className={classes.tagline}>
					<ThemeProvider theme={theme}>
						<Typography className={classes.text} align="center" variant="h2">
							Pizza Stack is where it's at
						</Typography>
						<Typography className={classes.text} align="center" variant="h2">
							To Collect or Delivered to your door
						</Typography>
						<Button
							variant="contained"
							size="large"
							color="primary"
							className={classes.cta}
						>
							Order Here
						</Button>
					</ThemeProvider>
				</Box>
			</Box>

			<Container className={classes.container} fixed>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Typography align="center" style={{paddingTop: '50%'}}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sunt
							consequatur fuga tempore illo ipsum iste voluptatibus cupiditate?
							Dolore possimus sunt necessitatibus reprehenderit amet quas.
							Perspiciatis quas ullam voluptatum voluptate?
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<img src={product} alt="product" width="75%" />
					</Grid>
				</Grid>
			</Container>

			<Container className={classes.container} fixed>
				<Grid container spacing={5}>
					<Grid item xs={4}>
						<img src={product} alt="product" width="100%" />
					</Grid>
					<Grid item xs={4}>
						<img src={product} alt="product" width="100%" />
					</Grid>
					<Grid item xs={4}>
						<img src={product} alt="product" width="100%" />
					</Grid>
				</Grid>
			</Container>

			<Container className={classes.container} fixed>
				<Grid container spacing={3}>
					{[one, two, three, four, five, six].map((image) => {
						return (
							<Grid item xs={4} key={image}>
								<img src={image} alt="product" width="100%" />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
