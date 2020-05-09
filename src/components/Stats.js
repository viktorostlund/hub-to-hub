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
        </ResponsiveContainer>
        }
      </div>
    );
}

export default Stats;