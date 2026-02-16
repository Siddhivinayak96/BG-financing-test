import { Check } from "lucide-react";

const steps = ["Application", "Disbursement", "Active", "Closed"];
const activeIndex = 2; // "Active" is current

const LoanStepper = () => (
  <div className="px-8 py-8">
    <div className="flex items-center">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            {i < activeIndex ? (
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
            ) : i === activeIndex ? (
              <div className="w-8 h-8 rounded-full border-[3px] border-primary bg-card flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full border-2 border-border bg-card" />
            )}
            <span className={`text-sm mt-2 ${i <= activeIndex ? "text-foreground" : "text-muted-foreground"}`}>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 mb-6 ${i < activeIndex ? "bg-accent" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default LoanStepper;
