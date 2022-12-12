import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import Image1 from '../../assets/images/Portfolio/yellow-01.jpg';
import Image2 from '../../assets/images/Portfolio/yellow-2-1.jpg';
import Image3 from '../../assets/images/Portfolio/yellow-3.jpg';

class Yellowchilly extends React.Component {
    render() {
        const images = [
            {
              original: Image1,
              thumbnail: Image1,
            },
            {
              original: Image2,
              thumbnail: Image2,
            },
            {
              original: Image3,
              thumbnail: Image3,
            }
        ]
        return (
            <Row className="project-row yellowchilly">
                <Col lg={6} md={6} sm={12}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} ></ImageGallery>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="project-content-wrap">
                        <h3>Yellowchilly</h3>
                        <div className="project-description">
                            <p>Yellow Chilly is a popular Indian food restaurant located in Peachey Road, Ormeau QLD. We were approached by the owners of Yellow Chilly to create an online presence that is tasty and functional.</p>
                            <p><strong>CMS</strong>: Worpress</p>
                            <p><strong>Theme</strong>: Divi</p>
                            <a href="https://yellowchilly.com.au/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Yellowchilly;