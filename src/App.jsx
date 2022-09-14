import './App.css'
import Header from './components/Header'
import ProductsProvider from './context/ProductsContext';
import ProductSearchContainer from './components/ProductSearchContainer'

function App() {
    return (
        <ProductsProvider>
            <div className="App min-h-screen bg-zinc-100">
                <Header />
                <ProductSearchContainer />
            </div>
        </ProductsProvider>
    )
}

export default App