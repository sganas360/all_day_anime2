import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import Cookies from 'js-cookie';

//Pages
import HomePage from "./pages/HomePage.js"
import AnimeDetailPage from "./pages/AnimeDetailPage"
import GuessCharacterPage from './pages/GuessCharacterPage';
import GamePage from './pages/GamePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import WritePostPage from './pages/WritePostPage';
import AllPostsPage from './pages/AllPostsPage';
import PostsPage from './pages/PostsPage';
import ProfilePage from './pages/ProfilePage';
import YourPostsPage from './pages/YourPostsPage';
import AboutMePage from './pages/AboutMePage';

//Components
import AppNav from './components/Header.js';

function App() {
  //states
  const [username, setUsername] = useState(Cookies.get("username"))

  return (
    <div className="App">
      <AppNav username = {username} setUsername = {setUsername} />
      <HashRouter>
        <Routes>
          <Route exact path = "/" element = {<HomePage/> }/>
          <Route exact path = "/anime/:animeID" element = { <AnimeDetailPage username = {username} />}/>
          <Route exact path = "/guess-character" element = { <GuessCharacterPage/>} />
          <Route exact path = "/guess-character/:animeID" element = { <GamePage/>} />
          <Route exact path = "/signup" element = { <SignupPage/>} />
          <Route exact path = "/login" element = { <LoginPage setUsername = { setUsername }/>} />
          <Route exact path = "/write-post/:animeTitle" element = { <WritePostPage/> }/>
          <Route exact path = "/all-posts" element = { <AllPostsPage/> }/>
          <Route exact path = "/all-posts/:postID" element = { <PostsPage username = {username}/> }/>
          <Route exact path = "/profile" element = { <ProfilePage/> }/>
          <Route exact path = "/your-posts" element = { <YourPostsPage/> }/>
          <Route exact path = "/about-me" element = { <AboutMePage /> }/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
