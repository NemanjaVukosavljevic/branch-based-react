import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MembersSection from './Components/MembersSection';

function App() {
  return (
    <div className='min-h-screen bg-gray-800 p-10'>
      <Header />
      <MembersSection />
    </div>
  );
}

export default App;
