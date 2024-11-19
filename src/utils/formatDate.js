const formatDate = () => {
  const now = new Date();
  const kstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  const formattedDate = kstNow.toISOString().split('T')[0]; // 'YYYY-MM-DD'

  // 오늘 날짜가 2024년 11월 19일 이전인 경우
  const todayDate =
    formattedDate <= '2024-11-19' ? '2024-11-19' : formattedDate;

    console.log(formattedDate)

  return todayDate;
};

export default formatDate;
