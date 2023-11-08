'use client'

import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {update, addHello} from "../../redux/userSlice"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(addHello(update({name,email})))
    }

  return (
    <section>
        <h2>Register</h2>
        <form>
            <input placeholder={user.name}
            onChange={(e) => setName(e.target.value)}

            />
            <input
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}

            />
            <button onClick={handleUpdate}>Update</button>
        </form>
    </section>
  )
}

export default Register