import { SCRSanteTable } from 'globalComponents/tables'
import { SanteBilanActifTable } from 'globalComponents/tables'
import { SanteBilanPassifTable } from 'globalComponents/tables'
import { PrevoyancePrimesSanteTable } from 'globalComponents/tables'
import {
  CorrelationMatrixOneTable,
  CorrelationMatrixTwoTable,
  Hypothesis,
  SCRHypothesis,
  SCRUCTGTable,
  YieldCurveMatrixTable,
} from 'globalComponents/tables'
import { SanteFPPage1 } from 'globalComponents/tables/santeFPPage1'
import { SanteFPPage2 } from 'globalComponents/tables/santeFPPage2'
import { SCRCounterPartRiskTable } from 'globalComponents/tables/scrCounterpartRisk'

const Funds = () => {
  // const { t } = useTranslation()

  return (
    <div className='funds-container'>
      {/* // dummy data */}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <h2>{'Menu: SCR'}</h2>
        <h4>{'Menu: Menu: SCR➔Hypothèses'}</h4>
        <SCRHypothesis />
        <h4>{'Menu: Menu: SCR➔Risque-de-contrepartie'}</h4>
        <SCRCounterPartRiskTable />
        <h4>{'Menu: Menu: SCR➔UC/TG'}</h4>
        <SCRUCTGTable />
        <h4>{'Menu: Menu: SCR➔Sante'}</h4>
        <SCRSanteTable />

        <h2>{'Menu: Santé – Prévoyance'}</h2>
        <h4>{'Menu: Santé – Prévoyance ➔ Primes santé'}</h4>
        <PrevoyancePrimesSanteTable />

        <h4>{'Menu: Menu: Santé – Bilan ➔ Actif'}</h4>
        <SanteBilanActifTable />
        <h4>{'Menu: Menu: Santé – Bilan ➔ Passif'}</h4>
        <SanteBilanPassifTable />
        <h4>{'Menu: Menu: Santé – Fonds propres ➔ Page 1'}</h4>
        <SanteFPPage1 />
        <h4>{'Menu: Menu: Santé – Fonds propres ➔ Page 2'}</h4>
        <SanteFPPage2 />


        <h2>{'Menu: Paramètres'}</h2>
        <h4>{'Menu: Menu: Paramètres➔Hypothèses de choc'}</h4>
        <Hypothesis />
        <h4>{'Menu: Menu: Paramètres ➔ Matrice de correlation 1'}</h4>
        <CorrelationMatrixOneTable />
        <h4>{'Menu: Menu: Paramètres ➔ Matrice de correlation 2'}</h4>
        <CorrelationMatrixTwoTable />
        <h4>{'Menu: Menu: Paramètres ➔ Matrice de courbe des taux'}</h4>
        <YieldCurveMatrixTable />
      </div>
      {/* // dummy data */}

      {/* <Toolbar /> */}
      {/* <div className="custom-table-style-2-header mt-5">
        <div style={{ width: "50%" }}></div>
        <div style={{ width: "12.5%" }} className="text-center">
          <h5>Tier1 {t("unlimited")}</h5>
        </div>
        <div style={{ width: "12.5%" }} className="text-center">
          <h5>Tier 1 {t("limited")}</h5>
        </div>
        <div style={{ width: "12.5%" }} className="text-center">
          <h5>Tier 2</h5>
        </div>
        <div style={{ width: "12.5%" }} className="text-center">
          <h5>Tier 3</h5>
        </div>
      </div> */}
      {/* <div className="custom-table-style-2-wrapper mb-5">
        <table>
          <tbody>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-1")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-2")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className="small-heading mb-0">
                  {t("production-data.bass-equity.title-1")}
                </h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-3")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-4")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-5")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-6")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className="small-heading mb-0">
                  {t("production-data.bass-equity.title-2")}
                </h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-3")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-4")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-5")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-6")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-7")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-8")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className="small-heading mb-0">
                  {t("production-data.bass-equity.title-3")}
                </h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-9")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-10")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-11")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-12")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-13")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-14")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <span className="table-row-title">
                  {t("production-data.bass-equity.field-15")}
                </span>
              </td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
              <td className="text-right">1</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {/* <ConfirmationBox /> */}
    </div>
  )
}

export default Funds
