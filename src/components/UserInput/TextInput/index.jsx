import {useEffect} from 'react';
import {CustomTextField} from './index.styles.js';
function TextInput({responseStatus, type, name, label, formControll, autocomplete, error}) {
	useEffect(() => {
		if (error) {
			focus(error?.ref);
		}
	}, [error]);
	return <CustomTextField autoComplete={autocomplete} error={responseStatus} fullWidth helperText={error?.message ? error?.message : ' '} label={label} name={name} type={type} {...formControll} color="warning" variant="filled" />;
}

export default TextInput;
