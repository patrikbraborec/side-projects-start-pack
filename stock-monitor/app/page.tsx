import { LeftMonitor } from "@/components/custom/left-monitor";
import { RightMonitor } from "@/components/custom/right-monitor";
import { TopPanel } from "@/components/custom/top-panel";

export default function StockMonitor() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Monitor</h1>
      
      <TopPanel />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LeftMonitor />
        <RightMonitor />
      </div>
    </div>
  );
}
