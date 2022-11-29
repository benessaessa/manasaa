import React, { useState, useRef, useEffect } from "react";


function CardItem(props) {
const[itemData,setItemData]=useState(null)
useEffect(()=>{
    setItemData(props.item)
},[props.item])

    return (
        <tr>
            <td>{itemData?.question}</td>
            <td>{itemData?.answers.map((item,index)=>{
                return <span key={index}>{item.answer} </span>
            })}</td>
            <td>
                <button className='btn btn-primary' onClick={()=>{
                    props.edit()
                }}>تعديل</button>
                <button className='btn btn-danger me-2'  onClick={()=>{
                    props.delete()
                }}>حذف</button>
            </td>
        </tr>
    );
}

export default CardItem;