'use client'
import React from 'react'
import'../../style.css'
import '../../globals.css'


function Videos() {


    return (
 
     <div style={{marginTop:"50px"}}>
        <section className="sign" id="sign">
             <form method="get" className="personal-form" >
            <div className="form-row">
                <input name="Title" type="text" placeholder="Please Enter your title" style={{width:"100%"}} />
            </div>
            <div className="form-row">  
                    <select name="choosed"style={{width:"100%"}} type="select" >
                        <option value="Select the Category">Select the Category </option>
                        <option value="Biography">Biography </option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Literary Collections">Literary Collections </option>
                        <option value="English Classics">English Classics</option>     
        </select>
                </div>
            <div className="form-row">
                <textarea name="News" type="text" placeholder="About this Video Information ..."style={{width:"100%"}} ></textarea>
            </div>
            {/* value={data.author} onChange={handlechange} onSubmit={handleSubmit}  value={data.bookimg} onChange={handleimgchange} value={value} onChange={seletedoption}*/}
            <div className="form-row">
          
                 <div className="Image" style={{width:"100%"}} >Drop Here News Videos
                        <input className="ChoosdImage" type="file" name="file" style={{width:"100%"}}  />
                </div>
               </div>
                <div className="form-rows"style={{float:'right',margin:"0px"}}>  
                <button type="submit" >Add Videos</button>
            </div>
            
        </form>
        </section>
        </div>
       
    )
}

export default Videos
