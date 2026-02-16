import { ChevronDown, ArrowUpRight } from "lucide-react";

const RecentTransactions = () => (
  <div className="border border-border rounded-lg bg-card p-6 flex-1">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
      <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-foreground">
        All <ChevronDown className="w-4 h-4" />
      </button>
    </div>
    <div className="border-b border-border pb-2 mb-4">
      <div className="grid grid-cols-3 text-sm text-muted-foreground">
        <span>Activity</span>
        <span>Date</span>
        <span />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center text-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
        <span className="font-medium text-foreground">2 USD Supplied</span>
      </div>
      <div className="text-muted-foreground">
        <div>4 Feb 2026</div>
        <div>1:03:53 PM</div>
      </div>
      <a href="#" className="text-primary font-medium hover:underline justify-self-end">Details</a>
    </div>
  </div>
);

export default RecentTransactions;
