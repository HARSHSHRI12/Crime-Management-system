import React, { useState, useRef } from "react";
import CrimeIn from "./CrimeIn";
import { BrowserRouter, useNavigate,Route, Routes,Link } from "react-router-dom";
export default function Lin() {
  
  const navigate=useNavigate();
  const [usnameerror, updusnameerror] = useState();
  const [Ecodeerror, upEcodeerror] = useState();
  const [passwerror, uppasswerror] = useState();
 
  const com1 = useRef();
  const com2 = useRef();
  const com3 = useRef();

  function login() {
    let isvalid=true;
    updusnameerror("");
    upEcodeerror("");
    uppasswerror("");

    const nameRegex = /^[^0-9]+$/;

    if (com1.current.value.length === 0) {
      updusnameerror("Enter user name!!");
      isvalid=false;
    } else if (!nameRegex.test(com1.current.value)) {
      updusnameerror("name should not start with number");
      isvalid=false;
    }
    if (com2.current.value.length === 0) {
      upEcodeerror("code is compulsory for login "); 
      isvalid=false; 
    } else if (com2.current.value.length >= 6) { 
      upEcodeerror("code must be >6");
      isvalid=false;
    }
    if (com3.current.value.length < 8) {
      uppasswerror("password must be enter");
      isvalid=false;
    }if (com3.current.value === "#harsh234" ) {
   navigate("/cin")
  }
  else{
    alert("Invalid login user!!")
  }
}
  return (
   
      
    <div >
        <div className="change">
      </div>
      <div className="container">
        <div
          className="card"
          style={{
            marginTop: "-50px",
            marginLeft: "400px",
            width: "400px",
            height: "420px",
            borderRadius: "60px",
            border: "1px solid red",
          }}
        >
          <div style={{ marginTop: "40px" }}>
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>
              UserName
            </h6>
            <input
              type="text"
              placeholder="username"
              ref={com1}
              className="form-control"
              name="username"
            />
            {usnameerror && (
              <div style={{ color: "red", marginLeft: "10px" }}>{usnameerror}</div>
            )}
            <br />
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>E-Code</h6>
            <input
              type="code"
              placeholder="Employee-code"
              ref={com2}
              className="form-control"
              name="code"
            />
            <div style={{ color: "red", marginLeft: "10px" }}>{Ecodeerror}</div>
            <br />
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>
              Password
            </h6>
            <input
              type="password"
              placeholder="Password"
              ref={com3}
              className="form-control"
              name="password"
            />
            <div style={{ color: "red", marginLeft: "10px" }}>{passwerror}</div>
            <br />
          </div>
          <span
            style={{ marginLeft: "250px", marginBottom: "50px" }}
            className="fa fa-user"
          >
            &nbsp;
            <button style={{ width: "100px" }} className="btn btn-primary" onClick={login}>
              Login
            </button>  
          </span>
        </div>
      </div>
    </div> 
  );
 }