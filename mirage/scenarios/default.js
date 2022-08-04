/* eslint-disable max-len */

export default function(server) {
    /**
        Seed your development database using your factories. This data will not
        be loaded in your tests.
    */

    // positions
    server.db.loadData({
        portfolioEntries: [
            {
                image: '/images/screenshots/texasgov-full.png',
                links: [
                    {
                        title: 'Interactive Media Award—Best In Class (2013)',
                        url: 'http://www.interactivemediaawards.com/winners/certificate.asp?param=280867&cat=1',
                    },
                    {
                        title: 'Best Of the Web—Finalist (2013)',
                        url: 'http://www.govtech.com/cdg/digital-government-achievement/Best-of-the-Web--Digital-Government-Achievement-Awards-2013.html',
                    },
                ],
                summary: 'Designed and developed the 2013 Texas.gov portal refresh. Built on the SharePoint platform this site is mobile-first responsive and is composed using a modular scale based on the golden mean. (ca. 2013)',
                title: 'Texas.gov',
            },
            {
                image: '/images/screenshots/metoob.png',
                links: [],
                summary: 'Custom mobile-first responsive WordPress theme designed &amp; developed for DiviTree Media to be used in a series of educational video library websites. (ca. 2012)',
                title: 'MeToob',
            },
            {
                image: '/images/screenshots/Photo-Manager.png',
                links: [],
                summary: 'Designed and implemented this interface for the MAX AD Photo Manager tool that allows car dealers to manage the marketing photos associated with a vehicle. (ca. 2012)',
                title: 'MAX AD Photo Manager',
            },
            {
                image: '/images/screenshots/snippet-collector.png',
                links: [],
                summary: 'Designed and implemented this internal tool used to manage the vehicle-related comments, accolades & reviews that are incorporated into the MAX AD system. (ca. 2012)',
                title: 'Snippet Collector',
            },
            {
                image: '/images/screenshots/max-standalone-login.png',
                links: [],
                summary: 'Alternate login page for Incisent users who subscribed only to the MAX suite of products. (Feature graphic was pulled from website.) (ca. 2011)',
                title: 'MAX Login Page',
            },
            {
                image: '/images/screenshots/KBCOM-7-2011-portfolio.png',
                links: [],
                summary: 'This design concept was implemented as a custom WordPress theme for this site. (ca. 2011)',
                title: 'KBCOM redesign',
            },
            {
                image: '/images/screenshots/MAX-Simple.png',
                links: [],
                summary: 'This is one of a few design concepts I submitted for a proposed redesign of Incisent\'s MAX AD application. (ca. 2011)',
                title: 'MAX AD Design Proposal 3',
            },
            {
                image: '/images/screenshots/MAX-Redesign2.png',
                links: [],
                summary: 'This is one of a few design concepts I submitted for a proposed redesign of Incisent\'s MAX AD application. (ca. 2011)',
                title: 'MAX AD Design Proposal 2',
            },
            {
                image: '/images/screenshots/MAX-Redesign1.png',
                links: [],
                summary: 'This is one of a few design concepts submitted for a proposed redesign of Incisent\'s MAX AD application. (ca. 2011)',
                title: 'MAX AD Design Proposal 1',
            },
            {
                image: '/images/screenshots/liberty-hill-sports.png',
                links: [],
                summary: 'This is a WordPress implementation of libertyhillsports.com. This site is affiliated with the Liberty Hill Leader newspaper and covers sports for the Liberty Hill area. (ca. 2011)',
                title: 'Liberty Hill Sports',
            },
        ],
        positions: [
            {
                dateRange: '10/2018&ndash;present',
                details: [
                    'Develop Ember based identity and access management application user interface',
                    'Work with stakeholders and product owners to define requirements and implement development processes',
                    'Led effort to re-architect UI to implement canonical Ember development patterns',
                    'Implement front-end development processes',
                    'Mentor junior developers',
                    'Git/GitLab administration',
                    'Scrum master',
                ],
                organization: 'Identity Automation',
                summary: 'Principal UI developer who is responsible for delivering and supporting an Ember-based user interface for Identity Automation\'s flagship IAM product RapidIdentity.',
                title: 'Lead Software Developer',
            },
            {
                dateRange: '5/2017&ndash;10/2018',
                details: [
                    'Liferay CMS theme development (HTML, CSS, JavaScript, Freemarker, Java)',
                    'Developed Angular based customer service management knowledge base for BCBS Alabama',
                    'Refactored, translated, and enhanced JavaScript-based hearing test application for Amplifon USA',
                    'Mentored junior developers',
                    'Implemented front-end development processes',
                    'Git administration',
                ],
                organization: 'Xtivia',
                summary: 'Senior UI developer focused on delivering themes and Angular/React JavaScript applications in a Liferay CMS environment.',
                title: 'Sr. UI Developer',
            },
            {
                dateRange: '11/2013&ndash;2/2017',
                details: [
                    'Led a mobile development team focused on mobile presentation, user settings, and device interactivity',
                    'Led initial development of Q2 SMART marketing platform.',
                    'Single-page JavaScript apps (Ember, Ember-CLI)',
                    'API development (Ember Data, Node, HapiJs)',
                    'DB development (PostgreSQL)',
                    'Git administration',
                    'Scrum master',
                ],
                organization: 'Q2',
                summary: 'Led mobile development team for Q2 eBanking platform and led development of Q2 SMART targeting and messaging platform.',
                title: 'Developer IV',
            },
            {
                dateRange: '4/2012&ndash;9/2013',
                details: [
                    'Designed & developed standards-compliant, HTML5, mobile-first responsive portal in SharePoint',
                    'Developed a WordPress based UX Style Guide complete with code samples and preview mode',
                    'Developed new SharePoint web parts to replace existing static HTML content on the Texas.gov portal',
                    'Mentored UX interns',
                ],
                organization: 'Texas.gov',
                summary: 'Responsible for design &amp; development of The Official Website of the State of Texas along with design, development, and maintenance of an array of web-based applications across a variety of platforms.',
                title: 'UX Designer/Developer',
            },
            {
                dateRange: '10/2009&ndash;3/2012',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript for ASP.NET web-forms and MVC applications',
                    'Collaborated with the product management team to develop interface designs, interactivity patterns, mockups, and functional prototypes',
                    'Observed and participated in numerous user-testing sessions',
                    'Performed client-side optimization (compression/sprites/best-practices)',
                    'Middle-tier and database development',
                ],
                organization: 'Incisent Technologies',
                summary: 'Responsible for front-end architecture, development, and support of web-based automotive retail online-marketing software package.',
                title: 'UI Engineer',
            },
            {
                dateRange: '3/2009&ndash;9/2009',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript for ASP.NET web-forms website',
                    'Graphic production (slicing design comps)',
                ],
                organization: 'SolarWinds',
                summary: 'Contracted through Modis IT to provide web development support for SolarWinds\' corporate website.',
                title: 'Web Developer',
            },
            {
                dateRange: '10/2006&ndash;3/2009',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript for ASP.NET web-forms application',
                    'UI/UX design, mockups, prototyping, graphic production',
                    'Design & build internal development process tools',
                    'Corporate web-site management',
                    'Middle-tier and database development',
                ],
                organization: 'Nets To Ladders',
                summary: 'Responsible for ASP.NET web forms development in Microsoft CRM-based web-application. Also responsible for the development of consumer-facing websites and tools.',
                title: 'Software Engineer',
            },
            {
                dateRange: '10/2005&ndash;5/2007',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript',
                    'UI/UX design, graphic production',
                    'Usability testing',
                ],
                organization: 'Tipping Point',
                summary: 'Contracted through Modis IT to redesign and rebuild the web-based interface for Tipping Point\'s embedded browser-based hardware management application.',
                title: 'Front-End Developer',
            },
            {
                dateRange: '4/2004&ndash;9/2005',
                details: [
                    'Hand-coded web-standards compliant HTML/CSS/JavaScript',
                    'Interface design, graphic production, mockups, prototypes',
                    'Middle-tier development',
                ],
                organization: 'Builder Homesite',
                summary: 'Initially hired as a contractor to produce the front-end code for the Envision suite of applications which led to a position as front-end developer responsible for all front-end production, maintenance, and troubleshooting.',
                title: 'Front-End Developer',
            },
            {
                dateRange: '6/2000&ndash;8/2002',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript',
                    'UI/UX design, graphic production',
                    'Intranet management',
                    'Designed & built internal tools as needed (Time &amp; Expense reporting application/Client-facing Issue-tracking system)',
                    'Middle-tier and database development',
                ],
                organization: 'Lombardi Software',
                summary: 'Responsible for design, development, and administration of Lombardi Software\'s corporate website, intranet, and corporate web applications.',
                title: 'Web Developer',
            },
            {
                dateRange: '7/1999&ndash;present',
                details: [
                    'Hand-coded cross-browser, web-standards compliant HTML/CSS/JavaScript',
                    'Front-end architecture and development',
                    'UI/UX design, graphic production',
                    'WordPress implementations',
                    'Middle-tier and database development',
                ],
                organization: 'Self-employed',
                summary: 'Worked with a variety of clients to develop custom websites, applications, WordPress implementations, and front-end code.',
                title: 'Web Designer/Developer',
            },
        ],
        skills: [
            {
                category: 'JavaScript',
                details: [
                    'Ember, Angular, React',
                    'TypeScript',
                    'jQuery',
                    'Ajax',
                    'Unit testing (Mocha/QUnit)',
                ],
            },
            {
                category: 'HTML',
                details: [
                    'Semantic markup',
                    'Accessibility',
                    'Web standards',
                    'HTML5',
                    'SVG',
                ],
            },
            {
                category: 'CSS',
                details: [
                    'SASS (SCSS)',
                    'Media-queries (responsive)',
                    'Bootstrap',
                    'Materialize.css',
                    'Typography',
                ],
            },
            {
                category: 'Server-side',
                details: [
                    'Node.js',
                    'Bash',
                    'T-SQL (Postgres/MySQL/MS SQL)',
                    'Hapi.js',
                    'Nginx',
                ],
            },
            {
                category: 'Tools',
                details: [
                    'VS Code',
                    'Git',
                    'ESLint/Stylelint',
                    'Postman',
                    'GitLab',
                    'JSDocs',
                    'Docker',
                    'Atlassian suite',
                    // 'Stylelint',
                    // 'Charles Proxy',
                    // 'Photoshop',
                    // 'Sourcetree',
                ],
            },
        ],
    });
}
