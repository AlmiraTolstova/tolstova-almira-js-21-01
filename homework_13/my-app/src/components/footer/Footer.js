import React from 'react'
import './Footer.css'
export class Footer extends React.Component{
    render() {
        return <footer className="footer">
            <div className="footer__container">
                <h5 className="footer__container-h5">Контакты</h5>
                <h5 className="footer__container-h5">© 2021 ИП Рыбов О. А.</h5>
            </div>
        </footer>
    }
}