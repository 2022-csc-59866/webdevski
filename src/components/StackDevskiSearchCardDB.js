import { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap';
import { deleteDevskiPost } from "../models/stackDevskiQuestionPost";

const StackDevskiSearchCardDB = ({searchResultsDB}) => {
/*     const[showModal, setShowModal] = useState(false);
    const[selectedResult, setSelectedResult] = useState(null);

    const handleShowModal = (result) => {
        setSelectedResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedResult(null);
        setShowModal(false);
    } */
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
            ) : (
                searchResultsDB.map((result) => (
                <div className="col" key={result.id}>
                    <Button onClick={handleDeleteButton(result.id)}>Delete Post</Button>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{result.question_title}</Card.Title>
{/*                             <Card.Subtitle>{result.is_answered ? "Question has Answer" : "Not Answered"}</Card.Subtitle>
                            <Card.Subtitle>Answer Count: {result.answer_count}</Card.Subtitle>
 */}                            {/* <Card.Text>{result.body}</Card.Text> */}
                            <Button variant="primary">
                                View
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
            )}
{/*             {selectedResult && (
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
 */}        </div>
    );
};

export default StackDevskiSearchCardDB;
