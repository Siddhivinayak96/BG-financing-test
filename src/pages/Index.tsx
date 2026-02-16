import TopNav from "@/components/TopNav";
import LoanStepper from "@/components/LoanStepper";
import LoanHeader from "@/components/LoanHeader";
import LoanDetails from "@/components/LoanDetails";
import RecentTransactions from "@/components/RecentTransactions";
import RewardChart from "@/components/RewardChart";
import { ChevronRight } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopNav />
    <div className="px-8 py-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer">Dashboard</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">sid loan</span>
      </div>
    </div>
    <LoanStepper />
    <LoanHeader />
    <LoanDetails />
    <div className="flex gap-6 mx-8 mt-8 pb-8">
      <RecentTransactions />
      <RewardChart />
    </div>
  </div>
);

export default Index;
