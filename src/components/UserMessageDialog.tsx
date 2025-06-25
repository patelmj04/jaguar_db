
import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  recipient: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserMessageDialogProps {
  user: User;
  messages: Message[];
  onSendMessage: (message: string, user: User) => void;
}

const UserMessageDialog: React.FC<UserMessageDialogProps> = ({ user, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message, user);
      setMessage('');
    }
  };

  const userMessages = messages.filter(msg => msg.recipient === user.name);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          Message
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send Message to {user.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="max-h-60 overflow-y-auto space-y-2 p-4 bg-muted rounded-lg">
            {userMessages.map((msg) => (
              <div key={msg.id} className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
              </div>
            ))}
            {userMessages.length === 0 && (
              <p className="text-muted-foreground text-center">No messages yet</p>
            )}
          </div>
          <div className="flex space-x-2">
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
              rows={3}
            />
            <Button onClick={handleSend} className="self-end">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserMessageDialog;
