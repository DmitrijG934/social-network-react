import {rerenderEntireTree} from "../render/render";

export const createPost = (message) => {
    console.log('received new post: ' + message);
    state.posts.push({
        content: message
    });
    rerenderEntireTree(state);
};

export const deletePost = (messageIndex) => {
    console.log('received request to delete post with index: ' + messageIndex);
    state.posts.splice(messageIndex, 1);
    rerenderEntireTree(state);
};

export const state = {
    posts: [
        {
            content: 'Parinda (Bird) is an Indian crime drama film produced and directed by Vidhu Vinod Chopra (pictured), and released on 3 November 1989. In the film, Kishan (Jackie Shroff), who works for the underworld don Anna Seth (Nana Patekar),' +
                ' faces off against his brother Karan (Anil Kapoor) ' +
                'in gang warfare after Karan decides to avenge his friend\'s death. '
        },
        {
            content: 'The script was co-written by Chopra, Shiv Kumar Subramaniam and Imtiyaz Husain.'
        },
        {
            content: 'R. D. Burman composed the music and Khurshid Hallauri wrote the lyrics. Parinda received critical acclaim when ' +
                'released, and is considered by several critics and scholars to be the turning point in the introduction of realism in ' +
                'Hindi cinema. It won two National Film Awards and five Filmfare Awards, and was India\'s official selection for the ' +
                '1990 Academy Award for Best Foreign Language Film, although it was not nominated. In 2015,' +
                ' Chopra remade Parinda as a Hollywood film titled Broken Horses starring Vincent D\'Onofrio, ' +
                'Anton Yelchin and Chris Marquette.'
        },
    ],
    users: [
        {
            'username': 'Jack Wilson',
            'img': 'https://sun9-58.userapi.com/c858216/v858216987/7e95d/dmInZh7oNLw.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
        {
            'username': 'Alex Nolan',
            'img': 'https://sun9-6.userapi.com/c852236/v852236531/3da4c/aSW-4U_v1Xw.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
        {
            'username': 'Jessie Ventura',
            'img': 'https://sun9-64.userapi.com/c849420/v849420784/1d3eec/rQPrkn3XG5M.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
        {
            'username': 'Sylvester Stallone',
            'img': 'https://sun9-7.userapi.com/c855536/v855536432/79767/mM2PZUPaypk.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
        {
            'username': 'Max Child',
            'img': 'https://sun9-51.userapi.com/c840124/v840124889/31c54/a4iqzSiuJZs.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
        {
            'username': 'Pavel Durov',
            'img': 'https://sun9-10.userapi.com/c836333/v836333001/3118f/3OWOVNTv67U.jpg?ava=1',
            'messages': [
                'Hello, world!', 'How are you?', 'It\'s should be cool!'
            ]
        },
    ]
};