import React from 'react';
import { Mail, Globe, Linkedin, Calendar, MapPin, ChevronRight, ExternalLink, Award, Book, Monitor, Download } from 'lucide-react';

const Tag = ({ children, color = 'blue' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium transition-colors
    ${color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
      color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100' :
        'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
    {children}
  </span>
);

const TimelineItem = ({ date, children }) => (
  <div className="relative pl-5 mb-3 last:mb-0">
    <span className="text-xs text-gray-500 float-right">{date}</span>
    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <div className="absolute left-[5px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-blue-200 to-transparent"></div>
    <div className="">{children}</div>
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 mb-3 pb-1 border-b border-gray-200 mt-5">
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
          <span className="text-xs text-blue-600 ml-2 before:content-['|'] before:mr-2 before:text-gray-300">
            {subtitle}
          </span>
        )}
        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ company, department, role, date, children, tags }) => (
  <div className="mb-6 last:mb-0 group"> {/* 增加了垂直间距 mb-6 */}
    <div className="relative">
      <p className="text-xs text-gray-500 whitespace-nowrap float-right">{date}</p>
      <div className="">
        <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {company}
          {department && (
            <span className="block text-xs text-gray-600 mt-0.5">{department}</span> /* 调整了部门的显示方式 */
          )}
        </h3>
        <p className="text-xs text-gray-600 mt-1">{role}</p> {/* 增加了角色的上边距 */}
        <p className="text-xs text-gray-600 leading-relaxed mt-2">{children}</p> {/* 增加了描述的上边距 */}
        {tags && (
          <div className="mt-2.5 flex flex-wrap gap-1.5"> {/* 增加了标签的间距 */}
            {tags.map((tag, index) => (
              <Tag key={index} color={index % 2 ? 'green' : 'blue'}>{tag}</Tag>
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
    <p className="text-xs text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const ActivityCard = ({ organization, role, detail }) => (
  <div className="relative pl-4 mb-2.5 last:mb-0 group hover:translate-x-1 transition-transform duration-200">
    <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
      {role}
    </p>
    <p className="text-xs text-gray-600">{organization}{detail && <span className="text-xs text-gray-500 mt-0.5  before:content-['·'] before:ml-1 before:mr-1">{detail}</span>}
</p>
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

      <div className="p-6">
        {/* Header Section */}
        <header className="mb-0 mt-[-10px]">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              陈旸
            </h1>
            <button
              onClick={() => window.print()}
              className="print:hidden text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:shadow-md transition-shadow">
              <Download size={14} />导出PDF
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="mailto:dimcheny@gmail.com" className="flex items-center hover:text-blue-600 transition-colors">
              <Mail size={14} className="mr-1" />dimcheny@gmail.com
            </a>
            <span className="flex items-center">
              +86 13246174701
            </span>
            <a href="https://ianyangchen.com" className="flex items-center hover:text-blue-600 transition-colors">
              <Globe size={14} className="mr-1" />ianyangchen.com
            </a>
            <a href="https://linkedin.com/in/dimchen" className="flex items-center hover:text-blue-600 transition-colors">
              <Linkedin size={14} className="mr-1" />linkedin.com/in/dimchen
            </a>
          </div>
        </header>

        <div className="grid grid-cols-7 gap-5">
          {/* Main Content Column */}
          <div className="col-span-5 space-y-4">
            <section>
              <SectionTitle icon={Book} title="教育与学术" />

              <TimelineItem date="2024 - 至今">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-gray-800">伦敦国王学院</h3>
                  <p className="text-xs text-gray-600">数字人文 第二硕士学位</p>
                </div>

                <CourseSection title="主要课程">
                  人文编码（计算文学、图片与声音）、文化遗产的沟通与传播（元数据与数字档案）、
                  策划和保存数字文化（数字策展）、选修：数字游玩：游戏中的自我（游戏哲学）
                </CourseSection>

                <ProjectCard
                  title="文献研究指南数字化"
                  subtitle="伦敦国王学院档案馆与利德尔哈特档案中心"
                >
                  第一次世界大战期间文献研究指南数字化与众包项目
                </ProjectCard>

                <ProjectCard
                  title="语言混杂现象研究"
                  subtitle="数字人文导论课程项目"
                >
                  东亚（中日韩）流行音乐歌词中语言混杂现象的英语使用模式分析
                </ProjectCard>

                <ProjectCard
                  title="学术论文"
                  subtitle="2024年中国数字人文年会（CDH2024）会议接收"
                >
                  智能-叙事共生：AI与大型语言模型在数字叙事中的应用演进与未来展望
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2022 - 2023">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-gray-800">英国皇家艺术学院</h3>
                  <p className="text-xs text-gray-600">数字艺术 硕士学位</p>
                </div>

                <ProjectCard
                  title="改进医疗保健项目"
                  subtitle="伦敦帝国理工学院商学院 创业之旅"
                >
                  基于模糊图网络的可视化医疗援助系统；使用Figma设计用户界面，并开发基于React Flow和Node.js的软件演示，
                  将NHS和BNF的复杂医疗文件转换为交互式可视化流程图
                </ProjectCard>

                <ProjectCard
                  title="人群流动分析项目"
                  subtitle="伦敦帝国理工学院交通工程与建模中心"
                >
                  利用ViRSE和虚幻引擎模拟拥挤场景中的人流，参与3D建模和服务器端监控，支持100名在线用户实时数据收集
                </ProjectCard>

                <ProjectCard
                  title="沉浸式叙事空间"
                  subtitle="法国巴黎蓬皮杜中心 IRCAM VR/AR 项目展览"
                >
                  基于Houdini Engine for UE开发大规模参数生成世界，实现复杂的物理模拟和MetaSound空间音频控制
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2017 - 2021">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-gray-800">北京邮电大学</h3>
                  <p className="text-xs text-gray-600">软件工程 学士学位</p>
                </div>

                <CourseSection title="主要课程">
                  Java（SE/EE）、网络服务、Python、大数据挖掘、人工智能、软件工程、面向对象设计、
                  数据结构与算法、移动应用开发、数据库系统、计算机网络
                </CourseSection>

                <ProjectCard
                  title="GIS水质监测平台"
                  subtitle="智能通信软件与多媒体北京市重点实验室"
                >
                  孝义河GIS水质实时模拟监测平台的开发与实现
                </ProjectCard>

                <ProjectCard
                  title="游戏玩家分析研究"
                  subtitle="中国科学院自动化研究所（科创计划）本科生培养计划"
                >
                  融合实体序列特征和GCN的移动游戏玩家生命周期分析，微软亚洲研究院联合研究项目
                </ProjectCard>

                <CourseSection title="毕业论文">
                  基于嵌入乐理知识的LSTM的古典音乐生成
                </CourseSection>
              </TimelineItem>
            </section>

            <section>
              <SectionTitle icon={Monitor} title="技能专长" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">开发技术</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>React</Tag>
                    <Tag>Vue</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Python</Tag>
                    <Tag>Django</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">数据科学</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>PyTorch</Tag>
                    <Tag>TensorFlow</Tag>
                    <Tag>Pandas</Tag>
                    <Tag>数据可视化</Tag>
                    <Tag>机器学习</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">交互设计</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Three.js</Tag>
                    <Tag>WebGL</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Unreal Engine</Tag>
                    <Tag>Figma</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">其他工具</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Git</Tag>
                    <Tag>Docker</Tag>
                    <Tag>CI/CD</Tag>
                    <Tag>Kubernetes</Tag>
                    <Tag>RESTful API</Tag>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="col-span-2 space-y-4">
            <section>
              <SectionTitle icon={Monitor} title="实习与工作" />

              <ExperienceCard
                company="中国科学技术大学"
                department="综合性国家科学中心人工智能研究院"
                role="全栈开发实习生"
                date="2023 - 2024"
                tags={['React', 'Node.js', 'Python', 'LLM']}
              >
                领导设计和开发具有差异化隐私的人工智能对话知识库，支持多个LLM。
                管理需求、编写PRD、设计用户流和RESTful系统架构。
              </ExperienceCard>

              <ExperienceCard
                company="腾讯"
                role="前端开发实习生"
                date="2020 - 2021"
                tags={['React', 'ECharts.js', 'Node.js']}
              >
                为微信和腾讯新闻内容管理系统实现基于ECharts.js的自定义数据可视化组件库，
                支持2.47亿月活跃App的新闻文章编辑和缓存。
              </ExperienceCard>

              <ExperienceCard
                company="MEGVII（Face++）研究院"
                role="互动游戏开发实习生"
                date="2018 - 2019"
                tags={['Three.js', 'WebCanvas', 'CV']}
              >
                基于Three.js、Web-canvas和摄像头人体骨骼视觉识别框架，开发一款教育类HTML5
                "街头霸王"风格格斗游戏，用于理解人工智能和计算机视觉。
              </ExperienceCard>
            </section>

            <section>
              <SectionTitle icon={Award} title="学术活动" />
              <div className="space-y-1">
                <ActivityCard
                  organization="中国人民大学"
                  role="《数字人文》期刊学生审稿人"
                />
                <ActivityCard
                  organization="牛津大学"
                  role="2024年牛津数字人文暑期学校"
                />
                <ActivityCard
                  organization="爱丁堡大学"
                  role="2024年数字人文与研究软件工程暑期学校"
                  detail="全额奖学金"
                />
              </div>
            </section>

            <section>
              <SectionTitle icon={ExternalLink} title="展览经历" />
              <div className="space-y-2">
                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Out of the Blue Drill Hall
                  </h4>
                  <p className="text-xs text-gray-600">混合媒体（虚拟现实）组</p>
                  <p className="text-xs text-gray-500">2024.11.11-16</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Flux Wave: Bounce
                  </h4>
                  <p className="text-xs text-gray-600">数字时尚 AR & VR 分区</p>
                  <p className="text-xs text-gray-500">2023.07</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    RCA2023毕业展
                  </h4>
                  <p className="text-xs text-gray-600">巴特西和肯辛顿校区</p>
                  <p className="text-xs text-gray-500">2023.06-07</p>
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