import React from 'react';
import styles from './Post.module.css';
import TextArea from "../TextArea/TextArea";

export default class Post extends React.Component {
    state = {
        expandPost: false,
        onEdit: false
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

    removePost() {
        this.props.removePost(this.props.index);
    }

    editPost() {
        this.setState({
            onEdit: true
        })
    }

    stateToDefault() {
        this.setState({
            expandPost: false,
            onEdit: false
        });
    }

    render() {
        return (
            <div>
                <h3>Post {this.props.number}</h3>
                <img className={styles.icon}
                     src='https://www.freeiconspng.com/uploads/like-button-png-2.png'/>{this.props.likes}<br/>
                {this.state.expandPost ?
                    <div>
                        <span>
                             <button className="btn btn-primary mt-2 mb-2" type="button"
                                     onClick={this.collapsePostBody.bind(this)}>
                            Collapse post
                        </button>
                            <button className="btn btn-primary mt-2 mb-2 ml-2" type="button"
                                    onClick={this.editPost.bind(this)}>Edit post</button>
                        <button
                            onClick={this.removePost.bind(this)}
                            className="btn btn-danger ml-2 mt-2 mb-2 ml-2" type="button">X
                        </button>
                        </span>
                    </div>
                    :
                    <span>
                        <button className="btn btn-primary mt-2" type="button" onClick={this.expandPostBody.bind(this)}>
                        Show post
                        </button>
                    </span>
                }
                {this.state.expandPost &&
                <div>
                    {!this.state.onEdit ? <div className="card card-body">{this.props.content}</div>
                        :
                        <TextArea operationType={'Update'} editPost={this.props.editPost}
                                  onEdit={this.stateToDefault.bind(this)}
                                  postId={this.props.index}/>
                    }
                </div>
                }
                <hr/>
            </div>
        )
    };
};
