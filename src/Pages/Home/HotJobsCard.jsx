import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HotJobsCard({ job }) {
  const {
    _id,
    title,
    location,
    salaryRange,
    company_logo,
    requirements,
    description,
    company,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex items-center gap-3 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, index) => (
            <p
              key={index}
              className="border rounded-md text-center px-2 hover:text-blue-500 hover:bg-gray-600"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} -{" "}
            {salaryRange.max} {salaryRange.currency}
          </p>
         <Link to={`/jobs/${_id}`}>
         <button className="btn btn-primary">Apply</button>
         </Link>
        </div>
      </div>
    </div>
  );
}
