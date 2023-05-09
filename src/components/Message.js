import React, { useState } from 'react'; 
import {Formik, Form} from "formik";
import TextField from './TextField';
import TextBox from "./TextBox"
import * as Yup from "yup";




 export const Message =()  =>{


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [textbox, setTextbox] = useState("")
const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              textbox: textbox,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setTextbox("");
            setMessage("Successfully submitted");
          } else {
            setMessage("Some error occured, try again later.");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    
  const validate = Yup.object({
        name:Yup.string()
        .max(15,"Must be 15 characters or less")
        .required("required"),
       email:Yup.string()
        .email("Email is invalid")
        .required("required"),
    })
   return(
    <Formik
    initialValues={{
        name:"",
        email:"",
        textbox:"",
    }}
    validationSchema={validate}
    onSubmit={values => (
        console.log(values)
    )}
    >
    {formik => (
       <div>
       <h1>Contact</h1> 
       <div className="message">{message ? <p>{message}</p> : null}</div>
       {console.log(formik.values)}
       <Form onSubmit={handleSubmit}>
      <TextField placeholder="Name" name ="name" type ="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField  placeholder="Email" name ="email" type ="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextBox   placeholder= "Write a message..." name="textbox" value={textbox} onChange={(e) => setTextbox(e.target.value)}/>
      <button className='btn btn-dark mt-5' type='submit'>Send</button>
       </Form>
      
       </div> 
    )}
    </Formik>
   )
 }


export default Message;