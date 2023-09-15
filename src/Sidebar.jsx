import React from 'react';
import { BsHouseDoor, BsListUl, BsMap, BsPin } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, openSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsHouseDoor className='icon_header' /> G-Connect
        </div>
        <span className='icon close_icon' onClick={openSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsHouseDoor className='icon' /> Home
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPin className='icon' /> Node
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMap className='icon' /> Map
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
