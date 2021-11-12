import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import { carturl } from "./constants/global";
import useFetch from "./useFetch";


const UserCartDetails = () => {
    const { cartid, userid } = useParams();
    const { data:usercartInfo, error, isPending } = useFetch(`${carturl}/${cartid}/${userid}`);

    return ( 
        <div className="user-details">
            <h2 className="pt-4 text-center" >User & Cart Detail:  </h2>
            { isPending && (
                <Container className=""> 
                    <Row className="justify-content-center align-items-center">
                        <Col xs="2" sm="1" className="">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        </Col>
                    </Row>
                </Container>
            )}
            { error && <div> { error } </div> }
            { usercartInfo && (
                <article>
                    {/* <!-- Hero Section --> */}
                    <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <div className="card">
                                    <h5 className="card-header">Department: { usercartInfo.data.user.department }</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">First: { usercartInfo.data.user.firstName }</h5>
                                        <h5 className="card-title">Last: { usercartInfo.data.user.lastName }</h5>
                                        <h5 className="card-title">Rank: { usercartInfo.data.user.rank }</h5>
                                        <h5 className="card-title">Email: { usercartInfo.data.user.email }</h5>
                                        <h5 className="card-title">Number: { usercartInfo.data.user.phoneNumber }</h5>
                                        <h5 className="card-title">Station Number: { usercartInfo.data.user.stationPhoneNumber}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Case Information */}
                    {/* {usercartInfo.map(cart) => {

                    }} */}
                    {/* <div className="container-fluid mx-auto my-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="card">
                                    <h5 className="card-header">{usercaseInfo.data.case.title}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Case Number:</strong> {usercaseInfo.data.case.caseNumber} </h5>
                                        <p className="card-text"><strong>Description:</strong> {usercaseInfo.data.case.description}</p>
                                        <div id="buttonGroup" class="text-center">
                                            <a href={usercaseInfo.data.case.url} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful URL</a>
                                            <a href={usercaseInfo.data.case.urlPDF} className="btn btn-primary mx-1" rel="noreferrer" target="_blank">Useful PDF</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </article>
            )}
        </div>
     );
}

export default UserCartDetails;