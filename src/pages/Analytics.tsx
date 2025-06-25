import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Users, MessageSquare, TrendingUp, Clock, Star, Target } from 'lucide-react';

const Analytics = () => {
  const overviewData = [
    { name: 'Mon', chats: 120, responses: 98, engagement: 85 },
    { name: 'Tue', chats: 95, responses: 87, engagement: 92 },
    { name: 'Wed', chats: 140, responses: 125, engagement: 89 },
    { name: 'Thu', chats: 110, responses: 95, engagement: 86 },
    { name: 'Fri', chats: 160, responses: 145, engagement: 91 },
    { name: 'Sat', chats: 80, responses: 70, engagement: 88 },
    { name: 'Sun', chats: 70, responses: 65, engagement: 93 }
  ];

  const botEngagementData = [
    { name: 'Successful', value: 75, color: '#22c55e' },
    { name: 'Partial', value: 20, color: '#f59e0b' },
    { name: 'Failed', value: 5, color: '#ef4444' }
  ];

  const responseTimeData = [
    { time: '0-30s', count: 45 },
    { time: '30s-1m', count: 32 },
    { time: '1-2m', count: 18 },
    { time: '2-5m', count: 5 }
  ];

  const retentionData = [
    { week: 'Week 1', retention: 100 },
    { week: 'Week 2', retention: 85 },
    { week: 'Week 3', retention: 72 },
    { week: 'Week 4', retention: 65 }
  ];

  const agentPerformanceData = [
    { agent: 'John D.', resolved: 95, rating: 4.8, responseTime: '2.3m' },
    { agent: 'Sarah W.', resolved: 87, rating: 4.6, responseTime: '1.8m' },
    { agent: 'Mike J.', resolved: 92, rating: 4.7, responseTime: '2.1m' },
    { agent: 'Emily D.', resolved: 88, rating: 4.9, responseTime: '1.9m' }
  ];

  const feedbackData = [
    { rating: 5, count: 245, percentage: 65 },
    { rating: 4, count: 89, percentage: 24 },
    { rating: 3, count: 28, percentage: 7 },
    { rating: 2, count: 12, percentage: 3 },
    { rating: 1, count: 4, percentage: 1 }
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 days
            </Button>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bot-engagement">Bot Engagement</TabsTrigger>
            <TabsTrigger value="bot-responses">Bot Responses</TabsTrigger>
            <TabsTrigger value="user-retention">User Retention</TabsTrigger>
            <TabsTrigger value="live-chat">Live Chat</TabsTrigger>
            <TabsTrigger value="agent-performance">Agent Performance</TabsTrigger>
            <TabsTrigger value="conversation">Conversation</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Conversations</p>
                    <p className="text-3xl font-bold">2,547</p>
                    <p className="text-sm text-green-600">+12.5% from last month</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-blue-500" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                    <p className="text-3xl font-bold">1,832</p>
                    <p className="text-sm text-green-600">+8.2% from last month</p>
                  </div>
                  <Users className="w-8 h-8 text-green-500" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                    <p className="text-3xl font-bold">1.8m</p>
                    <p className="text-sm text-red-600">+0.3m from last month</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                    <p className="text-3xl font-bold">4.7</p>
                    <p className="text-sm text-green-600">+0.2 from last month</p>
                  </div>
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Weekly Chat Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={overviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="chats" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="responses" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="bot-engagement" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Bot Engagement Success Rate</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={botEngagementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {botEngagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Engagement Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Successful Interactions</span>
                    <span className="font-semibold text-green-600">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Partial Interactions</span>
                    <span className="font-semibold text-yellow-600">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Failed Interactions</span>
                    <span className="font-semibold text-red-600">5%</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bot-responses" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Response Time Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="user-retention" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">User Retention Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="retention" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="live-chat" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-sm text-muted-foreground">Active Chats</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">128</p>
                  <p className="text-sm text-muted-foreground">Queue Length</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">2.3m</p>
                  <p className="text-sm text-muted-foreground">Avg Wait Time</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agent-performance" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Agent Performance Metrics</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Agent</th>
                      <th className="text-left p-2">Resolved</th>
                      <th className="text-left p-2">Rating</th>
                      <th className="text-left p-2">Avg Response Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agentPerformanceData.map((agent, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{agent.agent}</td>
                        <td className="p-2">{agent.resolved}</td>
                        <td className="p-2">{agent.rating}</td>
                        <td className="p-2">{agent.responseTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="conversation" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Conversation Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Top Conversation Topics</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Product Support</span>
                      <span className="font-semibold">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Billing Inquiries</span>
                      <span className="font-semibold">28%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Technical Issues</span>
                      <span className="font-semibold">22%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>General Information</span>
                      <span className="font-semibold">15%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Conversation Length</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>1-3 messages</span>
                      <span className="font-semibold">42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>4-7 messages</span>
                      <span className="font-semibold">31%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>8-15 messages</span>
                      <span className="font-semibold">19%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>15+ messages</span>
                      <span className="font-semibold">8%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Customer Feedback Report</h3>
              <div className="space-y-4">
                {feedbackData.map((item) => (
                  <div key={item.rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Analytics;
