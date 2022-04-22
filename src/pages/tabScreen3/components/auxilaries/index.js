import { ConfirmationBox } from "globalComponents";
import React from "react";

const Auxilaries = () => {
  return (
    <>
      <div className="custom-table-style-2-wrapper mb-5">
        <table>
          <tbody>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Capital souscrit non verse
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Fonds non versés équivalents au capital souscrit non versé
                  d'une
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Actions préférentielles appelables sur demande
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Engagements juridiquement contraignants de souscrire sur
                  demande à des passifs subordonnés
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Primes d'émission relatives aux actions préférentielles
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Lettres de crédit et garanties satisfaisant aux critères de
                  l'article 92 de la directive SII
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Autres lettres de crédit et garanties
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Rappels de cotisations satisfaisant aux critères de l'article
                  93 de la
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Autres rappels de cotisations
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                <span className="table-row-title">
                  Autres fonds propres auxiliaires
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ConfirmationBox />
    </>
  );
};

export default Auxilaries;
