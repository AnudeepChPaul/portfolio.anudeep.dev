import * as React from 'react'

const withEvents = (Child) => {
	return class extends React.Component {
		childRef = null

		constructor(props) {
			super(props)
			this.childRef = React.createRef(null)
		}

		componentDidMount() {
			// this.childRef.current.onmousemove = console.log.bind(console)
			this.childRef.current.onscroll = console.log.bind(console)
		}

		componentWillUnmount() {
			console.log('Evented Unmounting')
		}

		render() {
			console.log('Evented render')

			return (
				<Child {...this.props} ref={this.childRef}/>
			)
		}
	}
}


export default withEvents
