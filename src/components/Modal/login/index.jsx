import Button from "../../Button"
import { InnerModal } from "../style"
const Login = ({modalFunction}) => {
  return (
    <InnerModal>
      <Button text="register" type="primary" modalFunction={modalFunction} dataType="register" />
    </InnerModal>
  )
}

export default Login