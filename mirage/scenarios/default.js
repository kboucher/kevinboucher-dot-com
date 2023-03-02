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
                dateRange: '10/2018&ndash;3/2023',
                details: [
                    'Collaborated with stakeholders to define requirements',
                    'Refactored UI codebase to implement canonical development patterns to improve extensibility and reduce bugs',
                    'Implemented front-end development processes to improve code quality',
                    'Oversaw effort to deliver new UI products focused on quality UX',
                    'Mentored junior developers',
                    'Performed Git/GitLab administration',
                ],
                organization: 'Identity Automation',
                summary: 'Led a team of five to seven developers in delivering and supporting Ember.js single-page applications for Identity Automation’s flagship IAM product RapidIdentity.',
                title: 'Lead Software Developer',
            },
            {
                dateRange: '5/2017&ndash;10/2018',
                details: [
                    'Authored themes for Liferay CMS',
                    'Delivered Angular-based customer service management knowledge base for BCBS Alabama',
                    'Refactored and improved a JavaScript-based hearing test application for Amplifon USA',
                    'Mentored junior developers',
                    'Implemented front-end development processes',
                    'Performed Git administration',
                ],
                organization: 'Xtivia',
                summary: 'Senior UI developer focused on delivering themes and Angular/React single-page JavaScript applications in a Liferay CMS environment.',
                title: 'Sr. UI Developer',
            },
            {
                dateRange: '11/2013&ndash;2/2017',
                details: [
                    'Authored single-page JavaScript applications',
                    'Built middle-tier API layer for big data project',
                    'Developed PostgreSQL data layer',
                    'Performed Git administration',
                ],
                organization: 'Q2',
                summary: 'Led two teams consisting of three developers, a QA engineer, and UX designers for the Q2 eBanking Platform and the Q2 SMART targeting and messaging platform.',
                title: 'Developer IV',
            },
            {
                dateRange: '4/2012&ndash;9/2013',
                details: [
                    'Built a WordPress-based UX Style Guide',
                    'Delivered SharePoint web parts to replace existing static HTML content on the Texas.gov portal',
                    'Mentored UX interns',
                ],
                organization: 'Texas.gov',
                summary: 'Designed &amp; developed The Official Website of the State of Texas which won one interactive award and was a finalist in another in 2013.',
                title: 'UX Designer/Developer',
            },
            {
                dateRange: '10/2009&ndash;3/2012',
                details: [],
                organization: 'Incisent Technologies',
                summary: 'Engineered front-end architecture and delivered and supported a web-based automotive retail online-marketing software package.',
                title: 'UI Engineer',
            },
            {
                dateRange: '3/2009&ndash;9/2009',
                details: [],
                organization: 'SolarWinds',
                summary: 'Contracted through Modis IT to provide web development support for SolarWinds\' corporate website.',
                title: 'Web Developer',
            },
            {
                dateRange: '10/2006&ndash;3/2009',
                details: [],
                organization: 'Nets To Ladders',
                summary: 'Performed ASP.NET web forms development in a Microsoft CRM-based web application and the design & development of consumer-facing websites and tools.',
                title: 'Software Engineer',
            },
            {
                dateRange: '10/2005&ndash;5/2007',
                details: [],
                organization: 'Tipping Point',
                summary: 'Contracted through Modis IT to redesign and rebuild the web-based interface for Tipping Point\'s embedded browser-based hardware management application.',
                title: 'Front-End Developer',
            },
            {
                dateRange: '4/2004&ndash;9/2005',
                details: [],
                organization: 'Builder Homesite',
                summary: 'Initially hired as a contractor to produce the front-end code for the Envision suite of applications which led to a position as the principal front-end developer.',
                title: 'Front-End Developer',
            },
            {
                dateRange: '6/2000&ndash;8/2002',
                details: [],
                organization: 'Lombardi Software',
                summary: 'Designed, developed, and administered the Lombardi Software corporate website, intranet, and corporate web applications.',
                title: 'Web Developer',
            },
        ],
        skills: [
            {
                category: 'JavaScript',
                details: [
                    'Ember, Angular, React',
                    'TypeScript',
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
                ],
            },
            {
                category: 'CSS',
                details: [
                    'SCSS',
                    'Media queries (responsive)',
                    'Bootstrap',
                    'Typography',
                ],
            },
            {
                category: 'Server-side',
                details: [
                    'Node.js',
                    'Nginx',
                    'Bash',
                    'T-SQL (Postgres/MySQL/MS SQL)',
                ],
            },
            {
                category: 'Tools',
                details: [
                    'VS Code',
                    'Git',
                    'ESLint/Stylelint/Template lint',
                    'JSDocs',
                    'Atlassian suite',
                    'Postman',
                    'Docker',
                    'GitLab',
                    'AWS',
                ],
            },
        ],
    });
}
