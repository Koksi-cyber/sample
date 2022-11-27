import React from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaPenSquare, FaCopy, FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";

export default function Banner() {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div className="position-relative">
                            <Image src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000" className="rounded w-100 h-100" />
                            <FaPenSquare className="position-absolute bottom-0 end-0" width={90} height={90} />
                        </div>
                    </Col>
                    <Col sm={12} md={8} className="align-middle text-center text-md-start">
                        <div className="align-middle my-3">
                            <h1 className="fs-1 d-inline align-middle">Nickname</h1>
                            <Button className="bg-dark   text-white align-middle text-dark px-4 py-0 mx-1">edit</Button>
                            <span class="align-middle ms-2">#123123</span>
                        </div>

                        <div className="my-3">
                            <p className="account_add">
                                <span  className=" d-block d-md-inline" ><strong>Account ID:</strong></span>
                                <span style={{"wordBreak":"break-all"}}>0c10afejddif094884490wncmlww9er80ww9e88r8e9r9r9 <FaCopy /> </span>
                            </p>
                            <p>
                                <span className=" d-block d-md-inline "><strong>Principle ID:</strong></span>
                                <span>ukfr5-fijfks-climt-s7vndk-vabdb-i2djdkk-qqn77-sjdhg4-sodhe-subngh-qae <FaCopy /> </span>
                            </p>
                        </div>

                        <div className="icons my-4">
                            <FaFacebook  className="me-2" style={{"width" : "50", "height" : "50" }} />
                            <FaDiscord  className="me-2"style={{"width" : "50", "height" : "50" }} />
                            <FaGithub className="me-2" style={{"width" : "50", "height" : "50" }} />
                        </div>

                        <Row className="social-stat justify-content-center justify-content-md-start align-items-center">
                            <Col className=" text-center text-md-start" xs={2} md={2}>
                                <h3>312</h3>
                                <p>Followings</p>
                            </Col>
                            <Col className="text-start text-md-start" xs={2} md={2}>
                                <h3>121231</h3>
                                <p>Followers</p>
                            </Col>
                        </Row>
                        <Button className="bg-dark text-white border-none mt-4">Follow on STARGATE</Button>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
