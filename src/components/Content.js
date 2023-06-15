import { Container, Row, Col, Form } from "react-bootstrap";
import aboutpic from '../images/aboutpic.jpg';
import ourcoffee from '../images/ourcoffee.jpg';
import ourfood from '../images/ourfood.jpg';

const Content = () => {
    return (  
        <div className="bg-light" variant="light">
            <br></br>
            <Container>
                <div className="options">
                    <h5>Coffee | Breakfast | Lunch | Dinner | Brunch | Waffles | Wraps | Sandwiches | Espresso | Tea</h5>
                </div>
                <br></br><br></br><br></br>
                <Row>
                    <Col>
                        <h3>About us</h3>
                        <p>The reason why we came up with this kind of business name is that we as an owner wanted to make sure that our customers will experience socialization while having a cup of coffee with their loved ones. It is also one of the reasons why we came up with our tagline “love at first sip” because here in our cafe we will make sure that our customer will experience love and comfort while taking a cup of coffee and making quality time with their loved ones. FIKA is a Swedish word that means making time for friends, family and colleagues to share a cup of coffee and a little something to eat. FIKA is a very important part of Swedish culture because they believe having a quality time with someone is a good foundation of a relationship. And we as an owner wanted to practice that kind of culture or traditions here in our cafe, because we believe FIKA is the overall reason why we need to establish a cafe.</p>
                    </Col>
                    <Col className="aboutpic">
                    <img src={aboutpic} alt="aboutpic"/>
                    </Col>
                </Row>
                <br></br><br></br><br></br>
                <Row>
                <Col>
                    <img src={ourcoffee} alt="ourcoffee"/>
                </Col>
                <Col>
                    <h3>Our Coffee</h3>
                    <p>We’re serious about our coffee! Fika represents the pinnacle of what Philippine coffee culture has become. We are a cafe culture and a visit to a neighborhood coffee shop is increasingly a much-loved part of our day. Fika Coffee Roasters produces some of the highest end, specialty roasted coffee you can buy. Each bag is freshly roasted in small batches by hand in a Caloocan suburb. <br></br> <br></br> We specialize in light roast coffees and have a wide range of single origin coffees and blends. We have very popular roasts of all types, light, medium and dark. We serve fair trade, organic or direct trade only and we’ve been named a finalist three times for Roaster of the Year by Roast Magazine. Want a delicious, artisanal cup of coffee or a unique bag of beans to brew at home? Give us a try!</p>
                </Col>
                </Row>
                <br></br><br></br><br></br>
                <Row>
                    <Col>
                        <h3>Our Food</h3>
                        <p>Breakfast, brunch, lunch or dinner! We purposely designed our menu to have a food truck style and a quirky, instagrammable look. We pulled some brunch elements into an everyday menu with most items cooked on waffle irons to make something truly unique in your market. <br></br> <br></br> Fika’s fun, quirky menu gives our guests the opportunity to have a snack or a meal all day long — and have some fun doing it. At Fika, we don’t take a fussy, snobbish approach to our coffee, and the same goes for our food. Everything is artisanal and at the same time, it’s unpretentious, delicious and unlike what you’re going to find anywhere else.</p>
                    </Col>
                    <Col className="aboutpic">
                    <img src={ourfood} alt="ourfood"/>
                    </Col>
                </Row>
                <br></br><br></br><br></br>
                <div>
                    <h2>Send us a message!</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Leave your message here...</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
                <br></br><br></br><br></br>
            </Container>
        </div>
    );
}

export default Content;