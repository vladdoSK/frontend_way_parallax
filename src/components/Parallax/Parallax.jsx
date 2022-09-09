import React from "react";
import "./Parallax.css";

const Parallax = () => {

    return (
        <div className="wrapper">
            <section className="parallax">
                <div className="parallax__body">

                    <div className="parallax__container container">
                            <div className="parallax__label">Шлях</div>
                            <h1 className="parallax_title">Front-end розробника</h1>
                    </div>
                </div>

                <div className="parallax__images images-parallax">
                    <div className="images-parallax__item">
                        <div className="images-parallax__clouds">
                        </div>
                    </div>

                    <div className="images-parallax__item">
                        <div className="images-parallax__mountains">
                        </div>
                    </div>

                    <div className="images-parallax__item">
                        <div className="images-parallax__human">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Parallax;