import React from "react";
import './resume.css';
export default function Resume() {
  return (
    <>
    <div className="resume">
    <img src="kavyansh photo.jpeg" alt="my" class="profile"/>
    
        <h1>KAVYANSH SINGHAL</h1>
        <p>

            <b>E-mail:</b>  kavyasinghal9@gmail.com  |
            <b>Phone no:</b>  7017041909  |
            <b>Residence:</b>  Agra,India<br/>
            <b>linkdin:</b><a href="https://www.linkedin.com/in/kavyansh-singhal-982931368/">  Kavyansh's linkedin </a> |
            <b>github:</b><a href="https://github.com/Kavyansh1501">  Kavyansh's github </a>
        </p><br />
    </div>
    <hr />

<center>
    <h2>About Me</h2>
    </center>
    <p> Third-year B.Tech Computer Science student at Anand Engineering College, Sharda University, Agra, with a strong
interest in software development and emerging technologies. Passionate about building practical solutions,
continuously learning new tools, and improving problem-solving skills.Alongside technical interests, actively
involved in content creation, combining creativity with technology to communicate ideas effectively. Seeking
opportunities to apply skills, grow professionally, and contribute to impactful projects </p>
<hr />

<h2>Education</h2>
 <div className="table">
    <table border="2" width="100%" cellpadding="8" cellspacing="0">
        <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Percentage</th>
        </tr>
        <tr align="center">
            <td>B.tech CSE</td>
            <td>Anand Engineering College</td>
            <td>2023-27</td>
            <td>71% present</td>
            
        </tr>
        <tr align="center">
            
            <td>12th</td>
            <td>Milton Public School</td>
            <td>2023</td>
            <td>72%</td>
            
        </tr>
        <tr align="center">
            
            <td>10th</td>
            <td>St.Francis Convent School</td>
            <td>2021</td>
            <td>92%</td>
            
        </tr>
    </table></div>

<hr />

<h2>Technical Skills</h2>
<div className="skills">
    <ul>
        <li><b>Programming Languages:</b><span className="pl"> Java, C++, C</span></li>
        <li><b>Web Technologies:</b><span className="wt"> HTML,CSS</span></li>
        <li><b>Core Computer Science Concepts:</b><span className="cc"> Data Structures & Algorithms (Basics + Practice in Java), Object-Oriented
          Programming (OOP), Problem Solving & Logical Thinking </span></li>
        <li><b>Development tools and platforms</b><span className="dt"> Git & GitHub ,Visual Studio Code, Command Line Basics</span></li>
        <li><b>Currently learning:</b><span className="cl"> Advanced Data Structures using Java, Competitive Programming Concepts,React,Node Js</span></li>
    </ul></div>
    <hr />
    <h2>Projects</h2>

    <div className="project">

    <h3><ul><li>Food ingredients- suggestion website</li></ul></h3>
    <p><ol>Designed and developed a basic state special food suggestion website using HTML & CSS.<br />
Focused on clean UI, product presentation, and beginner-friendly design</ol></p>
<h3><ul><li>C++ Mini Projects:</li></ul></h3>

<p><ol>Implemented multiple programs in C++ using OOPS concepts.<br />
Projects include basic  logic-based programs to strengthen problem-solving  skills</ol></p>
<ul>
    <li>Bank management system</li>
    <li>store management system</li>
    <li>Student library, etc.</li>
</ul>
</div>
<hr />

<h2>Hobbies & Interest</h2>
<div className="hobby">

<ul>
    <li>Football & Volleyball(profesionaly)</li>
    <li>Content creation & Writing</li>
    <li>Videography & Photography</li>
    <li>Learning new tech & Innovation</li>
</ul>
</div>
<hr />

<h2>Languages</h2>
<div className="language">
    <ol>
    <li>English</li>
    <li>Hindi</li>
</ol>
</div>
</>
  );
}