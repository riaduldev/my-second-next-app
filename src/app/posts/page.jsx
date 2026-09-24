import PostCard from "../Components/PostCard";

const PostsPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return (
        <div>
            <h1>Our Posts: {posts.length} </h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    posts.map(post => <PostCard key={post.id} post = {post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default PostsPage;