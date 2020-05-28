import React, {Fragment} from 'react';

const Error = ({mensaje}) => {
    return ( 
        <Fragment>
            <div className="alert alert-danger h6">{mensaje}</div>
        </Fragment>
    );
}
 
export default Error;