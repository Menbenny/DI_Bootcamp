import "./App.css";
// import Test from './components/Test'
// import TestClass from './components/TestClass'
import Counter from "./components/Counter";
import Users from "./components/Users";
import CountF from "./components/CountF";
import UsersF from "./components/UsersF";

function App() {
  return (
    <>
      <h2>Class vs. Function component</h2>
      <Test text="bla bla bla"/>
      <TestClass text="hello"/>
      <Counter /> 
      <CountF />
      <Users />
      <UsersF />
    </>
  );
}

export default App;
