import React from 'react';
import AppLayout from '../components/AppLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../components/StatCard';
import { MessageSquare, Users, Bot, TrendingUp, Phone, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  const chatData = [
    { date: '2024-06-17', messages: 45 },
    { date: '2024-06-18', messages: 52 },
    { date: '2024-06-19', messages: 38 },
    { date: '2024-06-20', messages: 65 },
    { date: '2024-06-21', messages: 48 },
    { date: '2024-06-22', messages: 71 },
    { date: '2024-06-23', messages: 58 }
  ];

  const deviceData = [
    { name: 'Mobile', value: 58, color: '#3b82f6' },
    { name: 'Desktop', value: 32, color: '#10b981' },
    { name: 'Tablet', value: 10, color: '#f59e0b' }
  ];

  // const cityData = [
  //   { name: 'Mumbai', value: 28 },
  //   { name: 'Delhi', value: 22 },
  //   { name: 'Bangalore', value: 18 },
  //   { name: 'Chennai', value: 12 },
  //   { name: 'Hyderabad', value: 8 },
  //   { name: 'Pune', value: 7 },
  //   { name: 'Kolkata', value: 5 }
  // ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your chat system.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatCard 
            title="Agent Initiations" 
            value="1,247" 
            change="+12.5%" 
            changeType="positive"
            icon={<Users className="w-6 h-6 text-blue-500" />} 
          />
          <StatCard 
            title="Conversation Threads" 
            value="3,842" 
            change="+8.2%" 
            changeType="positive"
            icon={<MessageSquare className="w-6 h-6 text-blue-500" />} 
          />
          <StatCard 
            title="User Queries Answered" 
            value="9,356" 
            change="+15.3%" 
            changeType="positive"
            icon={<Bot className="w-6 h-6 text-blue-500" />} 
          />
          <StatCard 
            title="Avg Queries/Thread" 
            value="2.4" 
            change="-0.2" 
            changeType="negative"
            icon={<TrendingUp className="w-6 h-6 text-blue-500" />} 
          />
          <StatCard 
            title="Leads Generated" 
            value="482" 
            change="+23.1%" 
            changeType="positive"
            icon={<Phone className="w-6 h-6 text-blue-500" />} 
          />
        </div>

        {/* Chart Section */}
        <Card className="p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Chat Messages Count</h2>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 7 days
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chatData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value) => [value, 'Messages']}
              />
              <Bar dataKey="messages" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Bottom Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Device Visitors */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Device Visitors</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Top 7 Cities */}
          {/* <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top 7 Cities</h3>
            <div className="space-y-3">
              {cityData.map((city, index) => (
                <div key={city.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{city.name}</span>
                  </div>
                  <span className="text-sm font-medium">{city.value}%</span>
                </div>
              ))}
            </div>
          </Card> */}

          {/* Top Queries */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Queries</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Product Information</span>
                <span className="text-sm font-medium text-muted-foreground">342</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pricing Details</span>
                <span className="text-sm font-medium text-muted-foreground">289</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Support Request</span>
                <span className="text-sm font-medium text-muted-foreground">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Installation Guide</span>
                <span className="text-sm font-medium text-muted-foreground">124</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Warranty Info</span>
                <span className="text-sm font-medium text-muted-foreground">98</span>
              </div>
            </div>
          </Card>

          {/* Top Engagements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Engagements</h3>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium">#1247</span>
                  <span className="text-xs text-muted-foreground">12 chats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Thread: TH-9845</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    <ArrowUpRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium">#1246</span>
                  <span className="text-xs text-muted-foreground">8 chats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Thread: TH-9844</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    <ArrowUpRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium">#1245</span>
                  <span className="text-xs text-muted-foreground">15 chats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Thread: TH-9843</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    <ArrowUpRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
