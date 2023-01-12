import {useState} from "react"
import {useDispatch} from "react-redux"
import {userSignUp} from '../slices/userSlice'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserSignUpForm({setShowLogIn}) {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(userSignUp(username, password, passwordConfirm, email))
    }

    return(
        <Form className="row gx-2 gy-6 align-items-center" onSubmit={handleSubmit} >
            <Form.Label>Sign up for account</Form.Label>
            

            <Form.Group className="mb-3" >
                <Form.Control type="input" placeholder="Username"
                value={username} onChange={e=> setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="input" placeholder="email (optional)"
                value={email} onChange={e=> setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="col-6 mb-3" >
                <Form.Control type="password" placeholder="password"
                value={password} onChange={e=> setPassword(e.target.value)} />
            </Form.Group>    

            <Form.Group className="col-6 mb-3" >
                <Form.Control type="password" placeholder="confirm password"
                value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)} />
            </Form.Group>

            <Button className="col-6" variant="primary" type="submit"> Sign Up </Button>
            &emsp; 

            <Button className="col-5" variant="outline-secondary" onClick={()=> setShowLogIn(true)} type="input" >
                Back to Log in
            </Button>
        </Form>
    )
}

export default UserSignUpForm;