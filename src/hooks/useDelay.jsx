import {
 useState,
 useEffect
} from "react"

export const useDelay = (ms = 1000) => {
 const [loading,
  setLoading] = useState(true)

 useEffect(() => {
  const timer = setTimeout(() => setLoading(false), ms)
  return () => clearTimeout(timer)
 }, [ms])

 return loading
}