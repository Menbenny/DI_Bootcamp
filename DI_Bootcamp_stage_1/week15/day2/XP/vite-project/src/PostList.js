const PostList = () => {
    return (
      <div>
        {DataTransfer.map((post, index) => (
          <div key={index} style={{ marginBottom: "20px"}}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  };

  export default PostList