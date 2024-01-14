import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { NavigationBar } from '../navigation-bar/navigation-bar';
import { AboutView } from '../about-view/about-view';
import { ContactView } from '../contact-view/contact-view';
import { IntroView } from '../intro-view/intro-view';
import { PortfolioView } from '../portfolio-view/portfolio-view';

const MainView = () => {
  return (
    <Router>
      <NavigationBar />
      <Row className="justify-content-md-center main-container">
        <Routes>
          <Route path="/" element={<IntroView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/portfolio" element={<PortfolioView />} />
        </Routes>
      </Row>
      {/* Uncomment the following line if needed */}
      {/* <StickyFooter /> */}
    </Router>
  );
};

export default MainView;

