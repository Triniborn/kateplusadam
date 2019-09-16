(function ($) {

	skel.init({
		reset: 'normalize',
		breakpoints: {
			
			// Global.
				global: {
					range: '*',
					href: 'css/style.css',
					containers: 1400,
					grid: {
						
					}
				},

			// XLarge.
				xlarge: {
					range: '-1680',
					href: 'css/style-xlarge.css',
					containers: 1200
				},

			// Large.
				large: {
					range: '-1280',
					href: 'css/style-large.css',
					containers: 960,
					grid: {

					},
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					range: '-980',
					href: 'css/style-medium.css',
					containers: '90%',
					grid: {
						collapse: 1
					}
				},

			// Small.
				small: {
					range: '-736',
					href: 'css/style-small.css',
					containers: '90%',
					grid: {

					}
				},

			// XSmall.
				xsmall: {
					range: '-480',
					href: 'css/style-xsmall.css',
					grid: {
						collapse: 2
					}
				}

		},
		plugins: {
			layers: {
				
				// Config.
					config: {
						transform: true
					},
				
				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: 'auto',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: '100%'
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}

			}
		}
	});

	$(function() {
		
		// jQuery ready stuff.
		
	});

})(jQuery);