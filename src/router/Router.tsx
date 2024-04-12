import Home from 'pages/home/Home';
import MoreLeadsPreview from 'pages/more-leads-preview/more-leads-preview';
import MoreLeads from 'pages/more-leads/MoreLeads';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-leads-preview" element={<MoreLeadsPreview />} />
        <Route path="/more-leads" element={<MoreLeads />} />
      </Routes>
    </BrowserRouter>
  );
}
