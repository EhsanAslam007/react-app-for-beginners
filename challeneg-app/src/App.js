import logo from './logo.svg';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { use, useState } from 'react';


function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('')
  const [isDark, setIsDark] = useState(true)
  return (
    <div className="App">
      <Header />
      <Content
        color={color}
        setColor={setColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Footer />
    </div>
  );
}

export default App;
