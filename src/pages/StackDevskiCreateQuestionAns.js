import { useState } from 'react';
import { Container } from 'react-bootstrap';

const StackDevskiCreateQuestionAns = () => {

    return(
        <section>
            <Container className="my-5">
                <div className="jobfeed-createpost-page-content">
                    <form>
                        <label for="title">Title</label> <br />
                        <input type="text" id="title" name="title" value='' /><br />
                        <br />
                        <label for="description">Description</label><br />
                        <textarea rows="5" cols="50" id="description" name="description">
                        </textarea>
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </Container>
        </section>    
    );
}

export default StackDevskiCreateQuestionAns;