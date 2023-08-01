import meymanLogo from '../../../../assets/images/meyman-logo.svg'
import language from '../../../../assets/images/header-language.svg'
import currency from '../../../../assets/images/header-usd.svg'
import burger from '../../../../assets/images/header-burger.svg'
import profile from '../../../../assets/images/header-profile.svg'


const Header1 = ({  }) => {
    return(
        <header>
            <div className="container">
                <div className="header__inner">
                    <img src={ meymanLogo } alt="Meyman" className="header__logo"/>
                    <div className="header__buttons">
                        <div className="buttons__language">
                            <img src={ language } alt="Language"/>
                            <p>Русский</p>
                        </div>
                        <div className="buttons__currency">
                            <img src={ currency } alt="Currency"/>
                            <p>USD</p>
                        </div>
                        <button className="buttons__host">Сдать жилье на Meyman</button>
                        <div className="buttons__menu">
                            <img src={ burger } alt="Menu"/>
                            <img src={ profile } alt="Profile" className="menu__user"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header1