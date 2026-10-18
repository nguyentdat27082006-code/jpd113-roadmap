// Dữ liệu tổng hợp từ học liệu JPD113 trên EduNext (lớp SE2004, GV trinhvlb).
// Nội dung đánh dấu `added: true` là phần bổ sung (học liệu gốc là ảnh hoặc chưa được đăng).

const SLOTS = [
  { n: 1, date: "2026-09-08", phase: "kana", topic: "Giới thiệu môn & tiếng Nhật; Hiragana 20 chữ đầu + 26 chữ tiếp; chào hỏi cơ bản 1" },
  { n: 2, date: "2026-09-11", phase: "kana", topic: "Hiragana: âm đục, âm ghép, âm mũi; chào hỏi cơ bản 2–3; câu dùng trong lớp" },
  { n: 3, date: "2026-09-15", phase: "kana", topic: "Hiragana: âm dài, âm ngắt; số đếm; chào hỏi cơ bản 4" },
  { n: 4, date: "2026-09-18", phase: "kana", topic: "Chào hỏi cơ bản 5; tổng ôn Hiragana; Katakana 20 chữ đầu" },
  { n: 5, date: "2026-09-22", phase: "kana", topic: "Katakana 26 chữ còn lại; Katakana âm dài" },
  { n: 6, date: "2026-09-25", phase: "kana", topic: "Katakana âm ngắt + âm ghép; ôn tổng hợp chữ mềm/cứng; giới thiệu giáo trình できる日本語 初級" },
  { n: 7, date: "2026-09-29", phase: "b1", topic: "Bài 1 ST1: 私は［名前］です・お国はどちらですか・お仕事は～ですか" },
  { n: 8, date: "2026-10-02", phase: "b1", topic: "Bài 1 ST1–ST2: NのN・～歳です・いつ（～月～日）" },
  { n: 9, date: "2026-10-06", phase: "b1", topic: "Bài 1 ST2 luyện tập; ST3: 何ですか・NとN" },
  { n: 10, date: "2026-10-09", phase: "b1", topic: "Bài 1 ST3: Nも; Kanji bài 1; ôn bài 1" },
  { n: 11, date: "2026-10-13", phase: "b2", topic: "Kiểm tra 1 (bảng chữ + bài 1); Bài 2 ST1: 何階ですか・cách nói tầng", test: "Kiểm tra 1" },
  { n: 12, date: "2026-10-16", phase: "b2", topic: "Bài 2 ST1: ～はどこですか（ここ・そこ・あそこ／こちら・そちら・あちら）; ST2: いくらですか・これ・それ・あれ" },
  { n: 13, date: "2026-10-20", phase: "b2", topic: "Bài 2 ST2: このN・そのN・あのN; Nをください; đọc giá tiền" },
  { n: 14, date: "2026-10-23", phase: "b2", topic: "Bài 2 ST3: 何のN・［言語］で・どこのN・Nを（～つ）ください・だれのN" },
  { n: 15, date: "2026-10-27", phase: "b3", topic: "Kanji bài 2; ôn bài 2; Bài 3 ST1: 今、何時ですか（cách nói giờ）" },
  { n: 16, date: "2026-10-30", phase: "b3", topic: "Bài 3 ST1: ～から～までです・何曜日ですか; Kanji bài 3" },
  { n: 17, date: "2026-11-03", phase: "b3", topic: "Bài 3 ST2: Vます（dự định）・～をVます・［場所］へ・Vません" },
  { n: 18, date: "2026-11-06", phase: "b3", topic: "Bài 3 ST2–ST3: ［場所］で・Vます（thói quen）・NやNなど・何もVません・［時間］に" },
  { n: 19, date: "2026-11-10", phase: "b3", topic: "Bài 3 ST3: ～から～までVます・どこへも行きません; ôn bài 3" },
  { n: 20, date: "2026-11-13", phase: "exam", topic: "Kiểm tra 2 (bài 2 + bài 3); ôn thi cuối kỳ", test: "Kiểm tra 2" },
];

