import { AppRoutes } from "./routes/AppRoutes"
import { ThemeProvider } from "./contexts/ThemeProvider"
function App() {

  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
