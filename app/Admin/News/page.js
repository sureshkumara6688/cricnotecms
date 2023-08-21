'use client'
import { useState } from 'react';
import React from 'react'
import'../../style.css'
import '../../globals.css'
import axios from 'axios';

function News() {
    const [data, setData] = useState({ title: '', information: '',newsimg:'' })
    const [reset, setReset] = useState('')
    const [file, setFile] = useState('');
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    // category list
    const getInitialState = () => {
        const value = "Select the Category";
        return value;
    };
    const [value, setValue] = useState(getInitialState);
    const seletedoption = (e) => {
        setValue(e.target.value);
    }
    // bookimage
    const handleimgchange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    // form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Once the form has been submitted, this function will post to the backend
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('information', data.information);
        formData.append('Category', value);
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post("http://localhost:6688/api/cricnote/addnews", formData, config)
            .then(res => {
                console.log(res.data);
                console.log(formData);
            })
    }
    console.log(data)
    return (
     
        <div style={{ marginTop: "50px" }} >
            <section className="sign" id="sign">
                <form method="get" className="personal-form" onSubmit={handleSubmit} >
                    <div className="form-row">
                        <input name="title" type="text" placeholder="Please enter your title" value={data.title} onChange={handlechange} style={{ width: "100%" }} />
                    </div>
                    <div className="form-row">
                        <select name="choosed" style={{ width: "100%" }} type="select" value={value} onChange={seletedoption}>
                            <option value="Select the Category">Select the Category </option>
                            <option value="Biography">Biography </option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Literary Collections">Literary Collections </option>
                            <option value="English Classics">English Classics</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <textarea name="information" type="text" placeholder="About this news information..." style={{ width: "100%" }} value={data.information} onChange={handlechange}></textarea>
                    </div>
                    <div className="form-row">
                        <div className="Image" style={{ width: "100%" }} >Drop Here News Image
                            <input className="ChoosdImage" type="file" name="file" style={{ width: "100%" }} value={data.newsimg} onChange={handleimgchange} />
                        </div>
                    </div>
                    <div className="form-rows" style={{ float: 'right', margin: "0px" }}>
                        <button type="submit" style={{ margin: "0px" }} >Add News</button>
                    </div>
                </form>
            </section>
        </div>
   
    )
}

export default News
