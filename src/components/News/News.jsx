import axios from "axios";
import { useEffect, useState } from "react";

const useNEWSData = () => {
    const [newsdata, setnewsdata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/news.php", {
            params: { action: "getallNEWS" },
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                // Get the last 6 records from the fetched data
                const lastSixNews = res.data.Result.slice(-6);
                setnewsdata(lastSixNews);
            } else {
                setnewsdata([]);
            }
        })
        .catch(err => {
            console.error(err);
            setnewsdata([]);
        });
    }, []);

    return newsdata;
};

export default useNEWSData;
