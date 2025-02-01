import { useContext, useEffect, useState } from "react"
import { ContextProvider } from "../Context/Context"

const MyCampaign = () => {
    const {user} = useContext(ContextProvider);
    const uid = user.uid;
    const [allData, setAllData] = useState();
    useEffect(() => {
        const fetchData = () => {
            fetch(`http://localhost:4980/myCampaign/${uid}`)
             .then(response => response.json())
             .then(data => setAllData(data))
        }
        fetchData()
    }, [uid])
    console.log(allData)
  return (
    <div className="min-h-screen">
        
    </div>
  )
}

export default MyCampaign