// import React from "react";
import { Form, Col } from "react-bootstrap";

const JobFeedSearchBar = ({ params, onParamChange }) => {
    return (
        <Form className="mb-4">
            <Form.Group as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Search for details in the description..." 
                onChange={onParamChange} value={params.description} 
                name="description" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="Search for location..." 
                onChange={onParamChange} value={params.location} 
                name="location" type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="auto" className="ml-2">
                <Form.Check onChange={onParamChange} value={params.type} name="type" 
                id="type" label="Only Full-Time" type="checkbox" />
            </Form.Group>
        </Form>
    )
}
 
export default JobFeedSearchBar