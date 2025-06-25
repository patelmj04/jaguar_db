
import React from 'react';
import { Users } from 'lucide-react';

const UserStats = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '124',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-100',
      icon: Users,
    },
    {
      title: 'Active Users',
      value: '98',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-100',
    },
    {
      title: 'Pending',
      value: '12',
      color: 'from-yellow-500 to-yellow-600',
      textColor: 'text-yellow-100',
    },
    {
      title: 'Inactive',
      value: '14',
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`bg-gradient-to-r ${stat.color} p-6 rounded-lg text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${stat.textColor} text-sm`}>{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            {stat.icon ? (
              <stat.icon className="w-8 h-8 text-white/80" />
            ) : (
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