const PHASES = {
  kana: { name: "Bảng chữ cái", slots: "Slot 1–6", goal: "Đọc – viết trôi chảy Hiragana và Katakana, kể cả âm đục, âm ghép, âm dài, âm ngắt.",
    home: ["Mỗi ngày viết lại 1–2 hàng chữ theo đúng thứ tự nét", "Tự kiểm tra trên kana-quiz.tofugu.com, chỉ chọn những hàng đã học", "Đọc to các từ luyện tập trong slide Slot 1–3"] },
  b1: { name: "Bài 1 – Giới thiệu bản thân", slots: "Slot 7–10", goal: "Tự giới thiệu: tên, quốc tịch, nghề nghiệp, tuổi, sinh nhật, sở thích.",
    home: ["Thuộc tháng, ngày trong tháng (ついたち〜とおか là bất quy tắc)", "Viết đoạn tự giới thiệu 5–6 câu và đọc to", "Học 9 chữ Kanji bài 1"] },
  b2: { name: "Bài 2 – Mua sắm", slots: "Slot 11–14", goal: "Hỏi chỗ, hỏi giá, gọi món, hỏi xuất xứ và chủ sở hữu.",
    home: ["Luyện đọc giá tiền đến hàng vạn (まん)", "Phân biệt これ/この, ここ/こちら", "Học Kanji số 一〜十, 百, 千, 万, 円"] },
  b3: { name: "Bài 3 – Thời gian & sinh hoạt", slots: "Slot 15–19", goal: "Nói giờ, thứ, lịch sinh hoạt hằng ngày với động từ thể ます.",
    home: ["Thuộc cách đọc giờ, phút (chú ý よじ, くじ, ～ぷん)", "Kể lịch một ngày của mình bằng 5–6 câu", "Chuẩn bị luôn câu trả lời cho phần thi nói"] },
  exam: { name: "Kiểm tra & thi cuối kỳ", slots: "Slot 20 → FE", goal: "Kiểm tra 2, sau đó thi nói 1–1 với giám thị (Reading 40 + Talking 60).",
    home: ["Luyện đọc đoạn 100–110 ký tự trong 30 giây chuẩn bị", "Trả lời to các câu hỏi mẫu, nhớ はい／いいえ và trợ từ", "Ôn tranh: hồ sơ người, đồ vật – giá, giờ mở cửa"] },
};

