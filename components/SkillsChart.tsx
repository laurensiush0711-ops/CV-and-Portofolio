
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const SkillsChart: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name.split(' (')[0],
    A: s.level,
    fullMark: 100,
  }));

  // Custom tooltip to hide the numerical value
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#112240] px-3 py-2 rounded border border-[#64ffda] shadow-xl">
          <p className="mono text-[#64ffda] text-xs font-semibold">{payload[0].payload.subject}</p>
          <p className="text-[#8892b0] text-[10px] mt-1 italic">Competency Area</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[350px] w-full bg-[#112240] rounded-lg p-4 border border-[#233554]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#233554" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#8892b0', fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skill"
            dataKey="A"
            stroke="#64ffda"
            fill="#64ffda"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
