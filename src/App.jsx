import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css'


function App() {
  const activeMenu = false;
  return (
    <>
      <h1>Hello</h1>
      <div className='flex relative '>
        {activeMenu ? (
          <div className='w-72 fixed sidebar bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0'>
            <Sidebar />
          </div>
        )}

        <div className={
          activeMenu ? 'bg-main-bg min-h-screen w-full' : ' bg-main-bg min-h-screen w-full flex-2'
        }>
          <div className=' bg-main-bg navbar w-full'>
            <Navbar />
          </div>
        </div>

        <div>
          <Routes>
            {/* Dashboard content */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Pages content related routes */}
            <Route path="/orders" element={<Orders/> }/>
            <Route path="/employees" element={<Employees/>} />
            <Route path="/customers" element={<Customers/>} />

            {/* App */}
            <Route path="/kanban" element={<Kanban/>} />
            <Route path="/editor" element={<Editor/>} />
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/colorpicker" element={<ColorPicker/>}/>

            {/* Charts */}
            <Route path="/line" element={<Line/>}/>
            <Route path="/area" element={<Area/>} />
            <Route path="/bar" element={<Bar/>} />
            <Route path="/pie" element={<Pie/>} />
            <Route path="/financial" element={<Financial/>} />
            <Route path="/colormapping" element={<ColorMapping/>} />
            <Route path="/pyramid" element={<Pyramid/>} />
            <Route path="/stacked" element={<Stacked/>}/>
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
