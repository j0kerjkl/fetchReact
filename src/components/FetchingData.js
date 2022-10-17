import Axios from "axios";
import { useEffect } from "react";

const FetchingData=()=>{
    return(
        useEffect(()=>{
            Axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30")
            .then((res)=>{
                console.log(res.data)
            })
        },[])

    )
}

export default FetchingData;