/* eslint-disable react/prefer-stateless-function */

import { Component, h, render } from 'preact';

export class App extends Component {
	render() {
		return <div>Hello World!</div>;
	}
}

if (typeof window !== 'undefined' && window.document) {
	render(<App />, document.querySelector('.hp_special_experience'));
}