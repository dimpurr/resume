import React from 'react';
import { Mail, Globe, Linkedin, Calendar, MapPin, ChevronRight, ExternalLink, Award, Book, Monitor, Download } from 'lucide-react';

const Tag = ({ children, color = "blue" }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${color}-50 text-${color}-800`}>
    {children}
  </span>
);

const TimelineItem = ({ date, children }) => (
  <div className="relative pl-4 mb-4 last:mb-0 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
    <span className="text-xs text-gray-500 float-right -mt-1">{date}</span>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-lg font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200 flex items-center">
    {Icon && <Icon className="mr-2 text-gray-600" size={16} />}
    {title}
  </h2>
);

const ProjectCard = ({ title, subtitle, children }) => (
  <div className="mb-2 last:mb-0">
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-gray-700 text-sm">
          {title}
          {subtitle && (
            <span className="text-xs font-normal text-blue-600 ml-1">
              {subtitle}
            </span>
          )}
        </h4>
        <div className="text-xs text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const CourseSection = ({ title, children }) => (
  <div className="mb-2">
    <h4 className="font-semibold text-gray-700 text-sm">{title}</h4>
    <div className="text-xs text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const ExperienceCard = ({ company, department, role, date, children, tags }) => (
  <div className="mb-3 last:mb-0">
    <span className="text-xs text-gray-500 float-right">{date}</span>
    <h3 className="font-bold text-gray-800 text-sm">{company}</h3>
    {department && <p className="text-xs text-gray-600">{department}</p>}
    <p className="text-xs text-gray-500">{role}</p>
    <div className="text-xs text-gray-600 leading-relaxed mt-1">
      {children}
    </div>
    {tags && (
      <div className="mt-1 flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    )}
  </div>
);

const Resume = () => {
  return (
    <div className="w-[210mm] mx-auto bg-white print:w-full">
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

      <div className="p-6">
        <button
          onClick={() => window.print()}
          className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-blue-600 print:hidden"
        >
          <Download size={16} />
          导出PDF
        </button>

        {/* 头部 */}
        <header className="mb-4 pb-2 border-b border-gray-200">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold text-gray-800">陈旸</h1>
            <div className="flex gap-4 text-sm text-gray-600">
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
          </div>
        </header>

        <div className="grid grid-cols-7 gap-4">
          {/* 主要内容列 */}
          <div className="col-span-5">
            <section className="mb-4">
              <SectionTitle icon={Book} title="教育与学术" />
              <TimelineItem date="2024 - 至今">
                <div className="mb-2">
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
              </TimelineItem>

              <TimelineItem date="2022 - 2023">
                <div className="mb-2">
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
                  title="沉浸式叙事空间"
                  subtitle="法国巴黎蓬皮杜中心展览"
                >
                  基于Houdini Engine for UE开发大规模参数生成世界，实现复杂的物理模拟和MetaSound空间音频控制
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2017 - 2021">
                <div className="mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">北京邮电大学</h3>
                  <p className="text-xs text-gray-600">软件工程 学士学位</p>
                </div>

                <CourseSection title="主要课程">
                  Java（SE/EE）、网络服务、Python、大数据挖掘、人工智能、软件工程、面向对象设计、
                  数据结构与算法、移动应用开发、数据库系统
                </CourseSection>

                <ProjectCard
                  title="游戏玩家分析研究"
                  subtitle="中国科学院自动化研究所（科创计划）"
                >
                  融合实体序列特征和GCN的移动游戏玩家生命周期分析
                </ProjectCard>
              </TimelineItem>
            </section>

            <section>
              <SectionTitle icon={Monitor} title="技能专长" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">开发技术</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>React</Tag>
                    <Tag>Vue</Tag>
                    <Tag>Node.js</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">数据科学</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>PyTorch</Tag>
                    <Tag>TensorFlow</Tag>
                    <Tag>Pandas</Tag>
                    <Tag color="green">机器学习</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">交互设计</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Three.js</Tag>
                    <Tag>WebGL</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Unreal Engine</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">其他工具</h4>
                  <div className="flex flex-wrap gap-1">
                    <Tag>Git</Tag>
                    <Tag>Docker</Tag>
                    <Tag>CI/CD</Tag>
                    <Tag>Kubernetes</Tag>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 侧边栏 */}
          <div className="col-span-2 space-y-4">
            <section>
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
                为微信和腾讯新闻内容管理系统实现基于ECharts.js的自定义数据可视化组件库
              </ExperienceCard>

              <ExperienceCard
                company="MEGVII（Face++）研究院"
                role="互动游戏开发实习生"
                date="2018.09 - 2019.09"
                tags={['Three.js', 'WebCanvas', 'CV']}
              >
                基于Three.js和计算机视觉框架，开发教育类HTML5格斗游戏
              </ExperienceCard>
            </section>

            <section>
              <SectionTitle icon={Award} title="学术活动" />
              <div className="space-y-2">
                <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-blue-500 before:rounded-full">
                  <p className="text-sm text-gray-700 font-medium">中国人民大学</p>
                  <p className="text-xs text-gray-600">《数字人文》期刊学生审稿人</p>
                </div>
                <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-blue-500 before:rounded-full">
                  <p className="text-sm text-gray-700 font-medium">牛津大学</p>
                  <p className="text-xs text-gray-600">2024年牛津数字人文暑期学校</p>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={ExternalLink} title="展览经历" />
              <div className="space-y-2">
                <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-blue-500 before:rounded-full">
                  <h4 className="text-sm text-gray-700 font-medium">Out of the Blue Drill Hall</h4>
                  <p className="text-xs text-gray-600">混合媒体（虚拟现实）组</p>
                  <p className="text-xs text-gray-500">2024.11.11-16</p>
                </div>

                <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-blue-500 before:rounded-full">
                  <h4 className="text-sm text-gray-700 font-medium">Flux Wave: Bounce</h4>
                  <p className="text-xs text-gray-600">数字时尚 AR & VR 分区</p>
                  <p className="text-xs text-gray-500">2023.07</p>
                </div>

                <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-blue-500 before:rounded-full">
                  <h4 className="text-sm text-gray-700 font-medium">RCA2023毕业展</h4>
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