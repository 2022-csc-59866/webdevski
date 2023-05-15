import { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap';

const StackDevskiSearchCard = ({searchResults}) => {
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

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchResults.length === 0 ? (
                <div className="col text-center">
                    <p>No Results Found</p>
                </div>
            ) : (
                searchResults.map((result) => (
                <div className="col" key={result.question_id}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            {/* <Card.Text>{result.body}</Card.Text> */}
                            <Card.Text>{result.is_answered ? "Question has Answer" : "Not Answered"}</Card.Text>
                            <Card.Text>Answer Count: {result.answer_count}</Card.Text>
                            <Button variant="primary" onClick={() => handleShowModal(result)}>
                                View Answers
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
            )}
            {selectedResult && (
                <Modal show={showModal} onHide={handleCloseModal} className="stackdevski-search-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedResult.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                </Modal>
            )}
        </div>
    );
};

export default StackDevskiSearchCard;
