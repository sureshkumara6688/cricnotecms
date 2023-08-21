"use client"

import React from 'react'
import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import'../../style.css'
import '../../globals.css'

function Login() {
    return (
        
        <section className="sign" id="sign">
        <div className="personal-form-header">
            <h1 className="headingin"> Cricnote Admin Portal</h1>
        </div>
        <form method="get" className="personal-form" >
            <div className="form-row">
                <label >UserName</label>
                <input name="title" type="text" placeholder="Please Enter your Username" />
            </div>
            <div className="form-row">
                <label >Password</label>
                <input name="author" type="text" placeholder="Please Enter your Password" />
            </div>
            {/* value={data.author} onChange={handlechange} onSubmit={handleSubmit}  */}
            <div className="form-rows"style={{float:'right'}}>
                <button type="submit" >Register</button>
                <button type="submit" >Login</button>
            </div>
        </form>
    </section>
 
    )
}

export default Login
