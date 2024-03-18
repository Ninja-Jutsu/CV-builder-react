import { useState } from 'react'
import PersonalInfo from './components/Personal-details'
import AddEducationForm from './components/education-details'
import './styles/App.css'

function App() {
  return (
    <>
      <PersonalInfo />
      <AddEducationForm />
    </>
  )
}

export default App
