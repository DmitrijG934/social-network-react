import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return(
        <div>
            <h3>Post {props.number}</h3>
            <hr></hr>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat feugiat consequat. Donec porttitor blandit mauris, euismod dapibus lacus malesuada non. Fusce auctor ut odio vitae tincidunt. Curabitur hendrerit tellus in augue pretium, sed mollis arcu egestas. Donec feugiat nisi a nisl laoreet interdum. Quisque at lacus nec neque viverra ullamcorper eu eget lorem. Cras euismod bibendum gravida. Aenean aliquam nisi leo, eget accumsan sem iaculis eget. Aliquam augue nunc, consequat vitae tempor et, commodo ut libero.
              Morbi eget lacus ut ligula elementum accumsan ut eget sapien. Suspendisse euismod, orci eu scelerisque interdum, odio nulla blandit mauris, sed ultrices tortor turpis in justo. Cras placerat nibh eget risus suscipit scelerisque. Morbi volutpat volutpat sem laoreet maximus. Cras congue consequat urna id lobortis. Maecenas in odio nec elit eleifend convallis. Pellentesque fermentum neque vitae magna hendrerit, quis ultricies odio rutrum. Morbi imperdiet, ipsum id eleifend sollicitudin, nisi tellus sagittis mi, vel interdum nisl est quis nisi. Nulla ac tempus lacus. Sed ante nunc, gravida sit amet feugiat id, iaculis nec felis. Donec euismod arcu augue, id euismod lorem fermentum in. Nam scelerisque dolor id sapien finibus euismod. Suspendisse eu massa vitae nisi facilisis bibendum a ultricies nunc.
        </div>
    )
};

export default Post;