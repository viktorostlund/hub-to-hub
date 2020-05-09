import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Stats.css';

function Stats({users}) {
    return (
      <div className="Stats">
        <ResponsiveContainer width="100%" aspect={1.5}>
          <BarChart
            // width='100%'
            // height='100%'
            data={users}
            margin={{
              top: 10, right: 10, left: 10, bottom: 10,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="Repos" stackId="a" fill="blue" />
            <Bar dataKey="Followers" stackId="a" fill="lightblue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Stats;