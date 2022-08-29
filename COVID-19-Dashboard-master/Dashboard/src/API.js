import axios from 'axios';
// import Scraper from './Scraper';
// const scraper = new Scraper();
// import WorldData from './WorldData';

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? 'https://2019ncov-api.now.sh' : 'http://localhost:3000'
});
const WORLD_COUNTRIES = [
  {
    code: 86,
    tw: '中國',
    en: 'China',
    locale: 'CN',
    zh: '中国',
    lat: 35.86166,
    lng: 104.195397,
    emoji: '🇨🇳'
  },
  {
    code: 244,
    tw: '安哥拉',
    en: 'Angola',
    locale: 'AO',
    zh: '安哥拉',
    lat: -11.202692,
    lng: 17.873887,
    emoji: '🇦🇴'
  },
  {
    code: 93,
    tw: '阿富汗',
    en: 'Afghanistan',
    locale: 'AF',
    zh: '阿富汗',
    lat: 33.93911,
    lng: 67.709953,
    emoji: '🇦🇫'
  },
  {
    code: 355,
    tw: '阿爾巴尼亞',
    en: 'Albania',
    locale: 'AL',
    zh: '阿尔巴尼亚',
    lat: 41.153332,
    lng: 20.168331,
    emoji: '🇦🇱'
  },
  {
    code: 213,
    tw: '阿爾及利亞',
    en: 'Algeria',
    locale: 'DZ',
    zh: '阿尔及利亚',
    lat: 28.033886,
    lng: 1.659626,
    emoji: '🇩🇿'
  },
  {
    code: 54,
    tw: '阿根廷',
    en: 'Argentina',
    locale: 'AR',
    zh: '阿根廷',
    lat: -38.416097,
    lng: -63.61667199999999,
    emoji: '🇦🇷'
  },
  {
    code: 374,
    tw: '亞美尼亞',
    en: 'Armenia',
    locale: 'AM',
    zh: '亚美尼亚',
    lat: 40.069099,
    lng: 45.038189,
    emoji: '🇦🇲'
  },
  {
    code: 61,
    tw: '澳大利亞',
    en: 'Australia',
    locale: 'AU',
    zh: '澳大利亚',
    lat: -25.274398,
    lng: 133.775136,
    emoji: '🇦🇺'
  },
  {
    code: 43,
    tw: '奧地利',
    en: 'Austria',
    locale: 'AT',
    zh: '奥地利',
    lat: 47.516231,
    lng: 14.550072,
    emoji: '🇦🇹'
  },
  {
    code: 994,
    tw: '阿塞拜疆',
    en: 'Azerbaijan',
    locale: 'AZ',
    zh: '阿塞拜疆',
    lat: 40.143105,
    lng: 47.576927,
    emoji: '🇦🇿'
  },
  {
    code: 973,
    tw: '巴林',
    en: 'Bahrain',
    locale: 'BH',
    zh: '巴林',
    lat: 26.2650742,
    lng: 50.6223267,
    emoji: '🇧🇭'
  },
  {
    code: 375,
    tw: '白俄羅斯',
    en: 'Belarus',
    locale: 'BY',
    zh: '白俄罗斯',
    lat: 53.709807,
    lng: 27.953389,
    emoji: '🇧🇾'
  },
  {
    code: 32,
    tw: '比利時',
    en: 'Belgium',
    locale: 'BE',
    zh: '比利时',
    lat: 50.503887,
    lng: 4.469936,
    emoji: '🇧🇪'
  },
  {
    code: 501,
    tw: '伯利茲',
    en: 'Belize',
    locale: 'BZ',
    zh: '伯利兹',
    lat: 17.189877,
    lng: -88.49765,
    emoji: '🇧🇿'
  },
  {
    code: 229,
    tw: '貝寧',
    en: 'Benin',
    locale: 'BJ',
    zh: '贝宁',
    lat: 9.30769,
    lng: 2.315834,
    emoji: '🇧🇯'
  },
  {
    code: 591,
    tw: '玻利維亞',
    en: 'Bolivia',
    locale: 'BO',
    zh: '玻利维亚',
    lat: -16.290154,
    lng: -63.58865299999999,
    emoji: '🇧🇴'
  },
  {
    code: 55,
    tw: '巴西',
    en: 'Brazil',
    locale: 'BR',
    zh: '巴西',
    lat: -14.235004,
    lng: -51.92528,
    emoji: '🇧🇷'
  },
  {
    code: 359,
    tw: '保加利亞',
    en: 'Bulgaria',
    locale: 'BG',
    zh: '保加利亚',
    lat: 42.733883,
    lng: 25.48583,
    emoji: '🇧🇬'
  },
  {
    code: 226,
    tw: '布基納法索',
    en: 'Burkina-faso',
    locale: 'BF',
    zh: '布基纳法索',
    lat: 12.238333,
    lng: -1.561593,
    emoji: '🇧🇫'
  },
  {
    code: 95,
    tw: '緬甸',
    en: 'Burma',
    locale: 'MM',
    zh: '缅甸',
    lat: 21.913965,
    lng: 95.956223,
    emoji: '🇲🇲'
  },
  {
    code: 257,
    tw: '布隆迪',
    en: 'Burundi',
    locale: 'BI',
    zh: '布隆迪',
    lat: -3.373056,
    lng: 29.918886,
    emoji: '🇧🇮'
  },
  {
    code: 237,
    tw: '喀麥隆',
    en: 'Cameroon',
    locale: 'CM',
    zh: '喀麦隆',
    lat: 7.369721999999999,
    lng: 12.354722,
    emoji: '🇨🇲'
  },
  {
    code: 1,
    tw: '加拿大',
    en: 'Canada',
    locale: 'CA',
    zh: '加拿大',
    lat: 56.130366,
    lng: -106.346771,
    emoji: '🇨🇦'
  },
  {
    code: 236,
    tw: '中非共和國',
    en: 'Central African Republic',
    locale: 'CF',
    zh: '中非共和国',
    lat: 6.611110999999999,
    lng: 20.939444,
    emoji: '🇨🇫'
  },
  {
    code: 56,
    tw: '智利',
    en: 'Chile',
    locale: 'CL',
    zh: '智利',
    lat: -35.675147,
    lng: -71.542969,
    emoji: '🇨🇱'
  },
  {
    code: 57,
    tw: '哥倫比亞',
    en: 'Colombia',
    locale: 'CO',
    zh: '哥伦比亚',
    lat: 4.570868,
    lng: -74.297333,
    emoji: '🇨🇴'
  },
  {
    code: 506,
    tw: '哥斯達黎加',
    en: 'Costa Rica',
    locale: 'CR',
    zh: '哥斯达黎加',
    lat: 9.748916999999999,
    lng: -83.753428,
    emoji: '🇨🇷'
  },
  {
    code: 53,
    tw: '古巴',
    en: 'Cuba',
    locale: 'CU',
    zh: '古巴',
    lat: 21.521757,
    lng: -77.781167,
    emoji: '🇨🇺'
  },
  {
    code: 357,
    tw: '塞浦路斯',
    en: 'Cyprus',
    locale: 'CY',
    zh: '塞浦路斯',
    lat: 35.126413,
    lng: 33.429859,
    emoji: '🇨🇾'
  },
  {
    code: 45,
    tw: '丹麥',
    en: 'Denmark',
    locale: 'DK',
    zh: '丹麦',
    lat: 56.26392,
    lng: 9.501785,
    emoji: '🇩🇰'
  },
  {
    code: 253,
    tw: '吉布堤',
    en: 'Djibouti',
    locale: 'DJ',
    zh: '吉布提',
    lat: 11.825138,
    lng: 42.590275,
    emoji: '🇩🇯'
  },
  {
    code: 593,
    tw: '厄瓜多爾',
    en: 'Ecuador',
    locale: 'EC',
    zh: '厄瓜多尔',
    lat: -1.831239,
    lng: -78.18340599999999,
    emoji: '🇪🇨'
  },
  {
    code: 20,
    tw: '埃及',
    en: 'Egypt',
    locale: 'EG',
    zh: '埃及',
    lat: 26.820553,
    lng: 30.802498,
    emoji: '🇪🇬'
  },
  {
    code: 503,
    tw: '薩爾瓦多',
    en: 'EI Salvador',
    locale: 'SV',
    zh: '萨尔瓦多',
    lat: 13.794185,
    lng: -88.89653,
    emoji: '🇸🇻'
  },
  {
    code: 372,
    tw: '愛沙尼亞',
    en: 'Estonia',
    locale: 'EE',
    zh: '爱沙尼亚',
    lat: 58.595272,
    lng: 25.013607,
    emoji: '🇪🇪'
  },
  {
    code: 251,
    tw: '埃塞俄比亞',
    en: 'Ethiopia',
    locale: 'ET',
    zh: '埃塞俄比亚',
    lat: 9.145000000000001,
    lng: 40.489673,
    emoji: '🇪🇹'
  },
  {
    code: 358,
    tw: '芬蘭',
    en: 'Finland',
    locale: 'FI',
    zh: '芬兰',
    lat: 61.92410999999999,
    lng: 25.748151,
    emoji: '🇫🇮'
  },
  {
    code: 33,
    tw: '法國',
    en: 'France',
    locale: 'FR',
    zh: '法国',
    lat: 46.227638,
    lng: 2.213749,
    emoji: '🇫🇷'
  },
  {
    code: 241,
    tw: '加蓬',
    en: 'Gabon',
    locale: 'GA',
    zh: '加蓬',
    lat: -0.803689,
    lng: 11.609444,
    emoji: '🇬🇦'
  },
  {
    code: 49,
    tw: '德國',
    en: 'Germany',
    locale: 'DE',
    zh: '德国',
    lat: 51.165691,
    lng: 10.451526,
    emoji: '🇩🇪'
  },
  {
    code: 233,
    tw: '加納',
    en: 'Ghana',
    locale: 'GH',
    zh: '加纳',
    lat: 7.946527,
    lng: -1.023194,
    emoji: '🇬🇭'
  },
  {
    code: 30,
    tw: '希臘',
    en: 'Greece',
    locale: 'GR',
    zh: '希腊',
    lat: 39.074208,
    lng: 21.824312,
    emoji: '🇬🇷'
  },
  {
    code: 502,
    tw: '危地馬拉',
    en: 'Guatemala',
    locale: 'GT',
    zh: '危地马拉',
    lat: 15.783471,
    lng: -90.23075899999999,
    emoji: '🇬🇹'
  },
  {
    code: 224,
    tw: '幾內亞',
    en: 'Guinea',
    locale: 'GN',
    zh: '几内亚',
    lat: 9.945587,
    lng: -9.696645,
    emoji: '🇬🇳'
  },
  {
    code: 592,
    tw: '圭亞那',
    en: 'Guyana',
    locale: 'GY',
    zh: '圭亚那',
    lat: 4.860416,
    lng: -58.93018,
    emoji: '🇬🇾'
  },
  {
    code: 504,
    tw: '洪都拉斯',
    en: 'Honduras',
    locale: 'HN',
    zh: '洪都拉斯',
    lat: 15.199999,
    lng: -86.241905,
    emoji: '🇭🇳'
  },
  {
    code: 36,
    tw: '匈牙利',
    en: 'Hungary',
    locale: 'HU',
    zh: '匈牙利',
    lat: 47.162494,
    lng: 19.503304,
    emoji: '🇭🇺'
  },
  {
    code: 91,
    tw: '印度',
    en: 'India',
    locale: 'IN',
    zh: '印度',
    lat: 20.593684,
    lng: 78.96288,
    emoji: '🇮🇳'
  },
  {
    code: 62,
    tw: '印度尼西亞',
    en: 'Indonesia',
    locale: 'ID',
    zh: '印度尼西亚',
    lat: -6.10304,
    lng: 106.515414,
    emoji: '🇮🇩'
  },
  {
    code: 353,
    tw: '愛爾蘭',
    en: 'Ireland',
    locale: 'IE',
    zh: '爱尔兰',
    lat: 53.41291,
    lng: -8.24389,
    emoji: '🇮🇪'
  },
  {
    code: 972,
    tw: '以色列',
    en: 'Israel',
    locale: 'IL',
    zh: '以色列',
    lat: 31.046051,
    lng: 34.851612,
    emoji: '🇮🇱'
  },
  {
    code: 39,
    tw: '意大利',
    en: 'Italy',
    locale: 'IT',
    zh: '意大利',
    lat: 41.87194,
    lng: 12.56738,
    emoji: '🇮🇹'
  },
  {
    code: 225,
    tw: '科特迪瓦',
    en: 'Ivory Coast',
    locale: 'CI',
    zh: '科特迪瓦',
    lat: 6.223217500000001,
    lng: -3.9062688,
    emoji: '🇨🇮'
  },
  {
    code: 1876,
    tw: '牙買加',
    en: 'Jamaica',
    locale: 'JM',
    zh: '牙买加',
    lat: 18.109581,
    lng: -77.297508,
    emoji: '🇯🇲'
  },
  {
    code: 81,
    tw: '日本',
    en: 'Japan',
    locale: 'JP',
    zh: '日本',
    lat: 36.204824,
    lng: 138.252924,
    emoji: '🇯🇵'
  },
  {
    code: 962,
    tw: '約旦',
    en: 'Jordan',
    locale: 'JO',
    zh: '约旦',
    lat: 30.585164,
    lng: 36.238414,
    emoji: '🇯🇴'
  },
  {
    code: 855,
    tw: '柬埔寨',
    en: 'Kampuchea (Cambodia )',
    locale: 'KH',
    zh: '柬埔寨',
    lat: 12.565679,
    lng: 104.990963,
    emoji: '🇰🇭'
  },
  {
    code: 327,
    tw: '哈薩克',
    en: 'Kazakstan',
    locale: 'KZ',
    zh: '哈萨克斯坦',
    lat: 48.019573,
    lng: 66.923684,
    emoji: '🇰🇿'
  },
  {
    code: 254,
    tw: '肯雅',
    en: 'Kenya',
    locale: 'KE',
    zh: '肯尼亚',
    lat: -0.023559,
    lng: 37.906193,
    emoji: '🇰🇪'
  },
  {
    code: 82,
    tw: '韓國',
    en: 'Korea',
    locale: 'KR',
    zh: '韩国',
    lat: 35.907757,
    lng: 127.766922,
    emoji: '🇰🇷'
  },
  {
    code: 856,
    tw: '寮國',
    en: 'Laos',
    locale: 'LA',
    zh: '老挝',
    lat: 19.85627,
    lng: 102.495496,
    emoji: '🇱🇦'
  },
  {
    code: 371,
    tw: '拉脫維亞',
    en: 'Latvia',
    locale: 'LV',
    zh: '拉脱维亚',
    lat: 56.879635,
    lng: 24.603189,
    emoji: '🇱🇻'
  },
  {
    code: 961,
    tw: '黎巴嫩',
    en: 'Lebanon',
    locale: 'LB',
    zh: '黎巴嫩',
    lat: 33.854721,
    lng: 35.862285,
    emoji: '🇱🇧'
  },
  {
    code: 266,
    tw: '萊索托',
    en: 'Lesotho',
    locale: 'LS',
    zh: '莱索托',
    lat: -29.609988,
    lng: 28.233608,
    emoji: '🇱🇸'
  },
  {
    code: 231,
    tw: '利比里亞',
    en: 'Liberia',
    locale: 'LR',
    zh: '利比里亚',
    lat: 6.428055,
    lng: -9.429499000000002,
    emoji: '🇱🇷'
  },
  {
    code: 370,
    tw: '立陶宛',
    en: 'Lithuania',
    locale: 'LT',
    zh: '立陶宛',
    lat: 55.169438,
    lng: 23.881275,
    emoji: '🇱🇹'
  },
  {
    code: 352,
    tw: '盧森堡',
    en: 'Luxembourg',
    locale: 'LU',
    zh: '卢森堡',
    lat: 49.815273,
    lng: 6.129582999999999,
    emoji: '🇱🇺'
  },
  {
    code: 261,
    tw: '馬達加斯加',
    en: 'Madagascar',
    locale: 'MG',
    zh: '马达加斯加',
    lat: -18.766947,
    lng: 46.869107,
    emoji: '🇲🇬'
  },
  {
    code: 265,
    tw: '馬拉維',
    en: 'Malawi',
    locale: 'MW',
    zh: '马拉维',
    lat: -13.254308,
    lng: 34.301525,
    emoji: '🇲🇼'
  },
  {
    code: 60,
    tw: '馬來西亞',
    en: 'Malaysia',
    locale: 'MY',
    zh: '马来西亚',
    lat: 4.210484,
    lng: 101.975766,
    emoji: '🇲🇾'
  },
  {
    code: 960,
    tw: '馬爾代夫',
    en: 'Maldives',
    locale: 'MV',
    zh: '马尔代夫',
    lat: 25.0691004,
    lng: 121.6152989,
    emoji: '🇲🇻'
  },
  {
    code: 223,
    tw: '馬里',
    en: 'Mali',
    locale: 'ML',
    zh: '马里',
    lat: 17.570692,
    lng: -3.996166,
    emoji: '🇲🇱'
  },
  {
    code: 52,
    tw: '墨西哥',
    en: 'Mexico',
    locale: 'MX',
    zh: '墨西哥',
    lat: 23.634501,
    lng: -102.552784,
    emoji: '🇲🇽'
  },
  {
    code: 976,
    tw: '蒙古',
    en: 'Mongolia',
    locale: 'MN',
    zh: '蒙古',
    lat: 46.862496,
    lng: 103.846656,
    emoji: '🇲🇳'
  },
  {
    code: 264,
    tw: '納米比亞',
    en: 'Namibia',
    locale: 'NA',
    zh: '纳米比亚',
    lat: -22.95764,
    lng: 18.49041,
    emoji: '🇳🇦'
  },
  {
    code: 31,
    tw: '荷蘭',
    en: 'Netherlands',
    locale: 'NL',
    zh: '荷兰',
    lat: 52.132633,
    lng: 5.291265999999999,
    emoji: '🇳🇱'
  },
  {
    code: 64,
    tw: '新西蘭',
    en: 'New Zealand',
    locale: 'NZ',
    zh: '新西兰',
    lat: -40.900557,
    lng: 174.885971,
    emoji: '🇳🇿'
  },
  {
    code: 505,
    tw: '尼加拉瓜',
    en: 'Nicaragua',
    locale: 'NI',
    zh: '尼加拉瓜',
    lat: 12.865416,
    lng: -85.207229,
    emoji: '🇳🇮'
  },
  {
    code: 227,
    tw: '尼日爾',
    en: 'Niger',
    locale: 'NE',
    zh: '尼日尔',
    lat: 17.607789,
    lng: 8.081666,
    emoji: '🇳🇪'
  },
  {
    code: 850,
    tw: '朝鮮',
    en: 'North Korea',
    locale: 'KP',
    zh: '朝鲜',
    lat: 34.606756,
    lng: 119.19371,
    emoji: '🇰🇵'
  },
  {
    code: 47,
    tw: '挪威',
    en: 'Norway',
    locale: 'NO',
    zh: '挪威',
    lat: 60.47202399999999,
    lng: 8.468945999999999,
    emoji: '🇳🇴'
  },
  {
    code: 968,
    tw: '阿曼',
    en: 'Oman',
    locale: 'OM',
    zh: '阿曼',
    lat: 21.512583,
    lng: 55.923255,
    emoji: '🇴🇲'
  },
  {
    code: 92,
    tw: '巴基斯坦',
    en: 'Pakistan',
    locale: 'PK',
    zh: '巴基斯坦',
    lat: 30.375321,
    lng: 69.34511599999999,
    emoji: '🇵🇰'
  },
  {
    code: 675,
    tw: '巴布亞新畿內亞',
    en: 'Papua New Cuinea',
    locale: 'PG',
    zh: '巴布亚新几内亚',
    lat: -6.314992999999999,
    lng: 143.95555,
    emoji: '🇵🇬'
  },
  {
    code: 595,
    tw: '巴拉圭',
    en: 'Paraguay',
    locale: 'PY',
    zh: '巴拉圭',
    lat: -23.442503,
    lng: -58.443832,
    emoji: '🇵🇾'
  },
  {
    code: 63,
    tw: '菲律賓',
    en: 'Philippines',
    locale: 'PH',
    zh: '菲律宾',
    lat: 12.879721,
    lng: 121.774017,
    emoji: '🇵🇭'
  },
  {
    code: 48,
    tw: '波蘭',
    en: 'Poland',
    locale: 'PL',
    zh: '波兰',
    lat: 51.919438,
    lng: 19.145136,
    emoji: '🇵🇱'
  },
  {
    code: 351,
    tw: '葡萄牙',
    en: 'Portugal',
    locale: 'PT',
    zh: '葡萄牙',
    lat: 39.39987199999999,
    lng: -8.224454,
    emoji: '🇵🇹'
  },
  {
    code: 974,
    tw: '卡塔爾',
    en: 'Qatar',
    locale: 'QA',
    zh: '卡塔尔',
    lat: 25.354826,
    lng: 51.183884,
    emoji: '🇶🇦'
  },
  {
    code: 40,
    tw: '羅馬尼亞',
    en: 'Romania',
    locale: 'RO',
    zh: '罗马尼亚',
    lat: 45.943161,
    lng: 24.96676,
    emoji: '🇷🇴'
  },
  {
    code: 7,
    tw: '俄羅斯',
    en: 'Russia',
    locale: 'RU',
    zh: '俄罗斯',
    lat: 61.52401,
    lng: 105.318756,
    emoji: '🇷🇺'
  },
  {
    code: 221,
    tw: '塞內加爾',
    en: 'Senegal',
    locale: 'SN',
    zh: '塞内加尔',
    lat: 14.497401,
    lng: -14.452362,
    emoji: '🇸🇳'
  },
  {
    code: 27,
    tw: '南非',
    en: 'South Africa',
    locale: 'ZA',
    zh: '南非',
    lat: -30.559482,
    lng: 22.937506,
    emoji: '🇿🇦'
  },
  {
    code: 34,
    tw: '西班牙',
    en: 'Spain',
    locale: 'ES',
    zh: '西班牙',
    lat: 40.46366700000001,
    lng: -3.74922,
    emoji: '🇪🇸'
  },
  {
    code: 94,
    tw: '斯裡蘭卡',
    en: 'Sri Lanka',
    locale: 'LK',
    zh: '斯里兰卡',
    lat: 7.873053999999999,
    lng: 80.77179699999999,
    emoji: '🇱🇰'
  },
  {
    code: 249,
    tw: '蘇丹',
    en: 'Sudan',
    locale: 'SD',
    zh: '苏丹',
    lat: 12.862807,
    lng: 30.217636,
    emoji: '🇸🇩'
  },
  {
    code: 597,
    tw: '蘇里南',
    en: 'Suriname',
    locale: 'SR',
    zh: '苏里南',
    lat: 3.919305,
    lng: -56.027783,
    emoji: '🇸🇷'
  },
  {
    code: 46,
    tw: '瑞典',
    en: 'Sweden',
    locale: 'SE',
    zh: '瑞典',
    lat: 60.12816100000001,
    lng: 18.643501,
    emoji: '🇸🇪'
  },
  {
    code: 41,
    tw: '瑞士',
    en: 'Switzerland',
    locale: 'CH',
    zh: '瑞士',
    lat: 46.818188,
    lng: 8.227511999999999,
    emoji: '🇨🇭'
  },
  {
    code: 255,
    tw: '坦桑尼亞',
    en: 'Tanzania',
    locale: 'TZ',
    zh: '坦桑尼亚',
    lat: 39.00366,
    lng: 117.710496,
    emoji: '🇹🇿'
  },
  {
    code: 66,
    tw: '泰國',
    en: 'Thailand',
    locale: 'TH',
    zh: '泰国',
    lat: 15.870032,
    lng: 100.992541,
    emoji: '🇹🇭'
  },
  {
    code: 228,
    tw: '多哥',
    en: 'Togo',
    locale: 'TG',
    zh: '多哥',
    lat: 8.619543,
    lng: 0.824782,
    emoji: '🇹🇬'
  },
  {
    code: 216,
    tw: '突尼斯',
    en: 'Tunisia',
    locale: 'TN',
    zh: '突尼斯',
    lat: 33.886917,
    lng: 9.537499,
    emoji: '🇹🇳'
  },
  {
    code: 90,
    tw: '土耳其',
    en: 'Turkey',
    locale: 'TR',
    zh: '土耳其',
    lat: 38.963745,
    lng: 35.243322,
    emoji: '🇹🇷'
  },
  {
    code: 993,
    tw: '土庫曼',
    en: 'Turkmenistan',
    locale: 'TM',
    zh: '土库曼斯坦',
    lat: 38.969719,
    lng: 59.556278,
    emoji: '🇹🇲'
  },
  {
    code: 256,
    tw: '烏幹達',
    en: 'Uganda',
    locale: 'UG',
    zh: '乌干达',
    lat: 1.373333,
    lng: 32.290275,
    emoji: '🇺🇬'
  },
  {
    code: 380,
    tw: '烏克蘭',
    en: 'Ukraine',
    locale: 'UA',
    zh: '乌克兰',
    lat: 48.379433,
    lng: 31.16558,
    emoji: '🇺🇦'
  },
  {
    code: 971,
    tw: '阿拉伯聯合酋長國',
    en: 'United Arab Emirates',
    locale: 'AE',
    zh: '阿拉伯联合酋长国',
    lat: 24.453884,
    lng: 54.3773438,
    emoji: '🇦🇪'
  },
  {
    code: 44,
    tw: '英國',
    en: 'United Kiongdom',
    locale: 'GB',
    zh: '英国',
    lat: 55.378051,
    lng: -3.435973,
    emoji: '🇬🇧'
  },
  {
    code: 1,
    tw: '美國',
    en: 'United States of America',
    locale: 'US',
    zh: '美国',
    lat: 37.09024,
    lng: -95.712891,
    emoji: '🇺🇸'
  },
  {
    code: 598,
    tw: '烏拉圭',
    en: 'Uruguay',
    locale: 'UY',
    zh: '乌拉圭',
    lat: -32.522779,
    lng: -55.765835,
    emoji: '🇺🇾'
  },
  {
    code: 998,
    tw: '烏茲別克',
    en: 'Uzbekistan',
    locale: 'UZ',
    zh: '乌兹别克斯坦',
    lat: 41.377491,
    lng: 64.585262,
    emoji: '🇺🇿'
  },
  {
    code: 58,
    tw: '委內瑞拉',
    en: 'Venezuela',
    locale: 'VE',
    zh: '委内瑞拉',
    lat: 6.42375,
    lng: -66.58973,
    emoji: '🇻🇪'
  },
  {
    code: 84,
    tw: '越南',
    en: 'Vietnam',
    locale: 'VN',
    zh: '越南',
    lat: 14.058324,
    lng: 108.277199,
    emoji: '🇻🇳'
  },
  {
    code: 967,
    tw: '也門',
    en: 'Yemen',
    locale: 'YE',
    zh: '也门',
    lat: 15.552727,
    lng: 48.516388,
    emoji: '🇾🇪'
  },
  {
    code: 263,
    tw: '津巴布韋',
    en: 'Zimbabwe',
    locale: 'ZW',
    zh: '津巴布韦',
    lat: -19.015438,
    lng: 29.154857,
    emoji: '🇿🇼'
  },
  {
    code: 260,
    tw: '贊比亞',
    en: 'Zambia',
    locale: 'ZM',
    zh: '赞比亚',
    lat: -13.133897,
    lng: 27.849332,
    emoji: '🇿🇲'
  }
];

