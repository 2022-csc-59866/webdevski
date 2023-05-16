import { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import { supabase } from '../server/client';

const JobFeedCard = ({ job }) => {
    const [open, setOpen] = useState(false);

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Jobs')
        .delete()
        .eq('id', job.id);

        window.location = "/job-feed";

    }

    return (
        // <Card className="mb-3">
        //     <Card.Body>
        //         {/* d-flex */}
        //         <div className=" justify-content-between">
        //             <div>
        //                 <Card.Title>
        //                     {job.MatchedObjectDescriptor.PositionTitle} - <span className="text-muted font-weight-light">{job.MatchedObjectDescriptor.OrganizationName}</span>
        //                 </Card.Title>
        //                 <Card.Subtitle className="text-muted mb-2">
        //                     {new Date(job.MatchedObjectDescriptor.PublicationStartDate).toLocaleDateString()}
        //                 </Card.Subtitle>
        //                 <Badge variant="secondary" className="mr-2">Type: {job.MatchedObjectDescriptor.PositionSchedule[0].Name ? job.MatchedObjectDescriptor.PositionSchedule[0].Name : "N/A"}</Badge>
        //                 <Badge variant="secondary">Location: {job.MatchedObjectDescriptor.PositionLocationDisplay}</Badge>
        //                 <div>
        //                     <a href={job.MatchedObjectDescriptor.ApplyURI}>Apply Here!</a>
        //                 </div>
        //             </div>
        //         </div>
        //         <Card.Text>
        //             <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">
        //                 {open ? 'Hide Details' : 'View Details'}
        //             </Button>
        //         </Card.Text>
        //         <Collapse in={open}>
        //             <div className="mt-4">
        //                 <Card.Text>{job.MatchedObjectDescriptor.UserArea.Details.JobSummary}</Card.Text> 
        //             </div>
        //         </Collapse>
        //     </Card.Body>
        // </Card>
        <Card className="mb-3">
            <Card.Body>
                {/* d-flex */}
                <div className=" justify-content-between">
                    <div>
                        <button onClick={deletePost}>Delete Post</button>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.createdAt).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <div>
                            <a href={job.applyUrl}>Apply Here!</a>
                        </div>
                    </div>
                </div>
                <Card.Text>
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">
                        {open ? 'Hide Details' : 'View Details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <Card.Text>{job.description}</Card.Text> 
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}

export default JobFeedCard;