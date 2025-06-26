
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BarChart, Calendar, List, LogOut, PieChart, Users, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const AppSidebar = () => {
  const navigate = useNavigate();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: BarChart },
    { name: 'Chat Sessions', path: '/chat-sessions', icon: List },
    { name: 'User Management', path: '/user-management', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: PieChart },
    { name: 'Usage Details', path: '/usagedetails', icon: Calendar },
    { name: 'Settings', path: '/settings', icon: Settings },
    
  ];
  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
    
    // Navigate to login page
    navigate('/');
    
    console.log('User logged out successfully');
  };

  return (
    <Sidebar
      className="border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      collapsible="icon"
    >
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-center p-4">
          {!isCollapsed ? (
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Jaquar</div>
              <div className="text-sm text-muted-foreground">powered by Jaquar</div>
            </div>
          ) : (
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">J</div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.name : undefined}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.name}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={isCollapsed ? "Logout" : undefined}>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start gap-3 px-3 py-2 h-auto text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">Logout</span>}
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
