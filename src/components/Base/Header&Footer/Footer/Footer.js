import download from '../../../../assets/images/download.png'


const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ul>
                        <li>
                            <ul>
                                <li><h6>Компания</h6></li>
                                <li><p>О нас</p></li>
                                <li>Служба поддержки</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><h6>Партнёрам</h6></li>
                                <li><p>Подключить отель</p></li>
                                <li><p>Подключить туры</p></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="footer__download">
                                <li><h6>Приложение Meyman</h6></li>
                                <li><img src={download} alt="Google play"/></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p className="txt">© 2023 logo.kg</p>
            </div>
        </footer>
    )
}

export default Footer