import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import cvPDF from "../assets/DAo-DUC-DO-TopCV.vn-300625.164214.pdf";
import "./Banner.css";

/**
 * Banner hero section featuring active typewriter animations and decor assets.
 * @returns {JSX.Element} The rendered banner.
 */
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isActive, setIsActive] = useState(false);

  const toRotate = ["Web Developer", "Game Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsActive(e.isIntersecting), { threshold: 0.05 });
    const bannerSec = document.getElementById('home');
    if (bannerSec) observer.observe(bannerSec);
    return () => bannerSec && observer.unobserve(bannerSec);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Dao-Duc-Do-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`banner ${isActive ? 'active' : ''}`} id="home">
      <div className="banner-space-decorations">
        {["banner-star-1", "banner-star-3", "banner-star-5"].map(c => <div key={c} className={`banner-star ${c}`}>⭐</div>)}
        {["banner-star-2", "banner-star-4", "banner-star-6"].map(c => <div key={c} className={`banner-star ${c}`}>✨</div>)}
        {["🪐", "🌍", "🌙"].map((e, idx) => <div key={idx} className={`banner-planet banner-planet-${idx + 1}`}>{e}</div>)}
        <div className="banner-rocket banner-rocket-1"><div className="banner-rocket-spin">🚀</div></div>
        <div className="banner-rocket banner-rocket-2">🛸</div>
        <div className="banner-satellite banner-satellite-1">🛰️</div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1 style={{ minHeight: '150px' }}>
                Hi! I'm Meens <span className="txt-rotate"><span className="wrap">{text}</span></span>
              </h1>
              <p>
                Hi, My name is <span className="text-purple-400 font-semibold">Đào Đức Độ (MEENS)</span>, I’m a passionate <span className="text-purple-400 font-semibold">Web Developer, Game Developer, and Software Engineer</span>.
              </p>
              <button onClick={handleDownloadCV}>
                Download My CV <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={0} md={6} xl={5} className="d-none d-md-block">
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};