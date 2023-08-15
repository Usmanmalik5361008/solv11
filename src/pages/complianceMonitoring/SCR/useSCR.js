import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAxios } from "hooks";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";
import { runScrAxiosParams } from "api/axiosHookParams";

const COOLDOWN_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const useSCR = () => {
  const [cooldownEnd, setCooldownEnd] = useState(() => {
    const savedCooldown = localStorage.getItem("cooldownEnd");
    return savedCooldown ? Number(savedCooldown) : 0;
  });

  const isCooldownActive = Date.now() < cooldownEnd;

  useEffect(() => {
    if (isCooldownActive) {
      const timeoutId = setTimeout(() => {
        setCooldownEnd(0);
        localStorage.removeItem("cooldownEnd");
      }, cooldownEnd - Date.now());

      return () => clearTimeout(timeoutId);
    }
  }, [isCooldownActive, cooldownEnd]);

  const { callAxios: callRunScrApi, loading: runScrApiLoading } =
    useAxios(runScrAxiosParams);
  const notificationSlice = useSelector((state) => state.notification);

  const handleRunScr = useCallback(async () => {
    if (isCooldownActive) {
      const minutesLeft = Math.floor((cooldownEnd - Date.now()) / 60000);
      const secondsLeft = Math.floor((cooldownEnd - Date.now()) / 1000) % 60;
      message.warn(
        `Please wait ${minutesLeft} minutes and ${secondsLeft} seconds before trying again.`
      );
      return;
    }

    if (!notificationSlice.permissionGranted) {
      message.error(
        "Please enable notification access to get notified once the calculations are done"
      );
      return;
    }

    const data = {
      registrationToken: notificationSlice.token,
      jobID: uuidv4(),
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

    const result = await callRunScrApi({
      data,
      baseUrl: process.env.REACT_APP_SCR_API_URL,
    });

    if (result) {
      setCooldownEnd(Date.now() + COOLDOWN_DURATION);
      localStorage.setItem(
        "cooldownEnd",
        (Date.now() + COOLDOWN_DURATION).toString()
      );
      message.info(result);
    } else {
      message.warn(
        "A calculation job might already be in progress. Please wait for its completion"
      );
    }
  }, [notificationSlice, callRunScrApi, isCooldownActive, cooldownEnd]);

  return { runScrApiLoading, handleRunScr };
};

export default useSCR;
