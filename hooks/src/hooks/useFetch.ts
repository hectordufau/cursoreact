import { useEffect, useState } from "react";

export const useFetch = (url: string, method: string = 'get') => {
    const [response, setResponse] = useState({
        data: {},
        loading: true
    })

    useEffect(() => {
        (async () => {
            const resp = await fetch(url, { method })
            const jsonData = await resp.json
            setResponse({
                data: jsonData,
                loading: false
            })
        })();
    }, [url, method])

    return response
}