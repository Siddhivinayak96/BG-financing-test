import { ExternalLink } from "lucide-react";

const details = [
  { label: "APY", value: "10 %" },
  { label: "Cool Off Period", value: "10 business days" },
  { label: "Next Payout Date", value: "-" },
  { label: "Earnings paid to", value: "Go Account", isLink: true },
];

const LoanDetails = () => (
  <div className="mx-8 mt-8 border border-border rounded-lg bg-card p-6">
    <div className="grid grid-cols-4 gap-4">
      {details.map((d) => (
        <div key={d.label}>
          <p className="text-sm text-muted-foreground mb-2">{d.label}</p>
          {d.isLink ? (
            <a href="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
              {d.value} <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <p className="text-base font-medium text-foreground">{d.value}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default LoanDetails;
