import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
const Schedule = () => (
  <Layout>
    <div class="container-fluid">
	  <h1><span class="h3">Schedule (Subject to Change)</span></h1>
    <p>
	  </p>
      <div class="table-responsive">
	      <table class="table table-bordered table-striped table-hover table-condensed text-center">
		      <thead>
	          <tr>
	            <th>Week</th>
	            <th>Topics</th>
	            <th>Suggested Reading</th>
	            <th>Work</th>
	          </tr>
		      </thead>

		      <tbody>
			      <tr>
              <td>Week #1<br />(January 5th)</td>
				      <td>
                HTML5, CSS, Javascript Bootcamp
				      </td>
  				    <td>
  				    </td>
  				    <td>
  				    </td>
			      </tr>
			      <tr>
              <td>Week #2<br />(January 12th)</td>
				      <td>
				      </td>
				      <td>
				      </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>Week #3<br />(January 19th)</td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
		      </tbody>
        </table>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Schedule
