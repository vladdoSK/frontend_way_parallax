import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./InProgress.css"

const InProgress = () => {
    return (
        <div>
            <Container className="inProgress">
                <div className="anim__progress anim__progress-1"></div>
                Вибачте, сторінка поки ще знаходиться в розробці.
                <div className="anim__progress anim__progress-2"></div>
            </Container>
            <Row>
                <Col className="return__button">
                    <NavLink to="*">
                        <Button className="btn_return">
                            Повернутись на головну
                        </Button>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}

export default InProgress;