// ---------- KANA ----------
const KANA_ROWS = ["", "k", "s", "t", "n", "h", "m", "y", "r", "w"];
const HIRAGANA = [
  ["あ","い","う","え","お"], ["か","き","く","け","こ"], ["さ","し","す","せ","そ"], ["た","ち","つ","て","と"], ["な","に","ぬ","ね","の"],
  ["は","ひ","ふ","へ","ほ"], ["ま","み","む","め","も"], ["や","","ゆ","","よ"], ["ら","り","る","れ","ろ"], ["わ","","","","を"],
];
const KATAKANA = [
  ["ア","イ","ウ","エ","オ"], ["カ","キ","ク","ケ","コ"], ["サ","シ","ス","セ","ソ"], ["タ","チ","ツ","テ","ト"], ["ナ","ニ","ヌ","ネ","ノ"],
  ["ハ","ヒ","フ","ヘ","ホ"], ["マ","ミ","ム","メ","モ"], ["ヤ","","ユ","","ヨ"], ["ラ","リ","ル","レ","ロ"], ["ワ","","","","ヲ"],
];
const ROMAJI = [
  ["a","i","u","e","o"], ["ka","ki","ku","ke","ko"], ["sa","shi","su","se","so"], ["ta","chi","tsu","te","to"], ["na","ni","nu","ne","no"],
  ["ha","hi","fu","he","ho"], ["ma","mi","mu","me","mo"], ["ya","","yu","","yo"], ["ra","ri","ru","re","ro"], ["wa","","","","o (wo)"],
];
const DAKUTEN = {
  hira: [["が","ぎ","ぐ","げ","ご"], ["ざ","じ","ず","ぜ","ぞ"], ["だ","ぢ","づ","で","ど"], ["ば","び","ぶ","べ","ぼ"], ["ぱ","ぴ","ぷ","ぺ","ぽ"]],
  kata: [["ガ","ギ","グ","ゲ","ゴ"], ["ザ","ジ","ズ","ゼ","ゾ"], ["ダ","ヂ","ヅ","デ","ド"], ["バ","ビ","ブ","ベ","ボ"], ["パ","ピ","プ","ペ","ポ"]],
  romaji: [["ga","gi","gu","ge","go"], ["za","ji","zu","ze","zo"], ["da","ji","zu","de","do"], ["ba","bi","bu","be","bo"], ["pa","pi","pu","pe","po"]],
};
const YOON = {
  hira: [["きゃ","きゅ","きょ"],["しゃ","しゅ","しょ"],["ちゃ","ちゅ","ちょ"],["にゃ","にゅ","にょ"],["ひゃ","ひゅ","ひょ"],["みゃ","みゅ","みょ"],["りゃ","りゅ","りょ"],["ぎゃ","ぎゅ","ぎょ"],["じゃ","じゅ","じょ"],["びゃ","びゅ","びょ"],["ぴゃ","ぴゅ","ぴょ"]],
  kata: [["キャ","キュ","キョ"],["シャ","シュ","ショ"],["チャ","チュ","チョ"],["ニャ","ニュ","ニョ"],["ヒャ","ヒュ","ヒョ"],["ミャ","ミュ","ミョ"],["リャ","リュ","リョ"],["ギャ","ギュ","ギョ"],["ジャ","ジュ","ジョ"],["ビャ","ビュ","ビョ"],["ピャ","ピュ","ピョ"]],
  romaji: [["kya","kyu","kyo"],["sha","shu","sho"],["cha","chu","cho"],["nya","nyu","nyo"],["hya","hyu","hyo"],["mya","myu","myo"],["rya","ryu","ryo"],["gya","gyu","gyo"],["ja","ju","jo"],["bya","byu","byo"],["pya","pyu","pyo"]],
};
const KATA_SPECIAL = ["ウィ wi","ウェ we","ウォ wo","ファ fa","フィ fi","フェ fe","フォ fo","ティ ti","ディ di","デュ dyu","チェ che","シェ she","ジェ je","ヴ vu"];

const KANA_RULES = [
  { title: "Âm dài (trường âm)", body: "Kéo dài nguyên âm thêm 1 nhịp. Cột A thêm あ, cột I thêm い, cột U thêm う; cột E thêm い (đôi khi え); cột O thêm う (đôi khi お). Katakana dùng dấu ー.",
    ex: ["おばあさん bà ≠ おばさん cô/dì", "おじいさん ông ≠ おじさん chú/bác", "せんせい・えいご・くうこう・とおる", "コーヒー・スーパー"] },
  { title: "Âm ngắt (xúc âm)", body: "Viết っ nhỏ, ngắt 1 nhịp và gấp đôi phụ âm phía sau, như bị vấp.",
    ex: ["おと oto ≠ おっと otto", "もと moto ≠ もっと motto", "きっぷ (✘きつぷ)・きって・みっか", "サッカー・ベッド"] },
  { title: "Âm ghép (ảo âm)", body: "Chữ cột I (trừ い) + ゃ ゅ ょ viết nhỏ → đọc liền thành 1 âm.",
    ex: ["きゃく・しゃしん・ちょっと", "かいしゃいん・こうちゃ・りょこう"] },
  { title: "Trường âm của âm ghép", body: "ゃ kéo dài bằng あ; ゅ và ょ kéo dài bằng う (✘ không dùng お).",
    ex: ["きょう・とうきょう", "りゅうがくせい・じゅぎょう・びょういん"] },
  { title: "Âm mũi ん", body: "ん là một nhịp riêng, đọc như n/m/ng tùy âm phía sau.", ex: ["にほん・せんせい・しんぶん・ほん"] },
];

