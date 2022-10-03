import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Documentation",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        linktext: "Open Documentation",
        description: (
            <>
                The <strong>Documentation</strong> is the one-stop reference to
                all the features and functions of the platform. Browse our FAQ
                and support resources, get complete references of movement,
                components, and more.
            </>
        ),
    },
    {
        title: "Teacher Hub",
        linktext: "Open Teacher Hub",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                The <strong>Teacher Hub</strong> will both help you get familiar
                and bring your classrooms to the next level with our beginner
                guides, best practices, tips and tricks, and more resources to
                get you inspired and creating great experiences for your
                students.
            </>
        ),
    },
];

function Feature({ Svg, title, description, linktext }) {
    return (
        <div className={clsx("col col--6")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        {linktext}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
