import { useRef, useEffect } from 'react'
import { User } from './components/User'
import { Company } from './components/Company'
import { CustomMap } from './components/CustomMap'



function App() {




   const user = new User()
   const company = new Company()

   const map = useRef(null)
   useEffect(() => {
      const customMap = new CustomMap(map)

      customMap.addMarker(user)
      customMap.addMarker(company)
   }, [])



   return (
      <div className="App">
         <div ref={map} style={{ height: '50vh' }}></div>
      </div>
   );
}

export default App;
