import { Link, useLoaderData } from "react-router-dom"


export default function JobDetails() {
    const {_id, title, company, jobType, category} = useLoaderData()

  return (
    <div className="w-10/12 mx-auto p-3">
        <h2 className="text-3xl">Jobs Details for {title}</h2>
        <p className="text-xl text-gray-600">{company}</p>
        <p>Job Type: {jobType}</p>
        <p>Category: {category}</p>
        <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
        </Link>
    </div>
  )
}
