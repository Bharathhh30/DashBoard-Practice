import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const activeMenu = true;

  return (
    <>
      <div>
        {activeMenu ? (
          <div className='w-72 fixed shadow-lg'>
            Sidebar
          </div>
        ) : (
          <div className='w-0'>
            
          </div>
        )}

        <div className={
          activeMenu ? 'bg-main-bg min-h-screen w-full' : 'min-h-screen w-full flex-2'
        }>
          <div className='fixed bg-main-bg navbar w-full'>
            NAvBar
          </div>
        </div>

        <div>
          <Routes>
            {/* Dashboard content */}
            <Route path="/" element="Ecommerce" />
            <Route path="/ecommerce" element="Ecommerce" />

            {/* Pages content related routes */}
            <Route path="/orders" element="Orders" />
            <Route path="/employees" element="Employees" />
            <Route path="/customers" element="Customers" />

            {/* App */}
            <Route path="/kanban" element="kanban" />
            <Route path="/editor" element="editor" />
            <Route path="/calendar" element="calendar" />
            <Route path="/colorpicker" element="colorpicker" />

            {/* Charts */}
            <Route path="/line" element="line" />
            <Route path="/area" element="area" />
            <Route path="/bar" element="bar" />
            <Route path="/pie" element="pie" />
            <Route path="/financial" element="financial" />
            <Route path="/colormapping" element="colormapping" />
            <Route path="/pyramid" element="pyramid" />
            <Route path="/stacked" element="stacked" />
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
