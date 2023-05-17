import { useState, useEffect } from "react";
import { Card, Button, Collapse, Modal } from 'react-bootstrap';
import { deleteDevskiPost } from "../models/stackDevskiQuestionPost";
import { readDevskiPosts } from "../models/stackDevskiQuestionPost";

const StackDevskiSearchCardDB = ({searchResultsDB}) => {

    const[showModal, setShowModal] = useState(false);
    const[selectedResult, setSelectedResult] = useState(null);

    const handleShowModal = (result) => {
        setSelectedResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedResult(null);
        setShowModal(false);
    }
    const handleDeleteButton = (event, id) => {
        event.preventDefault();
        deleteDevskiPost(id);
    }
    
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchResultsDB.length === 0 ? (
                <div className="col text-center">
                    <p>No Results Found</p>
                </div>
            ) : (searchResultsDB.map((result) => (
                <div className="col" key={result.id}>
                        <Card className="h-100">
                        <Button onClick={(e) => handleDeleteButton(e, result.id)}>Delete Post</Button>
                            <Card.Body>
                                <Card.Title>{result.question_title}</Card.Title>
                                 <Button variant="primary" onClick={() => handleShowModal(result)}>
                                View
                            </Button> 
                            </Card.Body>
                        </Card>
                    </div>
                ))
            )}
             {selectedResult && (
                <Modal show={showModal} onHide={handleCloseModal} className="stackdevski-search-modal">
                    <Modal.Header>
                        <Modal.Title className="overflow-auto">
                            <h3>{selectedResult.title}</h3>
                            <br />
                            <small dangerouslySetInnerHTML={{ __html: selectedResult.body }}></small>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="overflow-auto">
                        {selectedResult.answers && selectedResult.answers.length > 0 ? (
                            selectedResult.answers.map((answer) => (
                            <>
                            <div key={answer.answer_id}>
                                <h5>{answer.is_accepted ? "Accepted Answer" : "Answer"}</h5>
                                <div dangerouslySetInnerHTML={{ __html: answer.body }}></div>
                            </div>
                            <hr />
                            </>
                        ))
                        ) : (
                            <Modal.Body>No Answers Found</Modal.Body>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default StackDevskiSearchCardDB;
