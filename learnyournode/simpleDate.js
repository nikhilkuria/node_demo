function getDummyDate(){
  return new Date();
}

function getCurrentDate(){
  //"YYYY-MM-DD hh:mm"
  date = new Date();
  year = date.getFullYear();
  month = sanitizeToDoubleDigits(date.getMonth()+1);
  day = sanitizeToDoubleDigits(date.getDate());

  hour = sanitizeToDoubleDigits(date.getHours());
  minutes = sanitizeToDoubleDigits(date.getMinutes());

  dateString = [year,"-",month,"-",day," ",hour,":",minutes].join("");
  return dateString;
}

function sanitizeToDoubleDigits(value){
  if(value<9){
    return '0'+value;
  }

  return value;
}

module.exports = {
  getDate :  getCurrentDate,
  dummyDate : getDummyDate
};
