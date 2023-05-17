import { useState, useEffect } from "react";
import SDFAQAns from "./SDFAQAns";
import { fetchQuestions, fetchQuestionsCR, fetchQuestionsWM } from "../controllers/stackOverflow";

const StackDevskiFAQ = () => {
    const[questions, setQuestions] = useState([]);
    const[questionsCR, setQuestionsCR] = useState([]);
    const[questionsWM, setQuestionsWM] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetchQuestions();
            setQuestions(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchCRData = async() => {
            const data = await fetchQuestionsCR();
            setQuestionsCR(data);
        };
        fetchCRData();
    }, []);

    useEffect(() => {
        const fetchWMData = async() => {
            const data = await fetchQuestionsWM();
            setQuestionsWM(data);
        };
        fetchWMData();
    }, []);

    return(
        <div className="stackdevski-most-asked">
            <div className="stackdevski-stackoverflow">
                <h5>Most Asked Web Development Questions on stackoverflow</h5>
                <SDFAQAns questions={questions} />
            </div>
            <div className="stackdevski-codereview">
                <h5>Most Asked Web Development Questions on Code Review</h5>
                <SDFAQAns questions={questionsCR} />
            </div>
            <div className="stackdevski-webmasters">
                <h5>Most Asked Web Development Questions on Webmasters</h5>
                <SDFAQAns questions={questionsWM} />
            </div>
        </div>
    );
}

export default StackDevskiFAQ;