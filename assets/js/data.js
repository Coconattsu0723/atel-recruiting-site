(function () {
  const jobs = [
    {
      number: "01", slug: "interior-designer", title: "INTERIOR DESIGNER", department: "DESIGN",
      careerTypes: ["NEW GRADUATE", "CAREER"], locations: ["TOKYO"],
      summary: "コンセプトを図面と素材へ落とし込み、空間の体験を設計する。"
    },
    {
      number: "02", slug: "spatial-designer", title: "SPATIAL DESIGNER", department: "DESIGN",
      careerTypes: ["CAREER"], locations: ["TOKYO"],
      summary: "空間全体の構成と動線を整え、ブランドらしい場をつくる。"
    },
    {
      number: "03", slug: "graphic-sign-designer", title: "GRAPHIC / SIGN DESIGNER", department: "DESIGN",
      careerTypes: ["NEW GRADUATE"], locations: ["TOKYO"],
      summary: "サインとグラフィックで、空間の情報と印象をつなぐ。"
    },
    {
      number: "04", slug: "project-manager", title: "PROJECT MANAGER", department: "PROJECT",
      careerTypes: ["CAREER"], locations: ["TOKYO", "OSAKA"],
      summary: "品質、予算、進行を管理し、プロジェクト全体を前へ進める。"
    },
    {
      number: "05", slug: "construction-manager", title: "CONSTRUCTION MANAGER", department: "CONSTRUCTION",
      careerTypes: ["CAREER"], locations: ["TOKYO", "OSAKA"],
      summary: "設計意図を現場へつなぎ、安全と品質を守りながら形にする。"
    },
    {
      number: "06", slug: "planner-creative-director", title: "PLANNER / CREATIVE DIRECTOR", department: "PLANNING",
      careerTypes: ["CAREER"], locations: ["TOKYO"],
      summary: "課題を読み解き、チームと空間の進む方向を言葉にする。"
    },
    {
      number: "07", slug: "account-producer", title: "ACCOUNT PRODUCER", department: "BUSINESS",
      careerTypes: ["CAREER"], locations: ["TOKYO"],
      summary: "クライアントとの関係を築き、新しい仕事の入口をつくる。"
    },
    {
      number: "08", slug: "back-office", title: "BACK OFFICE", department: "CORPORATE",
      careerTypes: ["CAREER"], locations: ["TOKYO"],
      summary: "働く環境と組織の基盤を整え、プロジェクトを内側から支える。"
    }
  ];

  const jobDetails = {
    "interior-designer": {
      displayTitle: "INTERIOR\nDESIGNER",
      tagline: "空間の体験を、\n図面と素材で具体化する。",
      statement: "DESIGN THE\nEXPERIENCE.",
      lead: "企画意図を、空間の構成、素材、照明、家具へ展開する役割です。",
      description: "見た目だけでなく、人の動きや過ごし方、運営のしやすさまで考え、プランナー、グラフィック、施工、プロジェクト管理と対話しながら設計を進めます。",
      value: "EXPERIENCE → DRAWING → BUILT SPACE",
      responsibilities: [
        ["CONCEPT", "要件とブランドを読み解き、空間コンセプトと体験の軸を整理する。"],
        ["PLANNING", "ゾーニング、動線、レイアウトを検討し、基本計画へ落とし込む。"],
        ["MATERIAL", "素材、色、照明、家具を選定し、意匠と機能のバランスを整える。"],
        ["COORDINATION", "施工・PM・協力会社と図面を共有し、完成まで設計意図をつなぐ。"]
      ],
      projectPoints: ["カウンターを中心とした動線設計", "木、左官、テラゾーの素材選定", "照明と家具の意匠調整", "施工段階の図面確認と現場対応"],
      workflow: [["BRIEFING", "要件を聞く"], ["CONCEPT", "体験を定める"], ["DESIGN", "図面と素材へ"], ["COORDINATION", "チームで調整"], ["COMPLETION", "完成を確認"]],
      teamLead: "各専門性と判断を重ね、ひとつの体験へまとめます。",
      teamRoles: [["PLANNER", "PLANNING", "課題とコンセプト"], ["GRAPHIC / SIGN", "DESIGN", "サインと視覚情報"], ["PROJECT MANAGER", "PROJECT", "予算・品質・進行"], ["CONSTRUCTION", "CONSTRUCTION", "現場と施工品質"]],
      profile: ["人の行動や感情から空間を考えられる", "異なる意見を聞き、設計へ反映できる", "素材や納まりを自分の目で確かめられる", "完成まで粘り強く対話を続けられる"],
      required: ["建築、インテリア、空間デザインの基礎知識", "図面作成またはデザイン検討の経験", "チームでのコミュニケーション"],
      preferred: ["店舗、オフィス、ホスピタリティ空間の経験", "3D、CG、プレゼンテーション制作", "素材、家具、照明への関心"],
      personId: "person-01", paint: "../assets/images/paint/paint-design-blue.png"
    },
    "spatial-designer": {
      displayTitle: "SPATIAL\nDESIGNER",
      tagline: "人の動きとブランドを、\nひとつの空間体験へ編む。",
      statement: "SHAPE THE\nJOURNEY.",
      lead: "空間全体の構成と人の動きを整理し、ブランドらしい体験の流れを設計する役割です。",
      description: "入口から滞在、回遊、退出までを俯瞰し、インテリア、サイン、照明、運営条件を横断して、迷いなく心地よく過ごせる場をつくります。",
      value: "BEHAVIOR → JOURNEY → SPACE",
      responsibilities: [["RESEARCH", "利用者と運営の行動を読み解き、必要な体験を整理する。"], ["ZONING", "機能の関係を組み立て、回遊と滞在のリズムを設計する。"], ["EXPERIENCE", "視線、光、音、サインをつなぎ、空間全体の印象を整える。"], ["VALIDATION", "模型や図面で検証し、各担当と実現方法を詰める。"]],
      projectPoints: ["入口からカウンターまでの視線設計", "客席の回遊と滞在領域のゾーニング", "サインと照明を含む体験の連続性", "運営動線と来店者動線の調整"],
      workflow: [["OBSERVE", "行動を知る"], ["MAP", "流れを描く"], ["COMPOSE", "要素を統合"], ["TEST", "体験を検証"], ["REFINE", "空間を整える"]],
      teamLead: "部分のデザインを、空間全体の体験へつなぎます。",
      teamRoles: [["INTERIOR DESIGN", "DESIGN", "素材とディテール"], ["GRAPHIC / SIGN", "DESIGN", "案内とブランド"], ["PROJECT MANAGER", "PROJECT", "条件と進行"], ["PLANNER", "PLANNING", "体験の目的"]],
      profile: ["人の動きを観察して仮説を立てられる", "複数の要素を俯瞰して整理できる", "図面と対話の両方で意図を共有できる", "検証を重ねて体験を磨ける"],
      required: ["建築・空間デザインの基礎知識", "ゾーニングまたは動線計画の経験", "チームでの設計・検証経験"],
      preferred: ["商業施設や複合用途の計画経験", "リサーチ・行動観察への関心", "3D・模型による空間検証"],
      personId: "person-01", paint: "../assets/images/paint/paint-design-blue.png"
    },
    "graphic-sign-designer": {
      displayTitle: "GRAPHIC / SIGN\nDESIGNER",
      tagline: "空間の中に、\n迷わず届く言葉と印象をつくる。",
      statement: "GUIDE THE\nEXPERIENCE.",
      lead: "ブランドの考え方を、ロゴ、サイン、メニュー、館内表示へ展開する役割です。",
      description: "平面の美しさだけでなく、見る距離、歩く方向、素材との関係まで考え、情報が自然に届く視覚体験を設計します。",
      value: "BRAND → INFORMATION → PLACE",
      responsibilities: [["IDENTITY", "ブランドの個性を整理し、空間で機能する視覚言語をつくる。"], ["SIGNAGE", "視認距離と動線を考え、迷いにくいサイン計画を設計する。"], ["GRAPHIC", "ロゴ、メニュー、ツールを一貫した表現へ展開する。"], ["PRODUCTION", "素材、印刷、施工方法を検証し、現場で品質を確認する。"]],
      projectPoints: ["MADOのロゴとサインシステム", "入口から注文までの案内設計", "メニューと店内ツールの統一", "素材サンプルと実寸表示の確認"],
      workflow: [["LISTEN", "背景を聞く"], ["SYSTEM", "ルールを設計"], ["DESIGN", "形へ展開"], ["PROTOTYPE", "実寸で検証"], ["DELIVER", "品質を整える"]],
      teamLead: "視覚情報を、空間の素材と人の動きへつなぎます。",
      teamRoles: [["PLANNER", "PLANNING", "ブランドの方向"], ["INTERIOR DESIGN", "DESIGN", "素材と空間"], ["PROJECT MANAGER", "PROJECT", "予算と工程"], ["CONSTRUCTION", "CONSTRUCTION", "製作と設置"]],
      profile: ["情報を分かりやすく構造化できる", "文字と空間のスケールを行き来できる", "素材や製作方法まで関心を持てる", "意図を言葉とビジュアルで共有できる"],
      required: ["グラフィックデザインの基礎知識", "Illustrator等を用いた制作経験", "ポートフォリオでの制作意図の説明"],
      preferred: ["サイン・VI・エディトリアルの経験", "印刷・素材・施工への関心", "空間デザイナーとの協働経験"],
      personId: "person-05", paint: "../assets/images/paint/paint-design-blue.png"
    },
    "project-manager": {
      displayTitle: "PROJECT\nMANAGER",
      tagline: "専門性の間をつなぎ、\nプロジェクトを前へ進める。",
      statement: "CONNECT THE\nTEAM.",
      lead: "品質、予算、スケジュール、合意形成を整え、チームが力を発揮できる状況をつくる役割です。",
      description: "クライアントと社内外の担当者をつなぎ、判断に必要な情報と順序を整理しながら、構想から完成までプロジェクト全体を導きます。",
      value: "INFORMATION → DECISION → PROGRESS",
      responsibilities: [["SCOPE", "目的、予算、スケジュールを整理し、プロジェクトの範囲を定める。"], ["PLANNING", "担当と判断の順序を組み立て、進行計画を共有する。"], ["ALIGNMENT", "関係者の意見と条件を整理し、合意形成を支える。"], ["QUALITY", "リスクと変更を管理し、完成まで品質を守る。"]],
      projectPoints: ["全体工程と予算の設計", "クライアントと制作チームの合意形成", "設計・施工間の情報整理", "開業日から逆算した品質管理"],
      workflow: [["DEFINE", "条件を定める"], ["PLAN", "進行を組む"], ["CONNECT", "情報をつなぐ"], ["CONTROL", "変更を管理"], ["DELIVER", "完成へ導く"]],
      teamLead: "各専門性が判断しやすい情報とタイミングを整えます。",
      teamRoles: [["ACCOUNT", "BUSINESS", "顧客との対話"], ["PLANNER", "PLANNING", "企画と方向性"], ["DESIGN TEAM", "DESIGN", "設計と表現"], ["CONSTRUCTION", "CONSTRUCTION", "現場と品質"]],
      profile: ["複雑な情報を整理して優先順位をつけられる", "立場の違う相手と誠実に対話できる", "先回りしてリスクを見つけられる", "最後まで責任を持って進行できる"],
      required: ["プロジェクト進行または制作管理の経験", "予算・工程・品質の基礎理解", "複数関係者との調整経験"],
      preferred: ["店舗開発・内装・建築業界の経験", "見積・契約・発注の実務経験", "英語を含むプロジェクト経験"],
      personId: "person-03", paint: "../assets/images/paint/paint-project-red.png"
    },
    "construction-manager": {
      displayTitle: "CONSTRUCTION\nMANAGER",
      tagline: "設計意図を現場へつなぎ、\n安全と品質を積み上げる。",
      statement: "BUILD THE\nINTENT.",
      lead: "図面の意図と現場の条件をつなぎ、安全、品質、工程を守りながら空間を形にする役割です。",
      description: "協力会社と連携し、納まりや施工手順を検討して、設計者と現場の双方が納得できる答えを完成まで積み上げます。",
      value: "DRAWING → CRAFT → BUILT QUALITY",
      responsibilities: [["PREPARE", "図面と現場条件を確認し、施工計画と安全計画を整える。"], ["COORDINATE", "職人、協力会社、設計者と納まりや手順を調整する。"], ["CONTROL", "工程、安全、コストを管理し、変化へ対応する。"], ["INSPECT", "仕上がりと機能を確認し、品質を完成まで守る。"]],
      projectPoints: ["カウンター造作の施工計画", "左官・木・テラゾーの納まり調整", "照明・設備との現場調整", "安全管理と完成品質の確認"],
      workflow: [["CHECK", "条件を確認"], ["PLAN", "施工を組む"], ["BUILD", "現場を動かす"], ["INSPECT", "品質を確かめる"], ["HANDOVER", "完成を渡す"]],
      teamLead: "図面の意図と現場の知恵を往復させ、品質をつくります。",
      teamRoles: [["INTERIOR DESIGN", "DESIGN", "意匠と図面"], ["PROJECT MANAGER", "PROJECT", "工程と予算"], ["PARTNER TEAM", "CONSTRUCTION", "専門施工"], ["ACCOUNT", "BUSINESS", "顧客との合意"]],
      profile: ["安全と品質を最優先に判断できる", "図面と現場の差を具体的に伝えられる", "職人や設計者と対等に対話できる", "変化へ落ち着いて対応できる"],
      required: ["内装・建築施工管理の実務経験", "図面読解と工程管理の基礎", "現場での安全・品質管理経験"],
      preferred: ["店舗内装の施工管理経験", "施工管理技士等の関連資格", "積算・見積・発注の経験"],
      personId: "person-04", paint: "../assets/images/paint/paint-construction-green.png"
    },
    "planner-creative-director": {
      displayTitle: "PLANNER /\nCREATIVE DIRECTOR",
      tagline: "まだ言葉にならない課題から、\n空間の進む方向をつくる。",
      statement: "FIND THE\nDIRECTION.",
      lead: "クライアントの課題と利用者の視点を読み解き、プロジェクトの目的とコンセプトを定める役割です。",
      description: "リサーチと対話から本質的な問いを見つけ、異なる専門性が同じ方向を向ける言葉と判断基準をつくります。",
      value: "QUESTION → CONCEPT → DIRECTION",
      responsibilities: [["DISCOVER", "対話とリサーチから、事業と利用者の課題を見つける。"], ["DEFINE", "空間が果たす役割と体験の軸を言葉にする。"], ["DIRECT", "チームを編成し、企画とデザインの判断基準を共有する。"], ["PRESENT", "考えを物語と資料へまとめ、合意形成を導く。"]],
      projectPoints: ["カフェの事業課題と利用シーン整理", "MADOのコンセプトと言語設計", "空間・サイン・運営の方向づけ", "クライアントへの提案と合意形成"],
      workflow: [["LISTEN", "背景を聞く"], ["RESEARCH", "兆しを探る"], ["CONCEPT", "方向を定める"], ["DIRECT", "チームを導く"], ["SHARE", "価値を伝える"]],
      teamLead: "プロジェクトの問いと目的を、各専門性の判断へつなぎます。",
      teamRoles: [["ACCOUNT", "BUSINESS", "事業と関係性"], ["DESIGN TEAM", "DESIGN", "体験と表現"], ["PROJECT MANAGER", "PROJECT", "実現条件"], ["CONSTRUCTION", "CONSTRUCTION", "現場の知見"]],
      profile: ["言葉の奥にある課題を考え続けられる", "リサーチから仮説を組み立てられる", "異なる専門性を尊重して方向を示せる", "考えを伝わる物語へ編集できる"],
      required: ["企画・ブランド・クリエイティブ領域の経験", "リサーチとコンセプト開発の経験", "提案資料作成とプレゼンテーション"],
      preferred: ["空間・店舗・サービス開発の経験", "チームディレクションの経験", "事業視点での課題整理"],
      personId: "person-02", paint: "../assets/images/paint/paint-planning-orange.png"
    },
    "account-producer": {
      displayTitle: "ACCOUNT\nPRODUCER",
      tagline: "対話から条件を引き出し、\n新しい仕事の入口をつくる。",
      statement: "OPEN THE\nCONVERSATION.",
      lead: "クライアントとの窓口として、事業目標、予算、スケジュールを整理し、最適なチームを組み立てる役割です。",
      description: "依頼を受け取るだけでなく、背景や期待まで掘り下げて社内へ共有し、提案から完成後まで長期的な関係を育てます。",
      value: "DIALOGUE → OPPORTUNITY → PARTNERSHIP",
      responsibilities: [["RELATIONSHIP", "クライアントとの対話を重ね、事業とプロジェクトを理解する。"], ["BRIEF", "目的、予算、時期を整理し、チームへ背景ごと共有する。"], ["PROPOSAL", "社内の専門性を組み合わせ、提案と体制をつくる。"], ["PARTNERSHIP", "進行中と完成後の対話を続け、次の機会を育てる。"]],
      projectPoints: ["出店背景と事業目標の整理", "予算・開業時期・体制の初期設計", "ATEL内の専門チーム編成", "完成後の振り返りと関係継続"],
      workflow: [["MEET", "対話を始める"], ["BRIEF", "条件を整理"], ["TEAM", "専門性を編成"], ["SUPPORT", "進行を支える"], ["GROW", "関係を育てる"]],
      teamLead: "クライアントの言葉と制作側の判断を双方向につなぎます。",
      teamRoles: [["PLANNER", "PLANNING", "課題と企画"], ["PROJECT MANAGER", "PROJECT", "実現条件"], ["DESIGN TEAM", "DESIGN", "体験と表現"], ["BACK OFFICE", "CORPORATE", "契約と運営"]],
      profile: ["相手の背景まで丁寧に聞ける", "条件と期待を分かりやすく整理できる", "社内外の専門性を結びつけられる", "長期的な関係を誠実に育てられる"],
      required: ["法人営業・アカウント業務の経験", "提案と関係者調整の経験", "予算・スケジュールの基礎理解"],
      preferred: ["デザイン・建築・広告業界の経験", "新規提案やコンペティションの経験", "店舗開発・事業開発への関心"],
      personId: "person-06", paint: "../assets/images/paint/paint-planning-orange.png"
    },
    "back-office": {
      displayTitle: "BACK\nOFFICE",
      tagline: "人と組織の基盤を整え、\nプロジェクトを内側から支える。",
      statement: "SUPPORT THE\nTEAM.",
      lead: "人事、総務、経理、契約などの基盤を整え、約80名の専門家が安心して働ける環境をつくる役割です。",
      description: "日々の運営を正確に支えながら、現場の声を拾い、制度や仕組みを継続的に改善して組織全体の力を高めます。",
      value: "PEOPLE → SYSTEM → TEAMWORK",
      responsibilities: [["OPERATIONS", "労務、総務、経理などの日常業務を正確に運用する。"], ["SUPPORT", "社員とプロジェクトの相談を受け、必要な情報と手続きをつなぐ。"], ["IMPROVE", "現場の課題を見つけ、制度やワークフローを改善する。"], ["CULTURE", "採用、育成、社内施策を通じて協働しやすい組織をつくる。"]],
      projectPoints: ["契約・発注・請求フローの支援", "プロジェクトメンバーの環境整備", "採用・労務面からのチーム支援", "完成後の実績・業務情報の管理"],
      workflow: [["LISTEN", "相談を受ける"], ["ORGANIZE", "情報を整える"], ["OPERATE", "正確に運用"], ["IMPROVE", "仕組みを磨く"], ["SUPPORT", "チームを支える"]],
      teamLead: "部門を越えて働く人の声を拾い、組織の仕組みへ反映します。",
      teamRoles: [["ACCOUNT", "BUSINESS", "契約と顧客情報"], ["PROJECT MANAGER", "PROJECT", "案件と稼働"], ["DESIGN TEAM", "DESIGN", "働く現場の声"], ["MANAGEMENT", "CORPORATE", "制度と経営"]],
      profile: ["正確さとスピードを両立できる", "相手の立場を考えて支援できる", "課題を仕組みの改善へつなげられる", "機密情報を責任を持って扱える"],
      required: ["人事・総務・経理等いずれかの実務経験", "基本的なPC・文書作成スキル", "複数業務の優先順位管理"],
      preferred: ["クリエイティブ企業での管理部門経験", "採用・制度設計・業務改善の経験", "労務・会計等の関連知識"],
      personId: "person-06", paint: "../assets/images/paint/paint-construction-green.png"
    }
  };

  const people = [
    {
      id: "person-01", number: "01", role: "INTERIOR DESIGNER", department: "DESIGN", location: "TOKYO",
      careerType: "NEW GRADUATE", joined: "2021", background: "ARCHITECTURE MAJOR",
      image: "../assets/images/people/person-01-interior-designer-cutout.png", paint: "../assets/images/paint/paint-design-blue.png",
      jobSlug: "interior-designer", message: "図面の線を、人が過ごす時間へ変えていく。",
      why: "設計だけで完結せず、企画や施工の担当者と同じテーブルで考えられる環境に惹かれました。",
      work: "店舗のレイアウト、素材、照明、家具を横断しながら、体験の骨格となる空間設計を担当しています。",
      collaboration: "プランナーの意図を受け取り、PMや施工担当と細部を検証しながら、実現可能な図面へ落とし込みます。"
    },
    {
      id: "person-02", number: "02", role: "PLANNER / CREATIVE DIRECTOR", department: "PLANNING", location: "TOKYO",
      careerType: "CAREER", joined: "2018", background: "BRAND PLANNING",
      image: "../assets/images/people/person-02-planner-cutout.png", paint: "../assets/images/paint/paint-planning-orange.png",
      jobSlug: "planner-creative-director", message: "人と仕事の間にある、まだ言葉になっていない可能性を見つける。",
      why: "設計だけでなく、企画から施工まで異なる専門性と対話できる環境に魅力を感じました。",
      work: "クライアントの課題を整理し、空間の方向性をつくるコンセプト設計とチーム編成を担当しています。",
      collaboration: "デザイナー、PM、施工担当と早い段階から考えを共有し、アイデアを実現可能な計画へ育てます。"
    },
    {
      id: "person-03", number: "03", role: "PROJECT MANAGER", department: "PROJECT", location: "OSAKA",
      careerType: "CAREER", joined: "2019", background: "STORE DEVELOPMENT",
      image: "../assets/images/people/person-03-project-manager-cutout.png", paint: "../assets/images/paint/paint-project-red.png",
      jobSlug: "project-manager", message: "専門性の間をつなぎ、チームが前へ進める状況をつくる。",
      why: "完成形だけでなく、そこへ至る対話や判断を大切にするATELの進め方に共感しました。",
      work: "予算、工程、品質を整理し、クライアントと制作チームの合意形成を支えています。",
      collaboration: "判断が必要な情報を早めに共有し、各職種が本来の専門性を発揮できる順序を整えます。"
    },
    {
      id: "person-04", number: "04", role: "CONSTRUCTION MANAGER", department: "CONSTRUCTION", location: "TOKYO",
      careerType: "CAREER", joined: "2017", background: "SITE MANAGEMENT",
      image: "../assets/images/people/person-04-construction-manager-cutout.png", paint: "../assets/images/paint/paint-construction-green.png",
      jobSlug: "construction-manager", message: "図面の意図を守りながら、現場で最良の答えをつくる。",
      why: "施工を最後の工程ではなく、デザインを完成させる重要な専門性として扱う姿勢に惹かれました。",
      work: "協力会社との調整、品質・安全管理、納まりの検討を通じて現場全体を動かしています。",
      collaboration: "設計者と現場の条件を共有し、見え方と施工性の両方を満たす解決策を探ります。"
    },
    {
      id: "person-05", number: "05", role: "GRAPHIC / SIGN DESIGNER", department: "DESIGN", location: "TOKYO",
      careerType: "NEW GRADUATE", joined: "2023", background: "GRAPHIC DESIGN MAJOR",
      image: "../assets/images/people/person-05-graphic-sign-designer-cutout.png", paint: "../assets/images/paint/paint-design-blue.png",
      jobSlug: "graphic-sign-designer", message: "空間の中に、迷わず届く言葉とサインを設計する。",
      why: "グラフィックを平面だけでなく、人が歩く空間の体験として考えられる点に魅力を感じました。",
      work: "ロゴ、サイン、メニュー、館内表示など、ブランドと導線をつなぐ情報設計を担当しています。",
      collaboration: "インテリアデザイナーと視線や素材を確認し、空間になじみながら役割を果たす表現をつくります。"
    },
    {
      id: "person-06", number: "06", role: "ACCOUNT PRODUCER", department: "BUSINESS", location: "TOKYO",
      careerType: "CAREER", joined: "2020", background: "ACCOUNT MANAGEMENT",
      image: "../assets/images/people/person-06-account-producer-cutout.png", paint: "../assets/images/paint/paint-planning-orange.png",
      jobSlug: "account-producer", message: "対話の中から、本当に必要な空間の条件を引き出す。",
      why: "要望を受け取るだけでなく、チームと一緒に課題の根本から考えられる会社だと感じました。",
      work: "クライアントとの窓口として、事業目標、予算、スケジュールを整理し、提案を組み立てています。",
      collaboration: "社内の各職種へ背景まで共有し、クライアントの言葉と制作側の判断を双方向につなぎます。"
    }
  ];

  window.ATEL_DATA = Object.freeze({ jobs, jobDetails, people });
})();
