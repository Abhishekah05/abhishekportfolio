import { Home, User, Code, Briefcase, FolderGit2, Mail, FileText } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", icon: Home, href: "#home" },
  { title: "About", icon: User, href: "#about" },
  { title: "Skills", icon: Code, href: "#skills" },
  { title: "Experience", icon: Briefcase, href: "#experience" },
  { title: "Projects", icon: FolderGit2, href: "#projects" },
  { title: "Blog", icon: FileText, href: "#blog" },
  { title: "Contact", icon: Mail, href: "#contact" },
];

export function PortfolioSidebar() {
  const { open } = useSidebar();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent className="bg-sidebar">
        <div className="p-6 border-b border-sidebar-border">
          <h2 className={`font-bold text-sidebar-foreground transition-all ${open ? "text-xl" : "text-sm text-center"}`}>
            {open ? "Abhishek Ajjampur" : "AA"}
          </h2>
          {open && <p className="text-sm text-muted-foreground mt-1">Frontend Developer</p>}
        </div>

        <SidebarGroup className="px-2 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:text-primary"
                    >
                      <item.icon className="h-5 w-5" />
                      {open && <span className="font-medium">{item.title}</span>}
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
