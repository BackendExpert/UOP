import axios from "axios";
import { useEffect, useState } from "react";

const useNoticeData = () => {
    const [noticedata, setnoticedata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/notice.php", {
            params: { action: "getallNotice" },
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                setnoticedata(res.data.Result);
            } else {
                setnoticedata([]);
            }
        })
        .catch(err => {
            console.error(err);
            setnoticedata([]);
        });
    }, []);

    return noticedata;
};

export default useNoticeData;
