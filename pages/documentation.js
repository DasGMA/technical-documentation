import SideNavigation from "../components/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinHearts,
  faHeartCrack,
  faRoute,
  faImage,
  faChartPie,
  faGears,
  faDatabase,
  faBolt,
  faT,
  faArrowsRotate,
  faFolderTree,
  faCode,
  faArrowsSplitUpAndLeft,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import nextHero from "../assets/images/nexthero.gif";
import Link from "next/link";
import BottomNavigation from "../components/BottomPageNavigation";

const Documentation = () => {
  return (
    <>
      <div id="documentation-container">
        <SideNavigation />
        <div className="content-container">
          <section id="Introduction" className="main-section">
            <header>
              <h2>Introduction</h2>
            </header>
            <article>
              <figure>
                <Image
                  src={nextHero}
                  alt="Nextjs"
                  layout="fill"
                  className="image"
                />
              </figure>
              <p>
                The Next.js framework was created by Vercel and is an
                open-source framework that enables server-side rendering and
                generating static websites. React documentation says that
                Next.js is one of &quot;Recommended Toolchains&quot; that
                developers should use when they are making a server-rendered
                website with Node.js. Next.js allows for applications to be
                rendered on the server side, whereas traditional React apps only
                allow for client-side rendering.
              </p>

              <p>
                Next.js is a React framework that enables several extra
                features, including server-side rendering and generating static
                websites. React is a JavaScript library that is traditionally
                used to build web applications rendered in the client&apos;s
                browser with JavaScript. Frameworks such as Next.js allowing
                some or all of the website to be rendered on the server-side
                before being sent to the client. Next.js is one of the most
                popular frameworks for React. Next.js requires Node.js and can
                be initialized using Node Package Manager.
              </p>
            </article>
          </section>
          <section id="Features" className="main-section">
            <header>
              <h2>Features</h2>
            </header>
            <article>
              <p>
                Here are the key features of the Next JS UI framework to give
                you a better overview of its capabilities.
              </p>
              <div className="cards-container">
                <div className="card">
                  <FontAwesomeIcon icon={faImage} size="4x" />
                  <h3>Image Component and Optimization</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faGlobe} size="4x" />
                  <h3>Internationalized Routing</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faChartPie} size="4x" />
                  <h3>Dedicated Analytics</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faGears} size="4x" />
                  <h3>Zero-configuration</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faDatabase} size="4x" />
                  <h3>Hybrid Data Fetching</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faBolt} size="4x" />
                  <h3>Incremental Static Regeneration(ISR)</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faT} size="4x" />
                  <h3>TypeScript Support</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faArrowsRotate} size="4x" />
                  <h3>Fast Refresh</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faFolderTree} size="4x" />
                  <h3>File-system Routing</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faCode} size="4x" />
                  <h3>Built-in CSS Support</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} size="4x" />
                  <h3>Code-splitting and Bundling</h3>
                </div>
                <div className="card">
                  <FontAwesomeIcon icon={faRoute} size="4x" />
                  <h3>API Routes</h3>
                </div>
              </div>
            </article>
          </section>
          <section id="Pros_&_Cons" className="main-section">
            <header>
              <h2>Pros & Cons</h2>
            </header>
            <article>
              <p>
                Whether you are a business owner, marketer, or developer,
                leveraging Next JS app development will help you reap various
                benefits in the long run. But there are also some limitations to
                this platform that you need to consider. Let’s take a look at
                them separately.
              </p>
              <div className="comparison-container">
                <div className="pros-container">
                  <h3>
                    <FontAwesomeIcon
                      icon={faFaceGrinHearts}
                      color="orange"
                      className="icon"
                    />{" "}
                    Pros
                  </h3>
                  <h4>Better Conversions</h4>
                  <p>
                    Next JS offers total control over online stores, mobile
                    applications, websites, or any other digital products. This
                    positively impacts your sales funnel and helps you increase
                    the conversion rate
                  </p>
                  <h4>Responsiveness and Adaptability</h4>
                  <p>
                    Mobile or web apps built with Next JS possess higher
                    adaptability and flexibility. They have the potential to
                    satisfy every screen size. They can resolve multiple user
                    requests quickly and efficiently.
                  </p>
                  <h4>Data Security </h4>
                  <p>
                    The framework successfully delivers static products and
                    solutions that have no direct connection with the user
                    information, dependencies, company database, or any other
                    sensitive data. This ultimately increases the level of data
                    security.
                  </p>
                  <h4>Faster Time-to-market</h4>
                  <p>
                    The predefined components of Next JS quicken the entire app
                    development process. It helps you plan faster releases while
                    gathering feedback to invest your time, capital, and effort
                    in core production areas.
                  </p>
                  <h4>Omnichannel </h4>
                  <p>
                    The Next JS applications or websites are easily accessible
                    from any mobile device. This helps your company to present
                    and sell products and services across multiple sales
                    channels worldwide.
                  </p>
                  <h4>On-demand Support</h4>
                  <p>
                    The Next JS development community is continuously growing to
                    fulfill the demand for professionals across the industry.
                    You can easily hire Next JS developers for your project as
                    and when required.
                  </p>
                  <h4>Custom Experiences</h4>
                  <p>
                    Software development with Next JS delivers custom
                    experiences. It creates enterprise-grade apps and websites
                    that act as a key differentiator for businesses and also
                    optimizes your marketing efforts.
                  </p>
                </div>
                <div className="cons-container">
                  <h3>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faHeartCrack}
                      color="gray"
                    />{" "}
                    Cons
                  </h3>
                  <h4>Build Time</h4>
                  <p>
                    Next JS is driven by static development which can negatively
                    impact the build time of your apps and websites. Completing
                    complex tasks within stipulated timelines will become a
                    triggering issue.
                  </p>
                  <h4>Overhead Costs</h4>
                  <p>
                    As the framework is unable to render built-in front pages,
                    it becomes imperative for developers to create the complete
                    frontend layer from scratch. This leads to uninvited,
                    additional expenses.
                  </p>
                  <h4>Built-in State Manager</h4>
                  <p>
                    Next JS lacks a built-in state manager to satisfy UI
                    programming requirements. To regulate the interface and
                    explore state management capabilities, you need to utilize
                    technologies like Redux and MobX.
                  </p>
                  <h4>Plugin Support </h4>
                  <p>
                    The framework is low on plugins in comparison to its
                    competitors like Gatsby JS. The absence of the needed plugin
                    support makes your app development complex and limits
                    overall project progress.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section id="Skills" className="main-section">
            <header>
              <h2>Skills</h2>
            </header>
            <article>
              <p>
                After understanding the basics, it is time to consider some
                essential tools and technologies that can help you kickstart
                your development journey with Next JS. You need to make sure
                that you along with your team are well acquainted with the
                below.
              </p>

              <h3>HTML/CSS</h3>
              <p>
                These technologies are the key to establishing a robust frontend
                web development environment. Some of the most important topics
                include Document Object Model (DOM) elements in HTML/CSS, basic
                attributes and tags in CSS and HTML properties, and
                pseudo-elements, box model, pseudo-selectors and selectors,
                layout systems (grid and flexbox) in CSS.
              </p>
              <h3>JavaScript</h3>
              <p>
                An in-depth understanding of JavaScript can prove beneficial
                while approaching Next JS. However, basic knowledge of
                essentials like DOM, language, use of syntax, and ES6+ concepts
                is also enough to start your project. Know-how of general
                programming concepts such as loops, variables, functions, and
                recursions along with typecasting would be an add-on.
              </p>
              <h3>React</h3>
              <p>
                Another significant consideration is to have a good command of
                Next JS React concepts and functional components. You can also
                learn React separately and get exposed to key topics like JSX
                expressions, state management with useEffect and useState hooks,
                fetching data with React Query, and routing with React-router.
                Familiarity with a layout system like Tailwind CSS or Material
                UI can also help you stand out.
              </p>
            </article>
          </section>
          <section id="Setup" className="main-section">
            <header>
              <h2>Setup</h2>
            </header>
            <article>
              <h3>System requirements</h3>
              <p>
                Before starting working with Next.js make sure you meet the
                following system requirements.
              </p>
              <p>
                -{" "}
                <Link
                  href="https://nodejs.org/en/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node.js 14.6
                </Link>{" "}
                or newer
              </p>
              <p>- MacOS, Windows or Linux operating systems</p>
              <h3>Automatic setup</h3>
              <p>
                It is recommended creating a new Next.js app using{" "}
                <code>create-next-app</code>, which sets up everything
                automatically. To initiate a project, run:
              </p>
              <pre>
                <code>
                  npx create-next-app@latest
                  <br />
                  # or
                  <br />
                  yarn create next-app
                  <br />
                  # or
                  <br />
                  pnpm create next-app
                </code>
              </pre>
              <p>
                In order to include TypeScript, just add a flag{" "}
                <code>--typescript</code>:
              </p>
              <pre>
                <code>
                  npx create-next-app@latest --typescript
                  <br />
                  # or
                  <br />
                  yarn create next-app --typescript
                  <br />
                  # or
                  <br />
                  pnpm create next-app --typescript
                </code>
              </pre>
              <h3>Manual setup</h3>
              <p>
                Install <code>next</code>, <code>react</code>,{" "}
                <code>react-dom</code>:
              </p>
              <pre>
                <code>
                  npm install next react react-dom
                  <br />
                  # or
                  <br />
                  yarn add next react react-dom
                  <br />
                  # or
                  <br />
                  pnpm add next react react-dom
                </code>
              </pre>
              <p>
                Then update <code>package.json</code> by adding following
                scripts:
              </p>
              <pre>
                <code>
                  &quot;scripts&quot;: &#123;
                  <br />
                  {"  "}&quot;dev&quot;: &quot;next dev&quot;,
                  <br />
                  {"  "}&quot;build&quot;: &quot;next build&quot;,
                  <br />
                  {"  "}&quot;start&quot;: &quot;next start&quot;,
                  <br />
                  {"  "}&quot;lint&quot;: &quot;next lint&quot;
                  <br />
                  &#125;
                </code>
              </pre>
              <p>
                Create 2 directories <code>pages</code> and <code>public</code>{" "}
                at the root of the application:
              </p>
              <p>
                - <code>pages</code> - assosiated with route based on their file
                name.
              </p>
              <p>
                - <code>public</code> - stores static assets such as images,
                fonts, etc. Files inside <code>public</code> directory are
                referenced by a code starting from base URL{" "}
                <code>&quot;/&quot;</code>.
              </p>
            </article>
          </section>
          <section id="Usage" className="main-section">
            <header>
              <h2>Usage</h2>
            </header>
            <article>
              <p>
                Now we know what is Next.js and what it can do. Let&apos;s tre
                to create the side navigation as you can see on this website on
                your left. If you are familiar with JavaScript and React
                framework, it should be straightforward. Otherwise, I really
                encourage to read about JavaScript and React.
              </p>
              <p>
                We will have two components <code>SideNavigation</code> and{" "}
                <code>SideNavigationLink</code>.
              </p>
              <p>
                Let&apos;s start with <code>SideNavigationLink</code>:
              </p>
              <pre>
                <code>
                  import &#123;
                  <br />
                  {"  "}FontAwesomeIcon
                  <br />
                  &#125; from &quot;@fortawesome/react-fontawesome&quot;;
                  <br />
                  import &#123;
                  <br />
                  {"  "}faCode,
                  <br />
                  {"  "}faFlagCheckered,
                  <br />
                  {"  "}faPersonCircleQuestion,
                  <br />
                  {"  "}faDownload,
                  <br />
                  {"  "}faHammer,
                  <br />
                  {"  "}faStar
                  <br />
                  {"  "}faCircleInfo
                  <br />
                  &#125; from &quot;@fortawesome/free-solid-svg-icons&quot;;
                  <br />
                  import Link from &quot;next/link&quot;;
                  <br />
                  <br />
                  const icons = [
                  <br />
                  {"  "}faFlagCheckered,
                  <br />
                  {"  "}faStar,
                  <br />
                  {"  "}faPersonCircleQuestion,
                  <br />
                  {"  "}faHammer,
                  <br />
                  {"  "}faDownload,
                  <br />
                  {"  "}faCode
                  <br />
                  {"  "}faCircleInfo
                  <br />
                  ];
                  <br />
                  <br />
                  const SideNavigationLink = (&#123; link, index &#125;) =&gt;
                  &#123;
                  <br />
                  {"  "}const regexLink = link.replace(/ /g, &quot;_&quot;);
                  <br />
                  <br />
                  {"  "}return (
                  <br />
                  {"     "}&#706;li&#707;
                  <br />
                  {"       "}&#706;Link
                  href=&#123;`#$&#123;regexLink&#125;`&#125;&#707;
                  <br />
                  {"         "}&#706;FontAwesomeIcon
                  <br />
                  {"           "}icon=&#123;icons[index]&#125;
                  <br />
                  {"         "}/&#707;
                  <br />
                  {"         "}&#706;span&#707;&#123;link&#125;&#706;/span&#707;
                  <br />
                  {"       "}&#706;/Link&#707;
                  <br />
                  {"     "}&#706;/li&#707;
                  <br />
                  {"   "});
                  <br />
                  &#125;;
                  <br />
                  <br />
                  export default SideNavigationLink;
                </code>
              </pre>

              <p>
                Next we will implement the <code>SideNavigation</code>{" "}
                component:
              </p>
              <pre>
                <code>
                  import &#123;
                  <br />
                  {"  "}SideNavigationLink
                  <br />
                  &#125; from &quot;./SideNavigationLink&quot;;
                  <br />
                  <br />
                  const links = [
                  <br />
                  {"  "} &quot;Introduction &quot;,
                  <br />
                  {"  "} &quot;Pros & Cons &quot;,
                  <br />
                  {"  "} &quot;Skills &quot;,
                  <br />
                  {"  "} &quot;Setup &quot;,
                  <br />
                  {"  "} &quot;Usage &quot;,
                  <br />
                  {"  "} &quot;Resources&quot;
                  <br />
                  ];
                  <br />
                  <br />
                  const SideNavigation = () =&gt; &#123;
                  <br />
                  <br />
                  {"  "}const renderLinks = links.map((link, i) =&gt; (
                  <br />
                  {"    "}&#706;SideNavigationLink <br />
                  {"      "}key=&#123;link&#125;
                  <br />
                  {"      "}link=&#123;link&#125;
                  <br />
                  {"      "}index=&#123;i&#125;
                  <br />
                  {"    "}/&#707;
                  <br />
                  {"    "})
                  <br />
                  {"  "}
                  );
                  <br />
                  <br />
                  {"  "}return (
                  <br />
                  {"     "}&#706;aside&#707;
                  <br />
                  {"       "}&#706;nav&#707;
                  <br />
                  {"         "}
                  &#706;ul&#707;&#123;renderLinks&#125;&#706;/ul&#707;
                  <br />
                  {"       "}&#706;/nav&#707;
                  <br />
                  {"     "}&#706;/aside&#707;
                  <br />
                  {"   "});
                  <br />
                  &#125;;
                  <br />
                  <br />
                  export default SideNavigation;
                </code>
              </pre>
            </article>
          </section>
          <section id="Resources" className="main-section">
            <header>
              <h2>Resources</h2>
            </header>
            <article></article>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default Documentation;
