import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { month: "Feb", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 0 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 0 },
];

const RewardChart = () => (
  <div className="border border-border rounded-lg bg-card p-6 w-[380px]">
    <h3 className="text-lg font-semibold text-foreground mb-2">Total Reward over time</h3>
    <p className="text-xl font-bold text-foreground mb-1">
      0 USD <span className="text-sm font-normal text-muted-foreground">earned</span>
    </p>
    <div className="h-32 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 13%, 91%)" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
          <YAxis hide />
          <Line type="monotone" dataKey="value" stroke="hsl(225, 80%, 56%)" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="flex gap-8 mt-4 pt-4 border-t border-border">
      <div>
        <p className="text-sm text-muted-foreground">Monthly Rewards</p>
        <p className="text-base font-bold text-foreground">0.02 USD</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Yearly Rewards</p>
        <p className="text-base font-bold text-foreground">
          0.2 USD <span className="text-sm font-normal text-muted-foreground">/ year</span>
        </p>
      </div>
    </div>
  </div>
);

export default RewardChart;
