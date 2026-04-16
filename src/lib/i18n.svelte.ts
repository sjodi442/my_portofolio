export const i18n = $state({
	locale: 'en'
});

export const dict = {
	en: {
		nav: {
			work: 'Work',
			evolution: 'Evolution',
			toolkit: 'Toolkit',
			getInTouch: 'Get In Touch'
		},
		hero: {
			badge: "Jodi's Portfolio",
			title1: 'Bridging',
			titleColor1: 'Cultures',
			title2: 'Through',
			titleColor2: 'Language',
			title3: '& Code',
			desc: 'A multi-faceted journey from the industrial foundations of Japan to the meticulous nuances of language instruction and digital engineering. Building bridges where physical and digital worlds collide.',
			ctaPrimary: 'Explore Path',
			ctaSecondary: 'Initiate'
		},
		bio: {
			titlePre: 'The',
			titlePost: 'Identity',
			nameLabel: 'Name',
			nameValue: 'Jodi',
			ageLabel: 'Age',
			ageValue: '27 Years',
			locationLabel: 'Base',
			locationValue: 'Solo, Indonesia',
			hobbiesLabel: 'Interests',
			hobbiesValue: 'Japanese Culture, Tech Synthesis, Urban Exploration, Retro Coding'
		},
		timeline: {
			titlePre: 'Professional',
			titlePost: 'Evolution',
			items: [
				{
					period: '2017 - 2018',
					role: 'Web Developer',
					company: 'PT Solonet, Solo',
					desc: 'Built and maintained web applications using Svelte, Next.js, and Laravel for high-performance digital solutions.'
				},
				{
					period: '2018 - 2022',
					role: 'Construction Worker',
					company: 'Kashiwazaki Construction Corporation, Tokyo',
					desc: 'Gained hands-on industrial experience and strong work ethic in the Japanese construction sector.'
				},
				{
					period: '2022 - 2024',
					role: 'Quality Control Administration',
					company: 'Teiku Corporation, Saitama',
					desc: 'Ensured product standards via meticulous data administration and inspection processes in Japan.'
				},
				{
					period: '2024 - Present',
					role: 'Japanese Language Instructor',
					company: 'Solo, Indonesia',
					desc: 'Teaching Japanese up to JLPT N3/N4 levels and preparing candidates for Specified Skilled Worker (SSW) exams.'
				}
			]
		},
		teaching: {
			title1: 'Teaching',
			titleColor1: 'Philosophy',
			desc: 'Leveraging frontline experience in Japan to deliver contextual language instruction. Focus goes beyond grammar into workplace culture (Hou-Ren-So) and practical survival.',
			method1Title: 'JLPT N4/N3',
			method1Desc: 'Specialized in preparing candidates for language proficiency exams.',
			method2Title: 'SSW (Tokutei Ginou)',
			method2Desc: 'Skill evaluations preparation and cultural integration.',
			stat1Label: 'SSW Categories',
			stat2Label: 'JLPT Prep',
			stat3Label: 'Work Culture'
		},
		toolkit: {
			badge: 'Capabilities',
			titlePre: "Artisan's",
			titlePost: 'Toolkit',
			featured: 'Featured',
			items: {
				translation: {
					title: 'Native Translation',
					desc: 'High-fidelity linguistic conversion specializing in technical and industrial Japanese terminology. Direct bridging without culturally lost contexts.',
					tags: ['日 → EN', 'Technical', 'Industrial', 'Cultural']
				},
				jlpt: {
					title: 'JLPT N3',
					label: 'Language Certification'
				},
				experience: {
					title: '5+ Yrs',
					label: 'Japan Experience'
				},
				mediation: {
					title: 'Intercultural Mediation',
					desc: 'Navigating complex social norms, keigo hierarchies, and business etiquette between Eastern and Western environments.'
				},
				web: {
					title: 'Web Engineering',
					desc: 'Full-stack development with modern frameworks for high-performance applications.'
				},
				teaching: {
					title: 'Teaching',
					desc: 'Culture-first methodology for SSW preparation.'
				},
				ssw: {
					title: 'SSW Certs',
					desc: 'Food Service, Restaurant, Kaigo qualified.'
				},
				safety: {
					title: 'Senmonkyu Tobi',
					desc: 'Industrial scaffolding & safety certified.'
				}
			}
		},
		credentials: {
			title: 'Professional Credentials',
			items: [
				{
					cat: 'Language Standard',
					title: 'JLPT N3',
					desc: 'Official certification of Japanese language proficiency, demonstrating ability to understand Japanese used in everyday situations to a certain degree.'
				},
				{
					cat: 'Technical',
					title: 'Senmonkyu Tobi',
					desc: 'Specialized scaffolding and construction certification, requiring rigorous training and deep understanding of Japanese industrial safety frameworks.'
				},
				{
					cat: 'SSW Framework',
					title: 'SSW Certifications',
					desc: 'Specified Skilled Worker qualifications spanning Food Service, Restaurant Management, and Kaigo (Nursing Care). Broad industrial competency.'
				}
			],
			verified: 'Verified'
		},
		projects: {
			title: 'Projects',
			items: [
				{
					cat: 'Web Application',
					title: 'LPK Saindo Web & Blog',
					desc: 'Official website and blog platform for LPK Saindo.',
					link: 'https://lpksaindoweb.sjodi442.workers.dev'
				},
				{
					cat: 'AI Tool',
					title: 'Auto Kwitansi AI',
					desc: 'AI-powered online receipt generator.',
					link: 'https://autokwitansi.sjodi442.workers.dev'
				},
				{
					cat: 'Platform',
					title: 'BenkyouLab Homepage',
					desc: 'Landing page for the BenkyouLab online learning platform.',
					link: 'https://benkyoulab.online'
				},
				{
					cat: 'Platform',
					title: 'BenkyouLab E-Learning',
					desc: 'Comprehensive E-Learning portal for BenkyouLab.',
					link: 'https://portal-benkyou.web.id'
				},
				{
					cat: 'Web Application',
					title: 'LPK Students Management',
					desc: 'Comprehensive student management web application for LPK.',
					link: 'https://lpk-students-management.vercel.app/'
				}
			],
			visit: 'Visit Project'
		},
		gallery: {
			titlePre: 'Visual',
			titlePost: 'Record',
			desc: 'Documentation of professional experiences spanning across Japanese industrial sectors and Indonesian tech/education environments.',
			items: [
				{ title: 'Construction & Scaffolding', location: 'Tokyo, Japan' },
				{ title: 'Akihabara Nights', location: 'Tokyo, Japan' },
				{ title: 'Web Engineering', location: 'Solo, Indonesia' },
				{ title: 'SSW Preparation', location: 'Training Center' },
				{ title: 'Language Instruction', location: 'Solo, Indonesia' },
				{ title: 'Tokyo 2020 Volunteer', location: 'Oi Hockey Stadium, Tokyo' }
			]
		},
		contact: {
			titlePre: 'Initiate',
			titlePost: 'Contact',
			desc: 'Available for language instruction, cultural consulting, or web engineering opportunities.',
			nameLabel: 'Name',
			emailLabel: 'Transmission Origin (Email)',
			msgLabel: 'Encrypted Message',
			name: 'Name',
			email: 'Transmission Origin (Email)',
			message: 'Encrypted Message',
			submit: 'Transmit Signal'
		},
		footer: {
			copyrightPre: '©',
			copyrightPost: 'Jodi. All systems operational.'
		}
	},
	id: {
		nav: {
			work: 'Pekerjaan',
			evolution: 'Evolusi',
			toolkit: 'Keahlian',
			getInTouch: 'Hubungi Saya'
		},
		hero: {
			badge: "Portofolio Jodi",
			title1: 'Menjembatani',
			titleColor1: 'Budaya',
			title2: 'Melalui',
			titleColor2: 'Bahasa',
			title3: '& Kode',
			desc: 'Perjalanan multidisiplin dari pondasi industri Jepang hingga ke seluk-beluk pengajaran bahasa dan rekayasa digital. Membangun jembatan di mana dunia fisik dan digital bertemu.',
			ctaPrimary: 'Jelajahi Jalur',
			ctaSecondary: 'Inisiasi Kontak'
		},
		bio: {
			titlePre: 'Identitas',
			titlePost: 'Diri',
			nameLabel: 'Nama',
			nameValue: 'Jodi',
			ageLabel: 'Umur',
			ageValue: '27 Tahun',
			locationLabel: 'Lokasi',
			locationValue: 'Solo, Indonesia',
			hobbiesLabel: 'Hobi',
			hobbiesValue: 'Budaya Jepang, Sintesis Teknologi, Eksplorasi Urban, Kode Retro'
		},
		timeline: {
			titlePre: 'Evolusi',
			titlePost: 'Profesional',
			items: [
				{
					period: '2017 - 2018',
					role: 'Web Developer',
					company: 'PT Solonet, Solo',
					desc: 'Membangun dan memelihara aplikasi web menggunakan Svelte, Next.js, dan Laravel untuk solusi digital berperforma tinggi.'
				},
				{
					period: '2018 - 2022',
					role: 'Pekerja Konstruksi',
					company: 'Kashiwazaki Construction Corporation, Tokyo',
					desc: 'Mendapat pengalaman industri langsung dan etos kerja yang kuat di sektor konstruksi Jepang.'
				},
				{
					period: '2022 - 2024',
					role: 'Administrasi Quality Control',
					company: 'Teiku Corporation, Saitama',
					desc: 'Memastikan standar produk melalui administrasi data dan proses inspeksi yang teliti di Jepang.'
				},
				{
					period: '2024 - Sekarang',
					role: 'Instruktur Bahasa Jepang',
					company: 'Solo, Indonesia',
					desc: 'Mengajar bahasa Jepang hingga level JLPT N3/N4 dan mempersiapkan kandidat untuk ujian Specified Skilled Worker (SSW).'
				}
			]
		},
		teaching: {
			title1: 'Filosofi',
			titleColor1: 'Mengajar',
			desc: 'Memanfaatkan pengalaman langsung di Jepang untuk memberikan pengajaran bahasa yang kontekstual. Fokus melampaui tata bahasa hingga ke budaya tempat kerja (Hou-Ren-So) dan adaptasi praktis.',
			method1Title: 'JLPT N4/N3',
			method1Desc: 'Bekerja khusus dalam mempersiapkan kandidat untuk evaluasi kemampuan bahasa.',
			method2Title: 'SSW (Tokutei Ginou)',
			method2Desc: 'Persiapan evaluasi keterampilan dan adaptasi budaya kerja.',
			stat1Label: 'Kategori SSW',
			stat2Label: 'Persiapan JLPT',
			stat3Label: 'Budaya Kerja'
		},
		toolkit: {
			badge: 'Kemampuan',
			titlePre: 'Perlengkapan',
			titlePost: 'Keahlian',
			featured: 'Unggulan',
			items: {
				translation: {
					title: 'Penerjemahan Native',
					desc: 'Konversi linguistik fidelitas tinggi yang berspesialisasi dalam terminologi teknis dan industri Jepang. Menjembatani langsung tanpa kehilangan konteks budaya.',
					tags: ['日 → EN', 'Teknis', 'Industri', 'Budaya']
				},
				jlpt: {
					title: 'JLPT N3',
					label: 'Sertifikasi Bahasa'
				},
				experience: {
					title: '5+ Thn',
					label: 'Pengalaman Jepang'
				},
				mediation: {
					title: 'Mediasi Lintas Budaya',
					desc: 'Menavigasi norma sosial yang kompleks, hierarki keigo, dan etiket bisnis antara lingkungan Timur dan Barat.'
				},
				web: {
					title: 'Rekayasa Web',
					desc: 'Pengembangan full-stack dengan framework modern untuk aplikasi performa tinggi.'
				},
				teaching: {
					title: 'Pengajaran',
					desc: 'Metodologi berbasis budaya untuk persiapan SSW.'
				},
				ssw: {
					title: 'Sertifikat SSW',
					desc: 'Kualifikasi Layanan Makanan, Restoran, Kaigo.'
				},
				safety: {
					title: 'Senmonkyu Tobi',
					desc: 'Sertifikasi scaffolding & keselamatan industri.'
				}
			}
		},
		credentials: {
			title: 'Kredensial Profesional',
			items: [
				{
					cat: 'Standar Bahasa',
					title: 'JLPT N3',
					desc: 'Sertifikasi resmi kemahiran bahasa Jepang, menunjukkan kemampuan untuk memahami bahasa Jepang yang digunakan dalam situasi sehari-hari sampai tingkat tertentu.'
				},
				{
					cat: 'Teknis',
					title: 'Senmonkyu Tobi',
					desc: 'Sertifikasi scaffolding dan konstruksi khusus, membutuhkan pelatihan ketat dan pemahaman mendalam tentang standar keselamatan industri Jepang.'
				},
				{
					cat: 'Kerangka SSW',
					title: 'Sertifikasi SSW',
					desc: 'Kualifikasi Specified Skilled Worker yang mencakup Layanan Makanan, Manajemen Restoran, dan Kaigo (Perawatan Lansia). Kompetensi industri yang luas.'
				}
			],
			verified: 'Terverifikasi'
		},
		projects: {
			title: 'Proyek',
			items: [
				{
					cat: 'Aplikasi Web',
					title: 'Web & Blog LPK Saindo',
					desc: 'Situs web resmi dan platform blog untuk LPK Saindo.',
					link: 'https://lpksaindoweb.sjodi442.workers.dev'
				},
				{
					cat: 'Alat AI',
					title: 'Kwitansi Online dengan AI',
					desc: 'Pembuat kwitansi online otomatis menggunakan teknologi AI.',
					link: 'https://autokwitansi.sjodi442.workers.dev'
				},
				{
					cat: 'Platform',
					title: 'Beranda BenkyouLab',
					desc: 'Halaman utama untuk platform belajar online BenkyouLab.',
					link: 'https://benkyoulab.online'
				},
				{
					cat: 'Platform',
					title: 'E-Learning BenkyouLab',
					desc: 'Portal E-Learning komprehensif untuk BenkyouLab.',
					link: 'https://portal-benkyou.web.id'
				},
				{
					cat: 'Aplikasi Web',
					title: 'Manajemen Siswa LPK',
					desc: 'Aplikasi web manajemen siswa komprehensif untuk LPK.',
					link: 'https://lpk-students-management.vercel.app/'
				}
			],
			visit: 'Kunjungi Proyek'
		},
		gallery: {
			titlePre: 'Rekam',
			titlePost: 'Visual',
			desc: 'Dokumentasi pengalaman profesional di sektor industri Jepang dan lingkungan teknologi/pendidikan Indonesia.',
			items: [
				{ title: 'Konstruksi & Scaffolding', location: 'Tokyo, Jepang' },
				{ title: 'Malam di Akihabara', location: 'Tokyo, Jepang' },
				{ title: 'Rekayasa Web', location: 'Solo, Indonesia' },
				{ title: 'Persiapan SSW', location: 'Pusat Pelatihan' },
				{ title: 'Pengajaran Bahasa', location: 'Solo, Indonesia' },
				{ title: 'Relawan Olimpiade Tokyo 2020', location: 'Stadion Hoki Oi, Tokyo' }
			]
		},
		contact: {
			titlePre: 'Inisiasi',
			titlePost: 'Kontak',
			desc: 'Tersedia untuk pengajaran bahasa, konsultasi budaya, atau peluang rekayasa web.',
			nameLabel: 'Nama',
			emailLabel: 'Origin Transmisi (Email)',
			msgLabel: 'Pesan Terenkripsi',
			name: 'Nama',
			email: 'Origin Transmisi (Email)',
			message: 'Pesan Terenkripsi',
			submit: 'Kirim Sinyal'
		},
		footer: {
			copyrightPre: '©',
			copyrightPost: 'Jodi. Semua sistem operasional.'
		}
	},
	ja: {
		nav: {
			work: '経歴',
			evolution: '進化',
			toolkit: 'スキル',
			getInTouch: 'お問い合わせ'
		},
		hero: {
			badge: 'ジョディのポートフォリオ',
			title1: '言語と',
			titleColor1: 'コード',
			title2: 'を通じて',
			titleColor2: '文化',
			title3: 'の架け橋を',
			desc: '日本の産業の基盤から、語学指導の細やかなニュアンス、そしてデジタルエンジニアリングに至る多面的な道のり。物理的な世界とデジタルな世界が交差する場所に橋を架けます。',
			ctaPrimary: '軌跡を辿る',
			ctaSecondary: 'コンタクト'
		},
		bio: {
			titlePre: '個人',
			titlePost: 'プロフィール',
			nameLabel: '名前',
			nameValue: 'ジョディ',
			ageLabel: '年齢',
			ageValue: '27歳',
			locationLabel: '拠点',
			locationValue: 'インドネシア・ソロ',
			hobbiesLabel: '趣味',
			hobbiesValue: '日本文化, テクノロジー合成, 都市探検, レトロコーディング'
		},
		timeline: {
			titlePre: 'プロフェッショナル',
			titlePost: 'の進化',
			items: [
				{
					period: '2017 - 2018',
					role: 'ウェブ開発者',
					company: 'PT Solonet、ソロ',
					desc: 'Svelte、Next.js、Laravelを使用した高パフォーマンスなデジタルソリューションのためのWebアプリケーション開発。'
				},
				{
					period: '2018 - 2022',
					role: '建設作業員（とび職）',
					company: '株式会社柏崎建設、東京',
					desc: '日本の建設業界における現場での実務経験と強い労働倫理の習得。'
				},
				{
					period: '2022 - 2024',
					role: '品質管理（QC）事務',
					company: '株式会社テイク、埼玉',
					desc: '日本での綿密なデータ管理と検査プロセスを通じた製品基準の保証。'
				},
				{
					period: '2024 - 現在',
					role: '日本語講師',
					company: 'ソロ、インドネシア',
					desc: 'JLPT N3/N4レベルまでの日本語指導および特定技能（SSW）試験対策。'
				}
			]
		},
		teaching: {
			title1: '教育',
			titleColor1: '理念',
			desc: '日本の最前線での経験を活かした実践的な語学指導。文法にとどまらず、職場文化（報・連・相）や実践的なサバイバルスキルに重点を置いています。',
			method1Title: 'JLPT N4/N3',
			method1Desc: '日本語能力試験に向けた専門的な指導と対策。',
			method2Title: '特定技能 (SSW)',
			method2Desc: '特定技能試験の対策および職場文化の適応サポート。',
			stat1Label: '特定技能カテゴリ',
			stat2Label: 'JLPT対策',
			stat3Label: '労働文化'
		},
		toolkit: {
			badge: 'スキル',
			titlePre: 'プロの',
			titlePost: '道具箱',
			featured: '注目',
			items: {
				translation: {
					title: '実務翻訳',
					desc: '技術・産業分野の専門用語に特化した、高精度の言語変換。文化的な背景を損なうことなく、直接的な橋渡しを行います。',
					tags: ['日 → EN', '技術', '産業', '文化']
				},
				jlpt: {
					title: 'JLPT N3',
					label: '語学資格'
				},
				experience: {
					title: '5年以上',
					label: '日本での経験'
				},
				mediation: {
					title: '異文化調停',
					desc: '東洋と西洋の環境間における複雑な社会規範、敬語システム、およびビジネスマナーの調整。'
				},
				web: {
					title: 'ウェブエンジニアリング',
					desc: '高パフォーマンスアプリケーションのための、モダンフレームワークを使用したフルスタック開発。'
				},
				teaching: {
					title: '教育指導',
					desc: '特定技能（SSW）対策のための、文化重視の指導。'
				},
				ssw: {
					title: '特定技能資格',
					desc: '外食業、レストラン、介護の資格保持。'
				},
				safety: {
					title: '専門級 とび',
					desc: '産業用足場および安全管理の認定。'
				}
			}
		},
		credentials: {
			title: '専門資格',
			items: [
				{
					cat: '語学基準',
					title: 'JLPT N3',
					desc: '日本語能力試験の公式認定。日常的な場面で使われる日本語をある程度理解できることを証明します。'
				},
				{
					cat: '技術資格',
					title: '専門級 とび',
					desc: '足場および建設の専門資格。厳格なトレーニングと日本の産業安全枠組みへの深い理解が必要です。'
				},
				{
					cat: '特定技能',
					title: '特定技能資格',
					desc: '外食、飲食料品製造、介護にわたる特定技能資格。幅広い産業への適応能力。'
				}
			],
			verified: '認定済み'
		},
		projects: {
			title: 'プロジェクト',
			items: [
				{
					cat: 'Webアプリケーション',
					title: 'LPK Saindo Web & Blog',
					desc: 'LPK Saindoの公式ウェブサイトおよびブログプラットフォーム。',
					link: 'https://lpksaindoweb.sjodi442.workers.dev'
				},
				{
					cat: 'AIツール',
					title: 'Auto Kwitansi AI',
					desc: 'AIを搭載したオンライン領収書自動生成ツール。',
					link: 'https://autokwitansi.sjodi442.workers.dev'
				},
				{
					cat: 'プラットフォーム',
					title: 'BenkyouLab ホームページ',
					desc: 'オンライン学習プラットフォーム「BenkyouLab」のランディングページ。',
					link: 'https://benkyoulab.online'
				},
				{
					cat: 'プラットフォーム',
					title: 'BenkyouLab E-Learning',
					desc: 'BenkyouLabの総合Eラーニングポータル。',
					link: 'https://portal-benkyou.web.id'
				},
				{
					cat: 'Webアプリケーション',
					title: 'LPK Students Management',
					desc: 'LPK（登録支援機関）のための総合的な学生管理Webアプリケーション。',
					link: 'https://lpk-students-management.vercel.app/'
				}
			],
			visit: 'プロジェクトを見る'
		},
		gallery: {
			titlePre: '視覚的',
			titlePost: '記録',
			desc: '日本の産業部門からインドネシアのテクノロジー/教育環境にまたがる職務経験の記録。',
			items: [
				{ title: '建設・足場作業', location: '日本・東京' },
				{ title: '秋葉原の夜', location: '日本・東京' },
				{ title: 'ウェブエンジニアリング', location: 'インドネシア・ソロ' },
				{ title: '特定技能の準備', location: 'トレーニングセンター' },
				{ title: '語学指導', location: 'インドネシア・ソロ' },
				{ title: '東京2020ボランティア', location: '東京・大井ホッケー競技場' }
			]
		},
		contact: {
			titlePre: '通信',
			titlePost: '開始',
			desc: '語学指導、文化コンサルティング、またはウェブ開発の機会についてお気軽にご連絡ください。',
			nameLabel: '名前',
			emailLabel: '送信元 (Email)',
			msgLabel: '暗号化メッセージ',
			name: '名前',
			email: '送信元 (Email)',
			message: '暗号化メッセージ',
			submit: '信号を送信'
		},
		footer: {
			copyrightPre: '©',
			copyrightPost: 'ジョディ。すべてのシステムは稼働中です。'
		}
	}
};
