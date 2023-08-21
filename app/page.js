import React from 'react'
import './globals.css'
import Link from 'next/link'



function Page() {


  return (
    <>
       <div className="containter">
        <div className="left">
          <h1>Cricnote</h1>
          <ul className="menu">
            <li><Link href="Admin/Login">Users</Link></li>
            <li><Link href="Admin/News">Add News</Link></li>
            <li><Link href="Admin/LatestNews">Latest News</Link></li>
            <li><Link href="Admin/Videos">Add Videos</Link></li>
            <li><Link href="Admin/LatestVideo"> Latest Videos</Link></li>
          </ul>
        </div>
        <div className="right">
          <div>
            <table >
              <tr>
                <td>Title</td>
                <td>Description</td>
                <td>NewsImg</td>
                <td>Action</td>
              </tr>
            </table>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Page
