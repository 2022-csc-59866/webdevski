import { supabase } from '../server/client'
import JobFeedCard from '../components/JobFeedCard';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchengin} from '@fortawesome/free-brands-svg-icons'
// import jobListings from '../jobListings';
import JobFeedSearchBar from '../components/JobFeedSearchBar';

const JobFeed = () => {
    const [params, setParams] = useState({description: '', location: '', type: false})
    const [jobs, setJobs] = useState([]);

    const handleParamChange = e => {
        const param = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    useEffect(() => {
        const fetchJobs = async () => {

            const { data, error } = await supabase
                .from('Jobs')
                .select('id, title, company, createdAt, type, location, applyUrl, description')
                .order('created_at', { ascending: true });

            if (error) {
                console.error(error);
            } else {
                setJobs(data);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job =>
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
                <Link to="/new"><button> Create New Job Postki </button></Link>
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