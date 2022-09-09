import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Container fluid>

                <Row>
                    <Col lg={4} xs={4} className="column">
                        <div className="footer__name-col">Мій Гітхаб:</div>
                        <br></br>
                        <a href="https://github.com/vladdoSK">
                            <div className="footer__net-github"></div>
                        </a>
                    </Col>

                    <Col lg={4} xs={4} className="column">
                        <div className="footer__name-col">Соцмережі</div>
                        <br></br>
                        <div className="footer__net-block">
                            <a href="https://github.com/vladdoSK">
                                <div className="footer__net-instagram"></div>
                            </a>
                            <a href="https://github.com/vladdoSK">
                                <div className="footer__net-telegram"></div>
                            </a>
                            <a href="https://github.com/vladdoSK">
                                <div className="footer__net-facebook"></div>
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} xs={4} className="column">
                        <div className="footer__name-col">Пошта</div>
                        <br></br>
                        <a hred="https://github.com/vladdoSK">
                            BlackArrow4k@gmail.com
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col className="column">
                        <div className="footer__name">
                        © 20021-2022 ООО "SVD"
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Footer;