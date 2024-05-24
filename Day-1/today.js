module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    return aestTime;
}

