import { useState } from 'react'
import PostList from './PostList'
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const postData = async() => {
  const url = "YOUR_WEBHOOK_URL";
  const data = {
    key1: "myusername",
    email: "mymail@gmail.com",
    name: "Isaac",
    lastname: "Doe",
    age: 27
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await reposnse.json();
    console.log("Response: ", result);
    
  }catch (error) {
    console.error("Error", error)
  }
};

function App() {
  

  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand-ls navbar-light bg-light'>
        <div>
        <NavLink className='nav-link' to="/">
          Home
        </NavLink>
        <NavLink className='nav-link' to="/Profile">
          Profile
        </NavLink>
        <NavLink className='nav-link' to="/Shop">
          Shop
        </NavLink>
        </div>
      </nav>

      <Routes>
        <Route
        path="/"
        element={
          <ErrorBoundary>
            <HomeScreen />
          </ErrorBoundary>
        }
        />

        <Route
        path="/Profile"
        element={
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        }
        />
        
        <Route
        path="/shop"
        element={
          <ErrorBoundary>
            <shopScreen />
          </ErrorBoundary>
        }
        />
{/* Exercise 2 */}        
      </Routes>
      <div>
        <PostList />
      </div>

{/* Exercise 3 */}
      <div>
        <Example1/>
        <Example2/>
        <Example3/>
      </div>

{/* Exercise 4 */}
      <div>
        <button onClick={postData}>Send Data</button>
      </div>
    </BrowserRouter>
  )
}

export default App
