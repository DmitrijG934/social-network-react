import React from 'react';
import {sendMessage} from "../../redux/store";


export default class BootstrapInput extends React.Component {
    ref = React.createRef();

    state = {
      message: null,
    };

    handleOnMessageSendEvent() {
        this.props.dispatch(sendMessage(this.state.message, this.props.userId));
        this.ref.current.value = '';
    }

    handleOnChange() {
        const message = this.ref.current.value;
        this.setState({message});
    }

    render() {
        return (
            <div className="input-group mt-2">
                <input ref={this.ref} type="text" className="form-control"
                       onChange={this.handleOnChange.bind(this)}
                       placeholder={this.props.placeholder}
                       aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button" id="button-addon2"
                            onClick={this.handleOnMessageSendEvent.bind(this)}>{this.props.buttonCaption}</button>
                </div>
            </div>
        );
    }
}