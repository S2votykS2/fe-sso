import { useSearchParams } from "react-router-dom";
import "./Code.scss";
import axios from "axios";
import { useEffect, useRef } from "react";
const Code = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const firstRunRef = useRef(false);

  useEffect(() => {
    console.log("serchParams", searchParams);
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && firstRunRef.current === false) {
      firstRunRef.current = true;
      axios
        .post(process.env.REACT_APP_BACKEND_VERIFY_TOKEN, {
          ssoToken,
        })
        .then((res) => {
          console.log("check res", res);
        })
        .error((error) => {
          console.log("check error", error);
        });
    }
  }, []);
  return (
    <>
      <div className="test"> Code </div>{" "}
    </>
  );
};

export default Code;
