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
                // Get the last 6 records from the fetched data
                const lastSixNotice = res.data.Result.slice(-9);
                setnoticedata(lastSixNotice);
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
