import React, {  useState } from 'react'
import { FaBars,FaBookReader, FaTh, FaWpforms, } from 'react-icons/fa'
import {  AiOutlineOrderedList, AiOutlineProfile } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { GiArchiveRegister, GiTimeBomb } from "react-icons/gi";
import { MdOutlineAppRegistration, MdOutlineEmojiTransportation, MdOutlineHolidayVillage } from "react-icons/md";
import { BsFillBookFill } from 'react-icons/bs';
import { SiWebmoney,SiTrendmicro } from 'react-icons/si'



const Sidebar = ({children}) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const toggle= () => setIsOpen (!isOpen );
  const menuItem = [
 
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },

    {
      path: "/fees",
      name: "FeesForm",
      icon: <FaWpforms />
    },
    
    {
      path: "/student",
      name: "StudentForm",
      icon: <AiOutlineOrderedList />
    },
   
    // {
    //   path: "/Registration",
    //   name: "Registraion",
    //   icon: <MdOutlineAppRegistration />
    // },

    {
      path: "/attendance",
      name: "AttendanceFrom",
      icon: <GiArchiveRegister />
    },
    {
      path: "/tranportform",
      name: "Transport",
      icon: <MdOutlineEmojiTransportation />
    },
    {
      path: "/resultform",
      name: "Results",
      icon: <AiOutlineProfile />
    },
    {
      path: "/stationaryform",
      name: "Stationary",
      icon: <BsFillBookFill />
    },

    {
      path: "/teacherform",
      name: "Teacher",
      icon: <GiArchiveRegister />,
    },

    {
      path: "/timetable",
      name: "Time-Table",
      icon: <GiTimeBomb />,
    },

    {
      path: "/salleryform",
      name: "Sallery",
      icon: <SiWebmoney />,
    },

    {
      path: "/leaveform",
      name: "Leave",
      icon: <SiTrendmicro />,
    },
    // {
    //   path: "/holiday",
    //   name: "HoliDays",
    //   icon: <MdOutlineHolidayVillage />
    // },
    // {
    //   path: "/createpost",
    //   name: "CreatePost",
    //   icon: <IoIosCreate />
    // },
  

  

  

 

    
  
  ]
  return (
    <div className="container-fluid  ">
      <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
        <div className='top_section'>
          <p style={{display: isOpen ? "block" : "none"}} className='logo'>
          {/* <span>Travel Admin</span> */}

            
          </p>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <Link to={item.path} key={index} className="link" 
            activeclassName="active">
              <div className='icon'> {item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}}  className='Link_text'>{item.name}</div>
            </Link>
          ))
        }
      </div>
      <main style={{width:"100%",height:"100vh",overflow:"scroll"}}>{children}</main>
    </div>
  )
}

export default Sidebar

