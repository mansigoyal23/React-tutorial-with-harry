// rfce - by type this VS code provide the react functional component basic code.

import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        // lower variable k ander sare words ko small letters m convert krke save kr liya. Then 1st letter ko capital letter m convert kiya and slice k threw lower variable m se 1st charcter ko remove krke capitalize(1st in uppercase all others are in lowercase) form m return krva diya.
    }
  return (
    // agr props.alert ki value false h.. toh yeh alert ka div bhi nhi show hoga. And agr value true h. toh hi only yeh div aayga.
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
