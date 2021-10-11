import './header.css'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Header = () => {


    return (
        <div id='wrapper'>
            <header className='header'>
                <div className='toolbar'>
                    <div>
                        <span>Condominio React</span>
                    </div>
                    <div className=''>
                        <button>Novo Post</button>
                        <span>Img 1</span>
                        <span>Img 2</span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;