import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import QuickLinks from "@site/src/components/QuickLinks";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Landing Page`}
            description="Reources, guides and documentation for the MegaMinds Platform."
        >
            <HomepageHeader />
            <TawkMessengerReact
                propertyId="62d08e1d7b967b1179999751"
                widgetId="1g7vam9d1"
            />
            <main>
                <HomepageFeatures />
                <QuickLinks />
            </main>
        </Layout>
    );
}
