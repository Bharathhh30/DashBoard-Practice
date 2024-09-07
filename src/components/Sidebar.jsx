import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from  'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'


import {links} from '../data/dummy'


function Sidebar() {
 
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-blue-200  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const activeMenu = true;
  return (
    <div className='ml-3 h-screen overflow-auto pb-10'>
        {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={()=>{}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900'>
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type="button" onClick={()=>{}}  className='mr-3 mt-6 hover:bg-blue-100 rounded-full text-xl'>
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10 '>
            {links.map((link)=>(
              <div key={link.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase hover:bg-slate-100 overflow-hidden rounded-lg px-2 py-2'>
                {link.title}
                </p>
                {link.links.map((sublink)=>(
                  <NavLink 
                    to={`/${sublink.name}`}
                    key={sublink.name}
                    onClick={()=>{}}
                    
                    className={({isActive}) => (isActive ? activeLink : normalLink) } >
                      {sublink.icon}
                      <span className='capitalize '>{sublink.name}</span>
                    </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>)}
    </div>
  )
}

export default Sidebar