const KANA_LINKS = [
  { url: "https://kana-quiz.tofugu.com/", note: "Chọn đúng những hàng đã học để luyện" },
  { url: "https://uchisen.com/drills", note: "Bài luyện nhận mặt chữ" },
  { url: "https://kana.icann.se/", note: "Gõ romaji cho chữ hiện ra" },
];

// ---------- BÀI 1 ----------
const VOCAB_B1 = [
  { group: "Quốc gia", items: [["にほん","Nhật Bản"],["かんこく","Hàn Quốc"],["ちゅうごく","Trung Quốc"],["タイ","Thái Lan"],["ベトナム","Việt Nam"],["オーストラリア","Úc"],["アメリカ","Mỹ"],["イタリア","Ý"],["ロシア","Nga"],["インド","Ấn Độ"],["ブラジル","Brazil"],["～じん（人）","người nước ~"],["おくに","đất nước (lịch sự)"]] },
  { group: "Nghề nghiệp & trường", items: [["しごと","công việc"],["きょうし","giáo viên (nói về mình)"],["せんせい","thầy/cô (gọi người khác)"],["かいしゃいん","nhân viên công ty"],["がくせい","học sinh, sinh viên"],["だいがく","trường đại học"],["こうこう","trường cấp ba"],["にほんごがっこう","trường tiếng Nhật"]] },
  { group: "Sở thích", items: [["しゅみ","sở thích"],["スポーツ","thể thao"],["テニス","tennis"],["すいえい","bơi lội"],["サッカー","bóng đá"],["えいが","phim ảnh"],["どくしょ","đọc sách"],["おんがく","âm nhạc"],["りょこう","du lịch"],["りょうり","nấu ăn"]] },
  { group: "Khác", items: [["たんじょうび","sinh nhật"],["なまえ","tên"],["～さい（才）","~ tuổi"]] },
];

const GRAMMAR_B1 = [
  { p: "N1 は N2 です", m: "N1 là N2", ex: [["パクさんは 学生です。","Bạn Park là sinh viên."],["私は 26才です。","Tôi 26 tuổi."]] },
  { p: "N1 は N2 じゃありません／ではありません", m: "N1 không phải là N2", ex: [["カルロスさんは 学生じゃありません。会社員です。","Anh Carlos không phải sinh viên. Anh ấy là nhân viên công ty."]] },
  { p: "N1 は N2 ですか", m: "Câu hỏi có/không. Trả lời: はい、～です／いいえ、～じゃありません", ex: [["ワンさんは 学生ですか。","Bạn Wan là sinh viên phải không?"],["はい、学生です。／いいえ、学生じゃありません。","Vâng. / Không."]] },
  { p: "N は どちら／いつ／何 ですか", m: "Hỏi ở đâu (lịch sự) / khi nào / cái gì", ex: [["お国は どちらですか。― ベトナムです。","Bạn đến từ nước nào? – Việt Nam."],["誕生日は いつですか。","Sinh nhật bạn khi nào?"],["趣味は 何ですか。","Sở thích của bạn là gì?"]] },
  { p: "N1 の N2", m: "N2 của N1; nói nghề nghiệp ở tổ chức nào: [tổ chức] の [nghề]", ex: [["私の 誕生日","sinh nhật của tôi"],["伏見大学の 学生","sinh viên ĐH Fushimi"],["富士通の 社員","nhân viên công ty Fujitsu"]] },
  { p: "N1 と N2", m: "N1 và N2 (nối danh từ)", ex: [["趣味は 旅行と 映画です。","Sở thích là du lịch và phim ảnh."]] },
  { p: "N も", m: "N cũng…", ex: [["ワンさんの 趣味は 料理です。ナタポンさんの 趣味も 料理です。","Sở thích của Wan là nấu ăn. Của Natapon cũng là nấu ăn."]] },
];

const KANJI_B1 = [
  ["私","TƯ","わたし","シ","tôi"], ["人","NHÂN","ひと","ジン・ニン","người"], ["才","TÀI","—","サイ","tuổi (～才)"],
  ["学","HỌC","まな・ぶ","ガク","học"], ["生","SINH","い・きる","セイ","sinh, sống"], ["校","HIỆU","—","コウ","trường"],
  ["日","NHẬT","ひ・か","ニチ・ニ","ngày, mặt trời"], ["本","BẢN","もと","ホン","sách, gốc"], ["語","NGỮ","かた・る","ゴ","ngôn ngữ"],
];

