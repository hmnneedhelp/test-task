import './Navbar.style.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {common, grey} from '@mui/material/colors'


export default function Navbar(){
    return(
        <div className='main-navbar'>
            <div className='naming'>
                <div className='naming-text'>
                <p className='naming-big'>Название проекта</p>
                <p className='naming-small'>Аббревиатура</p>
                </div>
                <ExpandMoreIcon sx={{color: common["white"]}} />
            </div>
            <div className='row'></div>
            <div className="navbar-items-col">
            <div className='navbar-item'>
                <DashboardIcon sx={{color:common["white"]}} />
                <p>СМР</p>
            </div>
            </div>
        </div>
    )
}