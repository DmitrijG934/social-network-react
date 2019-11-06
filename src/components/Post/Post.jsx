import React from 'react';
import styles from './Post.module.css';

export default class Post extends React.Component {
    state = {
        expandPost: false
    };

    expandPostBody() {
        this.setState({
            expandPost: true
        })
    }

    collapsePostBody() {
        this.setState({
            expandPost: false
        })
    }

    render() {
        return (
            <div>
                <h3>Post {this.props.number}</h3>
                <img className={styles.icon}
                     src='https://www.freeiconspng.com/uploads/like-button-png-2.png'/>{this.props.likes}<br/>
                {this.state.expandPost ?
                    <div>
                        <button className="btn btn-primary mt-2 mb-2" type="button"
                                onClick={this.collapsePostBody.bind(this)}>
                            Collapse post
                        </button>
                        <button className="btn btn-danger ml-2 mt-2 mb-2" type="button">X</button>
                    </div>
                    :
                    <button className="btn btn-primary mt-2" type="button" onClick={this.expandPostBody.bind(this)}>
                        Show post
                    </button>
                }
                {this.state.expandPost &&
                <div className="card card-body">
                    {this.props.content}
                </div>
                }
                <hr/>
            </div>
        )
    };
};
