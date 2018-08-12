export const particlesOptions = {
		 particles: {
			number: {
				value: 150,
				density: {
					enable: true,
					value_area: 1500,
				}
			},
			move: {
				enable: true,
				random: true,
				speed: 8,
				attract: {
					enable: false,
				}
			},
			shape: {
				type: 'circle',
				radius: '20px'
			}
		   },
		interactivity: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
}