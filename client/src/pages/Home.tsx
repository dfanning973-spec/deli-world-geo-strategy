import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, TrendingUp, Users, Target, Zap, BarChart3, Calendar, ChevronDown } from 'lucide-react';

import heroBg from '@/assets/deli.png';

// 数字计数动画组件
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

// 时间线项目组件
function TimelineItem({ item, idx, isLast }: { item: any; idx: number; isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* 时间线竖线 */}
      {!isLast && (
        <div className="absolute left-6 sm:left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
      )}

      {/* 时间线项目 */}
      <div className="relative pl-16 sm:pl-20 pb-8 sm:pb-12">
        {/* 时间线圆点 */}
        <div className="absolute left-0 top-2 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
            {idx + 1}
          </div>
        </div>

        {/* 卡片 */}
        <Card className="shadow-md hover:shadow-lg transition-all cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <Badge className="mb-2 text-xs sm:text-sm">{item.month}</Badge>
                <CardTitle className="text-base sm:text-lg md:text-xl line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm mt-1">{item.focus}</CardDescription>
              </div>
              <ChevronDown
                className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </CardHeader>

          {isOpen && (
            <CardContent className="pt-0 space-y-3 sm:space-y-4 border-t">
              <div>
                <p className="font-semibold text-xs sm:text-sm mb-2 text-primary">主要工作</p>
                <ul className="space-y-1 sm:space-y-2">
                  {item.goals.map((goal: string, gIdx: number) => (
                    <li key={gIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {item.target && (
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs sm:text-sm font-semibold text-primary">📊 预期目标</p>
                  <p className="text-xs sm:text-sm text-foreground mt-1">{item.target}</p>
                </div>
              )}
              {item.note && (
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-xs text-foreground">{item.note}</p>
                </div>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen sm:min-h-[70vh] flex items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            全球智慧办公与工业工具 AI 搜索优化策略
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            DELI WORLD Global GEO Strategy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-2 leading-relaxed">
            DELI WORLD Global ToB Search Visibility Growth Plan
          </p>
          <p className="text-sm sm:text-base text-white/80 mb-2">
            得力集团 全球 ToB 业务 AI 搜索优化战略
          </p>
          <p className="text-sm sm:text-base text-white/80 mb-6">
            AI 搜索时代的智能打印与工具设备行业流量增长方案
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
              <p className="text-sm text-white/70">得力集团：全球领先的智慧打印设备与工业工具（ToB）解决方案商</p>
            </div>
          </div>
        </div>
      </section>

      {/* 前言 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-blue-50/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>前言</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8 space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                在智能办公与工业数字化转型时代（Smart Office / Enterprise Sourcing / Digital Manufacturing），全球企业对于一站式大办公物资与专业工器具的需求已经从传统的碎片化分散采购，转变为多元化、平台级、一站式的降本增效采购需求。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-semibold text-primary mb-3">合作伙伴与买家主管关注的关键词：</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• "Enterprise laser printer & copier solutions"</li>
                  <li>• "Commercial smart printing equipment for office"</li>
                  <li>• "Professional hand tools and power tools B2B"</li>
                  <li>• "One-stop office equipment supplying for enterprise"</li>
                  <li>• "Industrial grade hardware & tools catalog"</li>
                </ul>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                因此，得力集团的全球增长策略重点围绕：<strong>智慧办公打印 + 数字化工器具 + B2B一站式供应链技术</strong>。我们通过获得全球主流行业认证（如能源效率、安全合规、环保认证等）的产品，系统化覆盖全球政企采购、商业办公、工业制造及智能工厂需求，助力企业构建高效、集约的数字化采购与大办公基座。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 一、基础分析 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>一、基础分析</h2>

          {/* 网站信息 */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  网站概况
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">主营业务</p>
                  <p className="text-sm leading-relaxed">得力集团（DELI WORLD）是全球领先的智慧办公与一站式整体解决方案商，提供包括企业级智慧打印机、数码复合机、智能会议终端，以及得力工具（Deli Tools）旗下的专业级手工具、电动工具和工业五金等全栈产品。公司产品服务全球 100+ 国家和地区，广泛应用于商业企业、政府机构、跨国集团及大型制造工厂。</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">典型场景</p>
                  <p className="text-sm">商业批量办公、企业智能打印中心、数字化仓储集采、工厂维保（MRO）工器具配套、全球跨境电商 B2B 采购网。</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  现状与商业模式
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">现状</p>
                  <p className="text-xs sm:text-sm">客户目前在全球 AI 搜索引擎（如 Perplexity, ChatGPT Search, Gemini）中尚未建立起针对 ToB（企业级）核心意图词的高权重、权威性引用源，部分核心办公设备及工具类产品的搜索可见度仍有较大提升空间。前期的核心目标是建立智慧打印（Printer）与专业工具（Tools）相关高商业意向词的索引与内容深度覆盖。</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">核心商业模式</p>
                  <p className="text-xs sm:text-sm">智慧大办公与工业装备整体解决方案供应商。主要客户为跨国企业、政府机构、集采平台、科技巨头、以及全球网络渠道集成商。盈利模式包括 ToB 智能硬件设备销售、大客户集采长期服务协议、供应链整体采购及系统授权。客单价高，决策周期较长（B2B 模式）。</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 目标人群 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>目标人群</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  title: '商业企业/跨国集团',
                  desc: '企业集中化办公集采、智慧打印中心构建、多功能数码复合机租赁与配套设备采购。',
                  icon: '🏢',
                },
                {
                  title: '工业制造/建筑与维修（MRO）',
                  desc: '智能工厂维保（MRO）工器具集采、车间及仓储专业手工具与电动工具大批量订购。',
                  icon: '🔧',
                },
                {
                  title: '政府与公共事业部门',
                  desc: '政务大厅高效政务打印终端设备、集中化无纸化办公系统硬件配套、公职人员一站式办公物资集采。',
                  icon: '🏛️',
                },
                {
                  title: '全球B2B渠道集成商',
                  desc: '跨境电商 B2B 采购网大买家、区域性办公设备与工业工具代理商、大客户供应链协同服务商。',
                  icon: '🌐',
                },
              ].map((item, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 语言与地域覆盖 */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>语言与地域覆盖</h3>
            <p className="text-sm text-foreground mb-4"><strong>核心语种：多语种覆盖（英语 / 越南语 / 俄语 / 韩语 ）</strong></p>
            <ul className="space-y-3 text-sm text-foreground">
              <li><strong>英语（全球核心）</strong> - 覆盖北美及欧洲高客单价 B2B 市场，抢占智能打印（Printer）企业级采购决策。</li>
              <li><strong>越南语（东盟制造）</strong> - 辐射东南亚新兴工业区，聚焦智能工厂及车间维保所需的工业级工具（Tools）集采。</li>
              <li><strong>俄语（独联体贸易）</strong> - 覆盖欧亚及独联体重点市场，建立得力五金工具与大办公设备的 B2B 渠道代理索引。</li>
              <li><strong>韩语（亚太商务）</strong> - 针对日韩高端跨国企业集采，提升智慧打印终端与数字化会议设备在亚太 AI 搜索中的可见度。</li>
              <li><strong>AI 引擎优先</strong> - 5 种语种深度对标 AI 大模型（GPT/Claude/Gemini）语料，大办公与专业工器具的 GEO 效果最显著。</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">多语种矩阵（结合海外分支本地化）是得力集团建立全球智慧办公设备与专业工具技术权威、抢占国际 B2B 采购流量最高效的路径。</p>
          </div>
        </div>
      </section>

      {/* 二、核心策略 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>二、核心策略</h2>

          <div className="mb-8">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>策略核心</h3>
                <p className="text-sm text-foreground mb-4">通过 Programmatic SEO + GEO（AI 搜索优化）覆盖海外智慧大办公物资、智能打印设备及工业级工器具的采购搜索场景。</p>
                <p className="text-sm text-foreground mb-4"><strong>核心逻辑：</strong>模拟海外行政主管、采购经理、供应链决策者（Sourcing Manager）及 IT 部门主管在 Google / ChatGPT / AI 搜索中的真实问题。</p>
                <p className="text-sm text-foreground">通过系统化页面覆盖：企业级智能打印机/复印机产品搜索、数字化一站式办公集采方案、全球 MRO 工业级五金工具标准（如能效/安全/材质认证）、全球绿色办公合规认证要求以及行业大客户供应链集采指南。</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[
              {
                title: '企业采购需求',
                subtitle: '(Demand)',
                keywords: [
                  'industrial tools supplier',
                  'wholesale hand tools',
                  'contractor tools solutions',
                  'OEM tools manufacturer',
                  'thermal printer supplier',
                  'barcode & label printing solutions',
                  'office printing equipment',
                  'warehouse & logistics printing',
                  'retail & POS printing systems',
                  'enterprise procurement solutions',
                ],
              },
              {
                title: '选型与对比意图',
                subtitle: '(Intent)',
                keywords: [
                  'best tools supplier for distributors',
                  'reliable industrial tools manufacturer',
                  'OEM vs private label manufacturing',
                  'best thermal printer supplier',
                  'barcode printer comparison for logistics',
                  'thermal printer vs ink printer for retail',
                  'Zebra vs Honeywell barcode printer',
                  'HP vs Brother office printer',
                  'best office printer for SMEs',
                  'trusted Chinese OEM manufacturer',
                ],
              },
              {
                title: '通过内容承接',
                subtitle: '(Coverage)',
                keywords: [
                  'industrial tools catalog & specifications',
                  'wholesale & distributor procurement guides',
                  'OEM / ODM manufacturing capabilities',
                  'warehouse & logistics printing solutions',
                  'office & enterprise printing solutions',
                  'product comparison & buying guides',
                  'certifications & compliance standards',
                  'contractor & retailer case studies',
                  'RFQ / bulk order / distributor inquiry',
                  'demo request / contact sales',
                ],
              },
            ].map((item, idx) => (
              <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                  <p className="text-xs text-primary font-semibold mb-3">{item.subtitle}</p>
                  <ul className="space-y-1">
                    {item.keywords.map((kw, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {kw}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 关键词分类 */}
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>关键词分类体系</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm mb-3 text-primary">P0 级 — 超级商业需求</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">采购决策型</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'best tools supplier for distributors',
                        'reliable industrial tools supplier',
                        'OEM tools manufacturer China',
                        'commercial tools supplier for contractors',
                        'wholesale hand tools supplier USA',
                      ].map((kw, i) => (
                        <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Printer 采购型</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'best thermal printer supplier',
                        'wholesale barcode printer supplier',
                        'OEM thermal printer manufacturer',
                        'office printing solutions for businesses',
                        'reliable label printer manufacturer',
                      ].map((kw, i) => (
                        <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-primary">P1 级 — 真实选型问题（高转化）</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'how to choose industrial tools supplier',
                    'best tools for hardware retailers',
                    'affordable tools supplier for small business',
                    'contractor tools supplier USA',
                    'private label tools manufacturer comparison',
                    'how to choose thermal printer for warehouse',
                    'best barcode printer for inventory management',
                    'thermal printer for ecommerce fulfillment',
                    'office printer for SMEs comparison',
                    'thermal printer supplier with OEM support',
                  ].map((kw, i) => (
                    <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-primary">P2 级 — 场景型需求（核心流量入口）</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'industrial tools for construction companies',
                    'tools for maintenance teams',
                    'power tools for workshops',
                    'wholesale tools for hardware stores',
                    'commercial tools for industrial procurement',
                    'thermal printer for logistics companies',
                    'barcode printer for retail stores',
                    'office printers for enterprise procurement',
                    'label printers for warehouse management',
                    'POS printer for restaurants and retail',
                  ].map((kw, i) => (
                    <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-primary">P3 级 — 信息与信任型（AI推荐关键）</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'what are the best industrial tool brands',
                    'reliable Chinese tools manufacturers',
                    'industrial tools buying guide',
                    'OEM tools manufacturing explained',
                    'tools supplier trends in Europe',
                    'what are the best thermal printer brands',
                    'thermal printer buying guide for business',
                    'label printer manufacturer comparison',
                    'office printer trends for SMEs',
                    'how thermal printers improve warehouse efficiency',
                  ].map((kw, i) => (
                    <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3 text-primary">P4 级 — 备用词库</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Comparison（对比选型 · AI 高命中）</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Zebra vs Honeywell barcode printer',
                        'HP vs Brother office printer',
                        'Deli vs Zebra printer',
                        'OEM vs private label manufacturing',
                        'branded tools vs OEM tools',
                      ].map((kw, i) => (
                        <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Trust（信任背书 · 出海合规关键）</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'reliable Chinese tool manufacturers',
                        'trusted thermal printer manufacturer',
                        'ISO certified tools manufacturer',
                        'CE certified printer manufacturer',
                        'global OEM tools supplier',
                      ].map((kw, i) => (
                        <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Solution（场景方案 · 推荐增长引擎）</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'warehouse printing solutions',
                        'printing solutions for logistics companies',
                        'industrial procurement solutions',
                        'tools solutions for contractors',
                        'office printing solutions for enterprises',
                      ].map((kw, i) => (
                        <div key={i} className="bg-blue-50 p-2 rounded text-xs text-foreground">• {kw}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 三、预期效果 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>三、预期效果</h2>

          <Card className="shadow-lg mb-8">
            <CardContent className="pt-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                谷歌收录率：
                <span className="text-3xl sm:text-4xl text-primary ml-1">60% ~ 80%</span>
              </h3>
              <p className="text-base text-foreground mb-6 leading-relaxed">
                这意味着我们做的 <strong className="font-semibold">1500</strong> 个页面里，有{' '}
                <strong className="font-semibold">900~1200</strong> 个页面会被谷歌收录并展示靠前。
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                AI 提及率预期：
                <span className="text-3xl sm:text-4xl text-primary ml-1">30% ~ 70%</span>
              </h3>
              <p className="text-base text-foreground mb-4 leading-relaxed">
                在与智慧大办公集采 / B2B 工业工具相关的 AI 搜索 / AI 推荐结果中，意味着{' '}
                <strong className="font-semibold">1500</strong> 个关键词里，有{' '}
                <strong className="font-semibold">450~1050</strong> 个提示词的相关搜索中会出现{' '}
                <strong className="font-semibold">得力</strong> 的品牌，大部分会在{' '}
                <strong className="font-semibold">前 5、前 3 甚至是第一</strong>。
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• 假设全球企业大办公物资及工器具采购相关搜索行为每月约 15,000 ~ 30,000 次</li>
                  <li>• 相关搜索包括：Commercial smart printers、Enterprise laser copiers、Professional hand tools B2B、Industrial power tools catalog</li>
                  <li>• 预计被 AI 提及次数：<strong>3,000 ~ 12,000 次 / 月</strong></li>
                </ul>
              </div>

              <p className="text-sm text-foreground mb-4">在 AI 搜索结果中：AI 通常不会直接推荐官网链接。用户看到品牌后常见行为是回到搜索引擎主动搜索客户品牌，以进一步寻找相关产品与解决方案。</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-2">GEO 带来的 AI 品牌效应：</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>✓ DELI WORLD / 得力工具 品牌搜索量增长</li>
                  <li>✓ 智慧打印机与工业级硬件工具方案相关搜索增长</li>
                  <li>✓ 海外采购主管与 B2B 决策者主动寻找得力集团</li>
                  <li>✓ Google Search Console 中品牌曝光量增长</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-slate-50/70">
            <CardHeader>
              <CardTitle className="text-base text-primary">深度分析报告</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• 30 个 Topic 词 + 3 家竞品表现分析 + 蓝海机会洞察</li>
                <li>• 多维度详细月报</li>
                <li>• 站点结构诊断 + 核心关键词布局 + 优化行动清单</li>
                <li>• 目标关键词覆盖 + 本地竞争格局解析 + 区域流量获取</li>
                <li>• 核心词排名追踪 + 流量与点击率分析 + 效果可视化</li>
                <li>• 流量来源拆解 + 用户行为分析 + 高价值入口</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 四、报价 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-50/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>四、报价</h2>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>全球 AI 优化项目报价</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-1">
                <div className="flex justify-between items-start py-3 border-b gap-4">
                  <div>
                    <p className="font-semibold text-base">国际 GEO 关键词优化 - 500 个词</p>
                    <p className="text-sm text-muted-foreground mt-0.5">英语 | 6 个月</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-lg text-primary">$13,300</p>
                    <p className="text-xs text-muted-foreground mt-0.5">$7980/300×500=$13300</p>
                  </div>
                </div>
                <div className="flex justify-between items-start py-3 border-b gap-4">
                  <div>
                    <p className="font-semibold text-base">语言包拓展 2 个小语种</p>
                    <p className="text-sm text-muted-foreground mt-0.5">推荐西 + 法</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-lg text-primary">$2,933</p>
                    <p className="text-xs text-muted-foreground mt-0.5">$880/300×500×2=$2933</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b gap-4">
                  <div>
                    <p className="font-semibold text-base">导航站 - 50 个 高质量外链建设</p>
                  </div>
                  <p className="font-semibold text-lg text-primary shrink-0">$1,580</p>
                </div>
                <div className="space-y-2 pt-2 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">原价总计（美元）</span>
                    <span className="text-base font-semibold text-muted-foreground">$17,813</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">折合人民币（参考价）</span>
                    <span className="text-xl font-bold text-foreground">¥121,128.4</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border-2 border-primary/30 bg-blue-50/80 px-6 py-8 sm:px-8 sm:py-10 text-center">
                <p className="text-lg sm:text-xl font-bold text-primary mb-5">限时 8 折套餐优惠</p>
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-none">¥96,902.72</p>
                <p className="text-xl text-muted-foreground mt-4">6 个月</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 五、具体工作拆解 Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>五、具体工作拆解</h2>

          <div className="grid gap-4 sm:p-5 md:p-6">
            {[
              {
                month: '第 1 个月',
                title: 'GEO 高级版关键词库',
                focus: '基础建设 & 第 1 批词库准备（数量按所选套餐执行）',
                goals: [
                  '采集客户业务词，建立词语义矩阵（核心词、品牌词分组归类）。',
                  '重建 Topic Map（内容架构规划）。',
                  '产出并交付第 1 批（1/3）GEO 页面。',
                  '协助将策略落地至主站（Deli Global 因子）。',
                  '获取 Google Search Console（GSC）权限，提交 sitemap 与收录跟踪。',
                  '初次 GEO 校验（布局、Meta 标签、内链结构）。',
                ],
                target: '首批页面 60%-80% 被 Google 收录。',
                note: '收录以 GSC 提交为前提，采用直传方式保证延续性，可能会有延迟。',
              },
              {
                month: '第 2 个月',
                title: '第 1 批收录监测 & 第 2 批内容优化',
                focus: '流量来源分析（排名、区域对比）',
                goals: [
                  '监测第 1 批页面收录状态。',
                  '根据收录与数据反馈，对 GEO 页面进行人工收录与数据校验（TDK、Meta、内链）。',
                  '完成第 2 批（中间 1/3）词库内容准备。',
                ],
                target: '已生成页面 60%-80% 被 Google 收录。',
              },
              {
                month: '第 3 个月',
                title: '第 2 批页面上线 & 扩展语义矩阵',
                focus: '内容体系扩展',
                goals: [
                  '协助上线第 2 批（1/3）页面。',
                  '扩展语义词库：补充更多长尾词、对比型商业意向词。',
                  '优化内容：上线内链策略，提升 AI 搜索可见度。',
                  '交付第 3 批（最后 1/3）内容库稿件。',
                ],
                target: '已生成页面 60%-80% 被 Google 收录。',
              },
              {
                month: '第 4 个月',
                title: 'GEO 持续优化（轻量）',
                focus: '用户行为 & 重点关键词分析',
                goals: [
                  '检查第 2 批页面收录与曝光状态。',
                  '实施「新策略」内容优化（含关键词密度、TDK 微调）。',
                  '推动外链建设，增强页面语义权重。',
                ],
                target: '15% 关键词进入 Google 首页；2% 关键词进入 AI 搜索结果。',
              },
              {
                month: '第 5 个月',
                title: '第 3 批上线 & 内容体系扩展',
                focus: '转化率提升（TDK 优化）',
                goals: [
                  '协助上线第 3 批（最后 1/3）页面。',
                  '调整内容内链结构。',
                  '扩展核心 Topic Clusters，驱动后续 GEO 增长。',
                ],
                target: '25% 关键词进入 Google 首页；5% 关键词进入 AI 搜索结果。',
              },
              {
                month: '第 6 个月',
                title: 'GEO 效果复盘 & 6-12 月增长路线图',
                focus: '长期优化规划',
                goals: [
                  '整体维护外链体系。',
                  '根据内容搜索与 AI 推荐，进一步扩展词库。',
                  '项目复盘，输出行业细分增长案例。',
                  '制定 6-12 月 GEO 内容扩展计划。',
                ],
                target: '35% 关键词进入 Google 首页；8% 关键词进入 AI 搜索结果。',
              },
            ].map((item, idx, arr) => (
              <TimelineItem key={idx} item={item} idx={idx} isLast={idx === arr.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-background py-16 px-4 border-t border-blue-100/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>DELI WORLD Global GEO Strategy</p>
            <p className="text-muted-foreground">得力集团全球 ToB 业务 AI 搜索优化战略方案</p>
          </div>
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © 2026 DELI WORLD Global GEO Strategy Report
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
