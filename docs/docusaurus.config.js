// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Resources",
    tagline: "Guides, resources and documentation for MegaMinds",
    url: "https://docs.megaminds.world",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "teacherhub",
                path: "hub",
                routeBasePath: "hub",
                sidebarPath: require.resolve("./sidebars_hub.js"),
                // ... other options
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "",
                logo: {
                    alt: "MegaMinds purple M Logo",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        to: '/hub/intro',    // ./docs/Intro.md
                        docId: "teacherhub",
                        position: "left",
                        label: "Teacher Hub",
                    },
                    {
                        href: "https://dash.megaminds.world",
                        label: "Back to Dashboard",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Documentation",
                        items: [
                            {
                                label: "Documentation Index",
                                to: "/docs/intro",
                            },
                            {
                                label: "Dashboard",
                                to: "/docs/category/dashboard",
                            },
                            {
                                label: "3D Environments",
                                to: "/docs/category/3d-environments",
                            },
                            {
                                label: "Classroom Editor",
                                to: "/docs/category/classroom-editor",
                            },
                            {
                                label: "Technical Support",
                                to: "/docs/category/technical-support",
                            },
                        ],
                    },
                    {
                        title: "Teacher Hub",
                        items: [
                            {
                                label: "Teacher Hub Index",
                                href: "/hub/intro",
                            },
                            {
                                label: "Guides",
                                href: "/hub/category/guides",
                            },
                            {
                                label: "Tips and Best Practices",
                                href: "/hub/tips",
                            },
                            {
                                label: "Teaching With MegaMinds",
                                href: "/hub/teaching-with",
                            },
                        ],
                    },
                    {
                        title: "External Links",
                        items: [
                            {
                                label: "Teacher Facebook Community ",
                                href: "https://www.facebook.com/groups/772539573778431",
                            },
                            {
                                label: "Dashboard",
                                href: "https://dash.megaminds.world",
                            },
                        ],
                    },
                ],
                copyright: `Copyright ?? ${new Date().getFullYear()} MegaMinds, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
