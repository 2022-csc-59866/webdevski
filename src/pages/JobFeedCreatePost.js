import { supabase } from '../server/client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const JobFeedCreatePost = () => {
    const [post, setPost] = useState({ title: "", company: "", createdAt: "", type: "", location: "", applyUrl: "", description: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('Jobs')
            .insert({ title: post.title, company: post.company, createdAt: post.createdAt, type: post.type, location: post.location, applyUrl: post.applyUrl, description: post.description })

        if (error) {
            console.log(error);
        }
        window.location = "/job-feed";
    }


    return (
        <section>
            <Container className="my-5">
                <div className="jobfeed-createpost-page-content">
                    <form>
                        <label for="title">Title</label> <br />
                        <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                        <br />

                        <label for="company">Company</label><br />
                        <input type="text" id="company" name="company" value={post.company} onChange={handleChange} /><br />
                        <br />

                        <label for="createdAt">Time Created (MM/DD/YYYY)</label><br />
                        <input type="text" id="createdAt" name="createdAt" value={post.createdAt} onChange={handleChange} /><br />
                        <br />

                        <label for="type">Type (Full-Time, Part-Time, ...)</label><br />
                        <input type="text" id="type" name="type" value={post.type} onChange={handleChange} /><br />
                        <br />

                        <label for="location">Location</label><br />
                        <input type="text" id="location" name="location" value={post.location} onChange={handleChange} /><br />
                        <br />

                        <label for="applyUrl">Apply Link</label><br />
                        <input type="text" id="applyUrl" name="applyUrl" value={post.applyUrl} onChange={handleChange} /><br />
                        <br />

                        <label for="description">Description</label><br />
                        <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                        </textarea>
                        <br />
                        <input type="submit" value="Submit" onClick={createPost} />
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default JobFeedCreatePost;