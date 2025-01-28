import React, { useState } from 'react'
import '../style.css'

const FormsValidation = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const [errorUserName,setErrorUserName] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("")
    
    const [userColor,setUserColor]  = useState("")
    const [emailColor,setEmailColor] = useState("")
    const [passwordColor,setPasswordColor] = useState("")
    const [confirmPasswordColor,setConfirmPasswordColor] = useState("")

    const validateForm = (e) => 
      {
        e.preventDefault()

        if(username.length > 8)
        {
          setErrorUserName("")
          setUserColor("green")
        }
        else 
        {
          setErrorUserName("Username must 8 characters long")
          setUserColor("red")
        }

        if(email.includes("@gmail.com"))
        {
          setErrorEmail("")
          setEmailColor("green")
        }
        else
        {
          setErrorEmail("Email should have @gmail.com in it")
          setEmailColor("red")
        }

        if(password.length > 8)
          {
            setErrorPassword("")
            setPasswordColor("green")
          }
          else 
          {
            setErrorPassword("Password must 8 characters long")
            setPasswordColor("red")
          }

          if(confirmPassword.length > 8 && confirmPassword == password)
            {
              setErrorConfirmPassword("")
              setConfirmPasswordColor("green")
            }
            else 
            {
              setErrorConfirmPassword("Password and Confirm Password should be same")
              setConfirmPasswordColor("red")
            }
      }
    
  return (
    <>
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input type="text" 
                style = {{borderColor:userColor}}
                placeholder='Enter name'
                value={username} 
                onChange={e => setUsername(e.target.value)}/>
        <p className="error">{errorUserName}</p>
        <input type="text" 
                style = {{borderColor:emailColor}}
                placeholder='Enter email'
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
        <p className="error">{errorEmail}</p>
        <input type="password" 
                style = {{borderColor:passwordColor}}
                placeholder='Enter password'
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
        <p className="error">{errorPassword}</p>
        <input type="password" 
                style = {{borderColor:confirmPasswordColor}}
                placeholder='Re-enter password'
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}/>
        <p className="error">{errorConfirmPassword}</p>
        <button className="submit-btn" onClick={validateForm}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default FormsValidation