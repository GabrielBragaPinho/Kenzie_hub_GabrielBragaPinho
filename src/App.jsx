import { useContext } from "react"

import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { RoutesMain } from "./routes/RoutesMain"
import { UserContext } from "./providers/UserContext"

function App() {
  const { loading } = useContext(UserContext);

  return(
    <>
      <GlobalReset/>
      <GlobalStyles />
      <main>
        {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
      </main>
    </>
  )
}

export default App