const MONTHS = ["いちがつ","にがつ","さんがつ","しがつ","ごがつ","ろくがつ","しちがつ","はちがつ","くがつ","じゅうがつ","じゅういちがつ","じゅうにがつ"];
const DAYS = ["ついたち","ふつか","みっか","よっか","いつか","むいか","なのか","ようか","ここのか","とおか",
  "じゅういちにち","じゅうににち","じゅうさんにち","じゅうよっか","じゅうごにち","じゅうろくにち","じゅうしちにち","じゅうはちにち","じゅうくにち","はつか",
  "にじゅういちにち","にじゅうににち","にじゅうさんにち","にじゅうよっか","にじゅうごにち","にじゅうろくにち","にじゅうしちにち","にじゅうはちにち","にじゅうくにち","さんじゅうにち","さんじゅういちにち"];
const IRREGULAR_DAYS = new Set([1,2,3,4,5,6,7,8,9,10,14,20,24]);

// ---------- BÀI 2 ----------
const VOCAB_B2 = [
  { group: "Trong cửa hàng", items: [["インフォメーション","quầy thông tin"],["ATM","máy ATM"],["エスカレーター","thang cuốn"],["エレベーター","thang máy"],["トイレ","nhà vệ sinh"],["レジ","quầy thu ngân"],["ちか","tầng hầm"],["～かい（階）","tầng ~ (なんがい: tầng mấy)"],["きつえんじょ","khu hút thuốc"],["てんいん","nhân viên bán hàng"]] },
  { group: "Cửa hàng", items: [["スーパー","siêu thị"],["100えんショップ","cửa hàng 100 yên"],["レストラン","nhà hàng"],["きっさてん","quán cà phê"],["～や（屋）","tiệm ~ (くつや, パンや, ケーキや)"]] },
  { group: "Đồ vật", items: [["カメラ","máy ảnh"],["けいたいでんわ","điện thoại di động"],["じしょ","từ điển"],["でんしじしょ","từ điển điện tử"],["パソコン","máy tính"],["くつ","giày"],["けしゴム","cục tẩy"],["ペン","bút"],["トイレットペーパー","giấy vệ sinh"],["ほん","sách"],["かばん","túi, cặp"],["ズボン","quần dài"],["Tシャツ","áo phông"],["とけい","đồng hồ"],["さいふ","ví"]] },
  { group: "Thực phẩm", items: [["あぶら","dầu ăn"],["こめ","gạo"],["たまご","trứng"],["パン","bánh mì"],["ケーキ","bánh ngọt"],["いちご","dâu tây"],["りんご","táo"],["バナナ","chuối"],["えび","tôm"],["さかな","cá"],["ぶたにく","thịt lợn"],["とりにく","thịt gà"],["ぎゅうにく","thịt bò"],["やさい","rau củ"]] },
  { group: "Món ăn & đồ uống", items: [["りょうり","món ăn"],["カレー","cà ri"],["スープ","súp"],["おやこどん","cơm gà trứng"],["とんかつ","thịt lợn chiên xù"],["ハンバーグ","thịt băm viên"],["ごはん／ライス","cơm"],["みず","nước"],["（お）ちゃ","trà"],["こうちゃ","hồng trà"],["コーヒー","cà phê"],["ジュース","nước ép"],["ビール","bia"],["ワイン","rượu vang"]] },
  { group: "Nước & ngôn ngữ", items: [["ドイツ","Đức"],["フランス","Pháp"],["インド","Ấn Độ"],["えいご","tiếng Anh"],["～ご（語）","tiếng ~ (ベトナムご)"]] },
];

