import React, { useState } from 'react';

function Grid() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const today=new Date();
  const [day,setDay]=useState(today.getDay());
  const [month,setMon]=useState(today.getMonth());
  const [year,setYear]=useState(today.getFullYear());
  const [selected,setSelect]=useState(today.getDate());

  const calendar=[];

  for (let i=0;i<day;i++) {
    calendar.push('');
  }

  
  for (let i=1;i<=month;i++) {
    calendar.push(i);
  }


  const update=(d,m,y)=>{
    const nd=new Date(y,m,d);
    setDay(nd.getDay());
    setMon(nd.getMonth());
    setYear(nd.getFullYear());
    setSelect(`${day}-${month+1}-${year}`);
  }
  const next=()=>{
    if(month==11){
      setMon(0);
      setYear(year+1);

    }else{
      setMon(month+1);
    }
    update(1,month,year);

    
  }
  const prev=()=>{
    if(month==0){
      setMon(11);
      setYear(year-1);

    }else{
      setMon(month-1);
    }
    update(1,month,year);

  }

  const popup=(day) => {
    setSelect(`${day}-${month + 1}-${year}`); 
    alert(`Selected Date: ${day}-${month + 1}-${year}`); 
  };
  


  
  
  
  
  return(




  );
  
  
  
  
  
  
  
}
export default Grid;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*const today = new Date();
  const [currday, setday] = useState(today.getDate());
  const [currmonth, setmonth] = useState(today.getMonth());
  const [curryear, setyear] = useState(today.getFullYear());
  const [selected, setselected] = useState('');
  const [date, selectdate] = useState('');
  const [isopenPopup, setIsPopupOpen] = useState(false);

  const firstday = new Date(curryear, currmonth, 1).getDay();
  const daysInMonth = new Date(curryear, currmonth + 1, 0).getDate();
  const calendar = [];

  //for days before date 1, cells have to be blank
  for (let i = 0; i < firstday; i++) {
    calendar.push('');
  }

  //if dates are valid, then fill the cell with i
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(i);
  }

  // for appearance of date
  const updateDate = (day, month, year) => {
    const nd = new Date(year, month, day);
    setday(nd.getDate());
    setmonth(nd.getMonth());
    setyear(nd.getFullYear());
    setselected(`${nd.getDate()}-${nd.getMonth() + 1}-${nd.getFullYear()}`);
  };

  //go to previous day
  const handlePrev = () => {
    const newMonth = currmonth === 0 ? 11 : currmonth - 1;
    const newYear = currmonth === 0 ? curryear - 1 : curryear;
    updateDate(1, newMonth, newYear);
  };
  //next day
  const handleNext = () => {
    const newMonth = currmonth === 11 ? 0 : currmonth + 1;
    const newYear = currmonth === 11 ? curryear + 1 : curryear;
    updateDate(1, newMonth, newYear);
  };

  const popup = (date) => {
    setselected(`${date}-${currmonth + 1}-${curryear}`); 
    alert(`Selected Date: ${date}-${currmonth + 1}-${curryear}`); 
  };


  
  return (
    <>
      <h2>Date: {selected || `${currday}-${currmonth + 1}-${curryear}`}</h2> 
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '20px' }}>
       
        {days.map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
        ))}

        
        {calendar.map((date, index) => {
          const isToday =
            date === today.getDate() &&
            currmonth === today.getMonth() &&
            curryear === today.getFullYear();

          const isSelected = date === currday;

          return (
            <div
              key={index}
              onClick={() => date && updateDate(date, currmonth, curryear) && popup(date)}
              
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                backgroundColor: isSelected ? 'beige' : isToday ? 'green' : '#fff',
                
                  
                  border: '1px solid #ccc',
                  
                  cursor: date ? 'pointer' : 'default'
                
              }}>
            
              {date}
            </div>
          );
        })}
        

      </div>
      
     
    </>
  );
}

export default Grid;
    










































/*function Grid({ year, month }) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currMonth, setCurrMonth] = useState(month);
  const [currYear, setCurrYear] = useState(year);
  const [tasks, setTasks] = useState({});
  const [selected, setSelected] = useState(null);
  const [newTask, setNewTask] = useState("");

  const date = new Date(currYear, currMonth);
  const firstDay = new Date(currYear, currMonth, 1).getDay();
  const totalDays = new Date(currYear, currMonth + 1, 0).getDate();

  const handlePrev = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
    setSelected(null);
  };

  const handleNext = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
    setSelected(null);
  };

  const handleDateClick = (day) => {
    const dateKey = `${currYear}-${currMonth + 1}-${day}`;
    setSelected(dateKey);
    setNewTask("");
  };

  const addTask = () => {
    if (!selected || newTask.trim() === "") return;
    setTasks((prev) => ({
      ...prev,
      [selected]: [...(prev[selected] || []), newTask],
    }));
    setNewTask("");
  };

  

  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="cell empty"></div>);
  }
  for (let d = 1; d <= totalDays; d++) {
    const dateKey = `${currYear}-${currMonth + 1}-${d}`;
    const taskCount = tasks[dateKey]?.length || 0;
    cells.push(
      <div
        key={d}
        className="cell"
        onClick={() => handleDateClick(d)}
        style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px" }}
      >
        {d}
        {taskCount > 0 && <div style={{ fontSize: '0.7em', color: 'green' }}>{taskCount} task(s)</div>}
      </div>
    );
  }

  return (
    <div>
      <h2>{date.toLocaleString('default', { month: 'long' })} {currYear}</h2>

      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className="grid" onClick="handle-the-click" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', margin: '20px 0' }}>
        {days.map(day => <div key={day} className="cell header" style={{ fontWeight: 'bold' }}>{day}</div>)}
        {cells}
      </div>

      {selected && (
        <div>
          <h3>Tasks for {selected}</h3>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {(tasks[selected] || []).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Grid;*/
