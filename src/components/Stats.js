import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Stats.css';

function Stats({users}) {
    return (
      <div className="Stats">
      { users.length > 0 ?
      <BarChart
        width={500}
        height={300}
        data={users}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Repos" stackId="a" fill="#8884d8" />
        <Bar dataKey="Followers" stackId="a" fill="#82ca9d" />
      </BarChart>
      :
      <p>No users to show stats for, start by adding users.</p>
      }
      </div>
    );
  // }
}

export default Stats;