import { useState } from "react";
import axios from "axios;"

export default function ListUser() {

   const [inputs, setInputs] =  useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
      event.preventDefault();

      //Maakt verbinding met de database
      axios.post('http://localhost:9999/api/user/save', inputs);
      console.log(inputs);
    }
  return (
    <div>
      <h1>Maak familie</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
              <label>Voornaam: </label>
              </th>
              <td>
              <input type="text" name="name" onChange={handleChange}></input>
              </td>
            </tr>

            <tr>
              <th>
              <label>Achternaam: </label>
              </th>
              <td>
              <input type="text" name="lastname" onChange={handleChange}></input>
              </td>
            </tr>

            <tr>
              <th>
              <label>Straat: </label>
              </th>
              <td>
              <input type="text" name="street" onChange={handleChange}></input>
              </td>
            </tr>
            <tr>
                <td colSpan="2" align="right">
                <button>Opslaan</button>
                </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  ) 
}