const GRAMMAR_B2 = [
  { p: "これ／それ／あれ", m: "Cái này (gần người nói) / cái đó (gần người nghe) / cái kia (xa cả hai). Đứng một mình làm chủ ngữ.", ex: [["これは かばんです。","Cái này là cái túi."],["これは 10,000円です。","Cái này 10.000 yên."]] },
  { p: "この／その／あの + N", m: "N này / N đó / N kia — luôn đi kèm danh từ.", ex: [["この Tシャツは 3,000円です。","Cái áo phông này 3.000 yên."]] },
  { p: "ここ／そこ／あそこ／どこ", m: "Chỗ này / chỗ đó / chỗ kia / ở đâu.", ex: [["すみません、トイレは どこですか。― あそこです。","Xin lỗi, nhà vệ sinh ở đâu? – Ở đằng kia."]] },
  { p: "こちら／そちら／あちら／どちら", m: "Hướng này… — cách nói lịch sự của ここ… (nhân viên hay dùng).", ex: [["カメラは どこですか。― カメラは そちらです。","Máy ảnh ở đâu ạ? – Ở phía kia ạ."]] },
  { p: "N を（số lượng）ください", m: "Cho tôi (bao nhiêu) N. Đếm đồ: ひとつ, ふたつ, みっつ…", ex: [["カレーを 1つ ください。","Cho tôi 1 phần cà ri."],["ハンバーグを 2つと とんかつを 1つ ください。","Cho tôi 2 hamburg và 1 tonkatsu."]] },
  { p: "N は いくらですか", m: "N giá bao nhiêu?", ex: [["この 時計は いくらですか。― 8,500円です。","Đồng hồ này bao nhiêu? – 8.500 yên."]] },
  { p: "どこの N", m: "N của nước/hãng nào (xuất xứ).", ex: [["これは どこの ビールですか。― ドイツの ビールです。","Bia này của nước nào? – Bia Đức."]] },
  { p: "何の N", m: "N về cái gì / loại gì (nội dung, nguyên liệu, lĩnh vực).", ex: [["これは 何の カレーですか。― えびの カレーです。","Đây là cà ri gì? – Cà ri tôm."],["コンピューターの 雑誌です。","Tạp chí về máy tính."]] },
  { p: "だれの N", m: "N của ai. Có thể lược N: 田中先生のです。", ex: [["これは だれの パソコンですか。― 田中先生のです。","Máy tính này của ai? – Của thầy Tanaka."],["この 財布は 私のではありません。","Cái ví này không phải của tôi."]] },
  { p: "［ngôn ngữ］で", m: "Nói bằng (ngôn ngữ) — hỏi nghĩa của từ.", ex: [["「ぶたにく」は 英語で 何ですか。―「pork」です。","“Butaniku” tiếng Anh là gì? – Là pork."],["「やさい」は ベトナム語で 何ですか。","“Yasai” tiếng Việt là gì?"]] },
  { p: "何階ですか", m: "Tầng mấy? Chú ý: いっかい, さんがい, ろっかい, はっかい, じゅっかい.", ex: [["レストランは 何階ですか。― 7階です。","Nhà hàng ở tầng mấy? – Tầng 7."]], added: true },
];

const KANJI_B2 = [
  ["一","NHẤT","ひと・つ","イチ","一つ・一人（ひとり）・一日（ついたち／いちにち）"],
  ["二","NHỊ","ふた・つ","ニ","二つ・二人（ふたり）・二日（ふつか）"],
  ["三","TAM","みっ・つ","サン","三つ・三人・三日（みっか）"],
  ["四","TỨ","よっ・つ／よん","シ","四つ・四月（しがつ）・四日（よっか）"],
  ["五","NGŨ","いつ・つ","ゴ","五つ・五人・五日（いつか）"],
  ["六","LỤC","むっ・つ","ロク","六つ・六月・六日（むいか）"],
  ["七","THẤT","なな・つ","シチ","七つ・七月（しちがつ）・七日（なのか）"],
  ["八","BÁT","やっ・つ","ハチ","八つ・八才（はっさい）・八日（ようか）"],
  ["九","CỬU","ここの・つ","キュウ・ク","九つ・九月（くがつ）・九日（ここのか）"],
  ["十","THẬP","とお","ジュウ","十・十月・十日（とおか）"],
  ["百","BÁCH","—","ヒャク","百円・百億"],
  ["千","THIÊN","—","セン","千円"],
  ["万","VẠN","—","マン","一万円（10.000 yên）"],
  ["円","VIÊN","—","エン","百円・千円"],
];

