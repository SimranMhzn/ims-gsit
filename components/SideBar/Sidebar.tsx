import {
  Layers,
  LayoutDashboard,
  Settings,
  Split,
  StickyNote,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Branches',
    url: '/branches',
    icon: Split,
  },
  {
    title: 'View Requisition Form',
    url: '/requisition',
    icon: StickyNote,
  },
  {
    title: 'Inventory',
    url: '/inventory',
    icon: Layers,
  },
  {
    title: 'Settings',
    url: '/setting',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-[#242423] text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="[&>svg]:size-5 py-6 text-[16px]"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
