import React from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
	return (
		<Paper
			elevation={2}
			square={true}
			style={{
				padding: '5vh',
				paddingTop: '20vh'
			}}
		>
			<Box align="center">
				<IconButton
					color="inherit"
					component="a"
					href="https://www.facebook.com/PizzaStackTM"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookIcon />
				</IconButton>
				<IconButton
					color="inherit"
					component="a"
					href="https://www.instagram.com/pizza_stack_ph/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<InstagramIcon />
				</IconButton>
			</Box>
			<Typography align="center">
				© Pizza Stack 2021. All Rights Reserved.
			</Typography>
		</Paper>
	);
}
