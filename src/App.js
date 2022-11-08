import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='Carousel' style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh"}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1033/900/400"
          alt="First slide"
          width="300"
          height="530"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1016/900/400"
          alt="Second slide"
          width="200"
          height="530"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1026/900/400"
          alt="Third slide"
          width="300"
          height="530"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1006/900/400"
          alt="Second slide"
          width="200"
          height="530"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;