const NUMBERS = [
  ["0","ゼロ／れい"],["1","いち"],["2","に"],["3","さん"],["4","よん／し"],["5","ご"],["6","ろく"],["7","なな／しち"],["8","はち"],["9","きゅう／く"],["10","じゅう"],
  ["100","ひゃく"],["300","さんびゃく"],["600","ろっぴゃく"],["800","はっぴゃく"],["1.000","せん"],["3.000","さんぜん"],["8.000","はっせん"],["10.000","いちまん"],["100.000","じゅうまん"],
];
const COUNT_THINGS = ["ひとつ","ふたつ","みっつ","よっつ","いつつ","むっつ","ななつ","やっつ","ここのつ","とお"];

// ---------- BÀI 3 (chưa có học liệu — tóm tắt theo đề cương) ----------
const GRAMMAR_B3 = [
  { p: "今、何時ですか", m: "Bây giờ là mấy giờ? → ～時～分です. Chú ý: よじ, しちじ, くじ; ～ふん/～ぷん; 30 phút = はん.", ex: [["今、9時半です。","Bây giờ là 9 giờ rưỡi."]] },
  { p: "［thời gian］から［thời gian］までです", m: "Từ … đến …", ex: [["図書館は 8時から 5時までです。","Thư viện mở từ 8 giờ đến 5 giờ."]] },
  { p: "何曜日ですか", m: "Thứ mấy? げつ・か・すい・もく・きん・ど・にち + ようび.", ex: [["休みは 何曜日ですか。― 日曜日です。","Ngày nghỉ là thứ mấy? – Chủ nhật."]] },
  { p: "V ます／V ません", m: "Thể lịch sự hiện tại–tương lai (dự định, thói quen) / phủ định.", ex: [["あした 勉強します。","Ngày mai tôi sẽ học."],["コーヒーを 飲みません。","Tôi không uống cà phê."]] },
  { p: "N を V ます", m: "を chỉ đối tượng của động từ.", ex: [["パンを 食べます。","Tôi ăn bánh mì."]] },
  { p: "［nơi chốn］へ 行きます／来ます／帰ります", m: "へ (đọc là e) chỉ hướng di chuyển.", ex: [["学校へ 行きます。","Tôi đi đến trường."]] },
  { p: "［nơi chốn］で V ます", m: "で chỉ nơi diễn ra hành động.", ex: [["図書館で 本を 読みます。","Tôi đọc sách ở thư viện."]] },
  { p: "［thời gian cụ thể］に V ます", m: "に đi sau giờ, ngày, thứ (không dùng với まいにち, あした…).", ex: [["6時に 起きます。","Tôi dậy lúc 6 giờ."]] },
  { p: "N や N など", m: "N, N… (liệt kê không đầy đủ).", ex: [["パンや たまごなどを 食べます。","Tôi ăn bánh mì, trứng…"]] },
  { p: "何も V ません／どこへも 行きません", m: "Không … gì cả / không đi đâu cả.", ex: [["何も 食べません。","Tôi không ăn gì cả."],["どこへも 行きません。","Tôi không đi đâu cả."]] },
];
const HOURS = ["いちじ","にじ","さんじ","よじ","ごじ","ろくじ","しちじ","はちじ","くじ","じゅうじ","じゅういちじ","じゅうにじ"];
const MINUTES = [["1","いっぷん"],["2","にふん"],["3","さんぷん"],["4","よんぷん"],["5","ごふん"],["6","ろっぷん"],["7","ななふん"],["8","はっぷん"],["9","きゅうふん"],["10","じゅっぷん"],["15","じゅうごふん"],["30","さんじゅっぷん／はん"]];
const WEEKDAYS = [["げつようび","Thứ 2"],["かようび","Thứ 3"],["すいようび","Thứ 4"],["もくようび","Thứ 5"],["きんようび","Thứ 6"],["どようび","Thứ 7"],["にちようび","Chủ nhật"]];

