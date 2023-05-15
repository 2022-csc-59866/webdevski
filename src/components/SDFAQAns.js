import {useState} from 'react';
import axios from "axios";
import { Card, Button, Carousel, Modal} from 'react-bootstrap';

const SDFAQAns = ({questions}) => {
    const [showModal, setShowModal] = useState(false);
    const [answers, setAnswers] = useState([]);

    const fetchAnswers = async(questionId) => {
        const response = await axios.get(
            `https://api.stackexchange.com/2.3/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nOedRLqQ19`
        );
        const answers = response.data.items.map((item) => item.body);
        console.log(response.data);
        /* alert(answers.join("\n")); */
        setAnswers(answers);
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <>
            {questions.map((question) => (
                <Carousel.Item key={question.question_id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{question.title}</Card.Title>
                            <Card.Text>{question.body}</Card.Text>
                            <Button variant="primary"  onClick={() => fetchAnswers(question.question_id)}>View Answers</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item> 
            ))}
        <Modal show={showModal} onHide={handleCloseModal} className="stackdevski-faq-modal">
            <Modal.Header closeButton>
            <Modal.Title>Answers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {answers.map((answer, index) => (
               <>
               <div key={answer.answer_id}>
                   <h5>{answer.is_accepted ? "Accepted Answer" : "Answer"}</h5>
                   <div dangerouslySetInnerHTML={{ __html: answer }}></div>
               </div>
               <hr />
               </>
            ))}
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