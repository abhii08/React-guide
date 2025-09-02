import './App.css'
import { useCreatePostMutation, useGetApiByNameQuery, useDeletePostMutation, useUpdatePostMutation } from './services/api'

function App() {
  const { data, error, isLoading,isSuccess, isFetching } = useGetApiByNameQuery();

  return (
    <div>
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div>
          {data?.map(posts => {
            return(
              <div key={posts.id}> 
              <span>{posts.title}</span>  {/* Read Data */}
              </div>
            )
          })} 
        </div>
      )}
      <div>
        <AddPost />    
      </div>
    </div>
  )
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const posts = {
    id: "1",
    title: "Posted",
    author: "Abhinav"
  };

  const postsUpdate = {
    id: "1",
    title: "Updated",
    author: "Abhinav Updated"
  };

  const handler = async () => {
    await addPost(posts);
  };

  const handleDelete = async () => {
    await deletePost(posts.id);   
  };

  const handleUpdate = async () => {
    await updatePost(postsUpdate); 
  };

  return (
    <>
      <button onClick={handler}>Add Post</button>
      <button onClick={handleDelete}>Delete Post</button>
      <button onClick={handleUpdate}>Update Post</button>
    </>
  );
}
export default App