class WorldData {
  constructor() {
    this.CN_COUNTRIES = {};
    WORLD_COUNTRIES.forEach(element => {
      this.CN_COUNTRIES[element.zh] = element;
    });
  }

  async getWorldData() {
    const url =
      'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard';

    const { data } = await axios.get(`https://bird.ioliu.cn/v1?url=${url}`);

    const worldData = data.data;
    const { WomWorld, WomAboard } = worldData;
    const countrys = [];
    WomAboard.forEach(country => {
      countrys.push(this.genCountryData(country));
    });

    const cases = {
      total_confirmed: WomWorld.confirm,
      total_recovered: WomWorld.heal,
      total_death: WomWorld.dead,
      today_confirmed: WomWorld.confirmAdd,
      today_recovered: WomWorld.healAdd,
      today_death: WomWorld.deadAdd,
      data: countrys
    };
    return { data: cases };
  }

  genCountryData(country) {
    const countryInfo = this.getCountryInfo(country.name);
    const CountryData = {
      CNAME: countryInfo.zh,
      'Country/Region': countryInfo.en,
      ISO_A2: countryInfo.locale,
      Lat: countryInfo.lat,
      Long: countryInfo.lng,
      'Province/State': countryInfo.en,
      flag: `https://corona.lmao.ninja/assets/img/flags/${countryInfo.locale.toLowerCase()}.png`,
      confirmed: country.confirm,
      recovered: country.heal,
      death: country.dead,
      today: {
        confirmed: country.confirmAdd,
        recovered: country.healCompare,
        death: country.deadCompare,
        date: `${country.y}.${country.date}`
      }
    };

    return CountryData;
  }

