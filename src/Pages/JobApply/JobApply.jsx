import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../Hooks/useAuth";

export default function JobApply() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  //   console.log(id, user);
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linked = form.linked.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linked, github, resume);

    const jobApplication = {
      job_id: id,
      application_email: user.email,
      linked,
      github,
      resume,
    };
    fetch("http://localhost:5000/job_application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application Submitted.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="card bg-base-100 w-8/12 mx-auto shrink-0 shadow-2xl mt-4 mb-4">
      <form onSubmit={handleJobApply} className="card-body">
        <h2 className="text-2xl text-center font-semibold">
          Apply Job Application
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linked URL</span>
          </label>
          <input
            type="url"
            name="linked"
            placeholder="Linked URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
}
