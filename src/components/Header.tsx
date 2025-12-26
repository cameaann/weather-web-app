// import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Settings from './Settings';


const Header = () => {
	return(
		<header>
			<div className='mb-10 mt-10 ml-5 flex justify-between'>
				<img className='width w-[40%] md:w-[20%]' src={logo} alt="Logo" />
				<Settings />
			</div>
		</header>
	)
}

export default Header;