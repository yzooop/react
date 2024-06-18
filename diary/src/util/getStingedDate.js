export const getStringedData = (targetDate) => {
    // 날짜 -> YYYY-MM_DD
    let year = targetDate.getFullYear()
    let month = targetDate.getMonth() + 1
    let day = targetDate.getDate()

    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        month = "0" + day
    }

    return `${year}-${month}-${day}`
}