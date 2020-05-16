var responsiveVoice;
if("undefined"!=typeof responsiveVoice)console.log("ResponsiveVoice already loaded"),console.log(responsiveVoice);else{var ResponsiveVoice=function(){var a=this;a.version="1.5.3";console.log("ResponsiveVoice r"+a.version);a.responsivevoices=[{name:"UK English Female",flag:"gb",gender:"f",voiceIDs:[3,5,1,6,7,171,278,201,257,286,342,258,287,343,8]},{name:"UK English Male",flag:"gb",gender:"m",voiceIDs:[0,4,2,75,277,202,256,285,341,159,6,7]},{name:"US English Female",flag:"us",gender:"f",voiceIDs:[39,
40,41,42,43,173,205,204,235,283,339,44]},{name:"Arabic Male",flag:"ar",gender:"m",voiceIDs:[96,95,97,196,98],deprecated:!0},{name:"Arabic Female",flag:"ar",gender:"f",voiceIDs:[96,95,97,196,98]},{name:"Armenian Male",flag:"hy",gender:"f",voiceIDs:[99]},{name:"Australian Female",flag:"au",gender:"f",voiceIDs:[87,86,5,276,201,88]},{name:"Brazilian Portuguese Female",flag:"br",gender:"f",voiceIDs:[245,124,123,125,186,223,126]},{name:"Chinese Female",flag:"cn",gender:"f",voiceIDs:[249,58,59,60,155,191,
281,231,268,297,353,269,298,354,61]},{name:"Chinese (Hong Kong) Female",flag:"hk",gender:"f",voiceIDs:[192,193,232,250,251,270,299,355,252]},{name:"Chinese Taiwan Female",flag:"tw",gender:"f",voiceIDs:[194,233,253,254,305,322,361,319,336,375,255]},{name:"Czech Female",flag:"cz",gender:"f",voiceIDs:[101,100,102,197,103]},{name:"Danish Female",flag:"dk",gender:"f",voiceIDs:[105,104,106,198,107]},{name:"Deutsch Female",flag:"de",gender:"f",voiceIDs:[27,28,29,30,31,78,170,275,199,261,290,346,262,291,
347,32]},{name:"Dutch Female",flag:"nl",gender:"f",voiceIDs:[243,219,84,157,158,184,45]},{name:"Finnish Female",flag:"fi",gender:"f",voiceIDs:[90,89,91,209,92]},{name:"French Female",flag:"fr",gender:"f",voiceIDs:[240,21,22,23,77,178,279,210,266,295,351,304,321,360,26]},{name:"Greek Female",flag:"gr",gender:"f",voiceIDs:[62,63,80,200,64]},{name:"Hindi Female",flag:"hi",gender:"f",voiceIDs:[247,66,154,179,213,259,288,344,67]},{name:"Hungarian Female",flag:"hu",gender:"f",voiceIDs:[9,10,81,214,11]},
{name:"Indonesian Female",flag:"id",gender:"f",voiceIDs:[241,111,112,180,215,113]},{name:"Italian Female",flag:"it",gender:"f",voiceIDs:[242,33,34,35,36,37,79,181,216,271,300,356,38]},{name:"Japanese Female",flag:"jp",gender:"f",voiceIDs:[248,50,51,52,153,182,280,217,273,302,358,274,303,359,53]},{name:"Korean Female",flag:"kr",gender:"f",voiceIDs:[54,55,56,156,183,218,306,323,362,57]},{name:"Latin Female",flag:"va",gender:"f",voiceIDs:[114]},{name:"Norwegian Female",flag:"no",gender:"f",voiceIDs:[72,
73,221,74]},{name:"Polish Female",flag:"pl",gender:"f",voiceIDs:[244,120,119,121,185,222,267,296,352,122]},{name:"Portuguese Female",flag:"br",gender:"f",voiceIDs:[128,127,129,187,224,272,301,357,130]},{name:"Romanian Male",flag:"ro",gender:"m",voiceIDs:[151,150,152,225,46]},{name:"Russian Female",flag:"ru",gender:"f",voiceIDs:[246,47,48,83,188,226,260,289,345,49]},{name:"Slovak Female",flag:"sk",gender:"f",voiceIDs:[133,132,134,227,135]},{name:"Spanish Female",flag:"es",gender:"f",voiceIDs:[19,238,
16,17,18,20,76,174,207,263,292,348,264,293,349,15]},{name:"Spanish Latin American Female",flag:"es",gender:"f",voiceIDs:[239,137,136,138,175,208,265,294,350,139]},{name:"Swedish Female",flag:"sv",gender:"f",voiceIDs:[85,148,149,228,65]},{name:"Tamil Male",flag:"hi",gender:"m",voiceIDs:[141]},{name:"Thai Female",flag:"th",gender:"f",voiceIDs:[143,142,144,189,229,145]},{name:"Turkish Female",flag:"tr",gender:"f",voiceIDs:[69,70,82,190,230,71]},{name:"Afrikaans Male",flag:"af",gender:"m",voiceIDs:[93]},
{name:"Albanian Male",flag:"sq",gender:"m",voiceIDs:[94]},{name:"Bosnian Male",flag:"bs",gender:"m",voiceIDs:[14]},{name:"Catalan Male",flag:"catalonia",gender:"m",voiceIDs:[68]},{name:"Croatian Male",flag:"hr",gender:"m",voiceIDs:[13]},{name:"Czech Male",flag:"cz",gender:"m",voiceIDs:[161]},{name:"Danish Male",flag:"da",gender:"m",voiceIDs:[162],deprecated:!0},{name:"Esperanto Male",flag:"eo",gender:"m",voiceIDs:[108]},{name:"Finnish Male",flag:"fi",gender:"m",voiceIDs:[160],deprecated:!0},{name:"Greek Male",
flag:"gr",gender:"m",voiceIDs:[163],deprecated:!0},{name:"Hungarian Male",flag:"hu",gender:"m",voiceIDs:[164]},{name:"Icelandic Male",flag:"is",gender:"m",voiceIDs:[110]},{name:"Latin Male",flag:"va",gender:"m",voiceIDs:[165],deprecated:!0},{name:"Latvian Male",flag:"lv",gender:"m",voiceIDs:[115]},{name:"Macedonian Male",flag:"mk",gender:"m",voiceIDs:[116]},{name:"Moldavian Male",flag:"md",gender:"m",voiceIDs:[117]},{name:"Montenegrin Male",flag:"me",gender:"m",voiceIDs:[118]},{name:"Norwegian Male",
flag:"no",gender:"m",voiceIDs:[166]},{name:"Serbian Male",flag:"sr",gender:"m",voiceIDs:[12]},{name:"Serbo-Croatian Male",flag:"hr",gender:"m",voiceIDs:[131]},{name:"Slovak Male",flag:"sk",gender:"m",voiceIDs:[167],deprecated:!0},{name:"Swahili Male",flag:"sw",gender:"m",voiceIDs:[140]},{name:"Swedish Male",flag:"sv",gender:"m",voiceIDs:[168],deprecated:!0},{name:"Vietnamese Male",flag:"vi",gender:"m",voiceIDs:[146],deprecated:!0},{name:"Welsh Male",flag:"cy",gender:"m",voiceIDs:[147]},{name:"US English Male",
flag:"us",gender:"m",voiceIDs:[234,282,338,236,284,340,237,2,4,0,6,7,75,159]},{name:"Fallback UK Female",flag:"gb",gender:"f",voiceIDs:[8]}];a.voicecollection=[{name:"Google UK English Male"},{name:"Agnes"},{name:"Daniel Compact"},{name:"Google UK English Female"},{name:"en-GB",rate:.25,pitch:1},{name:"en-AU",rate:.25,pitch:1},{name:"ingl\u00e9s Reino Unido"},{name:"English United Kingdom"},{name:"Fallback en-GB Female",lang:"en-GB",fallbackvoice:!0},{name:"Eszter Compact"},{name:"hu-HU",rate:.4},
{name:"Fallback Hungarian",lang:"hu",fallbackvoice:!0,service:"g2"},{name:"Fallback Serbian",lang:"sr",fallbackvoice:!0},{name:"Fallback Croatian",lang:"hr",fallbackvoice:!0},{name:"Fallback Bosnian",lang:"bs",fallbackvoice:!0},{name:"Fallback Spanish",lang:"es",fallbackvoice:!0},{name:"Spanish Spain"},{name:"espa\u00f1ol Espa\u00f1a"},{name:"Diego Compact",rate:.3},{name:"Google Espa\u00f1ol"},{name:"es-ES",rate:.2},{name:"Google Fran\u00e7ais"},{name:"French France"},{name:"franc\u00e9s Francia"},
{name:"Virginie Compact",rate:.5},{name:"fr-FR",rate:.25},{name:"Fallback French",lang:"fr",fallbackvoice:!0},{name:"Google Deutsch"},{name:"German Germany"},{name:"alem\u00e1n Alemania"},{name:"Yannick Compact",rate:.5},{name:"de-DE",rate:.25},{name:"Fallback Deutsch",lang:"de",fallbackvoice:!0},{name:"Google Italiano"},{name:"Italian Italy"},{name:"italiano Italia"},{name:"Paolo Compact",rate:.5},{name:"it-IT",rate:.25},{name:"Fallback Italian",lang:"it",fallbackvoice:!0},{name:"Google US English",
timerSpeed:1},{name:"English United States"},{name:"ingl\u00e9s Estados Unidos"},{name:"Vicki"},{name:"en-US",rate:.2,pitch:1,timerSpeed:1.3},{name:"Fallback English",lang:"en-US",fallbackvoice:!0,timerSpeed:0},{name:"Fallback Dutch",lang:"nl",fallbackvoice:!0,timerSpeed:0},{name:"Fallback Romanian",lang:"ro",fallbackvoice:!0},{name:"Milena Compact"},{name:"ru-RU",rate:.25},{name:"Fallback Russian",lang:"ru",fallbackvoice:!0},{name:"Google \u65e5\u672c\u4eba",timerSpeed:1},{name:"Kyoko Compact"},
{name:"ja-JP",rate:.25},{name:"Fallback Japanese",lang:"ja",fallbackvoice:!0},{name:"Google \ud55c\uad6d\uc758",timerSpeed:1},{name:"Narae Compact"},{name:"ko-KR",rate:.25},{name:"Fallback Korean",lang:"ko",fallbackvoice:!0},{name:"Google \u4e2d\u56fd\u7684",timerSpeed:1},{name:"Ting-Ting Compact"},{name:"zh-CN",rate:.25},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0},{name:"Alexandros Compact"},{name:"el-GR",rate:.25},{name:"Fallback Greek",lang:"el",fallbackvoice:!0,service:"g2"},{name:"Fallback Swedish",
lang:"sv",fallbackvoice:!0,service:"g2"},{name:"hi-IN",rate:.25},{name:"Fallback Hindi",lang:"hi",fallbackvoice:!0},{name:"Fallback Catalan",lang:"ca",fallbackvoice:!0},{name:"Aylin Compact"},{name:"tr-TR",rate:.25},{name:"Fallback Turkish",lang:"tr",fallbackvoice:!0},{name:"Stine Compact"},{name:"no-NO",rate:.25},{name:"Fallback Norwegian",lang:"no",fallbackvoice:!0,service:"g2"},{name:"Daniel"},{name:"Monica"},{name:"Amelie"},{name:"Anna"},{name:"Alice"},{name:"Melina"},{name:"Mariska"},{name:"Yelda"},
{name:"Milena"},{name:"Xander"},{name:"Alva"},{name:"Lee Compact"},{name:"Karen"},{name:"Fallback Australian",lang:"en-AU",fallbackvoice:!0},{name:"Mikko Compact"},{name:"Satu"},{name:"fi-FI",rate:.25},{name:"Fallback Finnish",lang:"fi",fallbackvoice:!0,service:"g2"},{name:"Fallback Afrikans",lang:"af",fallbackvoice:!0},{name:"Fallback Albanian",lang:"sq",fallbackvoice:!0},{name:"Maged Compact"},{name:"Tarik"},{name:"ar-SA",rate:.25},{name:"Fallback Arabic",lang:"ar",fallbackvoice:!0,service:"g2"},
{name:"Fallback Armenian",lang:"hy",fallbackvoice:!0,service:"g2"},{name:"Zuzana Compact"},{name:"Zuzana"},{name:"cs-CZ",rate:.25},{name:"Fallback Czech",lang:"cs",fallbackvoice:!0,service:"g2"},{name:"Ida Compact"},{name:"Sara"},{name:"da-DK",rate:.25},{name:"Fallback Danish",lang:"da",fallbackvoice:!0,service:"g2"},{name:"Fallback Esperanto",lang:"eo",fallbackvoice:!0},{name:"Fallback Haitian Creole",lang:"ht",fallbackvoice:!0},{name:"Fallback Icelandic",lang:"is",fallbackvoice:!0},{name:"Damayanti"},
{name:"id-ID",rate:.25},{name:"Fallback Indonesian",lang:"id",fallbackvoice:!0},{name:"Fallback Latin",lang:"la",fallbackvoice:!0,service:"g2"},{name:"Fallback Latvian",lang:"lv",fallbackvoice:!0},{name:"Fallback Macedonian",lang:"mk",fallbackvoice:!0},{name:"Fallback Moldavian",lang:"mo",fallbackvoice:!0,service:"g2"},{name:"Fallback Montenegrin",lang:"sr-ME",fallbackvoice:!0},{name:"Agata Compact"},{name:"Zosia"},{name:"pl-PL",rate:.25},{name:"Fallback Polish",lang:"pl",fallbackvoice:!0},{name:"Raquel Compact"},
{name:"Luciana"},{name:"pt-BR",rate:.25},{name:"Fallback Brazilian Portugese",lang:"pt-BR",fallbackvoice:!0,service:"g2"},{name:"Joana Compact"},{name:"Joana"},{name:"pt-PT",rate:.25},{name:"Fallback Portuguese",lang:"pt-PT",fallbackvoice:!0},{name:"Fallback Serbo-Croation",lang:"sh",fallbackvoice:!0,service:"g2"},{name:"Laura Compact"},{name:"Laura"},{name:"sk-SK",rate:.25},{name:"Fallback Slovak",lang:"sk",fallbackvoice:!0,service:"g2"},{name:"Javier Compact"},{name:"Paulina"},{name:"es-MX",rate:.25},
{name:"Fallback Spanish (Latin American)",lang:"es-419",fallbackvoice:!0,service:"g2"},{name:"Fallback Swahili",lang:"sw",fallbackvoice:!0},{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0},{name:"Narisa Compact"},{name:"Kanya"},{name:"th-TH",rate:.25},{name:"Fallback Thai",lang:"th",fallbackvoice:!0},{name:"Fallback Vietnamese",lang:"vi",fallbackvoice:!0},{name:"Fallback Welsh",lang:"cy",fallbackvoice:!0},{name:"Oskar Compact"},{name:"sv-SE",rate:.25},{name:"Simona Compact"},{name:"Ioana"},{name:"ro-RO",
rate:.25},{name:"Kyoko"},{name:"Lekha"},{name:"Ting-Ting"},{name:"Yuna"},{name:"Xander Compact"},{name:"nl-NL",rate:.25},{name:"Fallback UK English Male",lang:"en-GB",fallbackvoice:!0,service:"g1",voicename:"rjs"},{name:"Finnish Male",lang:"fi",fallbackvoice:!0,service:"g1",voicename:""},{name:"Czech Male",lang:"cs",fallbackvoice:!0,service:"g1",voicename:""},{name:"Danish Male",lang:"da",fallbackvoice:!0,service:"g1",voicename:""},{name:"Greek Male",lang:"el",fallbackvoice:!0,service:"g1",voicename:"",
rate:.25},{name:"Hungarian Male",lang:"hu",fallbackvoice:!0,service:"g1",voicename:""},{name:"Latin Male",lang:"la",fallbackvoice:!0,service:"g1",voicename:""},{name:"Norwegian Male",lang:"no",fallbackvoice:!0,service:"g1",voicename:""},{name:"Slovak Male",lang:"sk",fallbackvoice:!0,service:"g1",voicename:""},{name:"Swedish Male",lang:"sv",fallbackvoice:!0,service:"g1",voicename:""},{name:"Fallback US English Male",lang:"en",fallbackvoice:!0,service:"tts-api",voicename:""},{name:"German Germany",
lang:"de_DE"},{name:"English United Kingdom",lang:"en_GB"},{name:"English India",lang:"en_IN"},{name:"English United States",lang:"en_US"},{name:"Spanish Spain",lang:"es_ES"},{name:"Spanish Mexico",lang:"es_MX"},{name:"Spanish United States",lang:"es_US"},{name:"French Belgium",lang:"fr_BE"},{name:"French France",lang:"fr_FR"},{name:"Hindi India",lang:"hi_IN"},{name:"Indonesian Indonesia",lang:"in_ID"},{name:"Italian Italy",lang:"it_IT"},{name:"Japanese Japan",lang:"ja_JP"},{name:"Korean South Korea",
lang:"ko_KR"},{name:"Dutch Netherlands",lang:"nl_NL"},{name:"Polish Poland",lang:"pl_PL"},{name:"Portuguese Brazil",lang:"pt_BR"},{name:"Portuguese Portugal",lang:"pt_PT"},{name:"Russian Russia",lang:"ru_RU"},{name:"Thai Thailand",lang:"th_TH"},{name:"Turkish Turkey",lang:"tr_TR"},{name:"Chinese China",lang:"zh_CN_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hant"},{name:"Chinese Taiwan",lang:"zh_TW_#Hant"},{name:"Alex"},{name:"Maged",lang:"ar-SA"},
{name:"Zuzana",lang:"cs-CZ"},{name:"Sara",lang:"da-DK"},{name:"Anna",lang:"de-DE"},{name:"Melina",lang:"el-GR"},{name:"Karen",lang:"en-AU"},{name:"Daniel",lang:"en-GB"},{name:"Moira",lang:"en-IE"},{name:"Samantha (Enhanced)",lang:"en-US"},{name:"Samantha",lang:"en-US"},{name:"Tessa",lang:"en-ZA"},{name:"Monica",lang:"es-ES"},{name:"Paulina",lang:"es-MX"},{name:"Satu",lang:"fi-FI"},{name:"Amelie",lang:"fr-CA"},{name:"Thomas",lang:"fr-FR"},{name:"Carmit",lang:"he-IL"},{name:"Lekha",lang:"hi-IN"},{name:"Mariska",
lang:"hu-HU"},{name:"Damayanti",lang:"id-ID"},{name:"Alice",lang:"it-IT"},{name:"Kyoko",lang:"ja-JP"},{name:"Yuna",lang:"ko-KR"},{name:"Ellen",lang:"nl-BE"},{name:"Xander",lang:"nl-NL"},{name:"Nora",lang:"no-NO"},{name:"Zosia",lang:"pl-PL"},{name:"Luciana",lang:"pt-BR"},{name:"Joana",lang:"pt-PT"},{name:"Ioana",lang:"ro-RO"},{name:"Milena",lang:"ru-RU"},{name:"Laura",lang:"sk-SK"},{name:"Alva",lang:"sv-SE"},{name:"Kanya",lang:"th-TH"},{name:"Yelda",lang:"tr-TR"},{name:"Ting-Ting",lang:"zh-CN"},{name:"Sin-Ji",
lang:"zh-HK"},{name:"Mei-Jia",lang:"zh-TW"},{name:"Microsoft David Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Zira Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Mark Mobile - English (United States)",lang:"en-US"},{name:"native",lang:""},{name:"Google espa\u00f1ol"},{name:"Google espa\u00f1ol de Estados Unidos"},{name:"Google fran\u00e7ais"},{name:"Google Bahasa Indonesia"},{name:"Google italiano"},{name:"Google Nederlands"},{name:"Google polski"},{name:"Google portugu\u00eas do Brasil"},
{name:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"},{name:"Google \u0939\u093f\u0928\u094d\u0926\u0940"},{name:"Google \u65e5\u672c\u8a9e"},{name:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-HK",rate:.25},{name:"Fallback Chinese (Hong Kong) Female",lang:"zh-HK",fallbackvoice:!0,service:"g1"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-TW",rate:.25},{name:"Fallback Chinese (Taiwan) Female",
lang:"zh-TW",fallbackvoice:!0,service:"g1"},{name:"Microsoft George Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Mobile - English (India)",lang:"en-In"},{name:"Microsoft Irina Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Mobile - German (Germany)",
lang:"de-DE"},{name:"Microsoft Helena Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
lang:"zh-CN"},{name:"Microsoft Elsa Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Helena",lang:"de-DE"},{name:"Catherine",lang:"en-AU"},{name:"Arthur",lang:"en-GB"},{name:"Martha",lang:"en-GB"},{name:"Marie",lang:"fr-FR"},{name:"O-ren",lang:"ja-JP"},{name:"Yu-shu",lang:"zh-CN"},{name:"Microsoft David - English (United States)",
lang:"en-US"},{name:"Microsoft Zira - English (United States)",lang:"en-US"},{name:"Microsoft Mark - English (United States)",lang:"en-US"},{name:"Microsoft George - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera - English (India)",lang:"en-In"},{name:"Microsoft Irina - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda - German (Germany)",lang:"de-DE"},
{name:"Microsoft Katja - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",
lang:"zh-CN"},{name:"Microsoft Elsa - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi - English (India)",
lang:"en-IN"},{name:"Microsoft Pablo - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang - Chinese (Simplified, PRC)",
lang:"zh-CN"},{name:"Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Hortense Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Mobile - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Mobile - German (Germany)",lang:"de-DE"},
{name:"Microsoft Ravi Mobile - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Mobile - Portuguese (Brazil)",lang:"pt-BR"},
{name:"Microsoft Pavel Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft David Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Zira Desktop - English (United States)",
lang:"en-US"},{name:"Microsoft Mark Desktop - English (United States)",lang:"en-US"},{name:"Microsoft George Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Desktop - English (India)",lang:"en-In"},{name:"Microsoft Irina Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Desktop - German (Germany)",
lang:"de-DE"},{name:"Microsoft Helena Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
lang:"zh-CN"},{name:"Microsoft Elsa Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Desktop - German (Germany)",
lang:"de-DE"},{name:"Microsoft Ravi Desktop - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Desktop - Portuguese (Brazil)",
lang:"pt-BR"},{name:"Microsoft Pavel Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"}];a.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);a.iOS9=/(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());
a.iOS10=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.iOS9plus=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase())||/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.is_chrome=-1<navigator.userAgent.indexOf("Chrome");a.is_safari=-1<navigator.userAgent.indexOf("Safari");a.is_chrome&&a.is_safari&&(a.is_safari=!1);a.is_opera=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");a.is_android=-1<navigator.userAgent.toLowerCase().indexOf("android");
a.iOS_initialized=!1;a.iOS9_initialized=!1;a.iOS10_initialized=!1;a.cache_ios_voices=[{name:"he-IL",voiceURI:"he-IL",lang:"he-IL"},{name:"th-TH",voiceURI:"th-TH",lang:"th-TH"},{name:"pt-BR",voiceURI:"pt-BR",lang:"pt-BR"},{name:"sk-SK",voiceURI:"sk-SK",lang:"sk-SK"},{name:"fr-CA",voiceURI:"fr-CA",lang:"fr-CA"},{name:"ro-RO",voiceURI:"ro-RO",lang:"ro-RO"},{name:"no-NO",voiceURI:"no-NO",lang:"no-NO"},{name:"fi-FI",voiceURI:"fi-FI",lang:"fi-FI"},{name:"pl-PL",voiceURI:"pl-PL",lang:"pl-PL"},{name:"de-DE",
voiceURI:"de-DE",lang:"de-DE"},{name:"nl-NL",voiceURI:"nl-NL",lang:"nl-NL"},{name:"id-ID",voiceURI:"id-ID",lang:"id-ID"},{name:"tr-TR",voiceURI:"tr-TR",lang:"tr-TR"},{name:"it-IT",voiceURI:"it-IT",lang:"it-IT"},{name:"pt-PT",voiceURI:"pt-PT",lang:"pt-PT"},{name:"fr-FR",voiceURI:"fr-FR",lang:"fr-FR"},{name:"ru-RU",voiceURI:"ru-RU",lang:"ru-RU"},{name:"es-MX",voiceURI:"es-MX",lang:"es-MX"},{name:"zh-HK",voiceURI:"zh-HK",lang:"zh-HK"},{name:"sv-SE",voiceURI:"sv-SE",lang:"sv-SE"},{name:"hu-HU",voiceURI:"hu-HU",
lang:"hu-HU"},{name:"zh-TW",voiceURI:"zh-TW",lang:"zh-TW"},{name:"es-ES",voiceURI:"es-ES",lang:"es-ES"},{name:"zh-CN",voiceURI:"zh-CN",lang:"zh-CN"},{name:"nl-BE",voiceURI:"nl-BE",lang:"nl-BE"},{name:"en-GB",voiceURI:"en-GB",lang:"en-GB"},{name:"ar-SA",voiceURI:"ar-SA",lang:"ar-SA"},{name:"ko-KR",voiceURI:"ko-KR",lang:"ko-KR"},{name:"cs-CZ",voiceURI:"cs-CZ",lang:"cs-CZ"},{name:"en-ZA",voiceURI:"en-ZA",lang:"en-ZA"},{name:"en-AU",voiceURI:"en-AU",lang:"en-AU"},{name:"da-DK",voiceURI:"da-DK",lang:"da-DK"},
{name:"en-US",voiceURI:"en-US",lang:"en-US"},{name:"en-IE",voiceURI:"en-IE",lang:"en-IE"},{name:"hi-IN",voiceURI:"hi-IN",lang:"hi-IN"},{name:"el-GR",voiceURI:"el-GR",lang:"el-GR"},{name:"ja-JP",voiceURI:"ja-JP",lang:"ja-JP"}];a.cache_ios9_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA",localService:!0,"default":!0},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ",localService:!0,"default":!0},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",
lang:"da-DK",localService:!0,"default":!0},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE",localService:!0,"default":!0},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR",localService:!0,"default":!0},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU",localService:!0,"default":!0},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB",localService:!0,"default":!0},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",
lang:"en-IE",localService:!0,"default":!0},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US",localService:!0,"default":!0},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US",localService:!0,"default":!0},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA",localService:!0,"default":!0},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES",localService:!0,"default":!0},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",
lang:"es-MX",localService:!0,"default":!0},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI",localService:!0,"default":!0},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA",localService:!0,"default":!0},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR",localService:!0,"default":!0},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL",localService:!0,"default":!0},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",
lang:"hi-IN",localService:!0,"default":!0},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU",localService:!0,"default":!0},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID",localService:!0,"default":!0},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT",localService:!0,"default":!0},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP",localService:!0,"default":!0},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",
lang:"ko-KR",localService:!0,"default":!0},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE",localService:!0,"default":!0},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL",localService:!0,"default":!0},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO",localService:!0,"default":!0},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL",localService:!0,"default":!0},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",
lang:"pt-BR",localService:!0,"default":!0},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT",localService:!0,"default":!0},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO",localService:!0,"default":!0},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU",localService:!0,"default":!0},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK",localService:!0,"default":!0},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",
lang:"sv-SE",localService:!0,"default":!0},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH",localService:!0,"default":!0},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR",localService:!0,"default":!0},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN",localService:!0,"default":!0},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK",localService:!0,"default":!0},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",
lang:"zh-TW",localService:!0,"default":!0}];a.cache_ios10_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",
lang:"de-DE"},{name:"Nikos (Enhanced)",voiceURI:"com.apple.ttsbundle.Nikos-premium",lang:"el-GR"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Nikos",voiceURI:"com.apple.ttsbundle.Nikos-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Daniel (Enhanced)",
voiceURI:"com.apple.ttsbundle.Daniel-premium",lang:"en-GB"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Nicky (Enhanced)",voiceURI:"com.apple.ttsbundle.siri_female_en-US_premium",lang:"en-US"},{name:"Samantha (Enhanced)",
voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",
lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",
lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",
lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",
lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",
lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.systemvoices=null;a.CHARACTER_LIMIT=100;a.VOICESUPPORT_ATTEMPTLIMIT=5;a.voicesupport_attempts=0;a.fallbackMode=!1;a.WORDS_PER_MINUTE=130;a.fallback_parts=null;a.fallback_part_index=
0;a.fallback_audio=null;a.fallback_playbackrate=1;a.def_fallback_playbackrate=a.fallback_playbackrate;a.fallback_audiopool=[];a.msgparameters=null;a.timeoutId=null;a.OnLoad_callbacks=[];a.useTimer=!1;a.utterances=[];a.tstCompiled=function(a){return eval("typeof xy === 'undefined'")};a.fallbackServicePath="https://code.responsivevoice.org/"+(a.tstCompiled()?"":"develop/")+"getvoice.php";a.default_rv=a.responsivevoices[0];a.debug=!1;a.rvsMapped=!1;a.log=function(b){a.debug&&console.log(b)};a.init=function(){a.is_android&&
(a.useTimer=!0);a.is_opera||"undefined"===typeof speechSynthesis?(console.log("RV: Voice synthesis not supported"),a.enableFallbackMode()):setTimeout(function(){var b=setInterval(function(){var c=window.speechSynthesis.getVoices();0!=c.length||null!=a.systemvoices&&0!=a.systemvoices.length?(console.log("RV: Voice support ready"),a.systemVoicesReady(c),clearInterval(b)):(console.log("Voice support NOT ready"),a.voicesupport_attempts++,a.voicesupport_attempts>a.VOICESUPPORT_ATTEMPTLIMIT&&(clearInterval(b),
null!=window.speechSynthesis?a.iOS?(a.iOS10?a.systemVoicesReady(a.cache_ios10_voices):a.iOS9?a.systemVoicesReady(a.cache_ios9_voices):a.systemVoicesReady(a.cache_ios_voices),console.log("RV: Voice support ready (cached)")):(console.log("RV: speechSynthesis present but no system voices found"),a.enableFallbackMode()):a.enableFallbackMode()))},100)},100);a.Dispatch("OnLoad")};a.systemVoicesReady=function(b){a.systemvoices=b;a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");
window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.enableFallbackMode=function(){a.fallbackMode=!0;console.log("RV: Enabling fallback mode");a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.getVoices=function(){for(var b=[],c=0;c<a.responsivevoices.length;c++)b.push({name:a.responsivevoices[c].name});return b};a.speak=
function(b,c,d){if(a.rvsMapped){var h=null;if(a.iOS9&&!a.iOS9_initialized)a.log("Initializing ios9"),setTimeout(function(){a.speak(b,c,d)},100),a.clickEvent(),a.iOS9_initialized=!0;else if(a.iOS10&&!a.iOS10_initialized)a.log("Initializing ios10"),setTimeout(function(){a.speak(b,c,d)},100),a.clickEvent(),a.iOS10_initialized=!0;else{a.isPlaying()&&(a.log("Cancelling previous speech"),a.cancel());a.fallbackMode&&0<a.fallback_audiopool.length&&a.clearFallbackPool();b=b.replace(/[\"\`]/gm,"'");a.msgparameters=
d||{};a.msgtext=b;a.msgvoicename=c;a.onstartFired=!1;var k=[];if(b.length>a.CHARACTER_LIMIT){for(var f=b;f.length>a.CHARACTER_LIMIT;){var g=f.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/),e="";if(-1==g||g>=a.CHARACTER_LIMIT)g=f.search(/,[^0-9]+/);-1==g&&-1==f.search(" ")&&(g=99);if(-1==g||g>=a.CHARACTER_LIMIT){var l=f.split(" ");for(g=0;g<l.length&&!(e.length+l[g].length+1>a.CHARACTER_LIMIT);g++)e+=(0!=g?" ":"")+l[g]}else e=f.substr(0,g+1);f=f.substr(e.length,f.length-e.length);
k.push(e)}0<f.length&&k.push(f)}else k.push(b);console.log(k);a.multipartText=k;null==c?(g=a.default_rv,a.setDefaultVoice(g.name)):g=a.getResponsiveVoice(c);!0===g.deprecated&&console.warn("ResponsiveVoice: Voice "+g.name+" is deprecated and will be removed in future releases");f={};if(null!=g.mappedProfile)f=g.mappedProfile;else if(f.systemvoice=a.getMatchedVoice(g),f.collectionvoice={},null==f.systemvoice){console.log("RV: ERROR: No voice found for: "+c);return}a.msgprofile=f;a.log("Voice picked: "+
a.msgprofile.systemvoice.name);a.utterances=[];for(g=0;g<k.length;g++)if(!a.fallbackMode&&a.getServiceEnabled(a.services.NATIVE_TTS))a.log("Using SpeechSynthesis"),h=a.services.NATIVE_TTS,e=new SpeechSynthesisUtterance,e.voiceURI=f.systemvoice.voiceURI,e.volume=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]),e.rate=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]),e.pitch=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]),e.text=k[g],e.lang=a.selectBest([f.collectionvoice.lang,
f.systemvoice.lang]),e.rvIndex=g,e.rvTotal=k.length,0==g&&(e.onstart=a.speech_onstart),a.msgparameters.onendcalled=!1,null!=d?(e.voice="undefined"!==typeof d.voice?d.voice:f.systemvoice,g<k.length-1&&1<k.length?(e.onend=a.onPartEnd,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.onPartEnd)):(e.onend=a.speech_onend,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.speech_onend)),e.onerror=d.onerror||function(b){a.log("RV: Unknow Error");a.log(b)},e.onpause=d.onpause,
e.onresume=d.onresume,e.onmark=d.onmark,e.onboundary=d.onboundary||a.onboundary,e.pitch=null!=d.pitch?d.pitch:e.pitch,e.rate=a.iOS?(null!=d.rate?d.rate*d.rate:1)*e.rate:(null!=d.rate?d.rate:1)*e.rate,e.volume=null!=d.volume?d.volume:e.volume):(a.log("No Params received for current Utterance"),e.voice=f.systemvoice,e.onend=a.speech_onend,e.onboundary=a.onboundary,e.onerror=function(b){a.log("RV: Unknow Error");a.log(b)}),a.utterances.push(e),0==g&&(a.currentMsg=e),console.log(e),a.tts_speak(e);else if(a.fallbackMode&&
a.getServiceEnabled(a.services.FALLBACK_AUDIO)){h=a.services.FALLBACK_AUDIO;a.fallback_playbackrate=a.def_fallback_playbackrate;e=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]);l=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]);var m=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]);if(null!=d){e*=null!=d.pitch?d.pitch:1;l*=null!=d.rate?d.rate:1;m*=null!=d.volume?d.volume:1;var n=d.extraParams||null}e/=2;l/=2;m*=2;e=Math.min(Math.max(e,0),
1);l=Math.min(Math.max(l,0),1);m=Math.min(Math.max(m,0),1);e=a.fallbackServicePath+"?t="+encodeURIComponent(k[g])+"&tl="+(f.collectionvoice.lang||f.systemvoice.lang||"en-US")+"&sv="+(f.collectionvoice.service||f.systemvoice.service||"")+"&vn="+(f.collectionvoice.voicename||f.systemvoice.voicename||"")+"&pitch="+e.toString()+"&rate="+l.toString()+"&vol="+m.toString();n&&(e+="&extraParams="+JSON.stringify(n));l=document.createElement("AUDIO");l.src=e;l.playbackRate=a.fallback_playbackrate;l.preload=
"auto";l.load();a.fallback_parts.push(l)}a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)&&(a.fallback_part_index=0,a.fallback_startPart());a.log("Service used: "+h)}}else setTimeout(function(){a.speak(b,c,d)},15)};a.startTimeout=function(b,c){var d=a.msgprofile.collectionvoice.timerSpeed;null==a.msgprofile.collectionvoice.timerSpeed&&(d=1);0>=d||(a.timeoutId=setTimeout(c,a.getEstimatedTimeLength(b,d)),a.log("Timeout ID: "+a.timeoutId))};a.checkAndCancelTimeout=function(){null!=a.timeoutId&&
(clearTimeout(a.timeoutId),a.timeoutId=null)};a.speech_timedout=function(){a.cancel();a.cancelled=!1;a.speech_onend()};a.speech_onend=function(){a.checkAndCancelTimeout();!0===a.cancelled?a.cancelled=!1:(a.log("on end fired"),null!=a.msgparameters&&null!=a.msgparameters.onend&&1!=a.msgparameters.onendcalled&&(a.log("Speech on end called  -"+a.msgtext),a.msgparameters.onendcalled=!0,a.msgparameters.onend()))};a.speech_onstart=function(){if(!a.onstartFired){a.onstartFired=!0;a.log("Speech start");if(a.iOS||
a.is_safari||a.useTimer)a.fallbackMode||a.startTimeout(a.msgtext,a.speech_timedout);a.msgparameters.onendcalled=!1;if(null!=a.msgparameters&&null!=a.msgparameters.onstart)a.msgparameters.onstart()}};a.fallback_startPart=function(){0==a.fallback_part_index&&a.speech_onstart();a.fallback_audio=a.fallback_parts[a.fallback_part_index];if(null==a.fallback_audio)a.log("RV: Fallback Audio is not available");else{var b=a.fallback_audio;a.fallback_audiopool.push(b);setTimeout(function(){b.playbackRate=a.fallback_playbackrate},
50);b.onloadedmetadata=function(){b.play();b.playbackRate=a.fallback_playbackrate};a.fallback_errors&&(a.log("RV: Speech cancelled due to errors"),a.speech_onend());a.fallback_audio.play();a.fallback_audio.addEventListener("ended",a.fallback_finishPart);a.useTimer&&a.startTimeout(a.multipartText[a.fallback_part_index],a.fallback_finishPart)}};a.isFallbackAudioPlaying=function(){var b;for(b=0;b<a.fallback_audiopool.length;b++){var c=a.fallback_audiopool[b];if(!c.paused&&!c.ended&&c.currentTime!=c.duration)return!0}return!1};
a.fallback_finishPart=function(b){a.isFallbackAudioPlaying()?(a.checkAndCancelTimeout(),a.timeoutId=setTimeout(a.fallback_finishPart,1E3*(a.fallback_audio.duration-a.fallback_audio.currentTime))):(a.checkAndCancelTimeout(),a.fallback_part_index<a.fallback_parts.length-1?(a.fallback_part_index++,a.fallback_startPart()):a.speech_onend())};a.cancel=function(){a.checkAndCancelTimeout();a.fallbackMode?(null!=a.fallback_audio&&a.fallback_audio.pause(),a.clearFallbackPool()):(a.cancelled=!0,speechSynthesis.cancel())};
a.voiceSupport=function(){return"speechSynthesis"in window};a.OnFinishedPlaying=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onend)a.msgparameters.onend()};a.setDefaultVoice=function(b){if(a.rvsMapped){var c=a.getResponsiveVoice(b);null!=c&&(a.default_rv=c)}else setTimeout(function(){a.setDefaultVoice(b)},15)};a.mapRVs=function(){for(var b=0;b<a.responsivevoices.length;b++)for(var c=a.responsivevoices[b],d=0;d<c.voiceIDs.length;d++){var h=a.voicecollection[c.voiceIDs[d]];if(1!=h.fallbackvoice){var k=
a.getSystemVoice(h.name);if(null!=k){c.mappedProfile={systemvoice:k,collectionvoice:h};break}}else{c.mappedProfile={systemvoice:{},collectionvoice:h};break}}a.rvsMapped=!0};a.getMatchedVoice=function(b){for(var c=0;c<b.voiceIDs.length;c++){var d=a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);if(null!=d)return d}return null};a.getSystemVoice=function(b){var c=String.fromCharCode(160);var d=b.replace(new RegExp("\\s+|"+c,"g"),"");if("undefined"===typeof a.systemvoices||null===a.systemvoices)return null;
for(var h=0;h<a.systemvoices.length;h++)if(0===a.systemvoices[h].name.localeCompare(b)||0===a.systemvoices[h].name.replace(new RegExp("\\s+|"+c,"g"),"").replace(/ *\([^)]*\) */g,"").localeCompare(d))return a.systemvoices[h];return null};a.getResponsiveVoice=function(b){for(var c=0;c<a.responsivevoices.length;c++)if(a.responsivevoices[c].name==b)return!0===a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice||!0===a.fallbackMode?(a.fallbackMode=!0,a.fallback_parts=[]):a.fallbackMode=!1,
a.responsivevoices[c];return null};a.Dispatch=function(b){if(a.hasOwnProperty(b+"_callbacks")&&null!=a[b+"_callbacks"]&&0<a[b+"_callbacks"].length){for(var c=a[b+"_callbacks"],d=0;d<c.length;d++)c[d]();return!0}var h=b+"_callbacks_timeout",k=b+"_callbacks_timeoutCount";a.hasOwnProperty(h)||(a[k]=10,a[h]=setInterval(function(){--a[k];(a.Dispatch(b)||0>a[k])&&clearTimeout(a[h])},50));return!1};a.AddEventListener=function(b,c){a.hasOwnProperty(b+"_callbacks")||(a[b+"_callbacks"]=[]);a[b+"_callbacks"].push(c)};
a.addEventListener=a.AddEventListener;a.clickEvent=function(){if(a.iOS&&!a.iOS_initialized){a.log("Initializing iOS click event");var b=new SpeechSynthesisUtterance(" ");speechSynthesis.speak(b);a.iOS_initialized=!0}};a.isPlaying=function(){return a.fallbackMode?null!=a.fallback_audio&&!a.fallback_audio.ended&&!a.fallback_audio.paused:speechSynthesis.speaking};a.clearFallbackPool=function(){for(var b=0;b<a.fallback_audiopool.length;b++)null!=a.fallback_audiopool[b]&&(a.fallback_audiopool[b].pause(),
a.fallback_audiopool[b].src="");a.fallback_audiopool=[]};"interactive"===document.readyState?a.init():document.addEventListener("DOMContentLoaded",function(){a.init()});a.selectBest=function(a){for(var b=0;b<a.length;b++)if(null!=a[b])return a[b];return null};a.pause=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.pause():speechSynthesis.pause()};a.resume=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.play():speechSynthesis.resume()};a.tts_speak=function(b){setTimeout(function(){a.cancelled=
!1;speechSynthesis.speak(b)},.01)};a.setVolume=function(b){if(a.isPlaying())if(a.fallbackMode){for(var c=0;c<a.fallback_parts.length;c++)a.fallback_parts[c].volume=b;for(c=0;c<a.fallback_audiopool.length;c++)a.fallback_audiopool[c].volume=b;a.fallback_audio.volume=b}else for(c=0;c<a.utterances.length;c++)a.utterances[c].volume=b};a.onPartEnd=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onchuckend)a.msgparameters.onchuckend();a.Dispatch("OnPartEnd");b=a.utterances.indexOf(b.utterance);
a.currentMsg=a.utterances[b+1]};a.onboundary=function(b){a.log("On Boundary");a.iOS&&!a.onstartFired&&a.speech_onstart()};a.numToWords=function(b){function c(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var d=function(){return function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var c=[],e=!0,d=!1,f=void 0;try{for(var g=a[Symbol.iterator](),h;!(e=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);e=!0);}catch(r){d=
!0,f=r}finally{try{if(!e&&g["return"])g["return"]()}finally{if(d)throw f;}}return c}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}(),h=function(a){return 0===a.length},k=function(a){return function(b){return b.slice(0,a)}},f=function(a){return function(b){return b.slice(a)}},g=function(a){return a.slice(0).reverse()},e=function(a){return function(b){return function(c){return a(b(c))}}},l=function(a){return!a},m=function q(a){return function(b){return h(b)?[]:[k(a)(b)].concat(c(q(a)(f(a)(b))))}},
n=" one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),p="  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),t=" thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),u=function(a){var b=d(a,3);a=b[0];var c=b[1];b=b[2];return[0===(Number(b)||0)?"":n[b]+" hundred ",0===(Number(a)||0)?p[c]:p[c]&&p[c]+" "||"",n[c+a]||n[a]].join("")},v=function(a,
b){return""===a?a:a+" "+t[b]};return"number"===typeof b?a.numToWords(String(b)):"0"===b?"zero":e(m(3))(g)(Array.from(b)).map(u).map(v).filter(e(l)(h)).reverse().join(" ").trim()};a.getWords=function(b){var c=b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);c=c.filter(function(a){return/[^\s]/.test(a)});for(var d=0;d<c.length;d++)null!=(b=c[d].toString().match(/\d+/))&&(c.splice(d,1),a.numToWords(+b[0]).split(/\s+/).map(function(a){c.push(a)}));return c};a.getEstimatedTimeLength=function(b,c){var d=a.getWords(b),
h=0,k=a.fallbackMode?1300:700;c=c||1;d.map(function(a,b){h+=(a.toString().match(/[^ ]/igm)||a).length});var f=d.length,g=60/a.WORDS_PER_MINUTE*c*1E3*f;5>f&&(g=c*(k+50*h));a.log("Estimated time length: "+g+" ms, words: ["+d+"], charsCount: "+h);return g};a.services={NATIVE_TTS:0,FALLBACK_AUDIO:1};a.servicesPriority=[0,1];a.servicesEnabled=[];a.setServiceEnabled=function(b,c){a.servicesEnabled[b]=c};a.getServiceEnabled=function(b){return a.servicesEnabled[b]||!1};a.setServiceEnabled(a.services.NATIVE_TTS,
!0);a.setServiceEnabled(a.services.FALLBACK_AUDIO,!0)};responsiveVoice=new ResponsiveVoice};


