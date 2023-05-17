import axios from "axios";

export const fetchAnswers = async (questionId) => {
    const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions/${questionId}/answers?pagesize=10&order=desc&sort=activity&site=stackoverflow&filter=!nOedRLqQ19`
    );
    const answers = response.data.items.map((item) => item.body);
    return answers;
};

export const fetchQuestions = async () => {
    const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=web&site=stackoverflow&filter=!6Wfm_gSvlYUX9`
    );
    return response.data.items;
};

export const fetchQuestionsCR = async () => {
    const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=javascript&site=codereview&filter=!6Wfm_gSvlYUX9`
    );
    return response.data.items;
}

export const fetchQuestionsWM = async () => {
    const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=hot&tagged=javascript&site=webmasters&filter=!6Wfm_gSvlYUX9`
    );
    return response.data.items;
}

export const searchQuestions = async (searchTerm) => {
    const response = await axios.get(
        `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&tagged=web&q=${searchTerm}&site=stackoverflow&filter=!6Wfm_gSyiPjm9`
    );

    return response.data.items || [];
};