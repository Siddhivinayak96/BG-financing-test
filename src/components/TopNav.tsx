import { Bell, LayoutGrid, ChevronDown, Shield, User } from "lucide-react";

const navItems = ["Assets", "Stake", "Trade", "Settle", "Allocate", "Financing", "FinancingV2"];

const TopNav = () => (
  <nav className="flex items-center justify-between px-6 py-3 bg-card border-b border-border">
    <div className="flex items-center gap-6">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <Shield className="w-4 h-4 text-primary-foreground" />
      </div>
      {navItems.map((item) => (
        <span
          key={item}
          className={`text-sm font-medium cursor-pointer ${
            item === "FinancingV2"
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-foreground hover:text-primary"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <span className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">27</span>
      </div>
      <LayoutGrid className="w-5 h-5 text-muted-foreground" />
      <div className="flex items-center gap-2 text-sm">
        <LayoutGrid className="w-4 h-4 text-muted-foreground" />
        <span className="font-medium">Coin Team Test Enterprise</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
      <User className="w-6 h-6 text-muted-foreground" />
    </div>
  </nav>
);

export default TopNav;
