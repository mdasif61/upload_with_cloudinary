import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <h3>Upload Image and Video Using Cloudinary Service in MERN Project</h3>
      <Link to='/'>Home</Link> | <Link to='/upload'>Upload</Link> | <Link to='/secure-upload'>Secure Upload</Link>
      <br/>
      <br/>
      <Outlet/>
    </div>
  )
}

export default App
