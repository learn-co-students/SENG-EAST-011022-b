import React from 'react';

function HogDetail({medal, weight, greased, specialty}) {
  return (
    <div>
        <p>{medal}</p>
        <p>{weight}</p>
        <p>{greased ? "Is Greased" : "Not Greased"}</p>
        <p>{specialty}</p>
    </div>
  );
}

export default HogDetail;
