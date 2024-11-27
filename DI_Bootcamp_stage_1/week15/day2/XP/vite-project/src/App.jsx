import { useState } from 'react'
import PostList from './PostList'

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
        
      </Routes>
      <div>
        <PostList />
      </div>
    </BrowserRouter>
  )
}

export default App
