// import { useState } from "react";
// import ListAddress from "./ListAddress";
// import "./Form.css"
// import MyMap from "./MyMap";
// function Form() {
//   const [place,setPlace]=useState("")
//   const [lat,setLat]=useState(0)
//   const [lon,setLon]=useState(0)
//   const [address,setAddress]=useState([])
//    async function SuggestingAddresses(e){
//     try{
//     let {value} =e.target
//     setPlace(value)
//     if(value.trim()!=""){
//     let data= await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`)
//     data = await data.json()
//     console.log(data)
//     setAddress(data)
//     }
//     else{
//       setAddress([])
//     }
//     }
//     catch(err){
//       console.log(err)
//     }
//    }
//    function savePlace(item){
//       setLat(parseFloat(item.lat))
//       setLon(parseFloat(item.lon))
//       setPlace(item.display_name) 
//    }
//    function submit(e){
//     e.preventDefault();
//     alert("form submited")
//    }
//     return ( <form action="" onSubmit={submit}>
// <label htmlFor="">user name:</label>
// <input type="text" />
// <label htmlFor="">address to search:</label>
// <input type="text" value={place} onChange={SuggestingAddresses} />
// <ListAddress address={address} savePlace={savePlace}/>
// <MyMap lat={lat} lon={lon}/>
// <label htmlFor="">user phone:</label>
// <input type="text" />
// <label htmlFor="">user email:</label>
// <input type="email" />
// <label htmlFor="">Is an internet connection required?:</label>
// <input type="checkbox" />
// <label htmlFor="">Is a kitchen required?</label>
// <input type="checkbox" />
// <label htmlFor="">Is a coffee machine required?</label>
// <input type="checkbox" />
// <label htmlFor="">num of rooms:</label>
// <input type="number" />
// <label htmlFor="">distance:</label>
// <input type="number" />
// <div style={{display:"none"}}>
// <label htmlFor="">status:</label>
// <input type="number" value='search' disabled/>
// </div>
// <input type="submit"/>
// </form>);
// }

// export default Form;
import { useState } from "react";  
import ListAddress from "./ListAddress"; 
import "./Form.css";  
import MyMap from "./MyMap";  

function Form() {  
  const [place, setPlace] = useState("");  // מצב לשמירת המיקום שהמשתמש כותב
  const [lat, setLat] = useState(0);  // מצב לשמירת קואורדינטת ה-latitude
  const [lon, setLon] = useState(0);  // מצב לשמירת קואורדינטת ה-longitude
  const [address, setAddress] = useState([]);  // מצב לשמירת כתובות שהתקבלו מה-API

  // פונקציה שמבצעת הצעות כתובות לפי מה שהמשתמש כותב
  async function SuggestingAddresses(e) {
    try {
      let { value } = e.target;  // קבלת הערך שהוזן על ידי המשתמש
      setPlace(value);  // עדכון מצב ה-place עם הערך החדש
      if (value.trim() !== "") {  // אם הערך לא ריק
        // שליחת בקשה ל-API של OpenStreetMap להצעות כתובת
        let data = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`);
        data = await data.json();  // המרת התגובה מ-JSON לאובייקט JavaScript
        console.log(data);  // הדפסת תוצאות ב-console
        setAddress(data);  // עדכון מצב הכתובת עם התוצאות
      } else {
        setAddress([]);  // אם השדה ריק, מנקה את רשימת הכתובות
      }
    } catch (err) {
      console.log(err);  // הדפסת שגיאות במקרה של בעיה בביצוע הבקשה
    }
  }

  // פונקציה לשמירת כתובת שנבחרה (הוספת קואורדינטות)
  function savePlace(item) {
    setLat(parseFloat(item.lat));  // עדכון מצב ה-latitude עם הערך מתוך התשובה
    setLon(parseFloat(item.lon));  // עדכון מצב ה-longitude עם הערך מתוך התשובה
    setPlace(item.display_name);  // עדכון המיקום עם שם הכתובת שנבחרה
  }

  // פונקציה לשליחת הטופס
  function submit(e) {
    e.preventDefault();  // מונע את שליחת הטופס (רענון הדף)
    alert("form submitted");  // הצגת הודעת אזהרה על שליחת הטופס
  }

  return (
    <form action="" onSubmit={submit}>
      <label htmlFor="">user name:</label> 
      <input type="text" /> 
      <label htmlFor="">address to search:</label> 
      <input type="text" value={place} onChange={SuggestingAddresses} /> 
      <ListAddress address={address} savePlace={savePlace} /> 
      <MyMap lat={lat} lon={lon} /> 
      <label htmlFor="">user phone:</label>  
      <input type="text" />  
      <label htmlFor="">user email:</label> 
      <input type="email" /> 
      <label htmlFor="">Is an internet connection required?:</label>  
      <input type="checkbox" /> 
      <label htmlFor="">Is a kitchen required?</label>
      <input type="checkbox" /> 
      <label htmlFor="">Is a coffee machine required?</label>  
      <input type="checkbox" />  
      <label htmlFor="">num of rooms:</label> 
      <input type="number" />  
      <label htmlFor="">distance:</label> 
      <input type="number" />  
      <div style={{ display: "none" }}> 
        <label htmlFor="">status:</label>  
        <input type="number" value="search" disabled /> 
      </div>
      <input type="submit" /> 
    </form>
  );
}

export default Form;  // ייצוא של הפונקציה Form לשימוש במקום אחר בקוד
