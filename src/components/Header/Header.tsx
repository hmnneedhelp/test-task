import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey} from '@mui/material/colors'
import './Header.style.scss'

export default function Header(){
    return(
    <div className='main-header'>
        <AppsIcon sx={{color: grey[500]}} />
        <ReplyIcon sx={{color: grey[500]}} />
        <p className={'text-primary'}>Просмотр</p>
        <p className={'text-secondary'}>Управление</p>
    </div>
    )
}