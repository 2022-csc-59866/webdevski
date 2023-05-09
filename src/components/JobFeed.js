import JobFeedCard from './JobFeedCard';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import jobListings from '../jobListings';
import JobFeedSearchBar from './JobFeedSearchBar';

const JobFeed = () => {
    const [params, setParams] = useState({description: '', location: '', type: false})

    const handleParamChange = e => {
        const param = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    const filteredJobs = jobListings.filter(job =>
        job.description.toLowerCase().includes(params.description.toLowerCase()) &&
        job.location.toLowerCase().includes(params.location.toLowerCase()) &&
        (!params.type || job.type.toLowerCase().includes('full-time'))
    );

    return (
        <section className="job-feed">
            <Container className="my-5">
                <JobFeedSearchBar params={params} onParamChange={handleParamChange} />
                 {filteredJobs.length > 0 ?
                    filteredJobs.map(job => (
                        <JobFeedCard key={job.id} job={job} />
                    ))
                    :
                    <h1>Oops...no jobs!</h1>
                }
            </Container>
        </section>
    )
}

export default JobFeed