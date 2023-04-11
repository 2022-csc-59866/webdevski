import { useState, useEffect } from 'react'
import JobFeedCard from './JobFeedCard';

const API_KEY = 'ad40a161b3bded0b6d1ab5f277089030'
const API_ID = '5d5403d9'

const JobFeed = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/100?app_id=${API_ID}&app_key=${API_KEY}`);
            const json = await response.json();
            setJobs(json);
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
        <div className='jobs-container'>
            <input
                type="text"
                placeholder='Search...'
                onChange={(inputString) => searchItems(inputString.target.value)}
            />
            {
                jobs && jobs.results && jobs.results.length > 0 ? (
                jobs.results.map((job) => 
                    <JobFeedCard job={job} />
                )) : <h2>No jobs!</h2>
            }
        </div>
    )
}

export default JobFeed