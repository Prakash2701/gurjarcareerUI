import React, {useState, useEffect} from "react";

export default function WinTable() {
  const [Show, setShow] = useState([]);
  const [month, setMonth] = useState([]);
  const [previouMonth, setPreviousMonth] = useState([]);
  const [nextMonth, setNextMonth] = useState([]);
  const[valid, setvalid]= useState([]);
  const[validprevious, setvalidprevious]= useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8085/monthllist")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShow(data.dataList);
        setMonth(data.monthName);
        setPreviousMonth(data.previousMonth);
        setNextMonth(data.nextMonth);
        setvalid(data.next);
        //setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        
      });
  }, []);
 
const [switchDate,setSwitchDate] =useState({
    monthName:'',
    previousMonth:'',
    nextMonth:''
});




  let SubmitpreviouMonth = async (e) => {
    e.preventDefault();
    switchDate.monthName=previouMonth;
   
    setSwitchDate({...switchDate});
    try {
       await fetch("http://localhost:8085/MonthsNextandPrevious", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(
            switchDate 
        ),
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShow(data.dataList);
        setMonth(data.monthName);
        setPreviousMonth(data.previousMonth);
        setNextMonth(data.nextMonth);
        setvalid(data.next);
        setvalidprevious(data.previous);
        //setIsLoading(false);
      });
   
      
      
      
    } catch (err) {
      console.log(err);
    }
};

let SubmitnextMonth = async (e) => {
    e.preventDefault();
    switchDate.monthName=nextMonth;
   
    setSwitchDate({...switchDate});
    try {
       await fetch("http://localhost:8085/MonthsNextandPrevious", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(
            switchDate 
        ),
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShow(data.dataList);
        setMonth(data.monthName);
        setPreviousMonth(data.previousMonth);
        setNextMonth(data.nextMonth);
        //setIsLoading(false);
        setvalid(data.next);
        setvalidprevious(data.previous);
      });
   
      
      
      
    } catch (err) {
      console.log(err);
    }
};

  return (
    <div className="container my-5 position-relative shadow-lg p-3 mb-5 bg-body rounded">
        <h1 className="text-center">{month}</h1>
        <div className=" container d-flex mb-5">

        <input type="submit"className="btn btn-info position-absolute top-10 start-0 translate-middle-y"disabled={!validprevious ? true : false} onClick={SubmitpreviouMonth} value={previouMonth} />
             <button type="button"className="btn btn-info position-absolute top-10 end-0  translate-middle-y "  disabled={!valid ? true : false} onClick={SubmitnextMonth}  >{nextMonth}</button>
        
        </div>
       
      <div className="container my-5">
      
        <table className="table table-striped table-hover">
          <thead>
           
            <th>Name</th>
            <th>Total First </th>
            <th>Total Second</th>
            <th>Total Third</th>
            <th>Total Point</th>
          </thead>
          {Show.map((post) => {
            return (
                
              <tbody>
                <tr className="table" key={post.id}>
                  
                  <td colspan="1" className="table-active">
                    {post.user_id}
                  </td>
                  <td>{post.first_total}</td>
                  <td>{post.second_total}</td>
                  <td>{post.third_total}</td>
                  <td>{post.total_point}</td>
                </tr>
              </tbody>
            );
          })}
          
        </table>
      </div>
    </div>
  );
}
