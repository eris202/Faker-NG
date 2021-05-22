import React from "react";
import { Pagination } from "react-bootstrap";
export default function Table({ data }) {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [increaseIntrvl, setIncreaseIntrvl] = React.useState(10);

  const [dataToUse, setData] = React.useState(data);

  React.useEffect(() => {
    if (data && data.length) {
      setData(data.slice(start, end));
    }
  }, [start, end, data]);

  console.log(dataToUse, "res.state");

  const handlePrevious = () => {
    console.log("start is", start, "End is", end);
    if (start == 0) return;

    setStart(start - increaseIntrvl);
    setEnd(end - increaseIntrvl);
  };

  const handleNext = () => {
    if (end == data.length) return;
    setStart(end);
    setEnd(end + increaseIntrvl);
  };

  return (
    <>
      <div>
        <table className=" table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fistname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {console.log(data)}
            {dataToUse &&
              dataToUse.map((result, index) => (
                <tr key={index}>
                  <th scope="row">{result.index}</th>
                  <td>{result.firstName}</td>
                  <td>{result.lastName}</td>
                  <td>{result.location}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <button className="btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
