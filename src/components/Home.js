import video from '../assets/Advertisement.webm';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import product from '../assets/product.jpg';
import pizza1 from '../assets/pizza1.webp';
import pizza2 from '../assets/pizza2.webp';
import pizza3 from '../assets/pizza3.webp';

function importAll(r) {
	return r.keys().map(r);
}

const images = importAll(
	require.context('../assets/gallery', false, /\.(png|jpe?g|webp)$/)
);

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
		overflow: 'hidden'
	},
	video: {
		width: '100%',
		display: 'block',
		maxHeight: '90vh',
		objectFit: 'cover',
		objectPosition: 'center center'
	},
	backdrop: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		height: '100%',
		background: 'black',
		opacity: 0.2
	},
	tagline: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		padding: theme.spacing(3),
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontWeight: 'bold'
	},
	cta: {
		margin: '5% auto',
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
		color: 'black'
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
				<Box className={classes.backdrop} />
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
					<Grid item md={6}>
						<Box
							display="flex"
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							<Typography align="center">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
								sunt consequatur fuga tempore illo ipsum iste voluptatibus
								cupiditate? Dolore possimus sunt necessitatibus reprehenderit
								amet quas. Perspiciatis quas ullam voluptatum voluptate?
							</Typography>
						</Box>
					</Grid>
					<Grid item md={6}>
						<img src={product} alt="product" width="100%" />
					</Grid>
				</Grid>
			</Container>

			<Box className={classes.container} bgcolor="black">
				<Grid container spacing={5}>
					<Grid item md={4}>
						<img src={pizza1} alt="product" width="100%" />
					</Grid>
					<Grid item md={4}>
						<img src={pizza2} alt="product" width="100%" />
					</Grid>
					<Grid item md={4}>
						<img src={pizza3} alt="product" width="100%" />
					</Grid>
				</Grid>
			</Box>

			<Container className={classes.container} fixed>
				<Grid container spacing={3}>
					{images.map((image, i) => {
						return (
							<Grid item md={6} key={i}>
								<img src={image.default} alt="product" width="100%" />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
