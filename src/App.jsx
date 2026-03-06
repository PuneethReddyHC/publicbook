import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Platform from './pages/Platform'
import LandRecords from './pages/LandRecords'
import Agriculture from './pages/Agriculture'
import Schemes from './pages/Schemes'
import Works from './pages/Works'
import Education from './pages/Education'
import Governance from './pages/Governance'
import AIAgent from './pages/AIAgent'
import About from './pages/About'
import Proposal from './pages/Proposal'
import Sources from './pages/Sources'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform/land" element={<LandRecords />} />
        <Route path="/platform/agriculture" element={<Agriculture />} />
        <Route path="/platform/schemes" element={<Schemes />} />
        <Route path="/platform/works" element={<Works />} />
        <Route path="/platform/education" element={<Education />} />
        <Route path="/platform/governance" element={<Governance />} />
        <Route path="/platform/ai-agent" element={<AIAgent />} />
        <Route path="/about" element={<About />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/sources" element={<Sources />} />
      </Route>
    </Routes>
  )
}
