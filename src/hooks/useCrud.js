import axiosInstance from "../api/axiosInstance";
import { useEffect, useState } from "react";

export const useCrud = () => {
    const [apiData, setApiData] = useState();

    /* Read */
    const getApi = async (path) => {
        return await axiosInstance
            .get(path)
            .then(({ data }) => {
                setApiData(data.data);
                console.log(data.data);
                console.log("datos recibidos");
            })
            .catch((error) => console.log(error));
    };

    /* Create */
    const postApi = async (path, data) => {
        console.log(data);
        return await axiosInstance
            .post(path, data)
            .then(() => {
                console.log("Data enviada");
                if (apiData) {
                    console.log("apiData: " + apiData);
                    setApiData([data, ...apiData]);
                }
            })
            .catch((error) => console.log(error));
    };

    
    useEffect(() => {
        console.log("un elemento:", apiData);
    }, [apiData]);

    return [apiData, getApi, postApi];
};