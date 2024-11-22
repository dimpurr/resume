import React from 'react';
import { Mail, Globe, Linkedin, Calendar, MapPin, ChevronRight, ExternalLink, Award, Book, Monitor, Download } from 'lucide-react';

// 标签组件
const Tag = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
    {children}
  </span>
);

// 时间轴项目组件，减少垂直间距
const TimelineItem = ({ date, children }) => (
  <div className="relative pl-4 border-l-2 border-blue-50 pb-4 last:pb-0">
    <div className="absolute -left-1.5 top-1 w-3 h-3 bg-blue-50 rounded-full border-2 border-blue-500" />
    <div className="flex justify-between items-start gap-4">
      <div className="flex-grow">{children}</div>
      <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>
    </div>
  </div>
);

// 章节标题组件
const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-lg font-bold text-gray-800 mb-3 pb-1 border-b border-gray-100 flex items-center">
    {Icon && <Icon className="mr-2 text-gray-600" size={18} />}
    {title}
  </h2>
);

// 项目卡片组件
const ProjectCard = ({ title, subtitle, children }) => (
  <div className="mb-3 last:mb-0">
    <div className="flex items-start">
      <ChevronRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-gray-700 text-sm">{title}</h4>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        <div className="text-xs text-gray-600 leading-relaxed mt-1">
          {children}
        </div>
      </div>
    </div>
  </div>
);

