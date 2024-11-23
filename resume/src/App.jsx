import React from 'react';
import { Mail, Globe, Linkedin, Calendar, MapPin, ChevronRight, ExternalLink, Award, Book, Monitor, Download } from 'lucide-react';

const Tag = ({ children, color = 'blue' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium transition-colors
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
          <span className="text-xs text-blue-600 ml-2 before:content-['|'] before:mr-2 before:text-gray-300">
            {subtitle}
          </span>
        )}
        <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">{children}</p>
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
            <span className="block text-[13px] text-gray-700 mt-0.5">{department}</span> /* 调整了部门的显示方式 */
          )}
        </h3>
        <p className="text-xs text-gray-700 mt-1">{role}</p> {/* 增加了角色的上边距 */}
        <div className="text-xs text-gray-700 leading-relaxed mt-2">{children}</div> {/* 增加了描述的上边距 */}
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
    <p className="text-xs text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const ActivityCard = ({ organization, role, detail }) => (
  <div className="relative pl-3 mr-[-0px] mb-2.5 last:mb-0 group hover:translate-x-1 transition-transform duration-200">
    <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <p className="text-sm text-[13px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
      {role}
    </p>
    <p className="text-xs text-gray-700">{organization}{detail && <span className="text-xs text-gray-500 mt-0.5  before:content-['·'] before:ml-1 before:mr-1">{detail}</span>}
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
        <header className="mb-0 mt-[-]">
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
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
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
                  <p className="text-xs text-gray-700">数字人文 第二硕士学位</p>
                </div>

                <CourseSection title="主要课程">
                  人文编码（计算文学、图片与声音）、文化遗产的沟通与传播（元数据与数字档案）、
                  策划和保存数字文化（数字策展）、选修：数字游玩：游戏中的自我（游戏哲学）
                </CourseSection>

                <ProjectCard
                  title="研究指南数字化与翻译众包"
                  subtitle="伦敦国王学院档案馆项目"
                >
                  针对第一次世界大战文献系列研究指南，设计标准化元数据、电子目录及国际化平台
                </ProjectCard>

                <ProjectCard
                  title="计算社会语言学中的语码转换现象研究"
                  subtitle="数字人文导论课程项目"
                >
                  分析东亚（中日韩）流行音乐歌词中语言混杂现象的英语使用模式
                </ProjectCard>

                <ProjectCard
                  title="AI 数字叙事学术论文"
                  subtitle="2024年中国数字人文年会（CDH2024）会议接收"
                >
                  《智能-叙事共生： AI 与大型语言模型在数字叙事中的应用演进与未来展望》
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2022 - 2023">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-gray-800">英国皇家艺术学院</h3>
                  <p className="text-xs text-gray-700">数字艺术 硕士学位</p>
                </div>

                <ProjectCard
                  title="基于模糊图网络的可视化医疗决策辅助系统"
                  subtitle="伦敦帝国理工学院商学院 创新实验室"
                >
                  通过 React Flow 组件、联动医药数据库和文本 NLP 自动处理规则，将 NHS 和 BNF（英国国家处方集）的大量复杂医疗规范文档，转换为简单易用的交互式流程图
                </ProjectCard>

                <ProjectCard
                  title="利用 VR 技术分析密集人群流动情况"
                  subtitle="伦敦帝国理工学院交通工程与建模中心"
                >
                  利用 ViRSE 框架和 Unreal 引擎模拟拥挤场景中的人流设计实验，参与 3D 建模和服务器端监控模块开发，支持 100 名在线用户实时高精度数据收集
                </ProjectCard>

                <ProjectCard
                  title="参数化生成的沉浸式 VR 叙事空间"
                  subtitle="法国巴黎蓬皮杜艺术中心 IRCAM 项目展览"
                >
                  基于 Houdini Engine for UE 开发动态生成环境，实现复杂物理模拟和碰撞系统，通过 LLM 实时生成对话并接入 MetaSound 空间音频
                </ProjectCard>
              </TimelineItem>

              <TimelineItem date="2017 - 2021">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-gray-800">北京邮电大学</h3>
                  <p className="text-xs text-gray-700">软件工程 学士学位</p>
                </div>

                <CourseSection title="主要课程">
                  Java（SE/EE）、网络服务、Python、大数据挖掘、人工智能、软件工程、面向对象设计、
                  数据结构与算法、移动应用开发、数据库系统、计算机网络
                </CourseSection>

                <ProjectCard
                  title="孝义河水质污染模拟实时模拟监测平台"
                  subtitle="智能通信软件与多媒体北京市重点实验室"
                >
                  接入多种实时传感器与物理模拟系统，设计并实现全流域水质监看可视化大屏
                </ProjectCard>

                <ProjectCard
                  title="腾讯手游玩家生命周期分析"
                  subtitle="中国科学院自动化研究所 模式识别国家重点实验室"
                >
                  融合图结构和序列特征进行关系抽取、数据分析和可视化，微软亚洲研究院联合项目
                </ProjectCard>

                <CourseSection title="毕业论文">
                  基于嵌入乐理知识的 LSTM 进行古典音乐生成
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
                    <Tag>HTML/CSS</Tag>
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
                    <Tag>Figma</Tag>
                    <Tag>Unreal Engine</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Three.js</Tag>
                    <Tag>After Effects</Tag>
                    <Tag>TouchDesigner</Tag>
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
                    <Tag>SQL</Tag>
                    <Tag>TEI/XML</Tag>
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
                date="2022 - 2024"
                tags={['LLM', 'Elasticsearch', 'GCP/AWS', 'Kubernetes', 'PostgreSQL']}
              >
                <p className="mb-2">设计实现基于差分隐私计算的对话知识库及 P2P 算力平台，支持 BERTopic 知识归类和 GPT Embeddings 向量关联搜索。</p>
                <p className="mb-2">通过 SQL 触发器实现百万级消息的实时同步，部署容器按需自动扩容和 DevOps 流水线。</p>
              </ExperienceCard>

              <ExperienceCard
                company="腾讯"
                role="前端开发实习生"
                date="2020 - 2021"
                tags={['React', 'ECharts.js', 'Node.js']}
              >
                <p className="mb-2">为微信和腾讯新闻内容管理系统实现前端深度自定义数据可视化组件库，支持 2.47 亿月活 App 的新闻文章编辑和缓存。</p>
              </ExperienceCard>

              <ExperienceCard
                company="Face++ 旷视研究院"
                role="互动游戏开发实习生"
                date="2018 - 2019"
                tags={['Three.js', 'WebCanvas', 'CV']}
              >
                <p>利用基于摄像头的人体骨骼视觉识别框架，开发实时动作捕捉控制的“街头霸王”风格 H5 格斗游戏。</p>
              </ExperienceCard>
            </section>

            <section>
              <SectionTitle icon={Award} title="学术活动" />
              <div className="space-y-1">
                <ActivityCard
                  organization="中国人民大学"
                  role="《数字人文研究》期刊学生审稿人"
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
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Out of the Blue Drill Hall
                  </h4>
                  <p className="text-xs text-gray-700">混合媒体（虚拟现实）组</p>
                  <p className="text-xs text-gray-500">2024.11</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Flux Wave: Bounce
                  </h4>
                  <p className="text-xs text-gray-700">数字时尚 AR & VR 分区</p>
                  <p className="text-xs text-gray-500">2023.07</p>
                </div>

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    RCA2023毕业展
                  </h4>
                  <p className="text-xs text-gray-700">巴特西和肯辛顿校区</p>
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