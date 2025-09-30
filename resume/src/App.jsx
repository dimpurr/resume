import React from 'react';
import { Mail, Globe, Linkedin, Calendar, MapPin, ChevronRight, ExternalLink, Award, Book, Monitor, Download, Phone } from 'lucide-react';

const Tag = ({ children, color = 'blue' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium transition-colors
    ${color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
      color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100' :
        'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
    {children}
  </span>
);

const TimelineItem = ({ date, children, img, imgWidth = 56 }) => (
  <div className="relative pl-5 mb-6 last:mb-0">
    <div className="flex items-center justify-center float-left mr-2" style={{ width: imgWidth, height: imgWidth }}>
      <img
        className="max-w-full max-h-full object-contain"
        src={img}
        alt=""
      />
    </div>
    <span className="text-xs text-gray-500 float-right">{date}</span>
    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <div className="absolute left-[5px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-blue-200 to-transparent"></div>
    <div className="min-h-14">{children}</div>
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 mb-3 pb-1 border-b border-gray-200 mt-2">
    {Icon && <Icon className="text-blue-600" size={16} />}
    <h2 className="text-base font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
      {title}
    </h2>
  </div>
);

const ProjectCard = ({ title, subtitle, children }) => (
  <div className="mb-2 last:mb-0 hover:translate-x-1 transition-transform duration-200">
    <div className="flex items-baseline gap-2">
      <ChevronRight size={14} className="text-blue-500 flex-shrink-0 mt-1" />
      <div>
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        {subtitle && (
          <span className="text-sm text-blue-600 ml-2 before:content-['|'] before:mr-2 before:text-gray-300">
            {subtitle}
          </span>
        )}
        <p className="text-xs text-gray-700 mt-0 leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ company, department, role, date, children, tags, img, imgWidth = 40 }) => (
  <div className="mb-6 last:mb-0 group">
    <div className="relative">
      <p className="text-[13px] text-gray-500 float-right ml-[10px]">{date}</p>
      {img && (
        <div className="flex items-center justify-center float-left mr-2" style={{ width: imgWidth, height: imgWidth }}>
          <img
            className="max-w-full max-h-full object-contain"
            src={img}
            alt=""
          />
        </div>
      )}
      <div>
        <h3 className="text-[13px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {company}
          {department && (
            <span className="block text-[13px] text-gray-700 mt-0.5">{department}</span>
          )}
        </h3>
        <p className="text-xs text-gray-700 mt-1">{role}</p>
        <div className="text-xs text-gray-700 leading-relaxed mt-2">{children}</div>
        {tags && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Tag key={index} color={'blue'}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const CourseSection = ({ title, children }) => (
  <div className="mb-2 bg-gray-50 rounded-md p-2 hover:bg-gray-100 transition-colors">
    <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
    <p className="text-xs text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const ActivityCard = ({ organization, role, detail }) => (
  <div className="relative pl-3 mr-[-0px] mb-2.5 last:mb-0 group hover:translate-x-1 transition-transform duration-200">
    <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <p className="text-sm text-[13px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
      {role}
    </p>
    <p className="text-xs text-gray-700">{organization}{detail && <span className="text-xs text-gray-500 mt-0.5 before:content-['·'] before:ml-1 before:mr-1">{detail}</span>}</p>
  </div>
);

const Resume = () => {
  return (
    <div className="w-[210mm] mx-auto bg-white print:w-full">
      <style>{`
        @media print {
          @page { margin: 0; }
          body { margin: 0; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>

      <div className="p-4 px-6">
        {/* Header Section */}
        <header className="mb-[0px] relative pl-5">
          <div className="absolute left-0 top-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="absolute left-[5px] top-6 h-full w-[1px] bg-gradient-to-b from-blue-200 to-transparent"></div>

          <div className="flex flex-col gap-2">
            {/* Name and Title */}
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Yang Chen
              </h1>
              <p className="text-base text-gray-600 mt-0 mb-[-4px]">
                Digital Arts & Humanities • Research Software Engineering
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600">
              <a href="mailto:dimcheny@gmail.com" className="flex items-center hover:text-blue-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors mr-2">
                  <Mail size={14} className="text-blue-600" />
                </div>
                dimcheny@gmail.com
              </a>
              <span className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                  <Phone size={14} className="text-blue-600" />
                </div>
                +86 13246174701
              </span>
              <a href="https://ianyangchen.com" className="flex items-center hover:text-blue-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors mr-2">
                  <Globe size={14} className="text-blue-600" />
                </div>
                ianyangchen.com
              </a>
              <a href="https://linkedin.com/in/dimchen" className="flex items-center hover:text-blue-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors mr-2">
                  <Linkedin size={14} className="text-blue-600" />
                </div>
                linkedin.com/in/dimchen
              </a>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-7 gap-4">
          {/* Main Content Column */}
          <div className="col-span-5 space-y-4">
            <section>
              <SectionTitle icon={Book} title="Education" />

              <TimelineItem date="2024 - Present" imgWidth={48} img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/King%27s_College_London_logo.svg/1573px-King%27s_College_London_logo.svg.png">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-800">King's College London</h3>
                  <p className="text-xs text-gray-700">MA Digital Humanities</p>
                </div>

                <CourseSection title="Key Courses">
                  Computational and Corpus Linguistics, Communicating and Preservation of Cultural Heritage,
                  Digital Curating, Video Game Studies
                </CourseSection>

                <ProjectCard
                  title="Digital History Platform"
                  subtitle="Research Center for Digital Humanities of Peking University"
                >
                  Developed an LLM-assisted system for extracting <u>cultural ontologies & relationships</u> from classical Chinese biographical texts, enabling real-time RAG Q&A and GIS visualization
                </ProjectCard>

                {/* <ProjectCard
                  title="Code-Switching in Computational Sociolinguistics"
                  subtitle="Intro2DH"
                >
                  Analyzing English usage patterns in East Asian (China, Japan, Korea) pop music lyrics
                </ProjectCard> */}

                <ProjectCard
                  title="Accepted Paper in Digital Narratology"
                  subtitle="Chinese Digital Humanities Conference 2024"
                >
                  "Intelligent-Narrative Symbiosis: AI and LLMs in Digital Storytelling", (In Chinese) explored technical-narrative collaboration frameworks in <u>AI-enhanced digital storytelling</u>, with focus on system evolution and interaction patterns
                </ProjectCard>


                <ProjectCard
                  title="Research Guide Digitization & Translation Crowdsourcing"
                  subtitle="KCL Archive"
                >
                  Designing standardized <u>Dublin-Core based metadata</u> schema and digital catalog infrastructure for WWI research guides with crowdsourcing translation and interactive timeline
                </ProjectCard>

              </TimelineItem>

              <TimelineItem date="2022 - 2023" imgWidth={48} img="rca.jpg">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-800">Royal College of Art</h3>
                  <p className="text-xs text-gray-700">MA Digital Direction</p>
                </div>

                <ProjectCard
                  title="Fuzzy Graph Network-based Medical Decision Support System"
                  subtitle="ICBS Innovation Lab"
                >
                  Developed graph-based clinical decision support system using <u>graph database and NLP for medical guideline digitization</u>, transformed complex NHS and BNF medical guidelines into interactive flowcharts
                </ProjectCard>

                <ProjectCard
                  title="VR Crowd Flow Analysis"
                  subtitle="Imperial College Centre for Transport Engineering & Modeling"
                >
                  Developed 3D modeling and server monitoring using <u>ViRSE VR framework and Unreal Engine</u>,
                  supporting real-time high-precision data collection for 100 online users
                </ProjectCard>

                <ProjectCard
                  title="Parametric Generative VR Narrative Space"
                  subtitle="Centre Pompidou IRCAM Project Exhibition"
                >
                  Developed dynamic world generation using Houdini Engine for UE, implementing physics collision systems, with real-time <u>LLM and MetaSound spatial audio dialogue generation</u>
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2017 - 2021" imgWidth={42} img="https://upload.wikimedia.org/wikipedia/en/a/af/BUPT_LOGO.png">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-800">Beijing University of Posts and Telecommunications</h3>
                  <p className="text-xs text-gray-700">BSc in Software Engineering</p>
                </div>

                <CourseSection title="Key Courses">
                  Java (SE/EE), Computer Networks & Web Services, Python, Data Mining, Software Engineering,
                  OOP Design, Data Structures & Algorithms, Database Design, Mobile App Dev, HCI
                </CourseSection>

                <ProjectCard
                  title="Xiaoyi River Real-time Visualisation Platform"
                  subtitle="Beijing Key Lab of ITSoftware and Multimedia"
                >
                  Integrated multiple real-time sensors and physical simulation systems to design and implement
                  full-basin <u>water quality monitoring visualization dashboard</u>
                </ProjectCard>

                <ProjectCard
                  title="Tencent User Lifecycle Analysis"
                  subtitle="Institute of Automation, Chinese Academy of Sciences"
                >
                  Integrated <u>graph structures and sequence features for game player user</u> relationship extraction, data analysis,
                  and visualization, joint project with Microsoft Research Asia
                </ProjectCard>

                <CourseSection title="Thesis">
                  Classical Music Generation Using LSTM with Embedded Music Theory Knowledge
                </CourseSection>
              </TimelineItem>
            </section>

            <section>
              <SectionTitle icon={Monitor} title="Skills" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Development</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>React</Tag>
                    <Tag>Vue</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Python</Tag>
                    <Tag>Django</Tag>
                    <Tag>HTML/CSS</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Data Science</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>PyTorch</Tag>
                    <Tag>TensorFlow</Tag>
                    <Tag>Pandas</Tag>
                    <Tag>Data Visualization</Tag>
                    <Tag>Machine Learning</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Interaction Design</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Figma</Tag>
                    <Tag>Unreal Engine</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Three.js</Tag>
                    <Tag>After Effects</Tag>
                    <Tag>TouchDesigner</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>TEI/XML</Tag>
                    <Tag>SPARQL</Tag>
                    <Tag>Git</Tag>
                    <Tag>Docker</Tag>
                    <Tag>CI/CD</Tag>
                    <Tag>Kubernetes</Tag>
                    <Tag>RESTful API</Tag>
                    <Tag>SQL</Tag>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="col-span-2 space-y-4">
            <section>
              <SectionTitle icon={Monitor} title="Experience" />

              <ExperienceCard
                company="University of Science and Technology of China"
                department="Artificial Intelligence Research Institute"
                role="Full Stack Development Intern"
                date="2022 - 2024"
                tags={['LLM', 'Elasticsearch', 'GCP/AWS', 'Kubernetes', 'PostgreSQL']}
                img="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Logo_of_University_of_Science_and_Technology_of_China.svg/1200px-Logo_of_University_of_Science_and_Technology_of_China.svg.png"
                imgWidth={36}
              >
                <p className="mb-2">Designed and implemented differential privacy-based Q&A knowledge base and P2P computing platform, with <u>BERTopic knowledge classification & GPT Embeddings vector RAG search</u>.</p>
                <p className="mb-2">Implemented real-time synchronization of million-scale messages using SQL triggers, deployed container auto-scaling and DevOps pipeline.</p>
              </ExperienceCard>

              <ExperienceCard
                company="Tencent"
                role="Frontend Development Intern"
                date="2020 - 2021"
                tags={['React', 'ECharts.js', 'Node.js']}
                img="https://logos-world.net/wp-content/uploads/2024/07/Tencent-Logo.jpg"
                imgWidth={36}
              >
                <p className="mb-2">Customized <u>visualization component library</u> for WeChat and Tencent News content management system, supporting article editing and caching for 247M monthly active app users.</p>
              </ExperienceCard>

              <ExperienceCard
                company="Face++ Megvii Research"
                role="Interactive Game Development Intern"
                date="2018 - 2019"
                tags={['Three.js', 'WebCanvas', 'CV']}
                img="https://pbs.twimg.com/profile_images/1239849896124923906/zZmmbhm4_400x400.jpg"
                imgWidth={36}
              >
                <p>Developed a Street Fighter style H5 fighting game using camera-based human skeleton recognition framework for <u>real-time motion capture</u>.</p>
              </ExperienceCard>
            </section>

            <section>
              <SectionTitle icon={Award} title="Academic Activities" />
              <div className="space-y-1">
                <ActivityCard
                  organization="Renmin University of China"
                  role="Student Reviewer for Digital Humanities Research Journal"
                />
                <ActivityCard
                  organization="University of Oxford"
                  role="2024 DH Oxford Summer School"
                />
                <ActivityCard
                  organization="University of Edinburgh"
                  role="2024 DH×RSE Summer School"
                  detail="Full Scholarship"
                />
              </div>
            </section>

            <section>
              <SectionTitle icon={ExternalLink} title="Exhibitions" />
              <div className="space-y-2">
                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Out of the Blue Drill Hall
                  </h4>
                  <p className="text-xs text-gray-700">Mixed Media (Virtual Reality) Section</p>
                  <p className="text-xs text-gray-500">2024.11</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Flux Wave: Bounce
                  </h4>
                  <p className="text-xs text-gray-700">Digital Fashion AR & VR Division</p>
                  <p className="text-xs text-gray-500">2023.07</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    RCA2023 Graduation Show
                  </h4>
                  <p className="text-xs text-gray-700">Battersea and Kensington Campus</p>
                  <p className="text-xs text-gray-500">2023.06</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;