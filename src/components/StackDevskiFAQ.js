import { useState, useEffect } from "react";
import axios from "axios";
import SDFAQAns from "./SDFAQAns";


const StackDevskiFAQ = () => {
    const[questions, setQuestions] = useState([]);
    const[questionsCR, setQuestionsCR] = useState([]);
    const[questionsWM, setQuestionsWM] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=web&site=stackoverflow&filter=!nOedRLr0Wi`
            );
            setQuestions(response.data.items);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchCRData = async() => {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=javascript&site=codereview&filter=!nOedRLr0Wi`
            );
            setQuestionsCR(response.data.items);
        };

        fetchCRData();
    }, []);

    useEffect(() => {
        const fetchWMData = async() => {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=javascript&site=webmasters&filter=!nOedRLr0Wi`
            );
            setQuestionsWM(response.data.items);
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