function formatDate(date) {
    const inMilli = date*1;
    const dateObject = new Date(inMilli);
    const UTCDate = dateObject.toUTCString();
    const formattedDate = UTCDate.split(' ').slice(1, 4).join(' ');
    return formattedDate;
}

module.exports = { formatDate };