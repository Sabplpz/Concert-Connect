// import moment from "moment";

function formatDate(date) {
    const inMilli = date*1;
    const dateObject = new Date(inMilli);
    console.log(dateObject);
    const formattedDate = dateObject.toLocaleString();
    console.log(formattedDate);
    return formattedDate;
}

module.exports = { formatDate };