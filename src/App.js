import React from "react"
import Signup from "./Components/Signup"
import { Container, Row, Col } from "react-bootstrap"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import PrivateRoute from "./Components/PrivateRoute"
import ForgotPassword from "./Components/ForgotPassword"
import UpdateProfile from "./Components/UpdateProfile"
import Addpost from "./Components/Addpost"
import Userposts from "./Components/Userposts"
import Sidebar from "./Components/Sidebar"
import "./App.css"

function App() {
  return (
    <Container fluid>
        <Router>
          <AuthProvider>
            <Row>
              <Col md={2}>
                <Sidebar id="status"/>
              </Col>
              <Col md={10}>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/add-post" component={Addpost} />
              <PrivateRoute exact path="/user-posts" component={Userposts} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
              </Col>
            </Row>
          </AuthProvider>
        </Router>
    </Container>
  )
}

export default App