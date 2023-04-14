import React  from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Header from '../Components/Header';
import AddBook from '../Components/AddBook';
import BooksList from '../Components/BooksList';


const AppRouter = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <div className = "main-content">
                    <Routes>
                        <Route Component={BooksList} path="/" exact={true} />
                        <Route Component={AddBook} path="/add" />
                        </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
    }
export default AppRouter;