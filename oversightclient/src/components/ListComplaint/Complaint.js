import React from 'react';

const Complaint = props => {
    return (
        <div class="row">
            <div class="col s12 m6">
            <div class="card">
                <div class="card-content">
                <span class="card-title">{props.complaint.complaintType}</span>
                <p>{props.complaint.body}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Complaint;