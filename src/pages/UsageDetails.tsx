import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Card } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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

const UsageStats = () => {
  const [tab, setTab] = useState('Conversations');

  return (
    <AppLayout>
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Usage Statistics</h1>

        {/* Stats Bars */}
        <div className="mb-6 space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Bots Deployed</span>
              <span>1</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[100%] bg-orange-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Live Chat Licenses</span>
              <span>1/2</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[50%] bg-pink-400" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-4 border-b border-gray-600">
          {['Conversations', 'Users', 'Interactions'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`pb-2 text-sm ${
                tab === item ? 'border-b-2 border-yellow-400 font-semibold' : 'text-gray-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Filters and Actions */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-3">
            <Select defaultValue="June 2025">
              <SelectTrigger className="w-[140px] bg-gray-800 text-white border-gray-600">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="June 2025">June 2025</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="All Channels">
              <SelectTrigger className="w-[160px] bg-gray-800 text-white border-gray-600">
                <SelectValue placeholder="All Channels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Channels">All Channels</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" className="text-white border-gray-600">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Table */}
        <Card className="bg-gray-900 text-sm text-white">
          <table className="w-full table-auto">
            <thead className="text-left border-b border-gray-700">
              <tr>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Conversation Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 font-semibold">
                <td className="py-2 px-4">Total</td>
                <td className="py-2 px-4">
                  {conversationData.reduce((acc, item) => acc + item.count, 0)}
                </td>
              </tr>
              {conversationData.map((row, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Footer Note */}
        <div className="text-xs text-muted-foreground mt-6 space-y-1 text-gray-400">
          <p>1. Conversations are measured in fixed 24-hour sessions, starting when the user sends a message up until next 24 hours.</p>
          <p>2. All conversation counts for WhatsApp are an approximation done on a daily basis...</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default UsageStats;
