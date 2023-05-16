import {useState} from 'react';
import axios from "axios";
import { Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';

const SDFAQAns = ({questions}) => {
    const [showModal, setShowModal] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [selectedQuestionT, setSelectedQuestionT] = useState(null);
    const [selectedQuestionB, setSelectedQuestionB] = useState(null);

    const fetchAnswers = async(questionId, qt, qb) => {
        const response = await axios.get(
            `https://api.stackexchange.com/2.3/questions/${questionId}/answers?pagesize=10&order=desc&sort=activity&site=stackoverflow&filter=!nOedRLqQ19`
        );
        const answers = response.data.items.map((item) => item.body);
        console.log(response.data);
        /* alert(answers.join("\n")); */
        setSelectedQuestionT(qt);
        setSelectedQuestionB(qb);
        setAnswers(answers);
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <>
        <Container>
            <Row xs={2} md={5}>
                {questions.map((question) => (
                    <Col key={question.question_id}>
                        <Card className='h-100 w-100'>
                            <Card.Body>
                                <Card.Title dangerouslySetInnerHTML={{ __html: question.title }}></Card.Title>
                                
                                <Card.Text></Card.Text>
                                <Button variant="primary"  onClick={() => fetchAnswers(question.question_id, question.title, question.body)}>View</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <Modal show={showModal} onHide={handleCloseModal} className="stackdevski-faq-modal">
            <Modal.Header>
                <Modal.Title>
                    <button type="button" class="btn-close" aria-label="Close" onClick={() => handleCloseModal()}></button>
                    <h3>{selectedQuestionT}</h3>
                    <br />
                    <small dangerouslySetInnerHTML={{ __html: selectedQuestionB }}></small>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {answers.length > 0 ? (answers.map((answer) => (
                <>
                <div key={answer.answer_id}>
                    <h5>{answer.is_accepted ? "Accepted Answer" : "Answer"}</h5>
                    <div dangerouslySetInnerHTML={{ __html: answer }}></div>
                </div>
                <hr />
                </>
            ))
            ) : (
                <p>No Answers Found</p>
            )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default SDFAQAns;