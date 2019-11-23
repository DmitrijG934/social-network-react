import React from 'react';
import BootstrapInput from "../Input/BootstrapInput";
import DialogCaptionCard from "../Dialogs/DialogCaptionCard/DialogCaptionCard";

export default class MessageList extends React.Component {
    render() {
        return (
            <div className={'message-list-wrapper'}>
                <DialogCaptionCard userAvatar={this.props.user.img} username={this.props.user.username} isOnline={"offline"}/>
                <BootstrapInput buttonCaption={'Search message'} placeholder={'Search message'}/>
                <ul className="list-group mt-2">
                    {this.props.messages.map((message, index) =>
                        <li key={index} className="list-group-item">{message} (<em>{new Date().toLocaleDateString()}</em>)</li>
                    )}
                </ul>
                <BootstrapInput buttonCaption={'Send'}
                                placeholder={'Enter your message...'}/>
            </div>
        );
    }
}