  getCountryInfo(name) {
    if (Object.prototype.hasOwnProperty.call(this.CN_COUNTRIES, name)) {
      return this.CN_COUNTRIES[name];
    }
    return { zh: name, en: '', locale: '', lat: '', lng: '' };
  }
}

const worldData = new WorldData();

export default {
  async getCases() {
    const { data } = await worldData.getWorldData();
    return data;
  },
  async getTweets(params) {
    const { data } = await http('/api/tweets', {
      params
    });
    return data;
  },
  async getFatalityRate() {
    const data = JSON.parse(
      '{"byAge":[{"age":"80+ years old","rate":"14.8%"},{"age":"70-79 years old","rate":"8.0%"},{"age":"60-69 years old","rate":"3.6%"},{"age":"50-59 years old","rate":"1.3%"},{"age":"40-49 years old","rate":"0.4%"},{"age":"30-39 years old","rate":"0.2%"},{"age":"20-29 years old","rate":"0.2%"},{"age":"10-19 years old","rate":"0.2%"},{"age":"0-9 years old","rate":"no fatalities"}],"bySex":[{"sex":"Male","rate":"4.7%"},{"sex":"Female","rate":"2.8%"}],"byComorbidity":[{"preExistingCondition":"Cardiovascular disease","rate":"10.5%"},{"preExistingCondition":"Diabetes","rate":"7.3%"},{"preExistingCondition":"Chronic respiratory disease","rate":"6.3%"},{"preExistingCondition":"Hypertension","rate":"6.0%"},{"preExistingCondition":"Cancer","rate":"5.6%"},{"preExistingCondition":"no pre-existing conditions","rate":"0.9%"}]}'
    );
    return data;
  },
  async getMyTime() {
    const { data } = await axios.get(
      'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoNewsArticleList'
    );
    return data;
  },
  async getChianData() {
    const url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5';
    const { data } = await axios.get(`https://bird.ioliu.cn/v1?url=${url}`);
    return data;
  }
};
