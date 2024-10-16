import { useEffect } from 'react'
import {CustomTextField} from './index.styles.js'
const TextInput = ({responseStatus, type,name, label, formControll, autocomplete, error}) => {
  useEffect(()=>{
    if(error){
      focus(error?.ref)
    }
  }, [error])
  return (
    <CustomTextField helperText={error?.message ? error?.message : " "} error={responseStatus} fullWidth type={type}  autoComplete={autocomplete} name={name}  label={label} {...formControll} color="warning" variant="filled" />
  )
}

export default TextInput