// ---------- THI NÓI ----------
const EXAM = {
  format: "Vấn đáp 1–1 với giám thị, 5–7 phút, có ghi âm.",
  parts: [
    { name: "Reading", pts: 40, desc: "Đọc 1 đoạn 100–110 ký tự, chuẩn bị 30 giây, không có câu hỏi kèm.",
      rows: [["4 từ Kanji (gạch chân, không furigana)", 12], ["4 từ Katakana", 12], ["70–80 chữ Hiragana — sai 1 chữ trừ 0,2", 16]] },
    { name: "Talking", pts: 60, desc: "4 câu × 15 điểm: 1 câu không tranh (chọn 1 trong 5) + 3 câu về 1 tranh.",
      rows: [["Sai làm hỏng nghĩa cả câu", "−15"], ["Sai nhưng không đổi nghĩa (vd quên はい／いいえ)", "tối đa −5"], ["Đúng ngữ pháp, hiểu câu hỏi nhưng sai từ vựng", "tối đa 3 điểm"], ["Sai trợ từ", "−2"]] },
  ],
  notes: ["Không được đổi câu hỏi hay bài đọc", "Được xin nhắc lại câu hỏi tối đa 3 lần, không bị trừ điểm", "Ngập ngừng bị trừ không quá 5% mỗi đầu điểm", "Mang giấy tờ tùy thân; tắt điện thoại trước khi thi"],
  readingSample: "私は マリヤムです。ちゅうごくじんです。月曜日から 金曜日まで、学校へ いきます。まいあさ 九時から 学校で フランスごを べんきょうします。しゅうまつ、としょかんへ いきます。としょかんで ほんを よみます。コンビニで アルバイトを します。",
  noPicture: [
    ["「パソコン」は ベトナム語で なんですか。", "「máy tính」です。"],
    ["まいにち、何を しますか。／何時に おきますか／何時に ねますか。", "日本語を べんきょうします。／6時に おきます。／11時に ねます。"],
    ["まいあさ、何を たべますか。", "パンと たまごを たべます。"],
    ["まいにち、コーヒーを 飲みますか。／日本語を べんきょうしますか。", "はい、飲みます。／いいえ、飲みません。"],
    ["休みの日、何を しますか。", "えいがを みます。"],
  ],
  pictures: [
    { title: "Tranh 1 – Hồ sơ người", info: "マリヤム · Quốc tịch: Italia · 26 tuổi · Sinh viên · Sở thích: nấu ăn, đọc sách · Sinh nhật: 15/9",
      qa: [["この人の なまえは？","マリヤムさんです。"],["マリヤムさんは なんさいですか。","26さいです。"],["マリヤムさんの おしごとは（なんですか）。","がくせいです。"],["マリヤムさんの お国は どちらですか。","イタリアです。"],["マリヤムさんの しゅみは なんですか。","りょうりと どくしょです。"],["マリヤムさんの しゅみは テニスですか。","いいえ、テニスじゃありません。りょうりと どくしょです。"],["マリヤムさんの たんじょうびは いつですか。","9がつ 15にちです。"]] },
    { title: "Tranh 2 – Đồ vật & giá", info: "Điện thoại Samsung · 970.000 VND · của エリサーさん",
      qa: [["これは なんですか。","けいたいでんわです。"],["けいたいでんわは だれのですか。","エリサーさんのです。"],["けいたいでんわは どこのですか。","サムスンのです。"],["けいたいでんわは いくらですか。","きゅうじゅうななまんドンです。"]] },
    { title: "Tranh 3 – Giờ mở cửa", info: "Mở 7:30 AM – 9:30 PM · Đóng cửa thứ Ba",
      qa: [["～は 何時から 何時までですか。","ごぜん 7時半から ごご 9時半までです。"],["～は 何曜日から 何曜日までですか。","水曜日から 月曜日までです。"],["やすみは いつですか。","火曜日です。"]] },
  ],
};
