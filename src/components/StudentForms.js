import React, {useState} from "react";


export default function StudentForms() {
  // const date = new date();
  const [student, setStudent] = useState({
    win_day: "",
    first_rank: "",
    second_rank: "",
    third_rank: "",
  });
  // const navigate = useNavigate();
  

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:8085/StudentForms", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (res.status === 200) {


        setStudent({
            win_day: "",
            first_rank: "",
            second_rank: "",
            third_rank: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
    // navigate("/");
  };

  return (
    <div className="container w-50">
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="floatingInput">ToDate</label>
          <br />
          <input
            className="form-control"
            type="date"
            value={student.win_day}
            onChange={(e) => setStudent({...student, win_day: e.target.value})}
            required
          />
          <br />
          <label htmlFor="floatingInput">first</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={student.first_rank}
            onChange={(e) => setStudent({...student, first_rank: e.target.value})}
            required
          />
          <br />
          <label htmlFor="second">second</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={student.second_rank}
            onChange={(e) => setStudent({...student, second_rank: e.target.value})}
            required
          />
          <br />
          <label htmlFor="floatingInput">third</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={student.third_rank}
            onChange={(e) => setStudent({...student, third_rank: e.target.value})}
            required
          />
          <br />
          <button className="btn btn-info" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
