import React from 'react';

export default class DialogCaptionCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body p-2" style={{textAlign: 'center'}}>
                    <img style={{
                        borderRadius: '50%',
                        marginRight: '10px'
                    }} src={this.props.userAvatar}/>
                    {this.props.username} ({this.props.isOnline})
                </div>
            </div>
        );
    }
}