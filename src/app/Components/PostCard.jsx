
const PostCard = ({post}) => {
    const {title, body} = post;
    return (
        <div className="border border-b-blue-800 rounded-2xl text-center">
            <h4>{title}</h4>
            <h4>{body}</h4>
        </div>
    );
};

export default PostCard;