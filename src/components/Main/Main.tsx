import './Main.style.scss'
import DescriptionIcon from '@mui/icons-material/Description';
export default function Main() {
    return(
        <div className="main">
            <div className='main-inner'>
            
            <div className='table'>
                <div className='header'>
                    <p>Уровень</p>
                    <p className='second-col'>Название работ</p>
                    <p>Основная з/п</p>
                    <p>Обородувание</p>
                    <p>Накладные расходы</p>
                    <p>Сметная прибыль</p>
                </div>
                <div className='row'>
                    <DescriptionIcon color='primary' className='icon'/>
                    <input className='second-col' />
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
            </div>
            
            </div>
        </div>
    )
}