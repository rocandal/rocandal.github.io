const formatDate = () => {
  const now = new Date();
  const kstOffset = 9 * 60; // UTC+9

  now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + kstOffset);

  const formattedDate = now.toISOString().split('T')[0]; // 'YYYY-MM-DD'

  // 오늘 날짜가 2024년 11월 19일 이전인 경우
  const todayDate =
    formattedDate <= '2024-11-19' ? '2024-11-19' : formattedDate;

  return todayDate;
};

export default formatDate;
