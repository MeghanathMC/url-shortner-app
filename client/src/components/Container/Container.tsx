import { useEffect, useState } from "react";
import FormContainer from "../FormContainer/FormContainer";
import FormTable from "../FormTable/FormTable";
import type { UrlData } from "../../interface/UrlData";
import { ServerURL } from "../../helpers/Constants";
import axios from "axios";

const Container = () => {

    const [data,setData] = useState<UrlData[]>([]);
    const [reload, setReload]= useState<boolean>(false);

    const updateReloadState = () : void =>{
        setReload(true);
    }

    const fetchTableData = async ()=>{
        const response = await axios.get(`${ServerURL}/getAllUrl`);
        console.log("The response from the server is : ", response);
        setData(response.data);
        setReload(false);
    }

    //useffect to trigger to get all the data from the backend on every reload
    useEffect(()=>{
        fetchTableData();
    },[reload])


  return (
  <>
  <FormContainer  updateReloadState = {updateReloadState}/>
  <FormTable updateReloadState = {updateReloadState} data = {data}/>
  
  </>
  )
}

export default Container;