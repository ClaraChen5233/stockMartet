import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.js";

export default function InfoTable(props) {
  let today = new Date();
  let getDay = today.getDay();
  let dd = String(today.getDate() - 1).padStart(2, "0"); //Daily quotes only has data of the day before
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  // if is weekend don't show daily quote table
  if (getDay === 6 || getDay === 0) {
    return (
      <div>
        <p>Note: Daily quote not available on weekends!</p>
      </div>
    );
  } else {
    return (
      <table className="table table-sm table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">{props.compData.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Date</th>
            <td>{today}</td>
          </tr>
          <tr>
            <th scope="row">Price</th>
            <td>{props.compData.price}</td>
          </tr>
          <tr>
            <th scope="row">Change</th>
            <td>{props.compData.change}</td>
          </tr>
          <tr>
            <th scope="row">Day low</th>
            <td>{props.compData.dayLow}</td>
          </tr>
          <tr>
            <th scope="row">Day high</th>
            <td>{props.compData.dayHigh}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
