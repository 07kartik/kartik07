import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'

const Logo = () => {

	return (
			<div className='ma4 mt0'>
				<Tilt 
					className='Tilt br2 shadow-2' 
					options={{ max : 65 }} 
					style={{ 
						height: 150, 
						width: 150, 
						background: 'linear-gradient(2deg, yellow 0%, orange 100%)'
					}} >
					<div className='Tilt-out'>
						<img alt='logo' style={{paddingTop: '1px'}} src={brain} />
					</div>
				</Tilt>

			</div>
		)

}

export default Logo;