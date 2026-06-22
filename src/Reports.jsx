import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const monthlyData = [
  { month: "يناير", مبيعات: 4000, أرباح: 2400 },
  { month: "فبراير", مبيعات: 3000, أرباح: 1398 },
  { month: "مارس", مبيعات: 5000, أرباح: 3200 },
  { month: "أبريل", مبيعات: 4500, أرباح: 2800 },
  { month: "مايو", مبيعات: 6000, أرباح: 3900 },
  { month: "يونيو", مبيعات: 5500, أرباح: 3500 },
];

const topProducts = [
  { name: "لابتوب", مبيعات: 120 },
  { name: "هاتف ذكي", مبيعات: 98 },
  { name: "ساعة ذكية", مبيعات: 75 },
  { name: "كاميرا", مبيعات: 60 },
  { name: "سماعات", مبيعات: 45 },
];

export default function Reports() {
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-400">ماركت برو</h1>
        <nav className="flex items-center gap-4 text-sm">
          <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white">الرئيسية</button>
          <button className="text-indigo-400 font-semibold">التقارير</button>
          <button onClick={() => navigate("/settings")} className="text-gray-400 hover:text-white">الإعدادات</button>
          <button onClick={() => navigate("/login")} className="text-gray-400 hover:text-white">تسجيل الدخول</button>
        </nav>
      </header>

      <main className="p-6 max-w-7xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold">التقارير</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "إجمالي الإيرادات", value: "28,000 ر.س", color: "text-green-400" },
            { label: "متوسط الطلب", value: "350 ر.س", color: "text-blue-400" },
            { label: "معدل التحويل", value: "3.8%", color: "text-purple-400" },
            { label: "العملاء الجدد", value: "124", color: "text-yellow-400" },
          ].map((card) => (
            <div key={card.label} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <p className="text-gray-400 text-sm">{card.label}</p>
              <p className={`text-xl font-bold mt-1 ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <h3 className="text-lg font-semibold mb-4">المبيعات والأرباح الشهرية</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }} />
              <Line type="monotone" dataKey="مبيعات" stroke="#6366f1" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="أرباح" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <h3 className="text-lg font-semibold mb-4">أفضل المنتجات مبيعاً</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={topProducts} layout="vertical">
              <XAxis type="number" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="name" stroke="#6b7280" tick={{ fontSize: 12 }} width={80} />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }} />
              <Bar dataKey="مبيعات" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
