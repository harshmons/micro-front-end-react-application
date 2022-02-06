import App from './App.svelte';

const mount = (el) => {
	new App({
		target: el,
		// props: {
		// 	name: 'world'
		// }
	});
  };

export {mount};