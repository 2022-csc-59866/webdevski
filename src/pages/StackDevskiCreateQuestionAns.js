import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { createDevskiPost } from '../models/stackDevskiQuestionPost';

const StackDevskiCreateQuestionAns = () => {
    const [post, setPost] = useState({ title: "", description: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createDevskiPost(post);
    }


    return(
        <section>
            <Container className="my-5">
                <div className="stackdevski-createpost-page-content">
                    <form onSubmit={handleSubmit}>
                        <h3>Create Question</h3>
                        <label for="question_title">Title</label> <br />
                        <input type="text" id="question_title" name="question_title" value={post.question_title} onChange={handleChange} style={{ color: 'black' }} /><br />
                        <br />
                        <label for="question_description">Description</label><br />
                        <textarea rows="5" cols="50" id="question_description" name="question_description" value={post.question_description} onChange={handleChange}>
                        </textarea>
                        <br />
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </Container>
        </section>    
    );
}

export default StackDevskiCreateQuestionAns;