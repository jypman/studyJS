const upload_date = '2021-06-30T08:12:26.435Z'

function upload_date_parsing(upload_date) {
    if(upload_date !== null){
        const today = korea_time();
        const upload_time = new Date(upload_date)

        const betweenTime = Math.floor((today.getTime() - upload_time.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        else if (betweenTime < 60) return `${betweenTime}분전`;

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) return `${betweenTimeHour}시간전`;

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 30) return `${betweenTimeDay}일전`;

        const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
        if (betweenTimeMonth < 12) return `${betweenTimeMonth}달전`;

        return `${Math.floor(betweenTimeMonth / 12)}년전`;
    }
}

function korea_time() {
    const curr = new Date();
    const utc = curr.getTime()
    const kr_time_diff = 9 * 60 * 60 * 1000
    return new Date(utc + (kr_time_diff))
}

console.log(upload_date_parsing(upload_date))

function date_parsing(upload_date) {
    const today = korea_time()
    const upload_time = new Date(upload_date)
    if(today.getUTCFullYear() !== upload_time.getUTCFullYear()){
        return upload_time.getUTCFullYear()+"."+ (upload_time.getUTCMonth()+1)+"."+ (upload_time.getUTCDate())
    }
    else if(today.getUTCMonth() !== upload_time.getUTCMonth() || today.getUTCDate() !== upload_time.getUTCDate()){
        const betweenTime = Math.floor((today.getTime() - upload_time.getTime()) / 1000 / 60);
        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay === 1)
            return '어제';
        else
            return (upload_time.getUTCMonth()+1)+"월 "+ (upload_time.getUTCDate())+"일"
    }
    // 추후 코드 추가
    // else{
    //     time_parsing(upload_date)
    // }
}

console.log(date_parsing(upload_date))