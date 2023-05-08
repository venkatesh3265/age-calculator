import { useContext, useState } from 'react';
import '../assets/scss/dateComponent.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { AppContext } from '../context/appContext';

const DateDisplay = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {setState} = useContext(AppContext)

 

  function calculateAgeWithDetails(birthDate) {
    var now = new Date();
  
    function isLeap(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
  
    var days = Math.floor((now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24);
    var years = 0;
    var months = 0;
  
    for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {
      var daysInYear = isLeap(y) ? 366 : 365;
  
      if (days >= daysInYear) {
        days -= daysInYear;
        years++;
      }
    }
  
    if (now.getMonth() < birthDate.getMonth()) {
      years--;
      months = 12 - (birthDate.getMonth() - now.getMonth());
    } else {
      months = now.getMonth() - birthDate.getMonth();
    }
  
    var birthDay = birthDate.getDate();
    var currentDay = now.getDate();
  
    if (currentDay < birthDay) {
      months--;
      var monthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days = monthDays - (birthDay - currentDay);
    } else {
      days = currentDay - birthDay;
    }
  
    return {
      years: years,
      months: months,
      days: days
    };
  }
  

  
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date)
    setState(calculateAgeWithDetails(date));
  };
  return (
    <div className='date-main'>
      <div className='date-day'>
        <label htmlFor="daypicker">DAY</label>
        <DatePicker
          id="daypicker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd"
          placeholderText="Day"
          showMonthDropdown={false}
          showYearDropdown={false}
          dropdownMode="select"

        />

      </div>
      <div className='date-month'>
      <label htmlFor="daypicker">Month</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM"
          showMonthYearPicker
          placeholderText="Month"
          showMonthDropdown={false}
          showYearDropdown={false}
          dropdownMode="select"
        />

      </div>
      <div className='date-year'>
      <label htmlFor="daypicker">Year</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showYearPicker
          dateFormat="yyyy"
          placeholderText="Year"
          dropdownMode="select"
        />

      </div>
    </div>
  )
}

export default DateDisplay