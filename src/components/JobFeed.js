import { useState, useEffect } from 'react'
import JobFeedCard from './JobFeedCard';

const API_KEY = 'ad40a161b3bded0b6d1ab5f277089030'
const API_ID = '5d5403d9'

const JobFeed = () => {
    const [jobs, setJobs] = useState(null);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/100?app_id=${API_ID}&app_key=${API_KEY}`);
            const json = await response.json();
            setJobs(json.results);
            console.log(json);
        }
        fetchJobs().catch(console.error);
    }, [])

    const searchItems = searchValue => {
        setSearchInput(searchValue);
        if (searchValue !== "") {
          const filteredData = jobs.filter((item) =>
            Object.values(item)
              .join("")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
          setFilteredJobs(filteredData);
          // console.log(filteredData)
        } else {
          setFilteredJobs(jobs);
        }
      }

    return (
        <div className='job-feed'>
            <input
                type="text"
                placeholder='Search...'
                onChange={(inputString) => searchItems(inputString.target.value)}
            />
            <div className="jobs-container">
                {searchInput.length > 0 || filteredJobs.length > 0
                    ? // what happens if we have search input? what list do we use to display coins?  
                    <ul>
                        {filteredJobs && filteredJobs.map((job) => (
                            <JobFeedCard key={job.id} job={job} />
                        ))}
                    </ul>
                    : // what happens if we don't have search input? what list do we use to display coins?  
                    <ul>
                        {jobs && jobs.map((job) => (
                            <JobFeedCard job={job} />
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

export default JobFeed