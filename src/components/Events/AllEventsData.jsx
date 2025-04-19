import axios from "axios";
import { useEffect, useState } from "react";

const useEventData = () => {
    const [eventdata, seteventdata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/event.php", {
            params: { action: "getallEvents" },
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                seteventdata(res.data.Result);
            } else {
                seteventdata([]);
            }
        })
        .catch(err => {
            console.error(err);
            seteventdata([]);
        });
    }, []);

    return eventdata;
};

export default useEventData;
