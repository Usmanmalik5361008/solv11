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
              <th>
                {t('compliance-settings.cm.equity')}
              </th>
              <th>
                {t('compliance-settings.cm.global')}
              </th>
              <th>
                {t('compliance-settings.cm.other')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.global')}
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
                {t('compliance-settings.cm.other')}
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
              <th>MktDown</th>
              <th>
                {t('compliance-settings.cm.interest')}
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
              <th>
                {t('compliance-settings.cm.concentrate')}
              </th>
              <th>
                {t('compliance-settings.cm.countercycling')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.equity')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.spread')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.concentrate')}
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
              <th>MktUp</th>
              <th>
                {t('compliance-settings.cm.interest')}
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
              <th>
                {t('compliance-settings.cm.concentrate')}
              </th>
              <th>
                {t('compliance-settings.cm.countercycling')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.equity')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.spread')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            {/* ---- */}
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.concentrate')}
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
              <th>{t('compliance-settings.cm.life')} UW</th>
              <th>
                {t('compliance-settings.cm.mortality')} 
              </th>
              <th>
                {t('compliance-settings.cm.longevity')}
              </th>
              <th>
                {t('compliance-settings.cm.disability')}
              </th>
              <th>
                {t('compliance-settings.cm.lapse')}
              </th>
              <th>
                {t('compliance-settings.cm.expenses')}
              </th>
              <th>
                {t('compliance-settings.cm.revision')}
              </th>
              <th>
                {t('compliance-settings.cm.cat')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.mortality')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.longevity')}
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
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td className="grey-text">
                {t('compliance-settings.cm.disability')}
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
