import './Footer.scss';
import emailIcon from '../../assets/icons/email-icon.svg'
import igIcon from '../../assets/icons/ig-icon.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__contact">
                    <p className='footer__headline'>Let’s Connect!</p>
                    <p className="footer__info">
                        <img src={emailIcon} alt="email-icon" />
                        <a
                            href="mailto:matintyson.design@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            matintyson.design@gmail.com
                        </a>
                    </p>
                    <p className="footer__info">
                        <img src={igIcon} alt="Instagram Icon" />
                        <a href="https://www.instagram.com/ma_tynn/" target="_blank">ma_tynn</a>
                    </p>
                </div>
                <div className="footer__credits">
                    <p>Designed & coded with spicy chips - ©2024 Matin Truong</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;