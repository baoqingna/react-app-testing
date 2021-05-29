import React from 'react';
import {BackTop, Button, Row, Col, Divider, Pagination, Image, Card} from 'antd';
import {Link} from 'react-router-dom';
import Leafy from './Banner/Leafy.mp4';
import Navbar from '../Navbar';
import {ProductData} from './Products/ProductData';
import './Home.css';

// TODO: Create separate json file
import Item1 from './Products/Images/bellpepper.jpg';
import Item2 from './Products/Images/tomatoes.jpg';
import Item3 from './Products/Images/orangepumpkins.jpg';
import Item4 from './Products/Images/carrots.jpg';

const style = { background: '#446B40', padding: '8px 0' };
const backtopstyle = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#446B40',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
const { Meta } = Card;

function Home() {
  return(
    <>
    <div className='Homepage-body'>
      <header className='moving-banner'>
        <div className='video-container'>
          <Navbar />
          <video src={Leafy} autoPlay muted loop></video>
        </div>
        <div className='moving-banner-content'>
          <h1>Vegetables</h1>
          <h3>Full screen video landing page</h3>
          <a href='#product'><Button className='banner-btn'>Read More</Button></a>
        </div>
      </header>

      <div id='product' className='content-container'>
        {/*<blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote> */}

        <div className='product-container'>
          <Divider orientation="left"><h2>All Products</h2></Divider>
          <Row>
            {
              ProductData.map((item, index) => {
                return(
                    <Col>
                      <Card
                        hoverable
                        style={{ width: 240}}
                        cover={item.image}
                      >
                        <Meta title={item.title} description={item.description} />
                      </Card>
                    </Col>
                )
              })
            }
          </Row>

          <Pagination
            className='pagination'
            current='1'
            simple defaultCurrent={2}
            total={20}
            responsive={true}
          />
        </div>
      </div>

      <footer className='footer-container'>
        <div className='footer-content'>
          <h2>Say Hello. ug kuwa na mo</h2>
          <a target='_blank' rel='noreferrer noopener nofollow'><h1>gmail@gmail.com</h1></a>
        </div>
      </footer>

      <BackTop duration={900}>
        <div style={backtopstyle}>Up</div>
      </BackTop>
    </div>
    </>
  )
}

export default Home;
