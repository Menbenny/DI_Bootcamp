import React from "react";

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError: false,
        };
    }

    render() {
        console.log(this.page);
        
        return <>Hi</>
    }
}
export default ErrorBoundary;