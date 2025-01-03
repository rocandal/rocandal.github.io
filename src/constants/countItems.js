const countItems = [
  // 순서 반대로 넣겠삼
  {
    index: 0,
    title: '세기말마크 3,4,5기',
    countImage: 'img/count/count14_1.png',
    countPhoto: 'img/photo/photo0_1.png',
    name: '[로제라]',
    description: '황금에도\n마크 계속 같이...\n\n해줄 거지?',
    date: '2024-11-19',
  },
  {
    index: 1,
    title: "크루''@초코보",
    countImage: 'img/count/count13_1.png',
    countPhoto: 'img/photo/photo13_1.png',
    name: '[크루]',
    description: '###채제작 온기팟 구함\n1588_크루크루',
    date: '2024-11-20',
  },
  {
    index: 2,
    title: '귤바구니@모그리',
    countImage: 'img/count/count13_2.png',
    countPhoto: 'img/photo/photo13_2.png',
    name: '[귤바구니]',
    description: '기다리고 기다려왔다!',
    date: '2024-11-20',
  },
  {
    index: 3,
    title: '유럽연합@초코보 | 커미션 ⓒ지안(@jian167)',
    countImage: 'img/count/count12_2.png',
    countPhoto: 'img/photo/photo12_2.png',
    name: '[여납]',
    description: '제노스 부활 기원\n정권지르기 1일째',
    date: '2024-11-21',
  },
  {
    index: 4,
    title: '매화님@모그리 | 커미션 ⓒ눈덩(@snowdoc)',
    countImage: 'img/count/count12_1.png',
    countPhoto: 'img/photo/photo12_1.png',
    name: '[매화]',
    description: '제노스 꼬마친구 출시 기원\n정권지르기 845일째',
    date: '2024-11-21',
  },
  {
    index: 5,
    title: '하랴@톤베리 | 커미션 ⓒ민규(@GGU524)',
    countImage: 'img/count/count11_1.png',
    countPhoto: 'img/photo/photo11_1.png',
    name: '[하루]',
    description:
      '항상 먼저 반갑게 인사해\n주셔서 너무 감사해요!\n황금이 끝나갈 세기말에\n저희 또 만나요!\n그때까지 다들 건강 챙기기!\n사랑합니다',
    date: '2024-11-22',
  },
  {
    index: 6,
    title: '은가비@초코보 | 커미션 ⓒ익명',
    countImage: 'img/count/count11_2.png',
    countPhoto: 'img/photo/photo11_2.png',
    name: '[가비]',
    description: "세기말마크 6기 D-365\n\nLet's Go",
    date: '2024-11-22',
  },
  {
    index: 7,
    title: '황서우@펜리르',
    countImage: 'img/count/count10_2.png',
    countPhoto: 'img/photo/photo10_2.png',
    name: '[서우]',
    description:
      '요시다가 가로되,\n황금이 남코테를\n버리지 아니하였으니\n곧 남코테가 늘어날지어다.\n\n- 파판복음 12장 34절',
    date: '2024-11-23',
  },
  {
    index: 8,
    title: 'Benice@펜리르',
    countImage: 'img/count/count10_1.png',
    countPhoto: 'img/photo/photo10_1.png',
    name: '[비나]',
    description: '도비는 자유에요!',
    date: '2024-11-23',
  },
  {
    index: 9,
    title: '위니클로버@톤베리',
    countImage: 'img/count/count9_2.png',
    countPhoto: 'img/photo/photo9_2.png',
    name: '[위니]',
    description: '황금이 와도 당신만이\n나애 첟사랑,\n나애 끗 사랑',
    date: '2024-11-24',
  },
  {
    index: 10,
    title: '죄멸@톤베리',
    countImage: 'img/count/count9_1.png',
    countPhoto: 'img/photo/photo9_1.png',
    name: '[만듀]',
    description: '만듀튀김.\n머리에 붙어 있었어.\nㅇ//////ㅇ',
    date: '2024-11-24',
  },
  {
    index: 11,
    title: '룬아루@톤베리',
    countImage: 'img/count/count8_1.png',
    countPhoto: 'img/photo/photo8_1.png',
    name: '[룬아루]',
    description: '안녕! 로제라!',
    date: '2024-11-25',
  },
  {
    index: 12,
    title: "하늘하늘'@모그리",
    countImage: 'img/count/count8_2.png',
    countPhoto: 'img/photo/photo8_2.png',
    name: '[하늘]',
    description:
      '백마여도 안 죄송한\n황금의 유산으로 감\n+\n미술이 딜이 된다는 걸\n보여주마',
    date: '2024-11-25',
  },
  {
    index: 13,
    title: '선우현@초코보',
    countImage: 'img/count/count7_2.png',
    countPhoto: 'img/photo/photo7_2.png',
    name: '[선우현]',
    description: '7.0에 스샷 찍으러\n다닐 사람 구함.\n\n1/59',
    date: '2024-11-26',
  },
  {
    index: 14,
    title: '규열@톤베리',
    countImage: 'img/count/count7_1.png',
    countPhoto: 'img/photo/photo7_1.png',
    name: '[꼬질]',
    description: '황금 와도\n놀아주겠따고 약소캐...',
    date: '2024-11-26',
  },
  {
    index: 15,
    title: '템포@펜리르',
    countImage: 'img/count/count6_2.jpg',
    countPhoto: 'img/photo/photo6_2.png',
    name: '[먼지]',
    description: '먼지는이일을기억할것입니다',
    date: '2024-11-27',
  },
  {
    index: 16,
    title: '셜리@펜리르',
    countImage: 'img/count/count6_1.png',
    countPhoto: 'img/photo/photo6_1.png',
    name: '[셜리]',
    description:
      '이거 보여주려고\n어그로 끌었다...\n황금의 유산 염색 실화냐?\n가슴이 웅장해진다...',
    date: '2024-11-27',
  },
  {
    index: 17,
    title: '단사@초코보',
    countImage: 'img/count/count5_1.png',
    countPhoto: 'img/photo/photo5_1.png',
    name: '[다프네]',
    description: '우리 경험한 적 없는\n새로운 모험을 떠나자,\n약속이야.',
    date: '2024-11-28',
  },
  {
    index: 18,
    title: '시힐@초코보',
    countImage: 'img/count/count5_2.png',
    countPhoto: 'img/photo/photo5_2.png',
    name: '[시힐]',
    description: '황금에도 함께 같이 놀아요',
    date: '2024-11-28',
  },
  {
    index: 19,
    title: '슈슈@펜리르 | 커미션 ⓒ익명',
    countImage: 'img/count/count4_2.png',
    countPhoto: 'img/photo/photo4_2.png',
    name: '[슈슈]',
    description:
      '가좍들끼리\n카운트다운을 기념한다는 건\n행복한 일이더군요.\n참여해주셔서 감사합니다^^\n즐겁게 작업했어요.',
    date: '2024-11-29',
  },
  {
    index: 20,
    title: '냐메@모그리',
    countImage: 'img/count/count4_1.png',
    countPhoto: 'img/photo/photo4_1.png',
    name: '[나리]',
    description:
      '59년 동안 감사했고 앞으로 595959년이 지나서도 파판14와 마크 + 그 외 등등 게임 모두 (함께)재밌게 즐기면서 59하게 지내요~~ 황금의 유산 가보자긔~~',
    date: '2024-11-29',
  },
  {
    index: 21,
    title: '흑밀@톤베리',
    countImage: 'img/count/count3_2.png',
    countPhoto: 'img/photo/photo3_2.png',
    name: '[흑밀]',
    description: '전장 롤백\n정권찌르기 1일차',
    date: '2024-11-30',
  },
  {
    index: 22,
    title: '단쨔@초코보',
    countImage: 'img/count/count3_1.png',
    countPhoto: 'img/photo/photo3_1.png',
    name: '[단쨔]',
    description: '황금의 유산이라고요...?\n제가 한 번 먹어보겠습니다.',
    date: '2024-11-30',
  },
  {
    index: 23,
    title: '독지@모그리',
    countImage: 'img/count/count2_2.png',
    countPhoto: 'img/photo/photo2_2.png',
    name: '[덕지]',
    description: '세상 여코 내 뜻대로',
    date: '2024-12-01',
  },
  {
    index: 24,
    title: '휘건@톤베리',
    countImage: 'img/count/count2_1.png',
    countPhoto: 'img/photo/photo2_1.png',
    name: '[휘건]',
    description: '여기 있는 사람\n다 제 첩이에요.',
    date: '2024-12-01',
  },
  {
    index: 25,
    title: '닭갈비볶음밥마스터@카벙클',
    countImage: 'img/count/count1_2.png',
    countPhoto: 'img/photo/photo1_2.png',
    name: '[보름]',
    description: '이 스샷을\n슈x님에게 바칩니다',
    date: '2024-12-02',
  },
  {
    index: 26,
    title: 'SandG@카벙클',
    countImage: 'img/count/count1_1.png',
    countPhoto: 'img/photo/photo1_1.png',
    name: '[생지]',
    description: '아이테리스와\n기타와 여코테...\n아름답지 않나요?',
    date: '2024-12-02',
  },
];

export default countItems;
