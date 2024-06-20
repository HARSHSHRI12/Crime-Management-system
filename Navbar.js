import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useActionData,
} from "react-router-dom";
import Lin from "./Lin";
import C_home from "./C_home";
import EFir from "./EFir";
import axios from "axios";
export default function Navbar() {
  var [table_data, updatetabledata] = useState();
  var [uname, updateuname] = useState();
  var [ct, updatecity] = useState();
  var [ctype, upctype] = useState();
  var [age, upage] = useState();
  var [date, update] = useState();
  function funremoverow(rec){
    var obj={uname:rec.uname}
    axios
    .post("http://localhost:7706/removerecord",obj).then(
      function(response){
        alert(response.data.result)
        funget();
      }
    )
  }
  function funInsert() {
    axios
      .post("http://localhost:7706/insertdata", {
        uname: uname,
        city: ct,
        Crime: ctype,
        Age: age,
        Date: date,
      })
      .then(function (res) {
        alert(res.data.result);
        funget();
      });
  }
  function funget() {
    axios.get("http://localhost:7706/getdata").then(function (dt) {
      updatetabledata(
        dt.data.map((onerow) => {
          return (
            <tr>
              <td>{onerow.uname}</td>
              <td>{onerow.city}</td>
              <td>{onerow.Crime}</td>
              <td>{onerow.Age}</td>
              <td>{onerow.Date}</td>
              <td><span class="fa fa-trash" onClick={()=>funremoverow(onerow)}></span></td>
            </tr>
          );
        })
      );
    });
  }
  useEffect(function () {
    funget();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">CM-System</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/ch">
                    Home
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item-a" style={{ marginRight: "1100px" }}>
                  <Link class="nav-link" to="/Fr">
                    E-FIR
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item-b" style={{ marginRighleft: "1000px" }}>
                  <Link class="nav-link" to="/lin">
                    <span style={{ color: "blue" }} className="fa fa-user">
                      &nbsp;
                    </span>
                    Login
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="img">
          <marquee direction="ltr">
            <h1>Welcome to Crime System</h1>
          </marquee>
          <Routes>
            <Route path="lin" element={<Lin />} />
            <Route path="Fr" element={<EFir />} />
            <Route path="ch" element={<C_home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className="cnset">
        <div class="container">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={uname}
            onChange={(t) => updateuname(t.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="city"
            value={ct}
            onChange={(t) => updatecity(t.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Type of Crime"
            value={ctype}
            onChange={(t) => upctype(t.target.value)}
          />
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter criminal age"
            value={age}
            onChange={(t) => upage(t.target.value)}
          />
          <br />
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(t) => update(t.target.value)}
          />
          <div style={{marginTop:"5px",marginLeft:"10px"}}>
          <input
            type="button"
            value="Insert"
            className="btn btn-primary"
            onClick={funInsert}
          />
          </div>
          <br />
          <table className="table table-striped">
            <thead>
              <th>Username</th>
              <th>City</th>
              <th>Crime Type</th>
              <th>Criminal Age</th>
              <th>Date of Crime</th>
            </thead>
            <tbody>{table_data}</tbody>
          </table>
        </div>
      </div>
      <div className="footerstyle">
        <u>Contact Details</u>
        <div>
          National Cybercrime Helpline Number:{" "}
          <span class="fa-solid fa-phone"></span>&nbsp;1930
        </div>
        <div>
          <a href="https://cybercrime.gov.in/"> Cyber Crime Portal</a>
          <br />
          <a href="https://cybervolunteer.mha.gov.in/webform/Volunteer_AuthoLogin.aspx">
            {" "}
            Cyber Crime Portal Volunteer_AuthoLogin
          </a>
        </div>
        <div>
          {" "}
          <p>&copy; 2024 Crime Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
