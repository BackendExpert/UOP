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
            console.log("Full response data:", res.data);  // Debugging full response
            if (res.data.Result && res.data.Result.length > 0) {
                // Get the last 5 items (if fewer than 5, it will return all available)
                const lastFiveData = res.data.Result.slice(-5);
                console.log("Last 5 records:", lastFiveData);  // Debugging last 5 records
                setresdata(lastFiveData);
            } else {
                setresdata([]);  // If no results, set empty array
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);  // Error handling
            setresdata([]);  // If there's an error, set empty array
        });
    }, []);

    return resdata;
};

export default useResData;
