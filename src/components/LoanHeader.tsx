import { DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LoanHeader = () => (
  <div className="px-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-lg font-medium text-foreground">sid loan</span>
      <Badge className="bg-accent/15 text-accent border-0 font-medium text-xs">Active</Badge>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-accent-foreground" />
        </div>
        <span className="text-3xl font-semibold text-foreground">2 USD</span>
      </div>
      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-medium">
        Close Loan
      </Button>
    </div>
  </div>
);

export default LoanHeader;
