import React,{useState} from 'react'
import {Container,Button,Form} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import {RegisterAction} from "../actions/userActions"
const Register = ({history}) => {
    const dispatch=useDispatch()

const [user, setUser] = useState({fname:"",email:"",cpass:"",password:""
})
const OnchaneHandeler=(e)=>{
const {value,name}=e.target
setUser({...user,[name]:value})
}
const users=useSelector((x)=>x.userEntry)
const {success,error,loading}= users

const RegisterHandeler=(e)=>{
   e.preventDefault()
   const {fname,email,cpass,password}=user
   dispatch(RegisterAction(fname,email,password,cpass))
  //  if(success){
  //   history.push("/login")
   
  //  }

}
    return (
        <>
             <Container>
        <Form aria-autocomplete={true}>
          <h1>Regiteration </h1>
          <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter name"
              name="fname" onChange={OnchaneHandeler}
              value={user.fname}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={OnchaneHandeler}
           />
             
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={OnchaneHandeler}
             name="password"
             value={user.password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={OnchaneHandeler}
              name="cpass"
              value={user.cpass}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary"  onClick={RegisterHandeler}>
            Register
            
          </Button>
        </Form>
      </Container>
        </>
    )
}

export default Register
