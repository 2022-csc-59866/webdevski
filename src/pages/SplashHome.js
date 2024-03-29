import { useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/images/coder.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const SplashHome = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to WEBDEVSKI</span>
                        <h1>{`Are you a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer?", "Web Designer?", "UI/UX Designer?" ]'><span className="wrap">{text}</span></span></h1>
                        <p style={{ color: 'white' }}>Our mission is simple: to provide a central hub where web developers of all levels can access a wealth of resources, engage in meaningful discussions, and explore the latest trends and techniques in the industry. From front-end development to back-end programming, from design principles to database management, we cover it all.</p>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
                </Col>
                </Row>
            </Container>
        </section>

    )
}

export default SplashHome;