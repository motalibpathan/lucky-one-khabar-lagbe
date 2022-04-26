import "bootstrap/dist/css/bootstrap.min.css";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
function App() {
  return (
    <div>
      <Header></Header>
      <Foods></Foods>
      <Question></Question>
    </div>
  );
}

export default App;
