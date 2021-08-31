import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	list: {
		width: 250
	},
	links: {
		display: 'flex',
		justifyContent: 'space-evenly'
	},
	socials: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end'
	}
}));

const links = ['Home', 'Menu', 'Franchise', 'About', 'Contact'];

export default function SwipeableTemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{links.map((link) => (
					<ListItem button key={link} component={RouterLink} to={`/${link}`}>
						<ListItemText primary={link} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar position="sticky" style={{background: 'black'}}>
				<Toolbar>
					<Box display={{xs: 'block', md: 'none'}}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer('left', true)}
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<SwipeableDrawer
						anchor={'left'}
						open={state['left']}
						onClose={toggleDrawer('left', false)}
						onOpen={toggleDrawer('left', true)}
					>
						{list('left')}
					</SwipeableDrawer>

					<Typography variant="h6" className={classes.title}>
						Pizza Stack
					</Typography>
					<Box display={{xs: 'none', md: 'block'}} className={classes.title}>
						<Box className={classes.links}>
							{links.map((link) => {
								return (
									<Typography variant="overline" key={link}>
										<Link
											color="inherit"
											underline="none"
											component={RouterLink}
											to={`/${link}`}
										>
											{link}
										</Link>
									</Typography>
								);
							})}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
}
