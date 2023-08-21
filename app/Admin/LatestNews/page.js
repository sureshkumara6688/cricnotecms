'use client'

import React from 'react'
import'../../style.css'
import '../../globals.css'
import { useState,useEffect } from "react";
import axios from "axios";
function LatestNews() {
  const [receive, setReceive] = useState([{information:'',title:'',Category:'',newsimg:''}])
  
  useEffect(() => {
    axios.get("http://localhost:6688/api/cricnote/newslist")
      .then(res => {
        setReceive(res.data);
      })
  }, [])
  console.log(receive)
    return (
       
        <div className="right">   
          <div>
            
            <table >
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>LatestNews</th>
                <th>Action</th>
              </tr>
            </table>
        </div>
              {receive?.length > 0 && receive.map((item, index) => {
          return <>
              <table>
            <tr key={index} className='help'>
          <td>{item.title}</td>
          <td>{item.information}</td>
          <td><img src={item.newsimg} alt='news'style={{width:"200px",height:"200px"
        }}/></td>
          <td>Action</td>
        </tr>
      </table>
          </>
      })}
          <div> 
          </div>
        </div>   
     
    )
}

export default LatestNews
