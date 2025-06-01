import './Home.scss';
import {Link} from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <>

            <section className="home__main">
                <section className="home__heroBlock">
                    <div className="home__heroBlock-container">
                        <div className="hero__text">
                            <h1>Залишіть історію назавжди</h1>
                            <p>Сервіс меморіальних сторінок із QR-кодами</p>

                            <Link to="/example" className="btn-primary">Переглянути приклад</Link>
                        </div>
                        <div className="hero__qr">
                            <img src="/img/qr_code_for_mobile_english_wikipedia-svg.webp" alt="QR-код"/>
                        </div>
                    </div>
                </section>

                <section className="home__content">
                    <h2>Меморіальні сторінки з QR-кодом — збережіть памʼять назавжди</h2>
                    <p>
                        «Памʼятай» — це онлайн-сервіс для створення меморіальних сторінок померлих, доступних через
                        QR-код на надгробку або пам’ятнику.
                    </p>
                    <p>
                        Ми виготовляємо надійні QR-мітки з нержавіючої сталі або латуні, які витримують будь-які погодні
                        умови. Скануючи такий QR-код смартфоном, ви потрапляєте на персональну памʼятну веб-сторінку, де
                        зібрано:
                    </p>
                    <ul>
                        <li>Фото та відео померлого</li>
                        <li>Аудіо та спогади близьких</li>
                        <li>Життєвий шлях, події, родинна історія</li>
                        <li>Місце поховання</li>
                        <li>Генеалогічне дерево</li>
                    </ul>
                    <p>Це сучасний спосіб вшанування памʼяті, що об’єднує покоління.</p>
                </section>
            </section>
        </>
    )
}

export default Home