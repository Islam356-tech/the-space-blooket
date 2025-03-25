import {Col, Row, Container} from "react-bootstrap"
import { Link} from "react-router-dom"

const UpgradeToPROHACKERINFINTE = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>Choose from</Col>
                <div style={{border: '2px solid black', padding: '10px'}}>
                    <Col><Link to="/pro">Pro</Link></Col>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default UpgradeToPROHACKERINFINTE