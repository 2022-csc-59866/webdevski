// import React from "react";
import { Form, Col } from "react-bootstrap";

const JobFeedSearchBar = ({ params, onParamChange }) => {
    return (
        <>
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
        </>
    )
}
 
export default JobFeedSearchBar