import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { CURRENCY } from "../../constants/common";
const JobCard = (props) => {
  const { title, salary, desc, id, image } = props;
  return (
    <div className="col-md-4">
      <div className="trainer-item">
        <div className="image-thumb">
          <img src={image} alt={title} />
        </div>
        <div className="down-content">
          <span>
            <sup>{CURRENCY}</sup>
            {salary.min} - <sup>{CURRENCY}</sup>
            {salary.max}
          </span>

          <h4>{title}</h4>
          <p>{desc}</p>

          <ul className="social-icons">
            <li>
              <Link to={`/jobdetails/${id}`}>+ View More</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  salary: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
export default JobCard;
