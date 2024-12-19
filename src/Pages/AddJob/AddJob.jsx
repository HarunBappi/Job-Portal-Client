import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

export default function AddJob() {
    const {user} = useAuth()
    const Navigate = useNavigate()

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job hass been Added",
            showConfirmButton: false,
            timer: 1500,
          });
          Navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select defaultValue='Pick a Job Type' className="select select-ghost w-full max-w-xs">
              <option disabled>
                Pick a Job Type
              </option>
              <option>Full-Time</option>
              <option>Intern</option>
              <option>Part-Time</option>
            </select>
          </div>
          {/* Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select defaultValue='Pick a Job Field' className="select select-ghost w-full max-w-xs">
              <option disabled>
                Pick a Job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>
        {/* Salary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Min */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>
          {/* Max */}
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="max"
              className="input input-bordered"
              required
            />
          </div>
          {/* Currency */}
          <div className="form-control">
            <select
                defaultValue='Currency'
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Put each Requirement in a New Line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Put each Responsibility in a New Line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            defaultValue={user.email}
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            defaultValue={user.email}
            name="applicationDeadline"
            placeholder="Application Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create New Job</button>
        </div>
      </form>
    </div>
  );
}
