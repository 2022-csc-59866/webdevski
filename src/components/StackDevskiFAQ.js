import { useState, useEffect } from "react";
import axios from "axios";
import SDFAQAns from "./SDFAQAns";


const StackDevskiFAQ = () => {
    const[questions, setQuestions] = useState([]);
    const[questionsCR, setQuestionsCR] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&tagged=web&site=stackoverflow&filter=!nOedRLr0Wi`
            );
            setQuestions(response.data.items);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchCRData = async() => {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&tagged=javascript&site=codereview&filter=!nOedRLr0Wi`
            );
            setQuestionsCR(response.data.items);
        };

        fetchCRData();
    }, []);

    return(
        <div className="stackdevski-most-asked">
            <h5>Most Asked Web Development Questions on stackoverflow</h5>
            <SDFAQAns questions={questions} />
            <hr />
            <h5>Most Asked Web Development Questions on Code Review</h5>
            <SDFAQAns questions={questionsCR} />
            <hr />
        </div>
    );

}

export default StackDevskiFAQ;