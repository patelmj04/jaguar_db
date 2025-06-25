import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Search, Filter, Eye, Calendar, MessageSquare, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const ChatSessions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const chatSessions = [
    {
      id: 'CS001',
      threadId: 'TH-9845',
      leadInfo: '+91 98765 43210',
      chatCount: 12,
      createdAt: '2024-06-23 10:30 AM',
      status: 'Active',
      lastMessage: 'Thank you for the information'
    },
    {
      id: 'CS002',
      threadId: 'TH-9844',
      leadInfo: '+91 87654 32109',
      chatCount: 8,
      createdAt: '2024-06-23 09:15 AM',
      status: 'Completed',
      lastMessage: 'I need more details about pricing'
    },
    {
      id: 'CS003',
      threadId: 'TH-9843',
      leadInfo: '+91 76543 21098',
      chatCount: 15,
      createdAt: '2024-06-22 04:45 PM',
      status: 'Active',
      lastMessage: 'Can you help me with installation?'
    },
    {
      id: 'CS004',
      threadId: 'TH-9842',
      leadInfo: '+91 65432 10987',
      chatCount: 5,
      createdAt: '2024-06-22 02:20 PM',
      status: 'Pending',
      lastMessage: 'Hello, I have a question'
    },
    {
      id: 'CS005',
      threadId: 'TH-9841',
      leadInfo: '+91 54321 09876',
      chatCount: 20,
      createdAt: '2024-06-22 11:00 AM',
      status: 'Completed',
      lastMessage: 'Perfect, that solves my issue'
    }
  ];

  const filteredSessions = chatSessions.filter(session =>
    session.threadId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.leadInfo.includes(searchTerm) ||
    session.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Chat Sessions</h1>
          <p className="text-muted-foreground">Monitor and manage ongoing and completed chat conversations</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
                <p className="text-3xl font-bold">1,247</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Chats</p>
                <p className="text-3xl font-bold">45</p>
              </div>
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Session Time</p>
                <p className="text-3xl font-bold">8.5m</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
                <p className="text-3xl font-bold">94%</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by ID, Thread ID, or phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>Thread ID</TableHead>
                  <TableHead>Lead Info</TableHead>
                  <TableHead>Messages</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Last Message</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.id}</TableCell>
                    <TableCell>{session.threadId}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>{session.leadInfo}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        <span>{session.chatCount}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        session.status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {session.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{session.createdAt}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-sm text-muted-foreground">
                      {session.lastMessage}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Chats
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ChatSessions;
