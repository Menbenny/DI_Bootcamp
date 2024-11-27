import { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        console.error("Error caught in ErrorBoundary: ", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1> Something went wrong.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary