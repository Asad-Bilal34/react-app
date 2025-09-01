import React from "react";

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} my-3" role="alert`}>
      {capitalize(props.alert.type)}:{props.alert.msg}
    </div>
  );
}
