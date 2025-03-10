import axios from "axios";
import { useEffect, useState } from "react";

const useResData = () => {
    const [resdata, setresdata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/research.php", {
            params: { action: "getResearch" },
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                setresdata(res.data.Result);
            } else {
                setresdata([]);
            }
        })
        .catch(err => {
            console.error(err);
            setresdata([]);
        });
    }, []);

    return resdata;
};

export default useResData;
