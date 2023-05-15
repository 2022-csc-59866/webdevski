import JobFeedCard from '../components/JobFeedCard';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchengin} from '@fortawesome/free-brands-svg-icons'
import jobListings from '../jobListings';
import JobFeedSearchBar from '../components/JobFeedSearchBar';

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
                <div className='jobfeed-header-container'>
                    <h2>Job Searchski&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faSearchengin} />
                    </h2>
                </div>
                <div className='jobfeed-main-content'>
                    <JobFeedSearchBar params={params} onParamChange={handleParamChange} />
                    {filteredJobs.length > 0 ?
                        filteredJobs.map(job => (
                            <JobFeedCard key={job.id} job={job} />
                        ))
                        :
                        <h1>Oops...no jobs!</h1>
                    }
                </div>
            </Container>
        </section>
    )
}

export default JobFeed