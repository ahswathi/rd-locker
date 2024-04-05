import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import Styles from '../component/Style.module.css';


const CalendarPicker = (props) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [isMonthYearVisible, setIsMonthYearVisible] = useState(false)

    const showMonthyearPicker = () => {
        setIsMonthYearVisible(true);
    };

    const hideMonthyearPicker = () => {
        setIsMonthYearVisible(false);
    };

    const handleMonthPicker = (month) =>{
        setCurrentMonth(month)
        hideMonthyearPicker(month);
        props.onChangeMonth(moment(month).format('MM-YYYY'))
    }
    return (
        <div className="calendar">
            <Calendar
               onChange={setCurrentMonth}
               value={currentMonth}
               maxDate={new Date()} // will not allow date later than today
               minDate={new Date(2015, 6, 1)} 
               maxDetail='year'
               nextLabel='month>>'
                nextAriaLabel='Go to next month'
                next2Label='year>>'
                next2AriaLabel='Go to next year'
                prevLabel='<<month'
                prevAriaLabel='Go to prev month'
                prev2Label='<<year'
                prev2AriaLabel='Go to prev year'
            />
            <select onChange={showMonthyearPicker}>
                <div style={{width:'100%'}}>
                    <div className={Styles.width}> 
                        <div>
                            <p>{props.label || new Date()}</p>
                        </div>
                        <div>
                            <img src='/dropdown.png' style={{width:8,height:4}}/>
                        </div>
                    </div>
                </div>
            </select>
        </div>
    );
};

export default CalendarPicker;
