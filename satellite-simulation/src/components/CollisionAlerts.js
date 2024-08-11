import React from 'react';

function CollisionAlerts({ collisions }) {
  return (
    <div>
      {collisions.length > 0 ? (
        <ul>
          {collisions.map((collision, index) => (
            <li key={index}>Potential collision detected between satellite {collision.sat1} and satellite {collision.sat2}</li>
          ))}
        </ul>
      ) : (
        <p>No collisions detected.</p>
      )}
    </div>
  );
}

export default CollisionAlerts;
