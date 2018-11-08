import React from 'react';
import './FAQ.less';

export default class FAQ extends React.Component {
    render() {
        return (
            <div className="container-faq">
                <h2 className="flex-item-faq-title">FAQ</h2>
                <div className="flex-item-faq-text">
                    <p>
                        1) Question 1
                    <br />
                    </p>
                    <p>
                        2) Question 2
                    <br />
                    </p>
                    <p>
                        3) Question 3
                    <br />
                    </p>
                </div>
            </div>
        );
    }
}