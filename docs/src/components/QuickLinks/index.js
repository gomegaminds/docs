import React from "react";
import Link from "@docusaurus/Link";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./styles.module.css";

const DashboardLinks = [
    {
        title: "Dashboard Basics",
        link: "/docs/dashboard/dashboard-basics",
    },
    {
        title: "Classroom Management",
        link: "/docs/dashboard/classrooms",
    },
];

const ThreeDeeLinks = [
    {
        title: "Avatar and Movement Basics",
        link: "/docs/3d/intro",
    },
    {
        title: "Communication",
        link: "/docs/3d/communication",
    },
    {
        title: "User Interface & Tools",
        link: "/docs/3d/user-interface",
    },
    {
        title: "Classroom Editor",
        link: "/docs/editor/",
    },
    {
        title: "List of all Components",
        link: "/docs/editor/tool-overview",
    },
];

const TechList = [
    {
        title: "FAQ",
        link: "/docs/support/faq",
    },
    {
        title: "Technical Requirements",
        link: "/docs/support/requirements",
    },
    {
        title: "Get help from eric@gomegaminds.com",
        link: "mailto:eric@gomegaminds.com",
    },
];

function ListItem(props) {
    return (
        <a href={props.link}>
            <ListGroup.Item className="text-start">
                {props.title}
            </ListGroup.Item>
        </a>
    );
}

export default function QuickLinks() {
    return (
        <section className="mb-5">
            <Container>
                <hr/>
                <Row className="justify-content-md-center mt-4">
                    <Col className="mt-4 text-center">
                        <h2>Quick Links</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="mt-4">
                        <ListGroup>
                            <ListGroup.Item
                                className="list-group-item"
                                variant="secondary"
                            >
                                <strong>Dashboard</strong>
                            </ListGroup.Item>
                            {DashboardLinks.map((props, idx) => (
                                <ListItem key={idx} {...props} />
                            ))}
                        </ListGroup>
                    </Col>
                    <Col className="mt-4">
                        <ListGroup>
                            <ListGroup.Item
                                className="list-group-item"
                                variant="secondary"
                            >
                                <strong>3D Environments</strong>
                            </ListGroup.Item>
                            {ThreeDeeLinks.map((props, idx) => (
                                <ListItem key={idx} {...props} />
                            ))}
                        </ListGroup>
                    </Col>
                    <Col className="mt-4">
                        <ListGroup>
                            <ListGroup.Item
                                className="list-group-item"
                                variant="secondary"
                            >
                                <strong>Tech Support</strong>
                            </ListGroup.Item>
                            {TechList.map((props, idx) => (
                                <ListItem key={idx} {...props} />
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
