import { useState } from 'react'
import AUPPage from './components/AUPPage'
import APITermsPage from './components/APITermsPage'
import CookiePolicyPage from './components/CookiePolicyPage'
import DMCAPolicyPage from './components/DMCAPolicyPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import ServiceRelationshipPage from './components/ServiceRelationshipPage'
import TermsOfServicePage from './components/TermsOfServicePage'
import ThirdPartyLicensesPage from './components/ThirdPartyLicensesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('aup')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'api-terms':
        return <APITermsPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'cookie':
        return <CookiePolicyPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'dmca':
        return <DMCAPolicyPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'relationship':
        return <ServiceRelationshipPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'tos':
        return <TermsOfServicePage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'thirdparty':
        return <ThirdPartyLicensesPage onNavigate={handleNavigate} currentPage={currentPage} />
      case 'aup':
      default:
        return <AUPPage onNavigate={handleNavigate} currentPage={currentPage} />
    }
  }

  return renderPage()
}

export default App
