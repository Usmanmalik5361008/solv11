import { runScrAxiosParams } from "api/axiosHookParams";
import { NOTIFICATION_TYPE } from "constants/common";
import { useAxios } from "hooks";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { scrValueMap } from "./config";
import scrHierarchy from "./data.json";
import { message } from "antd";
import axios from "axios";
import API_ENDPOINTS from "api/endpoints";

const useNewDashboard = () => {
  const { callAxios: callRunScrApi } = useAxios(runScrAxiosParams);

  const notificationSlice = useSelector((state) => state.notification);
  const [scrHierarchyFormatted, setScrHierarchyFormatted] = useState([]);

  useEffect(() => {
    const latestNotification = notificationSlice?.notifications?.[0];
    console.log({ latestNotification });
    if (!latestNotification) return;
    const notificationBody = latestNotification.body;
    const [notificationType, encodedMessage] = notificationBody.split(":");
    if (notificationType === NOTIFICATION_TYPE.INFO_COMPLETED) {
      const decodedMessage = Buffer.from(encodedMessage, "base64");
      const decodedMessageJson = JSON.parse(decodedMessage);
      const scrHierarchyFormatted = scrHierarchy.map((value) => ({
        ...value,
        value: decodedMessageJson?.[scrValueMap[value?.positionName]] || null,
      }));
      setScrHierarchyFormatted(scrHierarchyFormatted);
    }
  }, [notificationSlice.notifications]);

  const handleRunScr = useCallback(async () => {
    if (!notificationSlice.permissionGranted) {
      message.error(
        "Please enable notification access to get notified once the calculations are done"
      );
    }

    const data = {
      registrationToken: notificationSlice.token,
      jobId: uuidv4(),
      dtDateCalculValue: "2021-12-31",
      txtMortReelleText: "50",
      txtMortRelle80AnsText: "50",
      txtNbScenText: "1",
      txtTxInflText: "1.5",
      txtImpotText: "27.08",
      txtTxGestFinText: "2",
      txtfraisrelatifsText: "1000000",
      txtNbAnneesSimulText: "25",
      txtPrim_Vie_Dev1Text: "0",
      txtPrim_Vie_Dev0Text: "0",
      txtPrim_Vie_Uni1Text: "0",
      txtPrim_Vie_Uni0Text: "0",
      txtPrim_Vie_Nv1Text: "0",
      txtPrim_Vie_Nv0Text: "0",
      txtTyp2Inf3Text: "0",
      txtTyp2Sup3Text: "0",
      cmTableMortaliteFemmeText: "Unisexe",
      cmdTableMortText: "Unisexe",
      txtFraisGenMedicalExpenseText: "0",
      txtFraisGenIncomeProtectionText: "0",
      txtFraisGenWorkerCompensationText: "0",
      txtFraisGenNonProportionnalText: "0",
      txtTxRevaloCotisSanteText: "0",
      txtTxRevaloPrestaSanteText: "0",
      txtDureeResilSanteText: "0",
      txtCoutsFixesTGText: "0",
      txtCoutsFixesUCText: "0",
      txtPourcMgtActionText: "0",
      txtPrimeAcqNMedExpText: "0",
      txtPrimeAcqNIncProtecText: "0",
      txtPrimeAcqNWorkCompText: "0",
      txtPrimeAcqNNonPropText: "0",
      txtPrimeEmiseNMedExpText: "0",
      txtPrimeEmiseNIncProtecText: "0",
      txtPrimeEmiseNWorkCompText: "0",
      txtPrimeEmiseNNonPropText: "0",
      txtVAPPrimeNMedExpText: "0",
      txtVAPPrimeNIncProtecText: "0",
      txtVAPPrimeNWorkCompText: "0",
      txtVAPPrimeNNonPropText: "0",
      txtDivText: "0",
      cmTypeQRTText: "Solo",
      cmPerQRTText: "Annuel",
    };

    console.log({ url: process.env.REACT_APP_SCR_API_URL });

    await callRunScrApi({
      data,
      baseUrl: process.env.REACT_APP_SCR_API_URL,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    // await axios({
    //   data,
    //   url: `${process.env.REACT_APP_SCR_API_URL}/${API_ENDPOINTS.RUN_SCR}`,
    //   // headers: {
    //   //   "ngrok-skip-browser-warning": "true",
    //   // },
    // });
  }, [notificationSlice, callRunScrApi]);

  return { handleRunScr, scrHierarchyFormatted };
};

export default useNewDashboard;
