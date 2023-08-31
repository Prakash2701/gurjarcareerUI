import React,{useState} from 'react'

export default function LinksPage() {
    const [link, setLink] = useState({
        insta_id:'',
        insta_name:''
      });
      // const navigate = useNavigate();
      let handleSubmit = async (e) => {
        e.preventDefault();
    
    
        try {
          let res = await fetch("http://localhost:8085/linkinterface", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(link),
          });
    
          if (res.status === 200) {
            setLink({
                insta_id:'',
                insta_name:''
            });
          }
        } catch (err) {
          console.log(err);
        }
        // navigate("/");
      };
  return (
    <div className='container w-50'>
       <div className='container'>
        <h1>Link</h1>
        <form onSubmit={handleSubmit}>
            <label>instaID</label><input  className='form-control' type="text" value={link.insta_id} onChange={(e) => setLink({ ...link, insta_id: e.target.value })} /><br/>
            <label>Name</label><input  className='form-control' type="text" value={link.insta_name} onChange={(e) => setLink({ ...link, insta_name: e.target.value })}/><br/>
            <button  className='btn btn-info' type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}
