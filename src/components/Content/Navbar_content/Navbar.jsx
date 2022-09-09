import React from "react";
import "./Navbar.css"
import html_img from '../../images/html5.jpg';
import css_img from '../../images/css.jpg';
import js_img from '../../images/JavaScript.jpg';
import scss_img from '../../images/scss.jpg';
import frame_img from '../../images/framework.jpg';
import fullstack from '../../images/fullstack.jpg';
import { NavLink } from "react-router-dom";
import { startAnimation } from "../../animation";


const Navbar = () => {

    setTimeout(startAnimation, 500);


    return (
        <div>
            <div className="step__block">
                <div className="step__block-image">
                    <NavLink to="/html_lesson">
                        <img className="step__photo _anim_items" src={html_img} alt="html5" />
                    </NavLink>
                </div>
                <div className="step__block-text _side__radius-left _anim_items">
                    Cтандартизована мова розмітки документів для перегляду веб-сторінок у браузері
                </div>
            </div>

            <div className="step__block">
                <div className="step__block-text _side__radius-right _anim_items">
                    Cпецiальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду
                </div>
                <div className="step__block-image">
                    <NavLink to="/in_progress">
                        <img className="step__photo _anim_items" src={css_img} alt="html5" />
                    </NavLink>

                </div>
            </div>

            <div className="step__block">
                <div className="step__block-image">
                    <NavLink to="/in_progress">
                        <img className="step__photo _anim_items" src={js_img} alt="html5" />
                    </NavLink>
                </div>
                <div className="step__block-text _side__radius-left _anim_items">
                    Mова програмування, яка дозволяє вам створити динамічно оновлюваний контент, керує мультимедіа, анімує зображення, втім робить все, що завгодно.
                </div>
            </div>

            <div className="step__block">
                <div className="step__block-text _side__radius-right _anim_items">
                    Метамова на основі CSS, призначена для збільшення рівня абстракції CSS-коду та спрощення файлів каскадних таблиць стилів.
                </div>
                <div className="step__block-image">
                    <NavLink to="/in_progress">
                        <img className="step__photo _anim_items" src={scss_img} alt="html5" />
                    </NavLink>
                </div>
            </div>

            <div className="step__block">
                <div className="step__block-image">
                    <NavLink to="/in_progress">
                        <img className="step__photo _anim_items" src={frame_img} alt="html5" />
                    </NavLink>
                </div>
                <div className="step__block-text _side__radius-left _anim_items">
                    Фреймворки подходят для создания как крупных проектов, так и простых сайтов и приложений, которые планируется развивать в будущем.
                </div>
            </div>

            <div className="step__block">
                <div className="step__block-text _side__radius-right _anim_items">
                    Для того, щоб підвищити свою кваліфікацію, можна вивчити серверну частину створення сайтів та стати Full-Stack Web Developer
                </div>
                <div className="step__block-image">
                <NavLink to="/in_progress">
                    <img className="step__photo _anim_items" src={fullstack} alt="html5" />
                </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;