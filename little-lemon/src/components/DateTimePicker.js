import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{display: "flex", justifyContent:"flex-start"}}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select a Date and Time"
        style={{
            width: "400px",
            height: "40px",
            background: "#EDEFEE",
            borderRadius: "16px",
            borderColor: "#333333",
            justifyContent: "flex-start"
        }}
      />
    </div>
  );
};

export default DateTimePicker;
