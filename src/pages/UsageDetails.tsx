import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Card } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const conversationData = [
  { date: '24-06-2025', count: 1 },
  { date: '23-06-2025', count: 3 },
  { date: '18-06-2025', count: 3 },
  { date: '11-06-2025', count: 2 },
  { date: '07-06-2025', count: 1 },
  { date: '03-06-2025', count: 2 },
  { date: '02-06-2025', count: 1 },
  { date: '01-06-2025', count: 2 },
];

const userData = [
  { date: '24-06-2025', count: 1 },
  { date: '23-06-2025', count: 2 },
  { date: '18-06-2025', count: 4 },
  { date: '11-06-2025', count: 1 },
  { date: '07-06-2025', count: 2 },
  { date: '03-06-2025', count: 1 },
  { date: '02-06-2025', count: 3 },
  { date: '01-06-2025', count: 1 },
];

const interactionData = [
  { date: '24-06-2025', count: 8 },
  { date: '23-06-2025', count: 15 },
  { date: '18-06-2025', count: 12 },
  { date: '11-06-2025', count: 9 },
  { date: '07-06-2025', count: 6 },
  { date: '03-06-2025', count: 10 },
  { date: '02-06-2025', count: 7 },
  { date: '01-06-2025', count: 5 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#ec4899', '#14b8a6', '#f97316'];

const UsageStats = () => {
  const [tab, setTab] = useState('Conversations');

  const getData = () => {
    switch (tab) {
      case 'Users':
        return userData;
      case 'Interactions':
        return interactionData;
      default:
        return conversationData;
    }
  };

  const currentData = getData();

  return (
    <AppLayout>
      <div className="p-8 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-6">Usage Statistics</h1>

        {/* Bars */}
        <div className="mb-6 space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Bots Deployed</span>
              <span>1</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full w-[100%] bg-orange-500 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Live Chat Licenses</span>
              <span>1/2</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full w-[50%] bg-pink-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700 mb-6">
          {['Conversations', 'Users', 'Interactions'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`pb-2 font-medium ${
                tab === item ? 'border-b-2 border-yellow-400 text-gray-900 dark:text-white' : 'text-gray-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Filter & Download */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-3">
            <Select defaultValue="June 2025">
              <SelectTrigger className="w-[140px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="June 2025">June 2025</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="All Channels">
              <SelectTrigger className="w-[160px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <SelectValue placeholder="All Channels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Channels">All Channels</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>

        {/* Table + PieChart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 col-span-2">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">{tab} Count</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900 font-semibold">
                  <td className="px-6 py-3">Total</td>
                  <td className="px-6 py-3">
                    {currentData.reduce((acc, item) => acc + item.count, 0)}
                  </td>
                </tr>
                {currentData.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="px-6 py-3">{row.date}</td>
                    <td className="px-6 py-3">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card className="flex items-center justify-center p-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={currentData}
                  dataKey="count"
                  nameKey="date"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#3b82f6"
                  label
                >
                  {currentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Notes */}
        <div className="text-xs mt-6 space-y-1 text-gray-600 dark:text-gray-400">
          <p>1. Conversations are measured in fixed 24-hour sessions, starting when the user sends a message up until next 24 hours.</p>
          <p>2. All conversation counts for WhatsApp are an approximation done on a daily basis.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default UsageStats;
