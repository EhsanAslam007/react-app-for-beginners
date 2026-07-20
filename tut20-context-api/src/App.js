import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext'
import EditPost from './EditPost'



function App() {

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         console.log(`Error: ${error.message}`);
  //       }
  //     }
  //   }

  //   fetchPosts();
  // }, [])

  return (
    <div className="App">
      <Header title="React Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/post' Component={NewPost} />
          <Route path='/edit/:id' Component={EditPost} />
          <Route path='/post/:id' Component={PostPage} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;