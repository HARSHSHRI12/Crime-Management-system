
import React, { useEffect,useState } from 'react'
import axios from "axios";
export default function EFir() {
  var [table_data,updatetabledata]=useState();
  var [uname,updateuname]=useState()
  var [ct,updatecity]=useState()
  function funInsert(){
    axios.post("http://localhost:7706/insertdata",{uname:uname,city:ct}).then(function(res){
alert(res.data.result)
    })
  }
  function funget(){
  axios.get("http://localhost:7706/getdata").then(function(dt){
  updatetabledata(
    dt.data.map((onerow)=>{
      return(
        <tr>
          <td>{onerow.uname}</td>
          <td>{onerow.city}</td>
        </tr>
      );
    })
  )
})
  }
  useEffect(function(){
    funget();
  },[])
 
  return (
    <div>
    <div class="container">
    <input type='text' className='form-control' placeholder='username' value={uname} onChange={(t)=>updateuname(t.target.value)}/>
    <br/>
    <input type='text' className='form-control' placeholder='city' onChange={(t)=>updatecity(t.target.value)}/>
    <br/>
    <input type='button' value="Insert" className='btn btn-primary' onClick={funInsert}/>
    <br/>
    <table className='table table-striped'>
    <thead>
      <th>
        Username
      </th>
      <th>
        City
      </th>
    </thead>
    <tbody>
      {table_data}
    </tbody>
    </table>
    </div>
   
    </div>
  );
}
