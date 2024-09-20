import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>

        {/* Class1：CS1234 React JS */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />

        {/* Class2：MS5001 Maths */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5001/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>MS5001 Maths</h5>
              <p className="wd-dashboard-course-title">Discrete Strcutures</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />

        {/* Class3：CS5002 Python */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5002/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS5002 Python</h5>
              <p className="wd-dashboard-course-title">Basic Computer Science</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />

        {/* Class4：CS5004 OOD */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5004/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS5004 OOD</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />

        {/* Class5：CS5008 Data Structure */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5008/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS5008 Data Structure</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />
        
        {/* Class6：CS5200 Database */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5200/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS5200 Database</h5>
              <p className="wd-dashboard-course-title">Database</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />

        {/* Class7：CS5800 Algorithm */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5800/Home">
            <img src='/background.jpeg' width={200} />
            <div>
              <h5>CS5800 Algorithm</h5>
              <p className="wd-dashboard-course-title">Algorithm</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}