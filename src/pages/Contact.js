import {useState, useEffect} from "react";
import { Container } from "react-bootstrap";

const Contact = () => {

    return(
        <section class="contact" id="contact">
            <Container className="my-5">
                <div class="contact-section-heading">
                <h2>Contact <span>WebDevski</span></h2>
                </div>
                <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div class="icons">
                        <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Company Owners</div>
                            <div class="sub-title"></div>
                        </div>
                        </div>
                        <div class="row">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title">your moms basement</div>
                        </div>
                        </div>
                        <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">krasavchik@webdevski.com</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message the DeVskiis</div>
                    <form action="#">
                    <div class="fields">
                        <div class="field name">
                        <input type="text" placeholder="Name" required />
                        </div>
                        <div class="field email">
                        <input type="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div class="button-area">
                        <button type="submit">Send message</button>
                    </div>
                    </form>
                </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;