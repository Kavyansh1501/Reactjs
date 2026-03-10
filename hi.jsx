import React from "react";
import { useState } from "react";
import "./resume.css";

export const Hi = () => {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [linkedin,setLinkedin] = useState("");
  const [github,setGithub] = useState("");
  const [about,setAbout] = useState("");
  const [education,setEducation] = useState("");
  const [college,setCollege] = useState("");
  const [percentage,setPercentage] = useState("");
  const [skills,setSkills] = useState("");
  const [projects,setProjects] = useState("");

  const fun1=(e)=>{
    setName(e.target.value);
  };

  const fun2=(e)=>{
    setPhone(e.target.value);
  };

  const fun3=(e)=>{
    setEmail(e.target.value);
  };

  const fun4=(e)=>{
    setLinkedin(e.target.value);
  };

  const fun5=(e)=>{
    setGithub(e.target.value);
  };

  const fun6=(e)=>{
    setAbout(e.target.value);
  };

  const fun7=(e)=>{
    setEducation(e.target.value);
  };

  const fun11=(e)=>{
    setCollege(e.target.value);
  };

  const fun8=(e)=>{
    setPercentage(e.target.value);
  };

  const fun9=(e)=>{
    setSkills(e.target.value);
  };

  const fun10=(e)=>{
    setProjects(e.target.value);
  };

  return (
    <div>

<h1>Enter Resume Details</h1>

<input type="text" placeholder="Name" value={name} onChange={fun1}/>
<input type="text" placeholder="Phone" value={phone} onChange={fun2}/>
<input type="text" placeholder="Email" value={email} onChange={fun3}/>
<input type="text" placeholder="Linkedin" value={linkedin} onChange={fun4}/>
<input type="text" placeholder="Github" value={github} onChange={fun5}/>
<input type="text" placeholder="About" value={about} onChange={fun6}/>
<input type="text" placeholder="Education" value={education} onChange={fun7}/>
<input type="text" placeholder="College" value={college} onChange={fun11}/>
<input type="text" placeholder="Percentage" value={percentage} onChange={fun8}/>
<input type="text" placeholder="Skills" value={skills} onChange={fun9}/>
<input type="text" placeholder="Projects" value={projects} onChange={fun10}/>

<hr/>

<div className="resume">

<h1>{name}</h1>

<p>
<b>E-mail:</b> {email} |
<b>Phone no:</b> {phone} |
<b>Linkedin:</b> {linkedin} |
<b>Github:</b> {github}
</p>

</div>

<hr/>

<center>
<h2>About Me</h2>
</center>

<p>{about}</p>

<hr/>

<h2>Education</h2>

<table border="2" width="100%" cellPadding="8">

<tr>
<th>Qualification</th>
<th>Institution</th>
<th>Percentage</th>
</tr>

<tr align="center">
<td>{education}</td>
<td>{college}</td>
<td>{percentage}</td>
</tr>

<tr align="center">
<td>{education}</td>
<td>{college}</td>
<td>{percentage}</td>
</tr>

<tr align="center">
<td>{education}</td>
<td>{college}</td>
<td>{percentage}</td>
</tr>

</table>

<hr/>

<h2>Technical Skills</h2>

<ul>
<li>{skills}</li>
<li>{skills}</li>
<li>{skills}</li>
<li>{skills}</li>

</ul>

<hr/>

<h2>Projects</h2>

<ul>
<li>{projects}</li>
<li>{projects}</li>
<li>{projects}</li>
</ul>

</div>
  );
};