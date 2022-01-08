import Comments from "./comments/Comments";
import Header from "./components/Header";
import Post from "./components/Post";
const App = () => {
  return (
    <div>
      <Header />
      <h1>Segware Upvotes</h1>
      <Post />
      <Comments
        commentsUrl="segware-book-api.segware.io/api"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
