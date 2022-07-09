import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { MainPage } from './page/MainPage';
import { PostPage } from './page/PostPage';
import { SearchPage } from './page/SearchPage';
import { TrendsPage } from './page/TrendsPage';
import { FavoritesPage } from './page/FavoritesPage';
import { SettingsPage } from './page/SettingsPage';
import { SortingPage } from './page/SortingPage';
import { SignInPage } from './page/SignInPage';
import { SignUpPage } from './page/SignUpPage';
import { ResetPasswordPage } from './page/ResetPasswordPage';
import { NewPasswordPage } from './page/NewPasswordPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path='/'
                        element={<App/>}
                    >   
                        <Route
                            path='/'
                            element={<MainPage/>}
                        />
                        <Route
                            path='/post/:id'
                            element={<PostPage/>}
                        />
                        <Route
                            path='/search'
                            element={<SearchPage/>}
                        />
                        <Route
                            path='/trends'
                            element={<TrendsPage/>}
                        />
                        <Route
                            path='/favorites'
                            element={<FavoritesPage/>}
                        />
                        <Route
                            path='/settings'
                            element={<SettingsPage/>}
                        />
                        <Route
                            path='/sorting'
                            element={<SortingPage/>}
                        />
                        <Route
                            path='/sign-in'
                            element={<SignInPage/>}
                        />
                        <Route
                            path='/sign-up'
                            element={<SignUpPage/>}
                        />
                        <Route
                            path='/reset-password'
                            element={<ResetPasswordPage/>}
                        />
                        <Route
                            path='/new-password'
                            element={<NewPasswordPage/>}
                        />
                        <Route 
                            path='*'
                            element={
                                <main style={{ paddingTop: '200px', textAlign: 'center', fontSize: '30px', color: 'white' }}>
                                <p>404 Not Found</p>
                                </main>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);


