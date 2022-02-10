import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";


class ErrorBaundary extends Component {

    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {    // данный метод следит за измененим state
    //     return {error: true}
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children
    }
}

export default ErrorBaundary