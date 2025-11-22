// this is a custom hook 
import { useEffect, useState } from "react";
//always try to use "use" word in all front of all hook names 
function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency]);

    console.log(data);
    return data; 
}
export default useCurrencyInfo; 