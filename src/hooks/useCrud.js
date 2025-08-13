import axiosInstance from "../api/axiosInstance";
import { useEffect, useState } from "react";

export const useCrud = () => {
    const [apiData, setApiData] = useState();


    /* Create */
    const postApi = async (path, data) => {
        try {
          const response = await axiosInstance.post(path, data);
          console.log("Data enviada");
        
          
          setApiData(response.data);
      
          return response.data;
        } catch (error) {
          throw new Error(error.response?.data?.message || "Error al enviar datos");
        }
   };
    
    useEffect(() => {
        console.log("un elemento:", apiData);
    }, [apiData]);

    return [apiData, postApi];
};