import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Header title="TextUtils" />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze:'/>
      </div>
    </>
  );
}

export default App;
