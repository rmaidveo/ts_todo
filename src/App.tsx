import { useState } from 'react'
import './App.css'

import { AppProvider } from './store/store'
import { Header } from './components/header/header'
import { MainSection } from './components/main-section/main-section'
import { Footer } from './components/footer/footer'
import { Filters } from './types'

function App() {
  const [visibilityFilter, setVisibilityFilter] = useState<Filters>('All')

  return (
    <div className='App'>
       <div className="wrapper">
      <AppProvider>
        <Header />
        <MainSection visibilityFilter={visibilityFilter} />
          <Footer visibilityFilter={visibilityFilter} setVisibilityFilter={setVisibilityFilter} />
      </AppProvider>
       </div>
    </div>
  )
}

export default App;
