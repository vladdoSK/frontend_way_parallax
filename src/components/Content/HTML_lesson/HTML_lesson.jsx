import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HTML_lesson.css';
import html_code from '../../images/html_code.png'
import { startAnimation } from "../../animation";
import { NavLink } from "react-router-dom";

const HTML_lesson = () => {

    setTimeout(startAnimation, 500);

    return (
        <Container>
            <h1 className="html__title _anim_items">HTML введення</h1>

            <h2 className="html__definition">Що таке HTML?</h2>
            <div className="html__definition-text">HTML – це стандартна мова розмітки для створення веб-сторінок.</div>

            <ul className="html__list _anim_items _anim-no-hide">
                <li className="html__list-item">HTML Описує структуру веб-сторінок за допомогою розмітки</li>
                <li className="html__list-item">HTML елементи – це будівельні блоки HTML-сторінок</li>
                <li className="html__list-item">HTML елементи представлені тегами</li>
                <li className="html__list-item"> HTML Мітки: фрагменти вмісту, такі як "heading", "paragraph", "table", і так далі</li>
                <li className="html__list-item"> Оглядачі не відображають HTML-теги, але використовують їх для візуалізації вмісту сторінки</li>
            </ul>

            <h2 className="html__definition">Приклад коду з поясненням</h2>
            <Row>
                <Col lg={6} xs={12}>
                    <div className="html__code">
                        <img className="html__code-img _anim_items _anim-no-hide" src={html_code} alt="code"></img>
                    </div>
                </Col>
                <Col>
                    <div className="html__code">
                        <ul className="html__list _anim_items _anim-no-hide">
                            <li className="html__list-item">Декларация !DOCTYPE html определяет этот документ как HTML5</li>
                            <li className="html__list-item">Элемент html является корневым элементом HTML-страницы</li>
                            <li className="html__list-item">Элемент head содержит мета-информацию о документе</li>
                            <li className="html__list-item">Элемент title задает заголовок документа</li>
                            <li className="html__list-item">Элемент body содержит видимое содержимое страницы</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <h2 className="html__definition">Рекомендую пройти цей відео-курс:</h2>
            <div className="container__video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z3GS5oYGq5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

            <Row>
                <Col className="return__button">
                    <NavLink to="*">
                        <Button className="btn_return">
                            ← Повернутись на головну
                        </Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default HTML_lesson;