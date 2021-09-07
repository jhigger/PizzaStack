import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import {Grid} from '@material-ui/core';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(3)
	}
}));

export default function ApplicationForm() {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Paper className={classes.paper}>
				<Formik
					initialValues={{
						name: '',
						address: '',
						email: '',
						contact: '',
						company: '',
						purpose: '',
						location: '',
						active_passive: '',
						individual_partners: '',
						investment: ''
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.required('Required')
							.min(5, 'Full name too short')
							.max(50, 'Full name too long'),
						address: Yup.string().required('Required'),
						email: Yup.string().email('Invalid email').required('Required'),
						contact: Yup.string().required('Required'),
						company: Yup.string(),
						purpose: Yup.string().required('Required'),
						location: Yup.string().required('Required'),
						active_passive: Yup.string().required('Required'),
						individual_partners: Yup.string().required('Required'),
						investment: Yup.string().required('Required')
					})}
				>
					{({touched, errors, getFieldProps}) => (
						<form
							autoComplete="off"
							action="https://formsubmit.co/a4b713f7a49c57286bf30fff7f50de11"
							method="POST"
						>
							<input type="hidden" name="_template" value="table" />
							<input
								type="hidden"
								name="_subject"
								value="Franchise Application"
							/>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant="h5" align="center">
										APPLICATION FORM
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Complete Name"
										variant="outlined"
										name="name"
										{...getFieldProps('name')}
										error={Boolean(touched.name && errors.name)}
										helperText={touched.name && errors.name}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Home Address"
										variant="outlined"
										name="address"
										{...getFieldProps('address')}
										error={Boolean(touched.address && errors.address)}
										helperText={touched.address && errors.address}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label="Email Address"
										variant="outlined"
										name="email"
										{...getFieldProps('email')}
										error={Boolean(touched.email && errors.email)}
										helperText={touched.email && errors.email}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label="Contact Number"
										variant="outlined"
										name="contact"
										{...getFieldProps('contact')}
										error={Boolean(touched.contact && errors.contact)}
										helperText={touched.contact && errors.contact}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Company"
										variant="outlined"
										name="company"
										{...getFieldProps('company')}
										error={Boolean(touched.company && errors.company)}
										helperText={touched.company && errors.company}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="I am interested in your franchise because:"
										variant="outlined"
										multiline
										rows={3}
										name="purpose"
										{...getFieldProps('purpose')}
										error={Boolean(touched.purpose && errors.purpose)}
										helperText={touched.purpose && errors.purpose}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Area/Site location proposed (Please describe):"
										variant="outlined"
										multiline
										rows={3}
										name="location"
										{...getFieldProps('location')}
										error={Boolean(touched.location && errors.location)}
										helperText={touched.location && errors.location}
									/>
								</Grid>
								<Grid item sm={6}>
									<FormControl
										component="fieldset"
										error={Boolean(
											touched.active_passive && errors.active_passive
										)}
									>
										<FormLabel component="legend">
											I plan to be a franchisee:
										</FormLabel>
										<RadioGroup
											name="active/passive"
											{...getFieldProps('active_passive')}
										>
											<FormControlLabel
												value="Actively involved in the business"
												control={<Radio />}
												label="Actively involved in the business"
											/>
											<FormControlLabel
												value="Passive and behind the scenes"
												control={<Radio />}
												label="Passive and behind the scenes"
											/>
										</RadioGroup>
										<FormHelperText>
											{touched.active_passive && errors.active_passive}
										</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item sm={6}>
									<FormControl
										component="fieldset"
										error={Boolean(
											touched.individual_partners && errors.individual_partners
										)}
									>
										<FormLabel component="legend">
											I plan to operate the franchise:
										</FormLabel>
										<RadioGroup
											name="individual/partners"
											{...getFieldProps('individual_partners')}
										>
											<FormControlLabel
												value="As an individual"
												control={<Radio />}
												label="As an individual"
											/>
											<FormControlLabel
												value="With Partners"
												control={<Radio />}
												label="With Partners"
											/>
										</RadioGroup>
										<FormHelperText>
											{touched.individual_partners &&
												errors.individual_partners}
										</FormHelperText>{' '}
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="I can invest the total amount of (in pesos):"
										variant="outlined"
										name="investment"
										{...getFieldProps('investment')}
										error={Boolean(touched.investment && errors.investment)}
										helperText={touched.investment && errors.investment}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										size="large"
										variant="outlined"
										endIcon={<SendIcon />}
										fullWidth={true}
										type="submit"
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			</Paper>
		</Container>
	);
}