$(document).ready(function($) {

    // if (bvi['bvi_setting'].BviPanelActive == 1) {
    //     $().bvi('Active', bvi['bvi_setting']);
    // } else {
    //     $('.bvi-panel-open').bvi('Init', bvi['bvi_setting']);
    // }

    // $('.bvi-panel-open').bvi('Init');
});


$(document).ready(function($) {
    $('.bvi-panel-open').bvi('Init',
        {
            "BviPanel" : "1",
            "BviPanelBg" : "white",
            "BviPanelFontSize" : "12",
            "BviPanelLetterSpacing" : "normal",
            "BviPanelLineHeight" : "normal",
            "BviPanelImg" : "1",
            "BviPanelImgXY" : "1",
            "BviPanelReload" : "0",
            "BviCloseClassAndId" : ".hide-screen-fixed",
            "BviFixPanel" : "1",
            "BviPlay" : "1"
        });
});
/*!
 * Button visually impaired v1.0.6
 */
(function($) {
    var method = {
        BviConsoleLog: function (setting, fun, param) {
            if (setting == 1 ) {
                $.each(param, function (id, value) {
                    console.log('console.log.bvi - ' + fun + ' | [' + id + ' - (' + value + ')]');
                });

            } else {
                console.log('Bvi [console.log.bvi - off]');
            }
        },
        Init: function(setting) {
            var selector = $(this).selector;
            var setting = $.extend({
                BviPanel: 1,
                BviPanelActive: 0,
                BviPanelBg: "white",
                BviPanelFontFamily: "default",
                BviPanelFontSize: "12",
                BviPanelLetterSpacing: "normal",
                BviPanelLineHeight: "normal",
                BviPanelImg: 1,
                BviPanelImgXY: 1,
                BviPanelReload: 0,
                BviPanelText: 'Версия для слабовидящих',
                BviPanelCloseText: 'Обычная версия сайта',
                BviCloseClassAndId: '',
                BviFixPanel: 1,
                BviPlay: 0,
                BviFlash: 0,
                BviConsoleLog: 1,
                BviPanelHide: 0
            }, setting);

            console.log('Button visually impaired v1.0.6');

            function BviOn() {

                if (Cookies.get("bvi-panel") == '1') {
                    $('*').each(function () {
                        if (!$(this).attr('data-bvi-original')) $(this).attr('data-bvi-original', $(this).attr('style'));
                    });
                    BviPanel();
                    method.Bvi(setting);
                }
            }

            BviOn();

            function BviPanel() {
                $(selector).addClass('bvi-hide');
                $('.bvi-panel-open-menu').addClass('bvi-hide');
                $(selector).after($('<a href="#" class="bvi-panel-close" title="'+setting.BviPanelCloseText+'"><i class="bvi-glyphicon bvi-glyphicon-eye-close"></i> '+setting.BviPanelCloseText+'</a>'));
                $('.bvi-panel-open-menu').after($('<li class="bvi-panel-close"><a href="#" class="bvi-panel-close" title="'+setting.BviPanelCloseText+'"> '+setting.BviPanelCloseText+'</a></li>'));
                $(setting.BviCloseClassAndId).hide();
                $('body').wrapInner('<div class="bvi-body"></div>');//wrapInner
                $('<div class="bvi-panel"></div>').prependTo("body");
                var scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (setting.BviFixPanel == '1') {
                    if (scroll > 99) {
                        $(".bvi-panel").addClass("bvi-panel-fixed");
                    }

                    $(window).scroll(function () {
                        if ($(this).scrollTop() >= 99) {
                            $(".bvi-panel").addClass("bvi-panel-fixed");
                            $(".bvi-panel").css({
                                "left": 0,
                                "top": 0,
                                "right": 0,
                                "margin-left": "auto",
                                "margin-right": "auto",
                                "position": "fixed",
                                "z-index": 999999,
                                "margin-bottom": "20px"
                            });
                            $('.bvi-title').hide();
                            $('#bvi-color-text').hide();
                            $('#bvi-img-text').hide();
                            $('#bvi-size-text').hide();
                            $('#bvi-size-number').hide();
                        } else {
                            $(".bvi-panel").removeClass("bvi-panel-fixed");
                            $(".bvi-panel").removeAttr("style");
                            $('.bvi-title').show();
                            $('#bvi-color-text').show();
                            $('#bvi-img-text').show();
                            $('#bvi-size-text').show();
                            $('#bvi-size-number').show();
                        }
                    });
                }

                $('<div class="bvi-container">'+
                    '<div class="bvi-row">'+
                    '<div class="bvi-panel-menu">'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-12 bvi-bg bvi-animated bvi-slideInDown">'+
                    '<div class="bvi-row">'+
                    '<div class="bvi-col-xs-6 bvi-col-sm-6 bvi-col-md-2 bvi-col-lg-2 bvi-vertical">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Размер шрифта</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-font-size-minus" class="bvi-btn bvi-btn-default" title="Уменьшить шрифт"><i class="bvi-glyphicon bvi-glyphicon-font"></i><b>-</b></a>'+
                    '<a href="#" id="bvi-font-size-plus" class="bvi-btn bvi-btn-default" title="Увеличить шрифт"><i class="bvi-glyphicon bvi-glyphicon-font"></i><b>+</b></a>'+
                    '</div>'+
                    '<div class="bvi-title-text"><span id="bvi-size-number"></span> <span id="bvi-size-text"></span></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-6 bvi-col-sm-6 bvi-col-md-4 bvi-col-lg-3 bvi-vertical">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Цвета сайта</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-color-white" class="bvi-btn bvi-btn-white" title="Цвет сайта: Черным по белому"><i class="bvi-glyphicon bvi-glyphicon-font"></i></a>'+
                    '<a href="#" id="bvi-color-black" class="bvi-btn bvi-btn-black" title="Цвет сайта: Белым по черному"><i class="bvi-glyphicon bvi-glyphicon-font"></i></a>'+
                    '<a href="#" id="bvi-color-blue" class="bvi-btn bvi-btn-blue" title="Цвет сайта: Темно-синим по голубому"><i class="bvi-glyphicon bvi-glyphicon-font"></i></a>'+
                    '<a href="#" id="bvi-color-brown" class="bvi-btn bvi-btn-brown" title="Цвет сайта: Коричневым по бежевому"><i class="bvi-glyphicon bvi-glyphicon-font"></i></a>'+
                    '<a href="#" id="bvi-color-green" class="bvi-btn bvi-btn-green" title="Цвет сайта: Зеленым по темно-коричневому"><i class="bvi-glyphicon bvi-glyphicon-font"></i></a>'+
                    '</div>'+
                    '<div class="bvi-title-text"><span id="bvi-color-text"></span></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-6 bvi-col-sm-6 bvi-col-md-3 bvi-col-lg-3 bvi-vertical">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Изображения</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-img-on" class="bvi-btn bvi-btn-default" title="Включить" style="color: green"><i class="bvi-glyphicon bvi-glyphicon-picture"></i></a>'+
                    '<a href="#" id="bvi-img-off" class="bvi-btn bvi-btn-default" title="Выключить" style="color: red"><i class="bvi-glyphicon bvi-glyphicon-picture"></i></a>'+
                    '<a href="#" id="bvi-img-grayscale" class="bvi-btn bvi-btn-default" title="Черно-белые"><i class="bvi-glyphicon bvi-glyphicon-adjust"></i></a>'+
                    '</div>'+
                    '<div class="bvi-title-text"><span id="bvi-img-text"></span></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-6 bvi-col-sm-6 bvi-col-md-4 bvi-col-lg-4">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Дополнительно</div>'+
                    '<div class="bvi-btn-group">'+
                    //'<div class="bvi-btn-toolbar">'+
                    '<a href="#" id="bvi-voice-off" class="bvi-btn bvi-btn-default" title="Синтез речи"><i class="bvi-glyphicon bvi-glyphicon-volume-off"></i></a>'+
                    '<a href="#" id="bvi-voice-on" class="bvi-btn bvi-btn-default" title="Синтез речи"><i class="bvi-glyphicon bvi-glyphicon-volume-up"></i></a>'+
                    ///'</div>'+
                    '<a href="#" id="bvi-settings" class="bvi-btn bvi-btn-default" title="Настройки"><i class="bvi-glyphicon bvi-glyphicon-cog"></i> Настройки</a>'+
                    '<a href="#" id="bvi-close" class="bvi-btn bvi-btn-default" title="Обычная версия сайта"><i class="bvi-glyphicon bvi-glyphicon-eye-close"></i></a>'+
                    '<a href="#" id="bvi-panel-hide" class="bvi-btn bvi-btn-default" title="Свернуть панель для слабовидящих"><i class="bvi-glyphicon bvi-glyphicon-arrow-up"></i></a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-row">'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-12">'+
                    '<div class="bvi-settings">'+
                    '<hr>'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-4">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Кернинг</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-letter-spacing-normal" class="bvi-btn bvi-btn-default" title="Стандартный">Стандартный</a>'+
                    '<a href="#" id="bvi-letter-spacing-average" class="bvi-btn bvi-btn-default" title="Средний">Средний</a>'+
                    '<a href="#" id="bvi-letter-spacing-big" class="bvi-btn bvi-btn-default" title="Большой">Большой</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-4">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Интервал</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-line-height-normal" class="bvi-btn bvi-btn-default" title="Одинарный">Одинарный</a>'+
                    '<a href="#" id="bvi-line-height-average" class="bvi-btn bvi-btn-default" title="Полуторный">Полуторный</a>'+
                    '<a href="#" id="bvi-line-height-big" class="bvi-btn bvi-btn-default" title="Двойной">Двойной</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-4">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-title-header">Гарнитура</div>'+
                    '<div class="bvi-btn-group">'+
                    '<a href="#" id="bvi-font-family-default" class="bvi-btn bvi-btn-default" title="Без засечек">Без засечек</a>'+
                    //'<a href="#" id="bvi-font-family-arial" class="bvi-btn bvi-btn-default" title="Без засечек">Без засечек</a>'+
                    '<a href="#" id="bvi-font-family-times-new-roman" class="bvi-btn bvi-btn-default" title="С засечками">С засечками</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-12">'+
                    '<div class="bvi-rows">'+
                    '<div class="bvi-btn-toolbar bvi-left">'+
                    '<a href="#" id="bvi-flash-on" class="bvi-btn bvi-btn-default" title="Включить Фрейм"><i class="bvi-glyphicon bvi-glyphicon-flash"></i> Включить Фрейм</a>'+
                    '<a href="#" id="bvi-flash-off" class="bvi-btn bvi-btn-default" title="Отключить Фрейм"><i class="bvi-glyphicon bvi-glyphicon-flash"></i> Выключить Фрейм</a>'+
                    '<a href="#" id="bvi-settings-default" class="bvi-btn bvi-btn-default" title="Вернуть стандартные настройки"><i class="bvi-glyphicon bvi-glyphicon-refresh"></i> Вернуть стандартные настройки</a>'+
                    '<a href="#" id="bvi-close" class="bvi-btn bvi-btn-default" title="Обычная версия сайта"><i class="bvi-glyphicon bvi-glyphicon-eye-close"></i> Обычная версия сайта</a>'+
                    '</div>'+
                    '<div class="bvi-btn-toolbar bvi-right">'+
                    '<a href="#" id="bvi-settings-close" class="bvi-btn bvi-btn-default" title="Закрыть"><i class="bvi-glyphicon bvi-glyphicon-remove"></i> Закрыть</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-col-xs-12 bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-12">'+
                    '<div class="bvi-rows">'+

                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="bvi-panel-show"><a href="#" id="bvi-panel-show" class="bvi-btn-panel-show" title="Показать панель для слабовидящих"><i class="bvi-glyphicon bvi-glyphicon-eye"></i></a></div>'+
                    '</div>'+
                    '</div>').appendTo(".bvi-panel");
            }

            if (setting.BviPanelActive == 0 ) {
                $('.bvi-panel-open-menu,'+selector).click( function () {
                    Cookies.set("bvi-selector", selector, {
                        path: "/"
                    });
                    Cookies.set("bvi-panel", setting.BviPanel, {
                        path: "/"
                    });
                    Cookies.set("bvi-bgcolor", setting.BviPanelBg, {
                        path: "/"
                    });
                    Cookies.set("bvi-font-size", setting.BviPanelFontSize, {
                        path: "/"
                    });
                    Cookies.set("bvi-letter-spacing", setting.BviPanelLetterSpacing, {
                        path: "/"
                    });
                    Cookies.set("bvi-line-height", setting.BviPanelLineHeight, {
                        path: "/"
                    });
                    Cookies.set("bvi-font-family", setting.BviPanelFontFamily, {
                        path: "/"
                    });
                    Cookies.set("bvi-img", setting.BviPanelImg, {
                        path: "/"
                    });
                    Cookies.set("bvi-reload", setting.BviPanelReload, {
                        path: "/"
                    });
                    Cookies.set("bvi-img-XY", setting.BviPanelImgXY, {
                        path: "/"
                    });
                    Cookies.set("bvi-reload", setting.BviPanelReload, {
                        path: "/"
                    });
                    Cookies.set("bvi-voice", setting.BviPlay, {
                        path: "/"
                    });
                    Cookies.set("bvi-flash", setting.BviFlash, {
                        path: "/"
                    });
                    Cookies.set("bvi-console-log", setting.BviConsoleLog, {
                        path: "/"
                    });
                    Cookies.set("bvi-panel-hide", setting.BviPanelHide, {
                        path: "/"
                    });
                    if (Cookies.get("bvi-voice") == '1') {
                        responsiveVoice.speak("Версия сайта для слабовидящих", "Russian Female");
                    }
                    BviOn();
                    return false;
                });
            }
        },
        Bvi: function (setting) {
            function BviBgColor() {
                if (Cookies.get("bvi-bgcolor") == 'white') {
                    $('.bvi-body').addClass('bvi-color-white');
                    $('.bvi-btn-white').addClass('active');
                    BviReturnSet({
                        backgroundcolor: "#ffffff",
                        color: "#000000"
                    });
                    $('#bvi-color-text').html('Черным по белому');
                } else {
                    $('.bvi-body').removeClass('bvi-color-white');
                    $('.bvi-btn-white').removeClass('active');
                }

                if (Cookies.get("bvi-bgcolor") == 'black') {
                    $('.bvi-body').addClass('bvi-color-black');
                    $('.bvi-btn-black').addClass('active');
                    BviReturnSet({
                        backgroundcolor: "#000000",
                        color: "#ffffff"
                    });
                    $('#bvi-color-text').html('Белым по черному');
                } else {
                    $('.bvi-body').removeClass('bvi-color-black');
                    $('.bvi-btn-black').removeClass('active');
                }

                if (Cookies.get("bvi-bgcolor") == 'blue') {
                    $('.bvi-body').addClass('bvi-color-blue');
                    $('.bvi-btn-blue').addClass('active');
                    BviReturnSet({
                        backgroundcolor: "#9DD1FF",
                        color: "#063462"
                    });
                    $('#bvi-color-text').html('Темно-синим по голубому');
                } else {
                    $('.bvi-body').removeClass('bvi-color-blue');
                    $('.bvi-btn-blue').removeClass('active');
                }

                if (Cookies.get("bvi-bgcolor") == 'brown') {
                    $('.bvi-body').addClass('bvi-color-brown');
                    $('.bvi-btn-brown').addClass('active');
                    BviReturnSet({
                        backgroundcolor: "#f7f3d6",
                        color: "#4d4b43"
                    });
                    $('#bvi-color-text').html('Коричневым по бежевому');
                } else {
                    $('.bvi-body').removeClass('bvi-color-brown');
                    $('.bvi-btn-brown').removeClass('active');
                }

                if (Cookies.get("bvi-bgcolor") == 'green') {
                    $('.bvi-body').addClass('bvi-color-green');
                    $('.bvi-btn-green').addClass('active');
                    BviReturnSet({
                        backgroundcolor: "#3B2716",
                        color: "#A9E44D"
                    });
                    $('#bvi-color-text').html('Зеленым по темно-коричневому');
                } else {
                    $('.bvi-body').removeClass('bvi-color-green');
                    $('.bvi-btn-green').removeClass('active');
                }
            }

            function BviPanelHide() {
                if (Cookies.get("bvi-panel-hide") == '1') {
                    $('.bvi-panel-menu').hide();//slideToggle("slow");
                    $('#bvi-panel-hide').show();
                    $('#bvi-panel-show').show();
                } else {
                    $('.bvi-panel-menu').show();
                    $('#bvi-panel-show').hide();
                }

            }
            function BviFontSize() {
                size = Cookies.get("bvi-font-size");
                if (size <= 100){
                    BviReturnSet({
                        fontsize: size
                    });
                }
            }

            function BviLetterSpacing() {
                if (Cookies.get("bvi-letter-spacing") === "normal") {
                    $("#bvi-letter-spacing-normal").addClass("active");
                    BviReturnSet({
                        letterspacing: "0px"
                    })
                } else {
                    $("#bvi-letter-spacing-normal").removeClass("active")
                }
                if (Cookies.get("bvi-letter-spacing") === "average") {
                    $("#bvi-letter-spacing-average").addClass("active");
                    BviReturnSet({
                        letterspacing: "2px"
                    })
                } else {
                    $("#bvi-letter-spacing-average").removeClass("active")
                }
                if (Cookies.get("bvi-letter-spacing") === "big") {
                    $("#bvi-letter-spacing-big").addClass("active");
                    BviReturnSet({
                        letterspacing: "4px"
                    })
                } else {
                    $("#bvi-letter-spacing-big").removeClass("active")
                }
            }

            function BviLineHeight() {
                if (Cookies.get("bvi-line-height") === "normal") {
                    $("#bvi-line-height-normal").addClass("active");
                    BviReturnSet({
                        lineheight: "1.5"
                    })
                } else {
                    $("#bvi-line-height-normal").removeClass("active")
                }
                if (Cookies.get("bvi-line-height") === "average") {
                    $("#bvi-line-height-average").addClass("active");
                    BviReturnSet({
                        lineheight: "2"
                    })
                } else {
                    $("#bvi-line-height-average").removeClass("active")
                }
                if (Cookies.get("bvi-line-height") === "big") {
                    $("#bvi-line-height-big").addClass("active");
                    BviReturnSet({
                        lineheight: "2.5"
                    })
                } else {
                    $("#bvi-line-height-big").removeClass("active")
                }
            }

            function BviFontFamily() {
                if (Cookies.get("bvi-font-family") == "arial") {
                    $("#bvi-font-family-arial").addClass("active");
                    BviReturnSet({
                        fontfamily: "Arial, sans-serif"
                    })
                } else {
                    $("#bvi-font-family-arial").removeClass("active")
                }
                if (Cookies.get("bvi-font-family") == "times") {
                    $("#bvi-font-family-times-new-roman").addClass("active");
                    BviReturnSet({
                        fontfamily: 'Times New roman'
                    })
                } else {
                    $("#bvi-font-family-times-new-roman").removeClass("active")
                }
                if (Cookies.get("bvi-font-family") == "default") {
                    $("#bvi-font-family-default").addClass("active");
                    BviReturnSet({
                        fontfamily: ''
                    })
                } else {
                    $("#bvi-font-family-default").removeClass("active")
                }
            }

            function BviFlash() {
                if (Cookies.get("bvi-flash") == 1) {
                    $('#bvi-flash-off').show();
                    $('#bvi-flash-on').hide();
                    $('iframe,video').show();
                } else {
                    $('#bvi-flash-on').show();
                    $('#bvi-flash-off').hide();
                    $('iframe,video').hide();
                }
            }

            function BviReturnSet(setting) {
                $("body, body *").not(".bvi-panel, .bvi-panel *, .fa, .glyphicon, .dashicons, .bvi-glyphicon").each(function () {
                    $(this).css({
                        "font-family": setting.fontfamily,
                        "background-color": setting.backgroundcolor,
                        "background-image": "none",
                        "color": setting.color,
                        "font-size": setting.fontsize + 'pt',
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "letter-spacing": setting.letterspacing,
                        "border-color": setting.color,
                        "line-height": setting.lineheight
                    });
                });
                $("body").css({
                    "margin": "0px",
                    "padding": "0px"
                });

                var numbers = String(setting.fontsize);
                var numbers = numbers.charAt(numbers.length-1);
                var numbers = parseInt(numbers, 10);

                if (numbers == 1) {
                    var _numbers = 'пункт';
                } else if ((numbers > 1) && (numbers < 5)) {
                    var _numbers = 'пункта';
                } else {
                    var _numbers = 'пунктов';
                }

                $('#bvi-size-number').text(setting.fontsize);
                $('#bvi-size-text').text(_numbers);

            }
            
            function BviImg() {
                if (Cookies.get("bvi-img") == '1') {

                    $("#bvi-img-on").addClass('active');
                    $("#bvi-img-grayscale").removeClass('active');
                    $("#bvi-img-off").removeClass('active');

                    $(".bvi-img-grayscale").remove();
                    $(".bvi-img-off").remove();
                    $(".bvi-img-on").remove();

                    $("img").each(function() {
                        $(".bvi-img-grayscale").remove();
                        $(".bvi-img-off").remove();
                        $(this).show();
                    });
                    $('#bvi-img-text').html('Включены');
                } else if (Cookies.get("bvi-img") == '0') {

                    $("#bvi-img-off").addClass('active');
                    $("#bvi-img-grayscale").removeClass('active');
                    $("#bvi-img-on").removeClass('active');

                    $(".bvi-img-on").remove();
                    $(".bvi-img-off").remove();
                    $(".bvi-img-grayscale").remove();

                    $("img").each(function() {
                        var alt = this.alt || 'Нет описания к изображению';
                        var imgClass = $(this).attr("class") || '';
                        var imgId = $(this).attr("id") || 'bvi-img-off';
                        $(this).hide();
                        if (Cookies.get("bvi-img-XY") == '1') {
                            $(this).after($('<div class="bvi-img-off '+imgClass+'" id="'+imgId+'" style="width: ' + $(this).width() + "px; height: " + $(this).height() + 'px">').html(alt))
                        } else {
                            $(this).after($('<div class="bvi-img-off">').text(alt))
                        }
                    });
                    $('#bvi-img-text').html('Выключены');
                } else if (Cookies.get("bvi-img") == 'grayScale') {

                    $("#bvi-img-grayscale").addClass('active');
                    $("#bvi-img-off").removeClass('active');
                    $("#bvi-img-on").removeClass('active');

                    $(".bvi-img-on").remove();
                    $(".bvi-img-off").remove();
                    $(".bvi-img-grayscale").remove();

                    $("img").each(function() {
                        var alt = this.alt || 'Нет описания к изображению';
                        var src = this.src;
                        var imgClass = $(this).attr("class") || 'bvi-class';
                        var imgId = $(this).attr("id") || 'bvi-img-off';

                        $(this).hide();
                        $(this).after($('<img src="'+src+'" alt="'+alt+'" id="bvi-img-grayscale '+imgId+'" class="bvi-img-grayscale '+imgClass+'">'));
                    });

                    $('#bvi-img-text').html('Черно-белые');
                } else {
                    $("img").each(function() {
                        $(".bvi-img-grayscale").remove();
                        $(".bvi-img-off").remove();
                        $(this).show();
                    });
                }
            }

            function BviVoice() {
                if (Cookies.get("bvi-voice") === '1') {
                    $('#bvi-voice-on').hide();
                    $('#bvi-voice-off').show();
                    function getSelectionText() {
                        var text = "";
                        if (window.getSelection) {
                            text = window.getSelection().toString();
                        } else if (document.selection && document.selection.type != "Control") {
                            text = document.selection.createRange().text;
                        }
                        return text;
                    }
                    /*
                    $(document).mouseup(function () {
                        setTimeout(function () {
                            responsiveVoice.cancel();
                            responsiveVoice.speak(getSelectionText(), "Russian Female");
                        }, 1);
                        return false;
                    });
                    */
                } else {
                    responsiveVoice.cancel();
                    $('#bvi-voice-on').show();
                    $('#bvi-voice-off').hide();
                }
            }

            $("#bvi-close, .bvi-panel-close").click(function() {
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Обычная версия сайта", "Russian Female");
                }

                $('.bvi-animated').removeClass('bvi-slideInDown').addClass('bvi-fadeOutUp');

                $('*').each(function(){
                    $(this).removeAttr("style",'font-family');
                    $(this).removeAttr("style",'background-color');
                    $(this).removeAttr("style",'background-image');
                    $(this).removeAttr("style",'color');
                    $(this).removeAttr("style",'font-size');
                    $(this).removeAttr("style",'box-shadow');
                    $(this).removeAttr("style",'text-shadow');
                    $(this).removeAttr("style",'letter-spacing');
                    $(this).removeAttr("style",'border-color');
                    $(this).attr("style",$(this).attr('data-bvi-original'));
                    $(this).removeAttr('data-bvi-original');
                });

                $(setting.BviCloseClassAndId).show();
                $('.bvi-panel-open-menu').removeClass('bvi-hide');
                $(Cookies.get("bvi-selector")).removeClass('bvi-hide');
                $(".bvi-panel, .bvi-panel-close").remove();
                $(".bvi-img-off").remove();
                $(".bvi-img-grayscale").remove();
                $('body > .bvi-body').contents().unwrap();

                if (Cookies.get("bvi-reload") == "1") {
                    document.location.reload(true);
                }

                Cookies.remove("bvi-selector", {
                    path: "/"
                });

                Cookies.remove("bvi-panel", {
                    path: "/"
                });

                Cookies.remove("bvi-bgcolor", {
                    path: "/"
                });

                Cookies.remove("bvi-font-size", {
                    path: "/"
                });

                Cookies.remove("bvi-letter-spacing", {
                    path: "/"
                });

                Cookies.remove("bvi-line-height", {
                    path: "/"
                });

                Cookies.remove("bvi-font-family", {
                    path: "/"
                });

                Cookies.remove("bvi-img", {
                    path: "/"
                });

                Cookies.remove("bvi-img-XY", {
                    path: "/"
                });

                Cookies.remove("bvi-reload", {
                    path: "/"
                });

                Cookies.remove("bvi-voice", {
                    path: "/"
                });

                Cookies.remove("bvi-flash", {
                    path: "/"
                });

                Cookies.remove("bvi-panel-hide", {
                    path: "/"
                });
                BviBgColor();
                BviFontSize();
                BviLetterSpacing();
                BviLineHeight();
                BviFontFamily();
                BviImg();
                BviVoice();
                BviFlash();
                BviPanelHide();
                responsiveVoice.cancel();
                $('iframe,video').show();
                return false;
            });

            $("#bvi-flash-on").click(function() {
                Cookies.set("bvi-flash", "1", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Включить фрейм", "Russian Female");
                }
                BviFlash();
                return false;
            });

            $("#bvi-flash-off").click(function() {
                Cookies.set("bvi-flash", "0", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Выключить фрейм", "Russian Female");
                }
                BviFlash();
                return false;
            });

            $("#bvi-letter-spacing-normal").click(function() {
                Cookies.set("bvi-letter-spacing", "normal", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Кернинг: Стандартный", "Russian Female");
                }
                BviLetterSpacing();
                return false;
            });

            $("#bvi-letter-spacing-average").click(function() {
                Cookies.set("bvi-letter-spacing", "average", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Кернинг: Средний", "Russian Female");
                }
                BviLetterSpacing();
                return false;
            });

            $("#bvi-letter-spacing-big").click(function() {
                Cookies.set("bvi-letter-spacing", "big", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Кернинг: Большой", "Russian Female");
                }
                BviLetterSpacing();
                return false;
            });

            $("#bvi-font-size-minus").click(function() {
                size = parseFloat(Cookies.get("bvi-font-size")) - 1;
                $(this).addClass('active');
                $('#bvi-font-size-plus').removeClass('active');

                if (size >= 0) {
                    Cookies.set("bvi-font-size", size, {
                        path: "/"
                    });

                    BviFontSize();
                    var numbers = String(size);
                    var numbers = numbers.charAt(numbers.length-1);
                    var numbers = parseInt(numbers, 10);

                    if (numbers == 1) {
                        var _numbers = 'пункт';
                    } else if ((numbers > 1) && (numbers < 5)) {
                        var _numbers = 'пункта';
                    } else {
                        var _numbers = 'пунктов';
                    }

                    method.BviConsoleLog(setting.BviConsoleLog, "click", {"bvi-font-size[]":"Размер шрифта: "+ size +" "+ _numbers});
                    if (Cookies.get("bvi-voice") == '1') {
                        responsiveVoice.speak("Размер шрифта: " + size +" "+ _numbers, "Russian Female");
                    }
                }
                return false;
            });

            $("#bvi-font-size-plus").click(function() {
                $(this).addClass('active');
                $('#bvi-font-size-minus').removeClass('active');
                size = parseFloat(Cookies.get("bvi-font-size")) + 1;

                if (size <= 50) {
                    Cookies.set("bvi-font-size", size, {
                        path: "/"
                    });

                    BviFontSize();
                    var numbers = String(size);
                    var numbers = numbers.charAt(numbers.length-1);
                    var numbers = parseInt(numbers, 10);

                    if (numbers == 1) {
                        var _numbers = 'пункт';
                    } else if ((numbers > 1) && (numbers < 5)) {
                        var _numbers = 'пункта';
                    } else {
                        var _numbers = 'пунктов';
                    }

                    method.BviConsoleLog(setting.BviConsoleLog, "click", {"bvi-font-size[]":"Размер шрифта: "+ size +" "+ _numbers});
                    if (Cookies.get("bvi-voice") == '1') {
                        responsiveVoice.speak("Размер шрифта: " + size +" "+ _numbers, "Russian Female");
                    }
                }
                return false;
            });

            $("#bvi-voice-on").click(function() {
                Cookies.set("bvi-voice", "1", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-voice[1]':'Синтез речи включён'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Синтез речи включён", "Russian Female");
                }
                BviVoice();
                return false;
            });

            $("#bvi-voice-off").click(function() {
                Cookies.set("bvi-voice", "0", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-voice[0]':'Синтез речи выключен'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Синтез речи выключен", "Russian Female");
                }
                BviVoice();
                return false;
            });

            $("#bvi-color-white").click(function() {
                Cookies.set("bvi-bgcolor", "white", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-bgcolor[white]':'Цвет сайта: Черным по белому'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Цвет сайта: Черным по белому", "Russian Female");
                }
                BviBgColor();
                return false;
            });

            $("#bvi-color-black").click(function() {
                Cookies.set("bvi-bgcolor", "black", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-bgcolor[black]':'Цвет сайта: Белым по черному'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Цвет сайта: Белым по черному", "Russian Female");
                }
                BviBgColor();
                return false;
            });

            $("#bvi-color-blue").click(function() {
                Cookies.set("bvi-bgcolor", "blue", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-bgcolor[blue]':'Цвет сайта: Темно-синим по голубому'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Цвет сайта: Темно-синим по голубому", "Russian Female");
                }
                BviBgColor();
                return false;
            });

            $("#bvi-color-brown").click(function() {
                Cookies.set("bvi-bgcolor", "brown", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-bgcolor[brown]':'Цвет сайта: Коричневым по бежевому'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Цвет сайта: Коричневым по бежевому", "Russian Female");
                }
                BviBgColor();
                return false;
            });

            $("#bvi-color-green").click(function() {
                Cookies.set("bvi-bgcolor", "green", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-bgcolor[green]':'Цвет сайта: Зеленым по темно-коричневому'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Цвет сайта: Зеленым по темно-коричневому", "Russian Female");
                }
                BviBgColor();
                return false;
            });

            $("#bvi-img-on").click(function() {
                Cookies.set("bvi-img", "1", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-img[1]':'Изображения включены'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Изображения включены", "Russian Female");
                }
                BviImg();
                return false;
            });

            $("#bvi-img-off").click(function() {
                Cookies.set("bvi-img", "0", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-img[0]':'Изображения выключены'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Изображения выключены", "Russian Female");
                }
                BviImg();
                return false;
            });

            $("#bvi-img-grayscale").click(function() {
                Cookies.set("bvi-img", "grayScale", {
                    path: "/"
                });
                method.BviConsoleLog(setting.BviConsoleLog, 'click', {'bvi-img[grayScale]':'Изображения черно-белые'});
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Изображения черно-белые", "Russian Female");
                }
                BviImg();
                return false;
            });

            $("#bvi-settings, #bvi-settings-close").click(function() {
                $(".bvi-settings").slideToggle("slow");
                $("#bvi-settings").toggleClass('active');
                return false;
            });

            $("#bvi-line-height-normal").click(function() {
                Cookies.set("bvi-line-height", "normal", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Интервал: Одинарный", "Russian Female");
                }
                BviLineHeight();
                return false;
            });

            $("#bvi-line-height-average").click(function() {
                Cookies.set("bvi-line-height", "average", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Интервал: Полуторный", "Russian Female");
                }
                BviLineHeight();
                return false;
            });

            $("#bvi-line-height-big").click(function() {
                Cookies.set("bvi-line-height", "big", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Интервал: Двойной", "Russian Female");
                }
                BviLineHeight();
                return false;
            });

            $("#bvi-font-family-arial").click(function() {
                Cookies.set("bvi-font-family", "arial", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Гарнитура: Без засечек", "Russian Female");
                }
                BviFontFamily();
                return false;
            });

            $("#bvi-font-family-times-new-roman").click(function() {
                Cookies.set("bvi-font-family", "times", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Гарнитура: С засечками", "Russian Female");
                }
                BviFontFamily();
                return false;
            });

            $("#bvi-font-family-default").click(function() {
                Cookies.set("bvi-font-family", "default", {
                    path: "/"
                });
                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Гарнитура: Без засечек", "Russian Female");
                }
                BviFontFamily();
                return false;
            });

            $('#bvi-panel-hide').click(function () {
                Cookies.set("bvi-panel-hide", "1", {
                    path: "/"
                });
                BviPanelHide();
                return false;
            });

            $('#bvi-panel-show').click(function () {
                Cookies.set("bvi-panel-hide", "0", {
                    path: "/"
                });
                BviPanelHide();
                return false;
            });

            $("#bvi-settings-default").click(function() {
                Cookies.set("bvi-panel", setting.BviPanel, {
                    path: "/"
                });

                Cookies.set("bvi-bgcolor", setting.BviPanelBg, {
                    path: "/"
                });

                Cookies.set("bvi-font-size", setting.BviPanelFontSize, {
                    path: "/"
                });

                Cookies.set("bvi-letter-spacing", setting.BviPanelLetterSpacing, {
                    path: "/"
                });

                Cookies.set("bvi-line-height", setting.BviPanelLineHeight, {
                    path: "/"
                });
                Cookies.set("bvi-font-family", setting.BviPanelFontFamily, {
                    path: "/"
                });

                Cookies.set("bvi-img", setting.BviPanelImg, {
                    path: "/"
                });

                Cookies.set("bvi-reload", setting.BviPanelReload, {
                    path: "/"
                });

                Cookies.set("bvi-img-XY", setting.BviPanelImgXY, {
                    path: "/"
                });

                Cookies.set("bvi-voice", setting.BviPlay, {
                    path: "/"
                });

                Cookies.set("bvi-flash", setting.BviFlash, {
                    path: "/"
                });

                Cookies.set("bvi-console-log)", setting.BviConsoleLog, {
                    path: "/"
                });

                Cookies.set("bvi-panel-hide)", setting.BviPanelHide, {
                    path: "/"
                });

                if (Cookies.get("bvi-voice") == '1') {
                    responsiveVoice.speak("Стандартные настройки", "Russian Female");
                }
                BviBgColor();
                BviFontSize();
                BviLetterSpacing();
                BviLineHeight();
                BviFontFamily();
                BviImg();
                BviVoice();
                BviFlash();
                BviPanelHide();
                return false;
            });

            BviBgColor();
            BviFontSize();
            BviLetterSpacing();
            BviLineHeight();
            BviFontFamily();
            BviImg();
            BviVoice();
            BviFlash();
            BviPanelHide();
        },
        Active: function (setting) {
            var selector = $(this).selector;
            var setting = $.extend({
                BviPanel: 1,
                BviPanelActive: 0,
                BviPanelBg: "white",
                BviPanelFontFamily: "default",
                BviPanelFontSize: "12",
                BviPanelLetterSpacing: "normal",
                BviPanelLineHeight: "normal",
                BviPanelImg: 1,
                BviPanelImgXY: 1,
                BviPanelReload: 0,
                BviPanelText: 'Версия для слабовидящих',
                BviPanelCloseText: 'Обычная версия сайта',
                BviCloseClassAndId: '',
                BviFixPanel: 1,
                BviPlay: 0,
                BviFlash: 0,
                BviConsoleLog: 1,
                BviPanelHide: 0
            }, setting);

            Cookies.set("bvi-selector", selector, {
                path: "/"
            });
            Cookies.set("bvi-panel", setting.BviPanel, {
                path: "/"
            });
            Cookies.set("bvi-bgcolor", setting.BviPanelBg, {
                path: "/"
            });
            Cookies.set("bvi-font-size", setting.BviPanelFontSize, {
                path: "/"
            });
            Cookies.set("bvi-letter-spacing", setting.BviPanelLetterSpacing, {
                path: "/"
            });
            Cookies.set("bvi-line-height", setting.BviPanelLineHeight, {
                path: "/"
            });
            Cookies.set("bvi-font-family", setting.BviPanelFontFamily, {
                path: "/"
            });
            Cookies.set("bvi-img", setting.BviPanelImg, {
                path: "/"
            });
            Cookies.set("bvi-reload", setting.BviPanelReload, {
                path: "/"
            });
            Cookies.set("bvi-img-XY", setting.BviPanelImgXY, {
                path: "/"
            });
            Cookies.set("bvi-reload", setting.BviPanelReload, {
                path: "/"
            });
            Cookies.set("bvi-voice", setting.BviPlay, {
                path: "/"
            });
            Cookies.set("bvi-flash", setting.BviFlash, {
                path: "/"
            });
            Cookies.set("bvi-flash", setting.BviConsoleLog, {
                path: "/"
            });
            Cookies.set("bvi-panel-hide", setting.BviPanelHide, {
                path: "/"
            });
            method.Init(setting);
            $('#bvi-close,.bvi-panel-open').hide();
        }
    };

    $.fn.bvi = function(setting) {
        if (method[setting]) {
            return method[setting].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof setting === "object" || !setting) {
                return method.init.apply(this, arguments)
            } else {
                b.error("Метод с именем " + c + " не существует для jQuery.bvi")
            }
        }
    }
})(jQuery);
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
