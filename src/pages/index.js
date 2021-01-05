import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    
   

  <div class="container-fluid">
     <h1><span class="h3">Introduction to Front End Client Development using React</span></h1>
    <h2><span class="h2">Syllabus</span></h2>
    <div class="h4">Introduction</div>
    <p>
       This course provides an introduction to the development of single page Web-based applications (SPA's) using Javascript for the front end client. We will be devloping applications using a micro-service architecture pattern and discussing throughout the evolution of web application architectures and current trends.  
    </p>

    <div class="h4">Prerequisites</div>
    <p>
      <strong>Prerequisite</strong> &rarr; C- or better in CMSC 330
         and permission of department<br />
      <strong>Credits</strong> &rarr; 1<br />
    </p>


<div class="h4">Course Coordinators</div>
    <div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-condensed text-center">
     <thead>
  <tr>
<th class="text-center">Name</th>
           <th class="text-center">Office Number</th>
              </tr>
     </thead>

     <tbody>
  <tr>
     <td>Andrej Rasevic (Course Instructor)</td>
        <td>TBD</td>
  </tr>
  <tr>
     <td><a href="http://www.cs.umd.edu/~anwar">Dr. Anwar Mamat (Course Supervisor)</a></td>
      <td></td>
  </tr>
     </tbody>

        </table>
    </div> 


<div class="h4">Learning Resources</div>
<ul>
  <li>Javascript Language</li>
    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN web docs</a></li>
      <li><a href="https://eloquentjavascript.net/">Eloquent Javascript</a></li>
      <li><a href="http://speakingjs.com/es5/index.html">Speaking Javascript</a></li>
      <li><a href="http://exploringjs.com/es6/index.html">Exploring ES6</a></li>
      <li><a href="https://javascript.info/">The Modern Javascript Tutorial</a></li>
    </ul>
  <li>React</li>
    <ul>
      <li><a href="https://reactjs.org/">Official React Docs</a></li>
    </ul>
  <li>Node/Express/Mongo DB</li>
</ul>

<div class="h4">Course Topics (Subject to Change)</div>
<ul>
  <li>HTML5 overview</li>
    <ul>
      <li>Basic Elements</li>
      <li>Tables</li>
      <li>Lists</li>
      <li>Forms</li>
      <li>Canvas</li>
    </ul>
  <li>
    <ul>
      <li>CSS selectors</li>
      <li>Styling React Components</li>
    </ul>
  </li>  
  <li>Introduction to Javascript 
    <ul>
      <li>Variables, data types, expressions, operators</li>
      <li>Conditional, iteration, statements</li>
      <li>Functions</li>
      <li>Arrays</li>
      <li>Protypes, Inheritance and Object-Oriented JS</li>
      <li>ES6 syntax and features</li>
      <li>Modular Javascript</li>
      <li>DOM, Events, Events Handling</li>
      <li>Javascript Event Loop, asychronous programming</li>
      <li> Functional programming paradigms in Javascript</li>
      <li>Promises, Async Await</li>
    </ul>
  </li>
  <li>Client Side Javascript
    <ul>
      <li>Introduction to React</li>
      <li>Class Components vs Function Components</li>
      <li>Component composition in React</li>
      <li>Props, State and Data Flow in React</li>
      <li>React Lifecyle Events</li>
      <li>React Forms</li>
      <li>3rd party data requests using Fetch & Axios</li>
    </ul>
  </li>
  <li>Miscellaneous</li>
</ul>


<div class="h4">Grading</div>
    <div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-condensed text-center">
           <tbody>
        <tr><th>100%</th><td>Projects / Exercises</td></tr>
           </tbody>
        </table>
     </div> 
    <p>
 Once we have graded any class material (e.g., exams, projects, etc.)
 we will post an announcement and a deadline by which you must submit
 any regrade request (if necessary).  <strong>It is your responsibility
 to submit regrade requests by the specified deadline; no regrade
 requests will be processed afterwards.</strong>
    </p>


<div class="h4">Projects</div>
    <ul>
        <li><strong>Deadlines</strong> -
     All projects are due at <strong>11:59 pm</strong> on the specified day
     in the project description.  You have until <strong>11:59 pm</strong> of
     the next day to submit your project with a <strong>12% </strong>
 penalty.  Notice that after the late period, you will not receive
any points for your project, even though you still need to satisfy
the good faith attempt (see information below).  <strong>For example,
if a project is due on Wednesday at 11:59 pm, you have until Thursday
at 11:59 pm to submit a late project with a 12% penalty.  Any submission
after Thursday 11:59 pm will receive 0 pts. </strong>
        </li>

        <li><strong>Project Submission</strong> -
     We will be using Gitlab to distribute course material to you as well as receive your project submissions. Upon completing any assignment and pushing to your repo, please login to <a href="https://gitlab.cs.umd.edu">the university gitlab server</a> and navigate to your course repo and verify that your changes are there.
        </li>

        <li><strong>Which Project Gets Graded</strong> -
           Your grade for an project will be based on the submission with
the highest score after the late penalty (if any) has been applied.
        </li>

        <li><strong>Good Faith Attempt</strong> -
     You must satisfy a minimum set of requirements for each project
     (Good Faith Attempt) otherwise you will not pass the course (automatic
     grade of F). Each project defines its own good faith attempt
     criteria and a deadline to provide an implementation that satisfies
it.  If you start a project on time, and look for assistance
(if required) you should have no problems satisfying the Good Faith
Attempt.  The Good Faith Attempt guarantees you have the skills
necessary for upper-level courses. <strong>Notice that you will not
receive extra points for completing the good faith attempt. The
grade you obtain for a project will be based on your ontime/late
submission. </strong>
        </li>

        <li><strong>Closed Projects</strong> -
     All programming assignments in this course are to be written
individually (unless explicitly indicated otherwise).  Cooperation
between students is a violation of the Code of Academic Integrity.
       </li>
    </ul>


<div class="h4">Regarding Posting of Project Implementations</div>
    <ul>
       <li>
          Do not post your assignments' implementation online (e.g.,
GitHub, PasteBin) where they can be seen by others.  Making your
code accessible to others can lead to academic integrity violations.
       </li>

       <li>
    Posting of your projects in a private repository where only selected
