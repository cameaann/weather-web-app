// import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Settings from './Settings';


const Header = () => {

	// const [value, setValue] = useState<string>("");
	// const handleOnChange = (value: string) => {
	// 	console.log("Selected value:", value);
	// }
	// const label = () => <span className='flex gap-3 items-center'>
	// 	<i><img src={settingsIcon} alt="Units" /></i>
	// 	Units
	// </span>

	// const options =[];

	return(
		<header>
			<div className='mb-10 mt-10 ml-5 flex justify-between'>
				<img className='width w-[40%] md:w-[20%]' src={logo} alt="Logo" />
				<Settings />

				{/* <Select label={label()} options={options} value={value} onChange={handleOnChange} /> */}
			</div>
		</header>
	)
}

export default Header;