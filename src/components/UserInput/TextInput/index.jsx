import {CustomTextField} from './index.styles.js'
const TextInput = ({responseStatus, type,name, label, formControll, autocomplete}) => {
  return (
    <CustomTextField  error={responseStatus} fullWidth type={type}  autoComplete={autocomplete} name={name}  label={label} {...formControll} color="warning" variant="filled" />
  )
}

export default TextInput