import { Component } from "react";

class ErrorBoundary extends Component{
 constructor(props){
    super(props);
    this.state={ hasError: false };
 }


 static getDerivedStateFromError(){
    return { hasError: true}
 }

 componentDidCatch(error, info){
    console.error("Error caught by boundary:", error,info);
 }

   render(){
    if (this.state.hasError){
        return <h2>OOPs! Something went wrong</h2>;
    }
   }


}
export default  ErrorBoundary;



