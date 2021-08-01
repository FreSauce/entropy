import React from "react";
import Signup from "./Components/Signup";
import { Container, Row, Col } from "react-bootstrap";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import Addpost from "./Components/Addpost";
import Userposts from "./Components/Userposts";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import RandomPosts from "./Components/Randomposts";
import Header from "./Components/Header";

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                  <Header />
                    <div className="Wrapping">
                        <Sidebar />
                        <div className="Maincont">
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={RandomPosts}
                                />
                                <PrivateRoute
                                    exact
                                    path="/add-post"
                                    component={Addpost}
                                />
                                <PrivateRoute
                                    exact
                                    path="/user-posts"
                                    component={Userposts}
                                />
                                <PrivateRoute
                                    exact
                                    path="/profile"
                                    component={Dashboard}
                                />
                                <PrivateRoute
                                    path="/update-profile"
                                    component={UpdateProfile}
                                />
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={Login} />
                                <Route
                                    path="/forgot-password"
                                    component={ForgotPassword}
                                />
                            </Switch>
                        </div>
                    </div>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
