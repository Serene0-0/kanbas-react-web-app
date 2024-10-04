import React from 'react';

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container">
        <div className="row">
          <div className="col-11">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1" className="form-control" />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-11">
            <textarea id="wd-description" className="form-control" rows={5}>
            The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: 
            Your full name and section Links to each of the lab assignments Link to the Kanbas application 
            Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
          </div>
        </div>
        <br />

        <div className="row mb-2">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end ms-1">
          Points </label>
        <div className="col-sm-8">
          <input id="wd-points" value={100}className="form-control float-end" />
        </div> </div>

        <div className="row mb-2">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end ms-1">
          Assignment Group </label>
        <div className="col-sm-8">
          <select id='wd-group' className="form-control form-select float-end">
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div> </div>

        <div className="row mb-2">
        <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label text-end ms-1">
          Display Grade As </label>
        <div className="col-sm-8">
          <select id='wd-display-grade-as' className="form-control form-select float-end">
              <option value="Points">Points</option>
              <option value="Pass/NoPass">Pass/NoPass</option>
              <option selected value="Percentage">Percentage</option>
          </select>
        </div> </div>

        <div className="row mb-2">
        <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end ms-1">
          Submission Type 
        </label>
          <div className="col-sm-8 p-3 border rounded">
            <div className="mb-2">
              <select id='wd-submission-type' className="form-control form-select mb-2">
                  <option value="In Class">In Class</option>
                  <option value="External Tool">External Tool</option>
                  <option selected value="Online">Online</option>
              </select>
            </div>
            <label htmlFor="wd--text-entry" className="col-sm-4 col-form-label fw-bold">
              Online Entry Options 
            </label><br />
            <div className="form-check">
              <input type='checkbox' className="form-check-input" name='check-online-entry' id='wb-text-entry'/>
              <label htmlFor="wd-chkbox-text-entry" className="form-check-label">Text Entry</label><br />
            </div><br />

            <div className="form-check">
              <input type='checkbox' className="form-check-input" name='check-online-entry' id='wb-website-url'/>
              <label htmlFor="wd-chkbox-website-url" className="form-check-label">Website URL</label><br />
            </div><br />

            <div className="form-check">
              <input type='checkbox' className="form-check-input" name='check-online-entry' id='wb-meida-recordings'/>
              <label htmlFor="wd-chkbox-meida-recordings" className="form-check-label">Media Recordings</label><br />
            </div><br />

            <div className="form-check">
              <input type='checkbox' className="form-check-input" name='check-online-entry' id='wb-student-annotation'/>
              <label htmlFor="wd-chkbox-student-annotation" className="form-check-label">Student Annotation</label><br />
            </div><br />

            <div className="form-check">
              <input type='checkbox' className="form-check-input" name='check-online-entry' id='wb-chkbox-file-uploads'/>
              <label htmlFor="wd-chkbox-file-uploads" className="form-check-label">File Uploads</label><br />  
            </div>
          </div>
        </div>

        <div className="row mb-2">
        <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label text-end ms-1">
          Assign 
        </label>
          <div className="col-sm-8 p-3 border rounded">
            <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label fw-bold">
              Assign to
            </label>
            <input id="wd-points" value="Everyone" className="form-control float-end mb-4" />
            <br />

            <label htmlFor="wd-due-date" className="col-sm-3 col-form-label fw-bold">
              Due 
            </label><br />
            <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
            <br />

            <label htmlFor="wd-available-from" className="col-sm-3 col-form-label fw-bold">
              Available from
            </label><br />
            <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
            <br />

            <label htmlFor="wd-available-until" className="col-sm-3 col-form-label fw-bold">
              Until
            </label><br />
            <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" /> 
            <br />


          </div>
        </div>

      </div>
  );
}
  