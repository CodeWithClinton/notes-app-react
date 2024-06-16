import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <Link className="navbar-brand" to="/">
          <h4 style={{ fontWeight: "bold" }}>Notey</h4>
        </Link>
        <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{ width: "500px", height: "40px" }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
          {/* <button className="btn btn-outline-primary btn-md" type="button">Add</button> */}
        </div>

        <Link to="/add-notes"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaSquarePlus /> Add Notes
          </button>
        </Link>
      </div>
    </nav>

    // <nav className="navbar navbar-dark bg-dark">
    //   <div className="container d-flex justify-content-around">
    //     <a className="navbar-brand">Navbar</a>
    //     <div className="d-flex">
    //       <div className="input-group input-group-sm custom-input-group" style={{ width: '300px' }}>
    //         <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </div>
    //       <button className="btn btn-outline-primary btn-sm ms-2" type="button">Add</button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
