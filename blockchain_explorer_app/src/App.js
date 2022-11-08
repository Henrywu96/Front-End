import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Addresses from './components/Addresses';
import Transactions from './components/Transactions';
import Wallet from './components/Wallet';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Reciept from './components/Reciept';
// import RecieptWallet from './components/RecieptWallet';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/addresses' element={<Addresses />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/reciept' element={<Reciept />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
