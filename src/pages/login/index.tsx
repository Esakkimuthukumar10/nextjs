// pages/login.tsx

import React from "react";
import { Button } from "primereact/button";
import { InputOtp, InputOtpChangeEvent } from "primereact/inputotp";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { httpClient } from "@padra/service/http.service";
import { obscureEmail } from "@padra/utils/global-helper";
const http = httpClient;

const Login: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [otp, setOtp] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const query = useSearchParams();
  const router = useRouter();
  const showEmail: string = obscureEmail(query.get("email") as string || '');


  // Request OTP 
  const requestOtp = async () => {
    const response = await http
      .post("request-otp", { email: query.get("email") })
      .catch((error) => {
        setErrMsg(false);
        clearOtpInput();
        if (stage < 1) {
          setStage(1);
        }
        setLoading(false);
      });
  };

  // Submit OTP 
  const submitOtp = async () => {
    setLoading(true);
    setErrMsg(true);
    const payload = {
      email: query.get("email"),
      otp: otp,
    };
    const response = await http.post("request-otp", payload).catch((error) => {
      router.push("/onboard");
      setErrMsg(true);
      setStage(1);
      setLoading(false);
    });
  };

  // OTP Input Event Change
  const changeOtpEvent = (e: InputOtpChangeEvent) => {
    setOtp(e.value as string);
 
    if(!e.value) setErrMsg(false);

    if((e.value as string).length == 6) {
      submitOtp();
    }
  }

  // Clear All Attributes Events
  function clearOtpInput() {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 10);
    setOtp("");
  }

  return (
    <div className={styles.login_container}>
      <p className={styles.welcome}>Welcome to your hair transplant journey</p>
      <p className={styles.otp_msg}>
        Your one-time passcode (OTP) {stage > 0 ? `has been sent to you via `: `will been send it to your `}Email ID
        <span style={{ fontWeight: 500 }}>{showEmail}.</span>
      </p>
      {stage == 0 ? (
        <Button
          label="Request OTP"
          className={styles.request_otp}
          loading={loading}
          onClick={() => {
            requestOtp();
            setLoading(true);
          }}
        />
      ) : (
        <>
          <div className={styles.otp_container}>
            {!reset && (
              <InputOtp
                value={otp}
                length={6}
                onChange={(e) => { changeOtpEvent(e) }}
                integerOnly
                className={styles.otp_input}
              />
            )}
            {errMsg ? <p className={styles.err_msg}>Incorrect OTP</p> : null}
          </div>
          <div className={styles.otp_btn_container}>
            <Button
              label="Resend OTP"
              className={styles.resend_btn}
              link
              onClick={() => requestOtp()}
            />
            <Button
              label={errMsg ? 'Retry' : 'Next'}
              className={styles.next_btn}
              loading={loading}
              disabled={String(otp).length < 6}
              onClick={() => submitOtp()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
