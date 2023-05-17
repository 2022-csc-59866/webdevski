import { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import { deletePost } from "../models/jobFeedPost";

const JobFeedCard = ({ job }) => {
    const [open, setOpen] = useState(false);

    const handleDeleteButton = (event) => {
        event.preventDefault();
        deletePost(job);
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="justify-content-between">
                    <div>
                        <button onClick={handleDeleteButton}>Delete Post</button>
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