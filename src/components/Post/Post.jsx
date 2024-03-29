import React from 'react';
import styles from './Post.module.css';
import TextArea from "../TextArea/TextArea";
import {deletePostActionCreator} from "../../redux/actions";

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
        this.props.dispatch(deletePostActionCreator(this.props.index));
    }

    onEditPost() {
        this.setState({
            onEdit: true
        })
    }

    resetState() {
        this.setState({
            expandPost: true,
            onEdit: false
        });
    }

    render() {
        return (
            <div>
                <h3>Post {this.props.number} </h3>
                <p>(Created at: <em>{this.props.creationDate})</em></p>
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
                                    onClick={this.onEditPost.bind(this)}>Edit post</button>
                        <button
                            onClick={this.removePost.bind(this)}
                            className="btn btn-danger ml-2 mt-2 mb-2 ml-2" type="button">X</button>
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
                        <TextArea operationType={'Update'} dispatch={this.props.dispatch}
                                  onEdit={this.resetState.bind(this)}
                                  onClose={this.resetState.bind(this)}
                                  post={this.props.content}
                                  postId={this.props.index}/>
                    }
                </div>
                }
                <hr/>
            </div>
        )
    };
};
