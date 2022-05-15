import { ConfirmationBox } from "globalComponents";
import React from "react";

const FullRedemptionPage = () => {
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>Dat Calcul</th>
              <th>Type Traitement</th>
              <th>Code Produt</th>
              <th>Annee 1</th>
              <th>Annee 2</th>
              <th>Annee 3</th>
              <th>Annee 4</th>
              <th>Annee 5</th>
              <th>Annee 6</th>
              <th>Annee 7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>3/11/2014</td>
              <td>Calcul</td>
              <td>101</td>
              <td>4</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>33</td>
              <td>33</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default FullRedemptionPage;