// 课程部分组件
const CourseSection = ({ title, children }) => (
  <div className="mb-3">
    <h4 className="font-semibold text-gray-700 text-sm mb-1">{title}</h4>
    <div className="text-xs text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

// 经验卡片组件
const ExperienceCard = ({ company, department, role, date, children, tags }) => (
  <div className="mb-4 last:mb-0">
    <div className="mb-1">
      <h3 className="font-bold text-gray-800 text-sm">{company}</h3>
      {department && <p className="text-xs text-gray-600">{department}</p>}
      <p className="text-xs text-gray-500">{role} | {date}</p>
    </div>
    <div className="text-xs text-gray-600 leading-relaxed">
      {children}
    </div>
    {tags && (
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    )}
  </div>
);

// 活动卡片组件
const ActivityCard = ({ organization, role, detail }) => (
  <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full mb-3 last:mb-0">
    <p className="text-sm text-gray-700 font-medium">{organization}</p>
    <p className="text-xs text-gray-600">{role}</p>
    {detail && <p className="text-xs text-gray-500 mt-0.5">{detail}</p>}
  </div>
);

// PDF导出函数
const exportToPDF = () => {
  window.print();
};

const Resume = () => {
  return (
    <div className="w-[210mm] mx-auto bg-white print:w-full">
      {/* 打印样式 */}
      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
            }
          }
        `}
      </style>

      <div className="p-8 print:p-6">
        {/* 导出按钮 - 仅在非打印时显示 */}
        <button
          onClick={exportToPDF}
          className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-blue-600 print:hidden"
        >
          <Download size={16} />
          导出PDF
        </button>

        {/* 头部 */}
        <header className="text-center mb-6 pb-4 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">陈旸</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href="mailto:dimcheny@gmail.com" className="flex items-center hover:text-blue-600">
              <Mail size={14} className="mr-1" />
              dimcheny@gmail.com
            </a>
            <span className="flex items-center">
              +86 13246174701
            </span>
            <a href="https://ianyangchen.com" className="flex items-center hover:text-blue-600">
              <Globe size={14} className="mr-1" />
              ianyangchen.com
            </a>
            <a href="https://linkedin.com/in/dimchen" className="flex items-center hover:text-blue-600">
              <Linkedin size={14} className="mr-1" />
              linkedin.com/in/dimchen
            </a>
          </div>
        </header>

        <div className="grid grid-cols-4 gap-6">
          {/* 主要内容列 */}
          <div className="col-span-3">
            <section className="mb-6">
              <SectionTitle icon={Book} title="教育与学术" />

              <TimelineItem date="2024 - 至今">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm">伦敦国王学院</h3>
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
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm">英国皇家艺术学院</h3>
                  <p className="text-xs text-gray-600">数字艺术 硕士学位</p>
                </div>

                <ProjectCard
                  title="改进医疗保健项目"
                  subtitle="帝国理工学院商学院 创业之旅"
                >
                  基于模糊图网络的可视化医疗援助系统；使用Figma设计用户界面，并开发基于React Flow和Node.js的软件演示，
                  将NHS和BNF的复杂医疗文件转换为交互式可视化流程图
                </ProjectCard>

                <ProjectCard
                  title="人群流动分析项目"
                  subtitle="帝国理工学院交通工程与建模中心"
                >
                  利用ViRSE和虚幻引擎模拟拥挤场景中的人流，参与3D建模和服务器端监控，支持100名在线用户实时数据收集
                </ProjectCard>

                <ProjectCard
                  title="沉浸式叙事空间"
                  subtitle="法国巴黎蓬皮杜中心，法国国家声学研究所项目展览"
                >
                  基于Houdini Engine for UE开发大规模参数生成世界，实现复杂的物理模拟和MetaSound空间音频控制
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2017 - 2021">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm">北京邮电大学</h3>
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
                  subtitle="中国科学院自动化研究所（科创计划）本科生培养计划，微软亚洲研究院联合研究项目"
                >
                  融合实体序列特征和GCN的移动游戏玩家生命周期分析
                </ProjectCard>

                <CourseSection title="毕业论文">
                  基于嵌入乐理知识的LSTM的古典音乐生成
                </CourseSection>
              </TimelineItem>
            </section>
          </div>

          {/* 侧边栏 */}
          <div className="col-span-1">
            <section className="mb-6">
              <SectionTitle icon={Monitor} title="实习与工作" />

              <ExperienceCard
                company="中国科学技术大学"
                department="中国合肥综合性国家科学中心人工智能研究院"
                role="全栈开发实习生"
                date="2023.09 - 2024.09"
                tags={['React', 'Node.js', 'Python', 'LLM']}
              >
                领导设计和开发具有差异化隐私的人工智能对话知识库，支持多个LLM。
                管理需求、编写PRD、设计用户流和RESTful系统架构。
              </ExperienceCard>

              <ExperienceCard
                company="腾讯"
                role="前端开发实习生"
                date="2020.04 - 2021.04"
                tags={['React', 'ECharts.js', 'Node.js']}
              >
                为微信和腾讯新闻内容管理系统实现基于ECharts.js的自定义数据可视化组件库，
                支持2.47亿月活跃App的新闻文章编辑和缓存。
              </ExperienceCard>

              <ExperienceCard
                company="MEGVII（Face++）研究院"
                role="互动游戏开发实习生"
                date="2018.09 - 2019.09"
                tags={['Three.js', 'WebCanvas', 'CV']}
              >
                基于Three.js、Web-canvas和摄像头人体骨骼视觉识别框架，开发一款教育类HTML5
                "街头霸王"风格格斗游戏，用于理解人工智能和计算机视觉。
              </ExperienceCard>
            </section>

            <section className="mb-6">
              <SectionTitle icon={Award} title="学术活动" />
              <div>
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

            <section className="mb-6">
              <SectionTitle icon={ExternalLink} title="展览经历" />
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">Out of the Blue Drill Hall</h4>
                  <p className="text-xs text-gray-600">混合媒体（虚拟现实）组</p>
                  <p className="text-xs text-gray-500">2024.11.11-16</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">Flux Wave: Bounce</h4>
                  <p className="text-xs text-gray-600">数字时尚 AR & VR 分区</p>
                  <p className="text-xs text-gray-500">2023.07</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">RCA2023毕业展</h4>
                  <p className="text-xs text-gray-600">巴特西和肯辛顿校区</p>
                  <p className="text-xs text-gray-500">2023.06-07</p>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <SectionTitle icon={Book} title="技能专长" />
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">开发技术</h4>
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
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">数据科学</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>PyTorch</Tag>
                    <Tag>TensorFlow</Tag>
                    <Tag>Pandas</Tag>
                    <Tag>数据可视化</Tag>
                    <Tag>机器学习</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">交互设计</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Three.js</Tag>
                    <Tag>WebGL</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Unreal Engine</Tag>
                    <Tag>Figma</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">其他工具</h4>
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
        </div>

        {/* 页脚信息 */}
        <footer className="border-t border-gray-100 mt-6 pt-4">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">研究兴趣</h3>
              <p className="text-xs text-gray-600">
                数字人文、人工智能、交互设计、数据可视化、计算音乐学、文化计算
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">语言能力</h3>
              <div className="flex gap-4 text-xs text-gray-600">
                <span>中文（母语）</span>
                <span>英语（流利）</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Resume;