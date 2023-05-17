import {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { searchQuestions } from "../controllers/stackOverflow";

const StackDevskiSearchBar = ({setSearchResults}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async(e) => {
        e.preventDefault();
        const searchTerm = e.target.formSearch.value;
        const data = await searchQuestions(searchTerm);
        if(searchTerm.trim() === '' || !data || data.length === 0){
            setSearchResults([]);
            return;
        }
        setSearchResults(data); 
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