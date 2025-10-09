import axios from "axios"
import { useState } from "react"
import { useEffect} from "react"
const useApps = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        axios('/appsData.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { apps, loading, error }
}

export default useApps;
