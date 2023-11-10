function App() {
  const title = "Blog Post";
  const body = "This is the body of the blog post";
  const comments = [
    {id: 1, text: 'comment 1'},
    {id: 2, text: 'comment 2'},
    {id: 3, text: 'comment 3'}
  ]

  const loading = false;
  const showComments = false;

  if(loading) {
    return <h1>Loading...</h1>
  }

  const commentBlock = (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className='main-app'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}

    </div>
  );
}

export default App;
