import React, { useState } from "react";
import "./Table.css";

export default function Table(props) {
  let ctr = 0;
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState(false);
  console.log("in table : ", props.content.data);

  const [recoginzeData, setRecoginzeData] = React.useState([]);
  const [submissionData, setSubmissionData] = React.useState([]);
  const getData = () => {
    axios
      .get("http://20.244.36.11:8000/api/expert")
      .then((res) => {
        setRecoginzeData(res.data.data[0].recogintion);
        setSubmissionData(res.data.data[0].submission);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    props.content.data && (
      <>
        <div className="table-responsive table-bordered">
          <table className="table table-striped table-hover mt-5">
            <thead className="thead">
              <tr>
                <th scope="col" colSpan={6}>
                  {" "}
                  Submissions
                </th>
                <th scope="col" colSpan={2}>
                  {" "}
                  Recognition
                </th>
                <th scope="col" colSpan={3}>
                  {" "}
                  Analysis
                </th>
                <th scope="col" colSpan={1}>
                  {" "}
                  Verification
                </th>
                <th scope="col" colSpan={1}>
                  {" "}
                  Submit
                </th>
              </tr>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Image</th>
                <th scope="col">Submission_timestamp</th>
                <th scope="col">Lattitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Quantity</th>
                <th scope="col">Prediction</th>
                {/* <th scope="col">Confidence</th> */}
                <th scope="col">Verification</th>
                <th scope="col">Temperature</th>
                <th scope="col">Humidity</th>
                <th scope="col">Wind Speed</th>
                <th scope="col" colSpan={1}>
                  {" "}
                </th>
                <th scope="col" colSpan={1}>
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {props.content.data.map((value, index) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>image</td>
                    <td>{value.submission[0].submission_timestamp}</td>
                    <td>{value.submission[0].latitude}</td>
                    <td>{value.submission[0].quantity}</td>
                    <td>{value.recogintion[0].prediction}</td>

                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onClick={() => {
                            setShow(false);
                            setLabel(false);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onClick={() => {
                            setShow(true);
                            setLabel(true);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                      <div className="h6" id="box">
                        {show ? (
                          <input
                            type="label"
                            class="form-control"
                            id="inputLabel"
                            placeholder="Enter correct label"
                          />
                        ) : null}
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        disabled={label ? false : true}
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* {  props.content.map((value, index) => {
            return (
              <tr>
                <th scope="row">{console.log('Transations from at : ', props.content)}{++cnt}</th>
                <td>{value.cust1}</td>
                <td>{value.acc1}</td>
                <td>{value.cust2}</td>
                <td>{value.acc2}</td>
                <td>{value.amount}</td>

              </tr>
            );
          })}
                 */}
            </tbody>
          </table>
        </div>
      </>
    )
  );
}
