import { useLoaderData } from "react-router-dom";

export default function ViewApplications() {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">
        View Applications For my Jobs {applications.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Email</th>
              <th>Status</th>
              <th>Updated Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{app.application_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                  defaultValue={app.status || 'Change Status'}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>
                      Change Status
                    </option>
                    <option>under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
