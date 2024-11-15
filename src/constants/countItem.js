const countItems = [
  // 순서 반대로 넣겠삼
  {
    index: 0,
    title: '세기말마크 3,4,5기',
    countImage: 'img/count/count14_1.png',
    countPhoto: '',
    name: '[세기말마크]',
    description: '황금에도 마크 같이.. 해줄 거지?',
  },
  {
    index: 1,
    title: '귤바구니@모그리',
    countImage: 'img/count/count14_1.png', // 일러없음
    countPhoto: 'img/photo/photo13_2.png',
    name: '[귤바구니]',
    description: '',
  },
  {
    index: 2,
    title: '크루@초코보',
    countImage: 'img/count/count13_1.png',
    countPhoto: 'img/photo/photo13_1.png',
    name: '[크루]',
    description: '###채제작 온기팟 구함 1588_크루크루',
  },
  {
    index: 3,
    title: '유럽연합@초코보',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo12_2.png',
    name: '[여납]',
    description: '제노스 부활 기원 정권지르기 1일째',
  },
  {
    index: 4,
    title: '매화님@모그리 | 커미션 ⓒ지안(@jian167)',
    countImage: 'img/count/count12_1.png',
    countPhoto: 'img/photo/photo12_1.png',
    name: '[매화]',
    description: '제노스 꼬마친구 출시 기원 정권지르기 845일째.',
  },
  {
    index: 5,
    title: '은가비@초코보 | 커미션 ⓒ익명',
    countImage: 'img/count/count11_2.png',
    countPhoto: 'img/photo/photo11_2.png',
    name: '[가비]',
    description: "세기말마크 6기 D-365 Let's Go",
  },
  {
    index: 6,
    title: '하랴@톤베리',
    countImage: 'img/count/count11_1.png',
    countPhoto: 'img/photo/photo11_1.png',
    name: '[하루]',
    description:
      '항상 먼저 반갑게 인사해주셔서 너무 감사해요! 황금이 끝나갈 세기말에 저희 또 만나요! 그때까지 다들 건강 챙기기! 사랑합니다',
  },
  {
    index: 7,
    title: '황서우@펜리르',
    countImage: 'img/count/count10_2.png',
    countPhoto: 'img/photo/photo10_2.png',
    name: '[서우]',
    description: '아, 온다. 황금... 온다.',
  },
  {
    index: 8,
    title: 'Benice@펜리르',
    countImage: 'img/count/count10_1.png',
    countPhoto: 'img/photo/photo10_1.png',
    name: '[비나]',
    description: '도비는 자유에요!',
  },
  {
    index: 9,
    title: '위니클로버@톤베리',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo9_2.png',
    name: '[위니]',
    description: '',
  },
  {
    index: 10,
    title: '죄멸@톤베리',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo9_1.png',
    name: '[만듀]',
    description: '',
  },
  {
    index: 11,
    title: "하늘하늘'@모그리",
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo8_2.png',
    name: '[하늘]',
    description: '',
  },
  {
    index: 12,
    title: '룬아루@톤베리',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo8_1.png',
    name: '[웅니의 룬아루]',
    description: '',
  },
  {
    index: 13,
    title: '선우현@초코보',
    countImage: 'img/count/count7_2.png',
    countPhoto: 'img/photo/photo7_2.png',
    name: '[선우현]',
    description: '7.0에 스샷 찍으러 다닐 사람 구함. 1/59',
  },
  {
    index: 14,
    title: '규열@톤베리',
    countImage: 'img/count/count7_1.png',
    countPhoto: 'img/photo/photo7_1.png',
    name: '[꼬질]',
    description: '7황금 와도 놀아주겠따고 약소캐...',
  },
  {
    index: 15,
    title: '템포@펜리르',
    countImage: 'img/count/count6_2.png',
    countPhoto: 'img/photo/photo6_2.png',
    name: '[먼지]',
    description: '먼지는이일을기억할것입니다',
  },
  {
    index: 16,
    title: '셜리@펜리르',
    countImage: 'img/count/count6_1.png',
    countPhoto: 'img/photo/photo6_1.png',
    name: '[셜리]',
    description:
      '이거 보여주려고 어그로 끌었다... 황금의 유산 염색 실화냐? 가슴이 웅장해진다...',
  },
  {
    index: 17,
    title: '시힐@초코보',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo5_2.png',
    name: '[시힐]',
    description: '',
  },
  {
    index: 18,
    title: '단사@초코보',
    countImage: 'img/count/count5_1.png',
    countPhoto: 'img/photo/photo5_1.png',
    name: '[다프네]',
    description: '우리 경험한 적 없는 새로운 모험을 떠나자, 약속이야.',
  },
  {
    index: 19,
    title: '슈슈@펜리르',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo4_2.png',
    name: '[슈슈]',
    description:
      '가좍들끼리 카운트다운을 기념한다는 건 행복한 일이더군요. 참여해주셔서 감사합니다^^ 즐겁게 작업했어요.',
  },
  {
    index: 20,
    title: '냐메@모그리',
    countImage: 'img/count/count4_1.png',
    countPhoto: 'img/photo/photo4_1.png',
    name: '[나리]',
    description:
      '59년 동안 감사했고 앞으로 595959년이 지나서도 파판14와 마크 + 그 외 등등 게임 모두 (함께)재밌게 즐기면서 59하게 지내요~~ 황금의 유산 가보자긔~~',
  },
  {
    index: 21,
    title: '흑밀@톤베리',
    countImage: 'img/count/count3_2.png',
    countPhoto: 'img/photo/photo3_2.png',
    name: '[흑밀]',
    description: '전장 롤백 정권찌르기 1일차',
  },
  {
    index: 22,
    title: '단쨔@초코보',
    countImage: 'img/count/count3_1.png',
    countPhoto: 'img/photo/photo3_1.png',
    name: '[단쨔]',
    description: '',
  },
  {
    index: 23,
    title: '독지@모그리',
    countImage: 'img/count/count2_2.png',
    countPhoto: 'img/photo/photo2_2.png',
    name: '[덕지]',
    description: '세상 여코 내 뜻대로',
  },
  {
    index: 24,
    title: '휘건@모그리',
    countImage: 'img/count/count2_1.png',
    countPhoto: 'img/photo/photo2_1.png',
    name: '[휘건]',
    description: '여기 있는 사람 다 제 첩이에요.',
  },
  {
    index: 25,
    title: '닭갈비볶음밥마스터@카벙클',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo1_2.png',
    name: '[보름]',
    description: '',
  },
  {
    index: 26,
    title: 'SandG@카벙클',
    countImage: 'img/count/count14_1.png', // 일러 없음
    countPhoto: 'img/photo/photo1_1.png',
    name: '[생지]',
    description: '방갑습니다 쌩지입니다.',
  },
];

export default countItems;
