import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { GameScreen } from './screens/GameScreen'
import { WinScreen } from './screens/WinScreen'
import { LoseScreen } from './screens/LoseScreen'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0d0f12]">
        <Navbar />
        <Routes>
          <Route path="/"     element={<GameScreen />} />
          <Route path="/win"  element={<WinScreen />} />
          <Route path="/lose" element={<LoseScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
