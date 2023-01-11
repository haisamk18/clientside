import React, { useState } from 'react';
import Newsdata from './Newsdata';
import Navbarm from './Navbar';
import './News.css'


const News = () => {
    const [value,setValue]=useState('')
   
    console.log(value);

    const Searchm =() => {
        if (Newsdata[0].news.includes(value)){
            alert("Yes");
        }
        if (Newsdata[1].news.includes(value)){
            alert("Yes");
        }
        else {
            alert("no")
        }
        
    }


    
  return (
    <div style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/ysupport.png)`}}>
        <Navbarm/>
        <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
          <input type='text' className='inp' onChange={(e)=> setValue(e.target.value)}/>
          <button className='btn' onClick={Searchm} ><span style={{color:"white",fontWeight:'500'}}>Search</span></button>
        </div>
        
       
        
        {Newsdata.filter((e)=> {
            if (value===''){
                return e
            }
            else if (e.news.includes(value) || e.title.includes(value)) {
                return (<div>{e.title}</div>)
            }
            
        }).map((e)=> {
            return (<div id={e.id} className='maindiv'>

                <h3 className='title'>{e.title}</h3>
                {e.img &&  <div className='image' style={{width:"100%",height:"400px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/${e.img})`}}></div>}
                
                <p className='textnews'>{e.news}</p>
                
            </div>)
        })}
        <div className='sorry'>Sorry, No match found</div>
    </div>
  )
}

export default News