import { Divider } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const CorrelationMatrix1Page = () => {
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th>BSCR</th>
              <th>Interest</th>
              <th>Equity</th>
              <th>Property</th>
              <th>Spread</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">Interest</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Equity</td>
              <td>
                <input />
              </td>

              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Property</td>
              <td>
                <input />
              </td>

              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Currency</td>

              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Divider className="my-5" type="horizontal" />
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th>Counterpart</th>
              <th>Type 1</th>
              <th>Type 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">Type 1</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Type 2</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Divider className="my-5" type="horizontal" />
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th>HNL</th>
              <th>Med Exp</th>
              <th>Inc Portec</th>
              <th>Work Comp</th>
              <th>Non Prop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">Med Exp</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Inc Protet</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>

            <tr>
              <td className="grey-text">Work Comp</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">Non Prop</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default CorrelationMatrix1Page;
