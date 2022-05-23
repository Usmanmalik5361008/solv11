import { Divider } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const CorrelationMatrix1Page = () => {
  const { t } = useTranslation()
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th>BSCR</th>
              <th>
                
              </th>
              <th>
                {t('compliance-settings.cm.equity')}
              </th>
              <th>
                {t('compliance-settings.cm.property')}
              </th>
              <th>
                {t('compliance-settings.cm.spread')}
              </th>
              <th>
                {t('compliance-settings.cm.currency')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.interest')}
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
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.interest')}
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
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.property')}
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
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.currency')}
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
              <th>
                {t('compliance-settings.cm.counterpart')}
              </th>
              <th>{t('compliance-settings.cm.type')} 1</th>
              <th>{t('compliance-settings.cm.type')} 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">{t('compliance-settings.cm.type')} 1</td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">{t('compliance-settings.cm.type')} 2</td>
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
              <th>{t('compliance-settings.cm.work')} Comp</th>
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
              <td className="grey-text">{t('compliance-settings.cm.work')} Comp</td>
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
