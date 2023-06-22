import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { RoutesMain } from "./routes/RoutesMain"

function App() {

  useEffect(() => {})

  return(
    <>
      <GlobalReset/>
      <GlobalStyles />
      <main>
        <RoutesMain />
      </main>
    </>
  )
}

export default App
