import React from 'react'
import {motion} from "framer-motion";
// import me from "../../assets/me.jpg"
import {Link} from "react-router-dom";
import {MdDashboard} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user';
import Loader from '../layout/Loader';

const Profile = () => {
    const options ={
        initial:{
            y:"-100%",
            opacity:0
        },
        animate:{
            y:0,
            opacity:1
        },
    };

    const dispatch = useDispatch();
    const {loading,user} = useSelector(state=>state.auth);

const logOutHandler= () =>{
dispatch(logout())
}


  return (
    <section className='profile'>
       
       {
        loading ===false? 
        <main>
        <motion.img src={user.photo} alt='User' {...options}/>

        <motion.h5 {...options} transition={{delay : 0.3}}>
            {user.name}
        </motion.h5>

      {
        user.role ==="admin"
         && 
         (
            <motion.div {...options} transition={{delay: 0.5}} >
            <Link to="/admin/dashboard" style={{
                borderRadius:0,
                backgroundColor:"rgb(40,40,40)"
            }}><MdDashboard/> DashBoard</Link>
        </motion.div>
        )
      }

        <motion.div initial={
            {
            x:"-100vw",
            opacity:0,
        }
        } 
        animate={
            {
            x:0,
            opacity:1,
        }
        }
        
        transition={{delay: 0.5}}>
            <Link to="/myorders">orders</Link>
        </motion.div>


        <motion.button initial={{
            x:"-100vw",
            opacity:0,
        }} 
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{delay:0.3}}
        onClick={logOutHandler}
        >
            LogOut
        </motion.button>
    </main> :  (<Loader/>)
       }
    </section>
  )
}

export default Profile
