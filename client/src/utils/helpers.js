// import moment from "moment";

function formatDate(date) {
    const inMilli = date*1;
    const dateObject = new Date(inMilli);
    console.log(dateObject);
    const UTCDate = dateObject.toUTCString();
    const formattedDate = UTCDate.split(' ').slice(1, 4).join(' ');
    console.log(formattedDate);
    return formattedDate;
}

module.exports = { formatDate };