import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Banner from "../../components/common/banners/Banner";
import PreLoader from "../../components/common/preloader/PreLoader";
import axios from "axios";
import { API_URL, API_ENDPOINS } from "../../constants/common";
// import JobSingle from "../JobSingle";
// import JobDetails from "../JobDetails";
const Jobs = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  async function fetchAllJobs() {
    setLoader(true);
    try {
      await axios.get(`${API_URL}${API_ENDPOINS.GET_ALL_JOBS}`).then((res) => {
        setLoader(false);
        return setData(res.data);
      });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div>
      {loader ? (
        <PreLoader />
      ) : (
        <>
          <Banner string="Our" page="Jobs" />
          {/* <JobSingle /> */}
          {/* <JobDetails /> */}
          <section className="section" id="trainers">
            <div className="container">
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      {data.map((jobItem) => {
                        return <JobCard {...jobItem} />;
                      })}
                    </div>
                  </div>
                </div>
              </>

              <nav>
                <ul className="pagination pagination-lg justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#!" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Jobs;
