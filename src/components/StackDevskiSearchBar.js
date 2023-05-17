import {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { searchQuestions } from "../controllers/stackOverflow";
import { searchDevskiQuestions } from "../models/stackDevskiQuestionPost";

const StackDevskiSearchBar = ({setSearchResults, setSearchResultsDB}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async(e) => {
        e.preventDefault();
        const searchTerm = e.target.formSearch.value;
        const [stackExchangeData, supaBaseData] = await Promise.all([
            searchQuestions(searchTerm),
            searchDevskiQuestions(searchTerm),

        ]);
        if(searchTerm.trim() === "" || (!stackExchangeData && !supaBaseData)){
            setSearchResults([]);
            setSearchResultsDB([]);
            return;
        }

        setSearchResults(stackExchangeData);
        searchDevskiQuestions(supaBaseData); 
    }

    return(
        <Form onSubmit={handleSearch}>
            <Form.Group controlId="formSearch" className="form-div">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form.Group>
            <Link to={"/new-q&a"}><Button className="col text-center" variant="tertiary" > Post Question </Button></Link>
        </Form>
    );
}

export default StackDevskiSearchBar;