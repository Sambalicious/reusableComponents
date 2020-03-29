import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const DatePickers = () => {
        {/* date pickes allows you to select dates and modify its format
        =>props:
    1. dateFormat="yyyy/MM/dd"
2. setting mininumdates and maximum dates  with minDate and maxDate prop
3.filterDate= {date => date.getDay() !== 6 && date.getDay !== 0  its excludes sundays and saturdays
=> isClearable allows you to deselect a date   } */}

    const [selectedDate, setSelectedDate] = useState(null)
    return ( 
        <div>
            <DatePicker selected={selectedDate}
             onChange={date => setSelectedDate(date) } 
             dateFormat="yyyy/MM/dd"
             minDate={new Date()}
             filterDate= {date => date.getDay() !== 6 && date.getDay !== 0    }
             isClearable />
        </div>
     );
}
 
export default DatePickers;