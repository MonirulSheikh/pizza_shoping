import React,{useState} from 'react'
import {Button, Container,Form} from "react-bootstrap"
import {useDispatch} from "react-redux"
import {LoginAction} from "../actions/userActions"
const Login = () => {

const dispatch=useDispatch()
    const [user, setUser] = useState({email:"",password:""})

    const OnchangeInput=(e)=>{
const {name,value}=e.target

setUser({...user,[name]:value})
    }
    const loginHandeler=(event)=>{
        const {email,password}=user
event.preventDefault()
dispatch(LoginAction(email,password))
    }
    return (
        <>
           <Container>
<Form>
    <Form.Group className="mb-3">

    <Form.Label>Email</Form.Label>

    <Form.Control placeholder="Inter Your Email" type="email" value={user.email} name="email" onChange={OnchangeInput}>
        
    </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3">

    <Form.Label>password</Form.Label>

    <Form.Control placeholder="Inter Your password" value={user.password} name="password" onChange={OnchangeInput}>
        
    </Form.Control>
    </Form.Group>
    <Button variant="primary" onClick={loginHandeler}>Login</Button>
    
</Form>
           </Container>
        </>
    )
}

export default Login
