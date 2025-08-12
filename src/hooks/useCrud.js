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
        try {
          const response = await axiosInstance.post(path, data);
          console.log("Data enviada");
      
          if (apiData) {
            console.log("apiData: " + apiData);
            setApiData([data, ...apiData]);
          }
      
          return response.data;
        } catch (error) {
          throw new Error(error.response?.data?.message || "Error al enviar datos");
        }
   };
    
    useEffect(() => {
        console.log("un elemento:", apiData);
    }, [apiData]);

    return [apiData, getApi, postApi];
};