import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
			<div>
				<p className='f3'>
					{'This Magic Brain will detect faces in your pictures. Give it a try'}
				</p>
				<div className='center'>
					<div className=' form br3 center shadow-5 pa4'>
						<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
						<input className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
												 type='button' 
												 value='Detect'  
												 onClick={onButtonSubmit} />
					</div>
				</div>
			</div>	
		);

}

export default ImageLinkForm;