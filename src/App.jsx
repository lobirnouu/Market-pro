import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const salesData = [
  { month: "يناير", مبيعات: 4000 },
  { month: "فبراير", مبيعات: 3000 },
  { month: "مارس", مبيعات: 5000 },
  { month: "أبريل", مبيعات: 4500 },
  { month: "مايو", مبيعات: 6000 },
  { month: "يونيو", مبيعات: 5500 },
];

const products = [
  { id: 1, name: "هاتف ذكي", category: "إلكترونيات", price: "2500 ر.س", stock: 45, status: "متوفر" },
  { id: 2, name: "لابتوب", category: "إلكترونيات", price: "5000 ر.س", stock: 12, status: "متوفر" },
  { id: 3, name: "سماعات", category: "إكسسوارات", price: "350 ر.س", stock: 0, status: "نفذ" },
  { id: 4, name: "ساعة ذكية", category: "إكسسوارات", price: "1200 ر.س", stock: 28, status: "متوفر" },
  { id: 5, name: "كاميرا", category: "إلكترونيات", price: "3800 ر.س", stock: 7, status: "متوفر" },
  { id: 6, name: "طابعة", category: "مكتبية", price: "900 ر.س", stock: 0, status: "نفذ" },
];

const campaigns = [
  { name: "حملة رمضان", budget: "10,000 ر.س", clicks: "45,230", conversion: "3.2%", status: "نشطة" },
  { name: "عروض الصيف", budget: "7,500 ر.س", clicks: "32,100", conversion: "2.8%", status: "نشطة" },
  { name: "الجمعة البيضاء", budget: "15,000 ر.س", clicks: "89,400", conversion: "5.1%", status: "منتهية" },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("الكل");

  const categories = ["الكل", "إلكترونيات", "إكسسوارات", "مكتبية"];

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.includes(search);
    const matchFilter = filter === "الكل" || p.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div dir="rtl" className="min-h-screen bg-gray-950 text-white font-sans">
      {/* الشريط العلوي */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-400">ماركت برو</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">أشرف</span>
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">أ</div>
        </div>
      </header>

      <main className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* بطاقات الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "إجمالي المبيعات", value: "128,430 ر.س", color: "text-green-400" },
            { label: "الطلبات", value: "1,284", color: "text-blue-400" },
            { label: "العملاء", value: "943", color: "text-purple-400" },
            { label: "المنتجات", value: "56", color: "text-yellow-400" },
          ].map((card) => (
            <div key={card.label} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <p className="text-gray-400 text-sm">{card.label}</p>
              <p className={`text-xl font-bold mt-1 ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* مخطط المبيعات */}
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">المبيعات الشهرية</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }} />
              <Bar dataKey="مبيعات" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* جدول المنتجات */}
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">المنتجات</h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-800 text-white rounded-lg px-4 py-2 text-sm flex-1 outline-none border border-gray-700 focus:border-indigo-500"
            />
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-sm ${filter === cat ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="text-right py-2 px-3">المنتج</th>
                  <th className="text-right py-2 px-3">الفئة</th>
                  <th className="text-right py-2 px-3">السعر</th>
                  <th className="text-right py-2 px-3">المخزون</th>
                  <th className="text-right py-2 px-3">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-2 px-3">{p.name}</td>
                    <td className="py-2 px-3 text-gray-400">{p.category}</td>
                    <td className="py-2 px-3 text-green-400">{p.price}</td>
                    <td className="py-2 px-3">{p.stock}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${p.status === "متوفر" ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* جدول الحملات الإعلانية */}
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">الحملات الإعلانية</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="text-right py-2 px-3">الحملة</th>
                  <th className="text-right py-2 px-3">الميزانية</th>
                  <th className="text-right py-2 px-3">النقرات</th>
                  <th className="text-right py-2 px-3">التحويل</th>
                  <th className="text-right py-2 px-3">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c) => (
                  <tr key={c.name} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-2 px-3">{c.name}</td>
                    <td className="py-2 px-3 text-yellow-400">{c.budget}</td>
                    <td className="py-2 px-3">{c.clicks}</td>
                    <td className="py-2 px-3 text-blue-400">{c.conversion}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${c.status === "نشطة" ? "bg-green-900 text-green-400" : "bg-gray-700 text-gray-400"}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
