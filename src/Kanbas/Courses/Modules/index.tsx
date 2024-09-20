import { useState } from "react";

export default function Modules() {
    const [collpased, setCollapsed] = useState(false);
    const [publishDropdownVisible, setPublishDropdownVisible] = useState(false);


    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
            {/* button: Collapse All */}
            <button id="wb-handle-collapseAll" onClick={() => setCollapsed(true)}>
                Collapse All 
            </button>
            {/* button: View Progress */}
            <button id="wb-view-progress" onClick={() => alert('Viewing progress...')}>
                View Progress 
            </button>
            {/* button: Publish All */}
            <select id="wd-select-publish">
                <option value="Private All">Private All</option>
                <option value="Publish Selected">Publish Selected</option>
                <option value="Private Selected">Private Selected</option>
                <option selected value="Publish All">Publish All</option>
            </select>
            {/* button: +Module */}
            <button id="wd-add-module" onClick={() => alert('Adding a new module...')}>
                + Module
            </button>    
        </div>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                </ul>
            </li>
            <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
            </li>
            </ul>
          </li>

          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
            <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
            </li>
            <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and Lists</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
            </li>
            </ul>
        </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  