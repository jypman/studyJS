function get_input_day_label(year,month,day) {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    const day_of_week = week[new Date(year,month,day).getDay()];
    return day_of_week;
}
console.log(get_input_day_label(2021,1-1,20))