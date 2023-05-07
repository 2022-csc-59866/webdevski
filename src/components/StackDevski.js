import {useState, useEffect} from "react";
import axios from "axios"
import {Table} from "react-bootstrap"
import { Button, Modal, Card } from "react-bootstrap";

const StackDevski = () => {
    const [questions, setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get(
                "https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=votes&tagged=reactjs&site=stackoverflow"
            );
            setQuestions(response.data.items);
        };
        fetchQuestions();
    }, []);

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
        <div>
            {questions.map((question) =>(
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{question.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-none">Question ID: {question.question_id}</Card.Subtitle>
                        <Card.Text>
                            {question.body}
                        </Card.Text>
                        <Card.Link href={question.link}>View on Stack Overflow</Card.Link>
                        <Button onClick={() => fetchAnswers(question.question_id)}>View Answers</Button>
                        {question.answers && (
                            <ul>
                            {question.answers.map((answer) => (
                                <li key={answer.answer_id}>{answer.body}</li>
                            ))}
                            </ul>
                        )}
                    </Card.Body>
                </Card>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Answers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {answers.map((answer, index) => (
                    <p key={index} style={{color: 'blue'}}>{answer}</p>
                ))}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default StackDevski;