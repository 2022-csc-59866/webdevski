import {useState, useEffect} from "react";
import axios from "axios";
import {Form, Button} from 'react-bootstrap'

const StackDevskiSearchBar = ({setSearchResults}) => {
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearch = async(e) => {
        e.preventDefault();
        const searchTerm = e.target.formSearch.value;
        const response = await axios.get(
            `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&tagged=web&q=${searchTerm}&site=stackoverflow&filter=!6Wfm_gSyiPjm9`
        );
        if(searchTerm.trim() === '' || !response.data.items || response.data.items.length === 0){
            setSearchResults([]);
            return;
        }
        setSearchResults(response.data.items);   
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
            <Button className="col text-center" variant="tertiary" > Post Question </Button>
        </Form>
    );
}

export default StackDevskiSearchBar;