people (e.g., potential employers) can see them is OK. Just make
sure is not a public site. Your course repo is not a public site.
       </li>

 <li>
    Even if the course is over, do not make your code publicly available
    to others.
 </li>

       <li>We constantly monitor online sources.</li>
    </ul>


<div class="h4">TA Room/Office Hours</div>
<p>
 Office hours get extremely busy the day before a project deadline.
 Therefore do not wait to start your projects.  Regarding office
 hours and the TA Room:
</p>
    <ul>
 <li>
     Once you have been helped by a TA please leave the TA room.  We
     have a large number of students in all of our classes and the TA
           room is really crowded.
       </li>

 <li>
     If there is a line of students waiting, a TA should spent at most
           5 minutes with a student.  Please remind TAs about this rule.
       </li>
</ul>

<strong>Piazza</strong>
<p>
 We will be using Piazza for class
 communication. You are able to register yourself by visiting
 the following url: <a href="https://piazza.com/umd/spring2021/cmsc388a">Piazza Signup</a>.
</p>


<div class="h4">Excused Absence and Academic Accommodations</div>
<p>
 See the section titled "Attendance, Absences, or Missed Assignments"
 available at<a href="http://www.ugst.umd.edu/courserelatedpolicies.html"> Course Related Policies</a>.
    </p>



<div class="h4">Disability Support Accommodations</div>
<p>
 See the section titled "Accessibility" available at
 <a href="http://www.ugst.umd.edu/courserelatedpolicies.html"> Course
 Related Policies</a>.
</p>



<div class="h4">Academic Integrity</div>
<p>
  Note that academic dishonesty includes not only cheating, fabrication,
  and plagiarism, but also includes helping other students commit acts of
  academic dishonesty by allowing them to obtain copies of your work. In
  short, all submitted work must be your own.  Cases of academic dishonesty
  will be pursued to the fullest extent possible as stipulated by the
  <a href="https://www.studentconduct.umd.edu/"> Office of Student Conduct</a>.
    </p>

<p>
  It is very important for you to be aware of the consequences of cheating,
  fabrication, facilitation, and plagiarism. For more information on
  the Code of Academic Integrity or the Student Honor Council, please
  visit <a href="http://www.shc.umd.edu">http://www.shc.umd.edu</a>.
</p>

<p>
  The CS Department takes academic integrity seriously.  Information on how
  the CS Department views and handle academic integrity matters can be
  found at <a href="http://www.cs.umd.edu/class/resources/academicIntegrity.html"> Academic Integrity.</a>
</p>

<p>
        The following are examples of academic integrity violations:
    </p>
<ul>
 <li>
    Hardcoding of results in a project assignment.  Hardcoding
refers to attempting to make a program appear as if it works
correctly (e.g., printing expected results for a test).
 </li>

 <li>
Using any code available on the internet/web or any other
source.  For example, using code from Sourceforge.
 </li>

 <li>
Hiring any online service to complete an assignment for you.
 </li>

 <li>
Sharing your code or your student tests with any student.
 </li>

 <li>
      Using online forums (other than our Slack group or our Piazza account) in order to ask for
help regarding our assignments.
       </li>
</ul>

<p>
Additional information can be found in the sections titled
"Academic Integrity" and "Code of Student Conduct" available at
      <a href="http://www.ugst.umd.edu/courserelatedpolicies.html"> Course Related Policies</a>.
    </p>


<div class="h4">Miscellaneous</div>
<ul>

 <li>
    At the end of the semester visit (<a href="http://www.courseevalum.umd.edu">www.courseevalum.umd.edu</a>) to complete your course evaluations.
     </li>

 <li>
      If you are experiencing difficulties in keeping up with the academic
demands of this course, you may contact the
<a href="http://www.counseling.umd.edu/LAS"> Learning Assistance
Service</a> located at 2202 Shoemaker Building.
 </li>

       <li>
      UMD Course related policies can be found at
<a href="http://www.ugst.umd.edu/courserelatedpolicies.html"> http://www.ugst.umd.edu/courserelatedpolicies.html</a>
     </li>
    </ul>


<div class="h4">Copyright</div>
<p>
 All course materials are copyright UMCP, Department of Computer Science
 &copy; 2020.  All rights reserved. Students are permitted to use course
 materials for their own personal use only. Course materials may not be
 distributed publicly or provided to others (excepting other students in
 the course), in any way or format.
</p>

</div> 



    <Link 
      to="/schedule/" 
    >
      Course Schedule
    </Link>
  </Layout>
)

export default IndexPage
