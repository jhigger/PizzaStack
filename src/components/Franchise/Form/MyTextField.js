import React from 'react';
import {useField} from 'formik';
import TextField from '@material-ui/core/TextField';

export default function MyTextField({name, ...props}) {
	const [field, meta] = useField(name);

	return (
		<TextField
			fullWidth
			variant="outlined"
			name={name}
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
		/>
	);
}
