import React from 'react';

export default class BootstrapInput extends React.Component {
    handleOnMessageSendEvent() {
        console.log('test');
    }
    render() {
        return (
            <div className="input-group mt-2">
                <input type="text" className="form-control" placeholder={this.props.placeholder}
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button" id="button-addon2"
                            onClick={this.handleOnMessageSendEvent}>{this.props.buttonCaption}</button>
                </div>
            </div>
        );
    }
}