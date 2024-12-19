import { useEffect, useState } from "react"
import HotJobsCard from "./HotJobsCard"


export default function HotJobs() {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('https://job-portal-server-woad.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    },[])
  return (
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-11/12 mx-auto">
            {jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)}
        </div>
    </div>
  )
}
