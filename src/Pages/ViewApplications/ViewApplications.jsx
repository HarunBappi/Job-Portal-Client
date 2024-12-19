import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewApplications() {
  const applications = useLoaderData();

  const handleUpdateStatus = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`https://job-portal-server-woad.vercel.app/job_application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status hass been Updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
      });
  };

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
                    onChange={(e) => handleUpdateStatus(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
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
