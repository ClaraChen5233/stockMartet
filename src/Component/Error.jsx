import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="container d-flex align-items-center justify-content-center error-page">
      <div>
        <h2 className="text-center">AWWWWWW YOU FOUND ME!</h2>
        <p className="text-center">
          Unfortunately you have found our exlusive 404 error page, which means
          the page you are looking for is no longer here
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <button type="button " className="btn btn-outline-light home-btn">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
