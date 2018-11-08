import React from 'react';
import './Contact.less';
import * as typeformEmbed from '@typeform/embed';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
    }

    componentDidMount() {
        if (this.element) {
            typeformEmbed.makeWidget(this.element, "https://adam1238.typeform.com/to/Mw8MZU", {
                hideHeaders: true,
                hideFooter: true,
                opacity: 90
            });
        }
    }

    render() {
        return (
            <div className="container-contact">
                <div>
                    <h2 className="flex-item-contact-title">Contact Us</h2>
                    <div className="flex-item-contact-form" ref={(element) => this.element = element} />    
                    <br/>
                    <p className="flex-item-contact-details">
                    Our contact details: <br/>
                    Many Hands London, 100 Clements Road, London SE16 4DG<br/>
                    Email: info@manyhandslondon.co.uk<br/>
                    Phone: 0207 101 4669
                    </p>
                </div>
            </div>
        );
    }
}
