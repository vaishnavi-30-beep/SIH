import React from "react";
import "./Table.css"
export default function Table() {
    return (
        <>
        <div className="table-responsive table-bordered">
        <table className="table table-striped table-hover mt-5">
            <thead className="thead">
                <tr >
                <th  scope="col" colSpan={6}> Submissions</th>
                <th scope="col" colSpan={3}> Recognition</th>
                <th scope="col" colSpan={3}> Analysis</th>
                <th scope="col" colSpan={1}> Verification</th>
                

                </tr>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Image</th>
                    <th scope="col">Submission_timestamp</th>
                    <th scope="col">Lattitude</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Prediction</th>
                    <th scope="col">Confidence</th>
                    <th scope="col">Verification</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Humidity</th>
                    <th scope="col">Wind Speed</th>
                <th scope="col" colSpan={1}> </th>

                </tr>
            </thead>
            <tbody>
                <tr > 
                    <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
                    </td>
                </tr>
                <tr>
                <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td><a href="https://www.dreamstime.com/photos-images/rohu-fish.html" >fish1</a></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                   
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
    
            </tbody>
        </table>
      
        </div></>
    );
}