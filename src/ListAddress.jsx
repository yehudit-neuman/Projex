function ListAddress({ address,savePlace }) { //קומפוננטה להצגת רשימת הכתובות האפשריות שהתקבלו מהשרת
    return (<>
        <ul>
            {address.map(item =>(
                //בלחיצה על כל אחת מן הכתובות תופעל savePlace ששומרת את נתוני הכתובת שרלוונטיים בstate
            <li onClick={()=>{savePlace(item)}} key={item.id}>{item.display_name}</li>))}
        </ul>

    </>);
}

export default ListAddress;