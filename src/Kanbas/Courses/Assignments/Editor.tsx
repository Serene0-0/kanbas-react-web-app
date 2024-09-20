import React from 'react';

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should include the following: 
        Your full name and section Links to each of the lab assignments Link to the Kanbas application 
        Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor='wd-group'>Assignment Group</label>
            </td>
            <td>
              <select id='wd-group'>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor='wd-display-grade-as'>Display Grade As</label>
            </td>
            <td>
              <select id='wd-display-grade-as'>
                <option value="Points">Points</option>
                <option value="Pass/NoPass">Pass/NoPass</option>
                <option selected value="Percentage">Percentage</option>
              </select>  
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor='wd-submission-type'>Submission Type</label>
            </td>
            <td>
              <select id='wd-submission-type'>
                <option value="In Class">In Class</option>
                <option value="External Tool">External Tool</option>
                <option selected value="Online">Online</option>
              </select>  
            </td>
          </tr>
          <br />

          <tr>
            <td></td>
            <td>
              <label>Online Entry Options</label><br />

              <input type='checkbox' name='check-online-entry'id='wb-text-entry'/>
              <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br />

              <input type='checkbox' name='check-online-entry'id='wb-website-url'/>
              <label htmlFor="wd-chkbox-website-url">Website URL</label><br />

              <input type='checkbox' name='check-online-entry'id='wb-meida-recordings'/>
              <label htmlFor="wd-chkbox-meida-recordings">Meida Recordings</label><br />

              <input type='checkbox' name='check-online-entry'id='wb-student-annotation'/>
              <label htmlFor="wd-chkbox-student-annotation">Student Annotation</label><br />

              <input type='checkbox' name='check-online-entry'id='wb-chkbox-file-uploads'/>
              <label htmlFor="wd-chkbox-file-uploads">File Uploads</label><br />  
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>  
            </td>
            <td>
              <label>Assign to</label><br />
              <input id='wd-assign-to' value="Everyone"/>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label>Due</label><br />
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label>Available from</label><br />
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
            <td>
              <label>Until</label><br />
              <input type="date" id="wd-available-until" value="2024-05-20" />  
            </td>
          </tr>
        </table>
      </div>
  );}
  