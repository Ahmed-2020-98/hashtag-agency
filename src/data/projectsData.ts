export interface Project {
    slug: string;
    title: string;
    category: string;
    desc: string;
    fullDescription: string;
    thumbnail: string | null;
    images: string[];
    url?: string;
    year?: string;
}

export const projects: Project[] = [
    {
        slug: "hashtag-agency",
        title: "موقع شركة تسويق رقمي",
        category: "تصميم مواقع",
        desc: "موقع احترافي لشركة تسويق رقمي متكامل مع تصميم عصري وتجربة مستخدم متميزة.",
        fullDescription:
            "قمنا بتصميم وتطوير موقع إلكتروني احترافي لشركة هشتاج للتسويق الرقمي، يعكس هوية الشركة القوية في عالم التسويق الإلكتروني. الموقع يتميز بتصميم عصري يجمع بين الأناقة والبساطة، مع ألوان جريئة تعبّر عن الإبداع والابتكار. تم بناء الموقع باستخدام أحدث التقنيات لضمان سرعة التحميل وتجربة مستخدم سلسة على جميع الأجهزة. يشمل الموقع عرضًا تفاعليًا للخدمات، معرض أعمال ديناميكي، ونظام تواصل متكامل يسهّل على العملاء المحتملين التواصل مع الشركة.",
        thumbnail: "/assets/portfolio/websites/project1/web1.webp",
        images: [
            "/assets/portfolio/websites/project1/web1.webp",
            "/assets/portfolio/websites/project1/mobile1.webp",
        ],
        url: "https://hashtagagency.online/",
        year: "2026",
    },
    {
        slug: "mazna-real-estate",
        title: "موقع شركة مازنة للتطوير العقاري",
        category: "تصميم مواقع",
        desc: "موقع تعريفي احترافي لشركة تطوير عقاري مع تصميم متجاوب وتحسين محركات البحث.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني احترافي لشركة \"مازنة للتطوير العقاري\"، وهي شركة ناشئة متخصصة في التطوير العقاري والوساطة والبناء والترميم. الهدف كان إنشاء هوية رقمية قوية تعكس الجودة والمصداقية وتدعم ثقة العملاء والمستثمرين.\n\nتم تخصيص كامل لقالب BeTheme ليتناسب مع هوية شركة عقارية، وتصميم صفحات: الرئيسية – من نحن – خدماتنا – تواصل معنا. تنسيق احترافي للألوان والخطوط لتعكس الطابع العقاري مع ضبط الموقع ليكون متوافق مع الموبايل 100%.\n\nتم تحسين السرعة والأداء وإعداد SEO أساسي لتحسين الظهور في نتائج البحث. الدور في المشروع شمل تحليل احتياجات العميل، اختيار وتخصيص القالب، تصميم تجربة المستخدم (UX)، إعداد الاستضافة والدومين، وإطلاق الموقع وتجهيزه للعمل.",
        thumbnail: "/assets/portfolio/websites/project2/4.webp",
        images: [
            "/assets/portfolio/websites/project2/4.webp",
            "/assets/portfolio/websites/project2/5.webp",
            "/assets/portfolio/websites/project2/6.webp",
        ],
        url: "https://maznarealestate.com/",
        year: "2025",
    },
    {
        slug: "blackrocks-international",
        title: "BLACK ROCKS International",
        category: "تصميم مواقع",
        desc: "موقع تعريفي احترافي لشركة مقاولات وبنية تحتية مع أنيميشن متقدمة وتجربة تصفح سلسة.",
        fullDescription:
            "تصميم وتطوير موقع احترافي بالكامل لشركة BLACK ROCKS International، وهي مجموعة متكاملة تعمل في مجالات المقاولات والهندسة والبنية التحتية عبر عدة دول.\n\nتم بناء الموقع من الصفر باستخدام تقنيات الويب الأساسية (HTML5, CSS3, JavaScript) بدون الاعتماد على أي Framework، لضمان أداء عالي وتحكم كامل في التجربة البصرية.\n\nيتميز الموقع بأنيميشن احترافية باستخدام GSAP و ScrollTrigger، سكرول سلس باستخدام Lenis، عرض إحصائيات ديناميكي (Counter Animation)، وتقسيم واضح لـ 9 قطاعات رئيسية. الموقع يدعم اللغة العربية و RTL بشكل كامل مع أداء سريع وخفيف.\n\nالدور في المشروع شمل تحليل الهوية البصرية للشركة، تصميم UI/UX من الصفر، كتابة الكود بالكامل يدويًا، بناء نظام أنيميشن متكامل، واختبار الأداء وتحسين السرعة.",
        thumbnail: "/assets/portfolio/websites/project3/4.webp",
        images: [
            "/assets/portfolio/websites/project3/4.webp",
            "/assets/portfolio/websites/project3/5.webp",
            "/assets/portfolio/websites/project3/6.webp",
        ],
        url: "https://blackrocks-int.com/",
        year: "2025",
    },
    {
        slug: "elite-city",
        title: "Elite City",
        category: "تصميم مواقع",
        desc: "موقع تعريفي Corporate لمجموعة سعودية متعددة القطاعات مع تصميم حديث وأنيميشن احترافية.",
        fullDescription:
            "تصميم وتطوير موقع احترافي لمجموعة Elite City، وهي مجموعة سعودية رائدة متعددة القطاعات تعمل في مجالات التوريد الغذائي، الخدمات اللوجستية، الإلكترونيات، المقاولات والبناء، الحلول الرقمية وقطاعات أخرى متعددة.\n\nالهدف كان بناء هوية رقمية قوية تعكس خبرة +20 سنة وتبرز تنوع القطاعات بطريقة منظمة واحترافية. تم بناء الموقع باستخدام Next.js لضمان سرعة وتحسين محركات البحث، مع Framer Motion لإضافة أنيميشن احترافية وسلسة.\n\nيتميز الموقع بـ Hero Section احترافي، عرض 9 قطاعات بطريقة منظمة، Counter Animations للإحصائيات، قسم شركاء النجاح، صفحة مستودع مخصصة، ونموذج تواصل متكامل مع دعم كامل للغة العربية و RTL.\n\nالدور في المشروع شمل تحليل الهيكل المؤسسي للمجموعة، تصميم UI/UX حديث، بناء الموقع بالكامل باستخدام Next.js، تنفيذ أنيميشن احترافية، ضبط SEO وهيكلة الصفحات، وتحسين الأداء والسرعة.",
        thumbnail: "/assets/portfolio/websites/project4/3.webp",
        images: [
            "/assets/portfolio/websites/project4/3.webp",
            "/assets/portfolio/websites/project4/4.webp",
            "/assets/portfolio/websites/project4/5.webp",
        ],
        url: "https://elitecityco.com/",
        year: "2026",
    },
    {
        slug: "rivera-water",
        title: "Rivera Water",
        category: "تصميم مواقع",
        desc: "موقع علامة تجارية لمياه معبأة بتصميم Minimal يعكس النقاء والاستدامة.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني لعلامة Rivera، وهي علامة تجارية سعودية للمياه المعبأة مملوكة لشركة الينابيع العذبة للصناعات. الهدف من الموقع هو بناء هوية رقمية راقية تعكس النقاء، البساطة، الأسلوب العصري، والاستدامة البيئية.\n\nيتميز الموقع بتصميم Minimal يعكس هوية منتج المياه، مع عرض الأحجام المختلفة (200 مل – 330 مل – 600 مل – 1.5 لتر) بطريقة منظمة وجذابة. يشمل قسم مخصص للاستدامة وإبراز مميزات المنتج مثل توازن الأملاح، الطعم النقي، والعبوة الصديقة للبيئة.\n\nتم بناء الموقع على WordPress مع تخصيص التصميم ليتوافق مع هوية العلامة، وتحسين سرعة التحميل، وإعداد SEO أساسي، وضبط أمان الموقع.\n\nالدور في المشروع شمل تحليل الهوية البصرية للعلامة، تصميم واجهة مستخدم تعكس البساطة والنقاء، تخصيص القالب ليتناسب مع Brand Style، وإطلاق الموقع وضبط الاستضافة.",
        thumbnail: "/assets/portfolio/websites/project5/3.webp",
        images: [
            "/assets/portfolio/websites/project5/3.webp",
            "/assets/portfolio/websites/project5/4.webp",
        ],
        url: "https://rivera.sa/",
        year: "2025",
    },
    {
        slug: "fekrat-design",
        title: "شركة فكرة التصميم",
        category: "تصميم مواقع",
        desc: "موقع شركة تصميم داخلي ومعماري بتصميم راقٍ يعكس الإبداع المعماري.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني احترافي لشركة فكرة التصميم، وهي شركة متخصصة في التصميم الداخلي، التصميم المعماري، تصميم الفلل، المساجد، المدارس، والمشاريع التجارية. الهدف كان إنشاء هوية رقمية راقية تعكس الجانب الفني والإبداعي للشركة، مع إبراز معرض الأعمال بطريقة جذابة ومنظمة.\n\nيتميز الموقع بصفحة رئيسية بتصميم معماري راقٍ، قسم معرض أعمال منظم حسب التصنيف (مساجد – تصميم خارجي – مدارس)، قسم خدمات واضح ومنظم، عدادات إحصائية، تصميم متجاوب بالكامل، ودعم لغتين (عربي / إنجليزي).\n\nتم بناء الموقع على WordPress مع Elementor Page Builder، وتحسين سرعة التحميل، وإعداد SEO أساسي، وتأمين الموقع.\n\nالدور في المشروع شمل تحليل الهوية البصرية للشركة، تصميم UI يعكس الطابع المعماري، تنظيم معرض الأعمال بطريقة احترافية، تخصيص Elementor ليتناسب مع هوية الشركة، وإطلاق الموقع وضبط الاستضافة.",
        thumbnail: "/assets/portfolio/websites/project6/3.webp",
        images: [
            "/assets/portfolio/websites/project6/3.webp",
            "/assets/portfolio/websites/project6/4.webp",
            "/assets/portfolio/websites/project6/5.webp",
        ],
        url: "https://srmad.com.sa/",
        year: "2024",
    },
    {
        slug: "aldawsari-law",
        title: "مكتب المحامية فاطمة الدوسري",
        category: "تصميم مواقع",
        desc: "موقع مكتب محاماة بتصميم رسمي يعكس الاحترافية والثقة القانونية.",
        fullDescription:
            "تصميم وتطوير الموقع الرسمي لمكتب المحامية فاطمة الدوسري، المتخصص في القضايا الأسرية، العمالية، التجارية، والعقارية. تم التركيز على إبراز الاحترافية، الثقة، والهوية القانونية الرسمية للمكتب، مع تجربة مستخدم واضحة تسهّل حجز الاستشارة والتواصل.\n\nيتميز الموقع بتصميم رسمي متناسق مع المجال القانوني، إبراز خدمات المكتب بشكل واضح، أزرار CTA واضحة مثل \"احجز استشارة الآن\"، قسم رؤية ورسالة يعزز الثقة، ودعم كامل للغة العربية مع تصميم متجاوب لجميع الأجهزة.\n\nتم تخصيص قالب BeTheme ليتناسب مع المجال القانوني، تصميم صفحات رئيسية (الرئيسية – من نحن – الخدمات – المدونة – الاتصال)، إعداد نموذج تواصل فعال، وتحسين SEO أساسي للكلمات المفتاحية القانونية.\n\nالدور في المشروع شمل تحليل احتياجات المكتب، اختيار الهوية البصرية المناسبة، تخصيص التصميم بما يعكس الطابع القانوني، إطلاق الموقع وضبط الاستضافة.",
        thumbnail: "/assets/portfolio/websites/project7/3.webp",
        images: [
            "/assets/portfolio/websites/project7/3.webp",
            "/assets/portfolio/websites/project7/4.webp",
            "/assets/portfolio/websites/project7/5.webp",
        ],
        url: "https://aldawsarilaw.com/",
        year: "سبتمبر 2025",
    },
    {
        slug: "construction-site",
        title: "موقع شركة مقاولات",
        category: "تصميم مواقع",
        desc: "موقع شركة مقاولات بتصميم عصري مع أنيميشن متقدم وتجربة تصفح سلسة.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني لشركة مقاولات بتصميم عصري واحترافي يعكس قوة الشركة في مجال البناء والتشييد. تم بناء الموقع بتقنيات حديثة بدون أي فريمورك، باستخدام HTML5 و CSS3 و JavaScript مع مكتبة GSAP و ScrollTrigger لتحريك العناصر بشكل سينمائي.\n\nيتميز الموقع بتجربة تصفح سلسة عبر Lenis Smooth Scrolling، أنيميشن متقدم يظهر عند التمرير، تصميم متجاوب بالكامل لجميع الأجهزة، وأداء عالي السرعة بدون أي تبعيات ثقيلة.\n\nالتقنيات المستخدمة: HTML5، CSS3، JavaScript، GSAP، GSAP ScrollTrigger، Lenis، FontAwesome/Remix Icons.",
        thumbnail: "/assets/portfolio/websites/project8/3.webp",
        images: [
            "/assets/portfolio/websites/project8/3.webp",
            "/assets/portfolio/websites/project8/4.webp",
            "/assets/portfolio/websites/project8/5.webp",
        ],
        year: "فبراير 2026",
    },
    {
        slug: "fashion-store",
        title: "متجر إلكتروني لعلامة أزياء",
        category: "تطوير متاجر",
        desc: "متجر إلكتروني متكامل مع بوابات دفع سعودية وتجربة تسوق سلسة.",
        fullDescription:
            "صممنا متجرًا إلكترونيًا متكاملاً لعلامة أزياء سعودية، يوفر تجربة تسوق استثنائية مع دعم بوابات الدفع المحلية مثل مدى وApple Pay. المتجر يتميز بتصميم أنيق يعرض المنتجات بشكل جذاب مع فلاتر بحث متقدمة ونظام إدارة مخزون ذكي.",
        thumbnail: null,
        images: [],
    },

    {
        slug: "education-platform",
        title: "منصة تعليمية",
        category: "تطوير منصات",
        desc: "منصة تعليم إلكتروني متكاملة مع نظام إدارة المحتوى والاشتراكات.",
        fullDescription:
            "أنشأنا منصة تعليمية إلكترونية شاملة تدعم الفيديوهات التعليمية، الاختبارات التفاعلية، ونظام شهادات إتمام. المنصة تتضمن نظام اشتراكات مرن ولوحة تحكم للمعلمين لإدارة المحتوى وتتبع تقدم الطلاب.",
        thumbnail: null,
        images: [],
    },
    {
        slug: "restaurant-app",
        title: "تطبيق مطعم",
        category: "تطوير تطبيقات",
        desc: "تطبيق ويب لمطعم مع نظام طلبات وقائمة تفاعلية وتتبع الطلبات.",
        fullDescription:
            "صممنا تطبيق ويب متكامل لمطعم يتيح للعملاء استعراض القائمة التفاعلية وتقديم الطلبات أونلاين مع إمكانية تتبع حالة الطلب في الوقت الفعلي. التطبيق يشمل نظام إدارة للمطبخ ولوحة تحكم لإدارة القوائم والعروض.",
        thumbnail: null,
        images: [],
    },
    {
        slug: "mohamed-ragab-law",
        title: "موقع مكتب المستشار محمد رجب",
        category: "تصميم مواقع",
        desc: "تصميم وتطوير موقع إلكتروني احترافي لمكتب قانوني يعمل في مصر ودول الخليج، بهدف إبراز الهوية القانونية وتعزيز الحضور الرقمي للمكتب.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني احترافي لمكتب قانوني يعمل في مصر ودول الخليج، بهدف إبراز الهوية القانونية وتعزيز الحضور الرقمي للمكتب.\n\nتم تنفيذ المشروع باستخدام WordPress وقالب Betheme مع تخصيص كامل للتصميم ليتناسب مع الطابع القانوني الرسمي، مع التركيز على:\n\nتصميم نظيف يعكس الثقة والمصداقية\n\nتنظيم احترافي للخدمات القانونية\n\nإبراز نطاق العمل الدولي\n\nتحسين تجربة المستخدم وسهولة التواصل\n\nتوافق كامل مع جميع الأجهزة (Responsive)\n\nالموقع يهدف إلى تعزيز المصداقية الرقمية للمكتب وزيادة طلبات الاستشارات القانونية عبر الإنترنت.",
        thumbnail: "/assets/portfolio/websites/project9/3.webp",
        images: [
            "/assets/portfolio/websites/project9/3.webp",
            "/assets/portfolio/websites/project9/4.webp",
        ],
        url: "https://mohamedragablaw.com/",
        year: "2025",
    },
    {
        slug: "96-marketing",
        title: "96Marketing",
        category: "تصميم مواقع",
        desc: "موقع تعريفي Corporate لشركة تسويق وحلول أعمال، يعكس الهوية الرقمية للشركة ويدعم توجهها نحو رؤية 2030 مع عرض منظم للخدمات والإنجازات.",
        fullDescription:
            "تصميم وتطوير الموقع الرسمي لشركة 96Marketing، وهي شركة سعودية متخصصة في حلول التسويق وخدمات الأعمال الذكية.\n\nالهدف كان بناء هوية رقمية احترافية تعكس قوة الشركة، وتدعم توجهها نحو تحقيق مستهدفات رؤية المملكة 2030، مع تقديم محتوى مؤسسي يعزز الثقة ويبرز الخدمات بشكل استراتيجي.\n\nأهم المميزات:\n- Hero Section احترافي برسالة واضحة\n- عرض خدمات تسويقية وأعمال ذكية بشكل منظم\n- قسم شركاء النجاح لتعزيز المصداقية\n- صفحة إنجازات تعكس قوة الشركة\n- مدونة لدعم استراتيجية المحتوى\n- نموذج تواصل متكامل\n- سرعة تحميل وأداء مستقر\n\nالتقنيات المستخدمة:\n- WordPress\n- BeTheme\n- Responsive Design\n- SEO Optimization",
        thumbnail: "/assets/portfolio/websites/project10/3.webp",
        images: [
            "/assets/portfolio/websites/project10/3.webp",
            "/assets/portfolio/websites/project10/4.webp",
            "/assets/portfolio/websites/project10/5.webp",
        ],
        url: "https://96marketing.com.sa/",
        year: "2025",
    },
    {
        slug: "coder-nation",
        title: "Coder Nation",
        category: "تصميم مواقع",
        desc: "موقع تعريفي لشركة برمجة وتسويق رقمي، يعكس الهوية التقنية للشركة ويبرز خدماتها وباقاتها بشكل احترافي.",
        fullDescription:
            "تصميم وتطوير الموقع الرسمي لشركة Coder Nation، وهي شركة متخصصة في تصميم المواقع، تطوير البرمجيات، والتسويق الإلكتروني، ولها فروع في السعودية ومصر والإمارات.\n\nالهدف كان بناء منصة رقمية احترافية تعكس قوة الشركة وتبرز خدماتها التقنية بشكل منظم وجذاب، مع عرض الباقات بطريقة تسويقية واضحة تساعد على زيادة التحويلات.\n\nأهم المميزات:\n- تقسيم واضح للخدمات (برمجة – تسويق – تصميم)\n- عرض 3 باقات رئيسية (فضية – ذهبية – ماسية) بأسلوب تحفيزي\n- ربط مباشر بوسائل التواصل\n- دعم تعدد الفروع (السعودية – مصر – الإمارات)\n- مدونة لدعم استراتيجية المحتوى\n- تصميم احترافي يعكس الطابع التقني\n\nالتقنيات المستخدمة:\n- WordPress\n- BeTheme\n- Responsive Design\n- On-Page SEO Setup",
        thumbnail: "/assets/portfolio/websites/project11/3.webp",
        images: [
            "/assets/portfolio/websites/project11/3.webp",
            "/assets/portfolio/websites/project11/4.webp",
            "/assets/portfolio/websites/project11/5.webp",
        ],
        url: "https://coder-nation.com/",
        year: "نوفمبر 2024",
    },
    {
        slug: "takesh-qurood-kuwait",
        title: "شركة تكييش قروض – الكويت",
        category: "تصميم مواقع",
        desc: "موقع خدمات مالية (Lead Generation) متخصص في تكييش القروض وإعادة الجدولة، مصمم لجذب العملاء وتسهيل التواصل السريع.",
        fullDescription:
            "تصميم وتطوير موقع متخصص في خدمات تكييش القروض وإعادة الجدولة بالكويت، يهدف إلى جذب العملاء الباحثين عن حلول مالية سريعة مع جميع البنوك.\n\nتم بناء الموقع بأسلوب مباشر وواضح يركز على سرعة التواصل وتحفيز العميل لاتخاذ إجراء (Call To Action)، مع إبراز الخدمات الأساسية بشكل منظم.\n\nأهم المميزات:\n- جذب عملاء مهتمين بخدمات تكييش القروض\n- تسهيل التواصل المباشر (اتصال – واتساب – إنستجرام)\n- عرض الخدمات المالية بشكل واضح ومختصر\n- تعزيز الثقة من خلال إبراز الخبرة وسرعة التنفيذ\n- تصميم متوافق بالكامل مع الجوال (Mobile First)\n\nالتقنيات المستخدمة:\n- WordPress\n- BeTheme\n- Responsive Design\n- Local SEO Optimization",
        thumbnail: "/assets/portfolio/websites/project12/3.webp",
        images: [
            "/assets/portfolio/websites/project12/3.webp",
            "/assets/portfolio/websites/project12/4.webp",
            "/assets/portfolio/websites/project12/5.webp",
        ],
        url: "https://takeshquroodkuwait.com/",
        year: "يونيو 2025",
    },
    {
        slug: "private-tutors-riyadh",
        title: "موقع معلمين خصوصي بالرياض",
        category: "تصميم مواقع",
        desc: "منصة تعليمية تربط الطلاب بالمعلمين الخصوصيين في الرياض، مصممة لتسهيل البحث والتواصل.",
        fullDescription:
            "تصميم وتطوير موقع إلكتروني متخصص لخدمات المعلمين الخصوصي في مدينة الرياض. يهدف الموقع إلى ربط المعلمين المؤهلين بالطلاب وأولياء الأمور الباحثين عن دروس خصوصية في مختلف المواد والمراحل الدراسية.\n\nالموقع يوفر واجهة سهلة الاستخدام تتيح للزوار تصفح ملفات المعلمين، التواصل المباشر، وحجز الدروس. تم التركيز على تجربة المستخدم وسرعة الأداء لضمان وصول سهل للمعلومات.\n\nالتقنيات المستخدمة:\n- WordPress\n- BeTheme\n- Responsive Design\n- SEO Optimization",
        thumbnail: "/assets/portfolio/websites/project13/3.webp",
        images: [
            "/assets/portfolio/websites/project13/3.webp",
            "/assets/portfolio/websites/project13/4.webp",
            "/assets/portfolio/websites/project13/5.webp",
        ],
        url: "https://tareeqaltafawok.com/",
        year: "أغسطس 2025",
    },
    {
        slug: "fruits2u",
        title: "متجر Fruits2U",
        category: "تطوير متاجر",
        desc: "متجر إلكتروني لبيع الفواكه الطازجة في الرياض، مبني على منصة سلة مع تفعيل الدفع والشحن.",
        fullDescription:
            "إنشاء وتجهيز متجر إلكتروني متكامل لبيع الفواكه الطازجة في مدينة الرياض، باستخدام منصة سلة (Salla).\n\nتم العمل على تجهيز المتجر بالكامل من حيث:\n- تفعيل خيارات الدفع الإلكتروني (مدى، فيزا، أبل باي).\n- ربط شركات الشحن والتوصيل لضمان وصول المنتجات طازجة.\n- تحسين واجهة المتجر (UI) لتكون جذابة وسهلة الاستخدام.\n- تحسين سرعة الموقع لضمان تجربة تسوق سلسة.\n- إضافة المنتجات وتصنيفها بشكل احترافي.",
        thumbnail: "/assets/portfolio/websites/project21/3.webp",
        images: [
            "/assets/portfolio/websites/project21/3.webp",
            "/assets/portfolio/websites/project21/4.webp",
            "/assets/portfolio/websites/project21/5.webp",
        ],
        url: "https://fruits2u.com/",
        year: "نوفمبر 2025",
    },
];
