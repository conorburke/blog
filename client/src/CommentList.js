import React from 'react';

export default ({ comments }) => {
    // can delete all this because getting it from query list
    // const [comments, setComments] = useState([]);

    // const fetchData = async () => {
    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    //     setComments(res.data);
    // }

    // useEffect(() => {
    //     fetchData();
    //     // eslint-disable-next-line
    // }, []);

    const renderedComments = comments.map(comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}>{content}</li>
    })

    return (
        <ul>{renderedComments}</ul>
    )
};