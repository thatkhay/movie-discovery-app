import React from 'react'
import Logo from '../assets/tv.png';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import LogoutIcon from '@mui/icons-material/Logout';
function NavBar() {
  return (
    <div style={{width: '10rem', border: '2px solid gray', height: '90vh', borderRadius: '0 1rem 1rem 0', padding: '3rem 2rem'}}>
<nav style={{display: 'flex', flexDirection:'column'}}>
  <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <img style={{height: '3rem', width: '3rem'}} src={Logo} alt="" />
<h4 style={{color: 'black', width: '100%'}}>Movie Box</h4>
  </header>
<ul style={{display: 'flex', flexDirection:'column', height: '100%', justifyContent:'space-between', marginTop: '1rem', fontSize: '.9rem', listStyleType: 'none', marginLeft: '-2rem'}}>
  <li style={{marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    <HomeIcon/>
    <p>Home</p>
  </li>
  <li style={{marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
<OndemandVideo/>
    <p>Movies</p>
  </li>
  <li style={{marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
<VideocamIcon/>
    <p>TV Series</p>
  </li>
  <li style={{marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
<UpcomingIcon/>
    <p>Upcoming</p>
  </li>
</ul>
<div style={{width: '80%', border: '1px solid black', borderRadius: '.5rem', padding: '10px', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
  <p style={{fontSize: '.7rem', width: '90%'}}>play more movies to earn free tickets</p>
  <p style={{fontSize: '.7rem', width: '90%'}}>50k people are playing now</p>
  <button style={{border: 'none', borderRadius: '.6rem', height: '1.8rem'}}>start playing</button>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <LogoutIcon/>
  <p>Log out</p>
</div>
</nav>


      

    </div>
  )
}

export default NavBar