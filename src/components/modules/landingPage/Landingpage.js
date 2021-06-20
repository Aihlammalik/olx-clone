import LoginPage from '../login/login';
import Modal from './modal';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './card/Card';



function LandingPage() {
    return (
        <>
            {/* <h1>LandingPage</h1> */}
            {/* < LoginPage />
<Test /> */}
            {/* <Modal/> */}

<Card/>

          <hr/>
            <Container>
                <Row>
                    <Col sm>
                        <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
                    </Col>
                    <Col sm>


                        <h1><b>TRY THE OLX APP</b> </h1>
                        <h5 style={{ paddingTop: "10px" }}>Buy, sell and find just about anything using the app on your mobile.</h5>
                    </Col>
                    <Col sm>
                        <h5 style={{ paddingTop: "30px", paddingLeft: "50px" }}>GET YOUR APP TODAY</h5>
                        <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" width="160px" style={{ paddingLeft: "50px" }} />
                        <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" width="116px" alt="" style={{ marginLeft: "10px" }} />
                    </Col>
                </Row>
            </Container>








        </>

    )

}

export default LandingPage;