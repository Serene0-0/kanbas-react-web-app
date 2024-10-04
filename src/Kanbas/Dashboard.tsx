import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Class1：CS1234 React JS */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src='images/reactjs.png' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Class2：MS5001 Maths */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5001/Home">
                <img src='images/MS5001.jpeg' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">MS5001 Maths</h5>
                  <p className="wd-dashboard-course-title card-text">Discrete Strcutures</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Class3：CS5002 Python */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5002/Home">
                <img src='images/CS5002.jpeg' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS5002 Python</h5>
                  <p className="wd-dashboard-course-title card-text">Basic Computer Science</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Class4：CS5004 OOD */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5004/Home">
                <img src='images/CS5004.jpeg' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS5004 OOD</h5>
                  <p className="wd-dashboard-course-title card-text">Object-Oriented Design</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Class5：CS5008 Data Structure */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5008/Home">
                <img src='images/CS5008.png' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS5008 Data Structure</h5>
                  <p className="wd-dashboard-course-title card-text">Data Structure</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Class6：CS5200 Database */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5200/Home">
                <img src='images/CS5200.png' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS5200 Database</h5>
                  <p className="wd-dashboard-course-title card-text">Database</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>


          {/* Class7：CS5800 Algorithm */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5800/Home">
                <img src='images/CS5800.jpeg' width="100%" height={160}/>
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">CS5800 Algorithm</h5>
                  <p className="wd-dashboard-course-title card-text">Algorithm</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}