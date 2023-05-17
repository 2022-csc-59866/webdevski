import {useState} from "react";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faConnectdevelop} from '@fortawesome/free-brands-svg-icons'
import { Tab, Tabs, TabContent, TabPane, Alert} from "react-bootstrap"
import banner from "../assets/images/StackDevski_banner.png"
import { Container} from "react-bootstrap";
import StackDevskiSearchBar from "../components/StackDevskiSearchBar";
import StackDevskiSearchCard from "../components/StackDevskiSearchCard";
import StackDevskiFAQ from "../components/StackDevskiFAQ";
import StackDevskiSearchCardDB from "../components/StackDevskiSearchCardDB";

const StackDevski = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsDB, setSearchResultsDB] = useState([]);

    return(
        <section className="stack-devski">
            <Container className="my-5">
                <div className="stackdevski-img-container">
                    <img
                        /* className="stack-devski-banner" */ 
                        src={banner}
                        alt="stackdevski-banner"
                    />
                </div>
                {/* <ButtonGroup className="mb-2">
                    <Button>Most Viewed Problems</Button>
                    <Button>Search Questions</Button>
                    <Button>Search by Language</Button>
                </ButtonGroup> */}
                <div className="stackdevski-main-content">
                    <Tabs
                        defaultActiveKey="home"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="home" title="Home">
                            <Alert variant="warning">
                                <FontAwesomeIcon icon={faConnectdevelop} className="stackdevski-home-icon" />
                                Welcome to our web development Q&A forum! Whether you're a beginner just starting out or a seasoned developer, this is the place to ask and answer questions about web development. Our community of developers is here to help you find solutions to your coding problems, provide insights into new web development trends, and share best practices and tips. So don't be shy - feel free to ask a question, share your knowledge, or contribute to ongoing discussions. We look forward to learning and growing with you!
                            </Alert>
                        </Tab>
                        <Tab eventKey="MAQ" title="Most Asked">
                            <StackDevskiFAQ />
                        </Tab>
                        <Tab eventKey="regsrch" title="Search">
                            <StackDevskiSearchBar setSearchResults={setSearchResults} setSearchResultsDB={setSearchResultsDB}/>
                            <br />
                            <h3>Local Devski Posts</h3>
                            <StackDevskiSearchCardDB searchResultsDB={searchResultsDB}/>
                            <hr />
                            <br/>
                            <h3>Search From stackOverflow</h3>
                            <StackDevskiSearchCard searchResults={searchResults}/>                   
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </section>
    );
}

export default StackDevski;