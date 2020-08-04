class CoolButton extends React.Component {
    constructor(props) {
        super(props);

        if (this.state.hasVisited) {
            return (
                this.state = {
                    hasVisited: true
                }
            )
        }
        else {
            return (
                this.state = {
                    hasVisited: false
                }
            )
        }
    }

    render() {

        if (this.state.hasVisited) {
            return (
                <h1 className="hasVisited">Welcome to my blog, where I discuss tech and its impacts today</h1>
            )
        }

        return (
            <button onClick={() => this.setState({ hasVisited: true })}>
                {this.props.customText}
            </button>
        )
    }
}