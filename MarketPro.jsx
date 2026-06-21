import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  TrendingDown,
  Package,
  Megaphone,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointerClick,
  DollarSign,
  Users,
  ChevronDown,
  Plus,
  Pause,
  Play,
} from "lucide-react";

// ---------- بيانات تجريبية ----------

const salesTrend = [12, 19, 14, 22, 28, 24, 31, 27, 35, 41, 38, 47];
const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

const products = [
  { id: 1, name: "سماعات لاسلكية برو", category: "إلكترونيات", price: 349, stock: 128, sold: 412, status: "متوفر" },
  { id: 2, name: "ساعة ذكية X2", category: "إلكترونيات", price: 599, stock: 12, sold: 287, status: "منخفض" },
  { id: 3, name: "حقيبة جلدية كلاسيك", category: "أزياء", price: 220, stock: 64, sold: 156, status: "متوفر" },
  { id: 4, name: "عطر أوكسجين", category: "عناية", price: 180, stock: 0, sold: 98, status: "نفذ" },
  { id: 5, name: "كرسي مكتب مريح", category: "أثاث", price: 890, stock: 23, sold: 64, status: "متوفر" },
  { id: 6, name: "طاولة قهوة خشبية", category: "أثاث", price: 410, stock: 9, sold: 41, status: "منخفض" },
  { id: 7, name: "جل استحمام طبيعي", category: "عناية", price: 65, stock: 240, sold: 530, status: "متوفر" },
  { id: 8, name: "حذاء رياضي أداء", category: "أزياء", price: 310, stock: 0, sold: 188, status: "نفذ" },
];

const categories = ["الكل", "إلكترونيات", "أزياء", "عناية", "أثاث"];

const campaigns = [
  { id: 1, name: "عروض الصيف الكبرى", channel: "إنستغرام", budget: 8000, spent: 5230, clicks: 18420, conv: 412, status: "نشطة" },
  { id: 2, name: "إطلاق ساعة X2", channel: "غوغل", budget: 12000, spent: 11860, clicks: 24310, conv: 287, status: "نشطة" },
  { id: 3, name: "تجديد المخزون - أثاث", channel: "فيسبوك", budget: 4000, spent: 3990, clicks: 9120, conv: 64, status: "موقوفة" },
  { id: 4, name: "عناية البشرة الأسبوعية", channel: "تيك توك", budget: 6000, spent: 2140, clicks: 31200, conv: 530, status: "نشطة" },
];

// ---------- مكونات مساعدة ----------

function StatCard({ icon: Icon, label, value, delta, positive, accent }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15151c] p-5">
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full opacity-[0.12] blur-2xl"
        style={{ background: accent }}
      />
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <Icon size={18} strokeWidth={2} />
        </div>
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
            positive ? "bg-emerald-400/10 text-emerald-400" : "bg-rose-400/10 text-rose-400"
          }`}
        >
          {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {delta}
        </span>
      </div>
      <div className="mt-4 text-2xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}

function SalesChart() {
  const max = Math.max(...salesTrend);
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#15151c] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">اتجاه المبيعات</h3>
          <p className="mt-0.5 text-xs text-white/40">آخر 12 شهرًا، بالألف ريال</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
          سنوي <ChevronDown size={13} />
        </div>
      </div>
      <div className="mt-6 flex h-40 items-end gap-2.5">
        {salesTrend.map((v, i) => (
          <div key={i} className="group relative flex flex-1 flex-col items-center gap-2">
            <div className="absolute -top-7 hidden rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium text-[#0b0b0f] group-hover:block">
              {v}k
            </div>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-fuchsia-400 transition-all duration-300 group-hover:from-violet-500 group-hover:to-fuchsia-300"
              style={{ height: `${(v / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-white/30">
        {months.filter((_, i) => i % 2 === 0).map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function ProductsPanel() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "الكل" || p.category === activeCategory;
      const matchesQuery = p.name.includes(query.trim());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const statusStyle = {
    "متوفر": "bg-emerald-400/10 text-emerald-400",
    "منخفض": "bg-amber-400/10 text-amber-400",
    "نفذ": "bg-rose-400/10 text-rose-400",
  };

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#15151c] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-white">المنتجات</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2">
            <Search size={14} className="text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="بحث عن منتج..."
              className="w-36 bg-transparent text-xs text-white placeholder-white/30 outline-none sm:w-48"
            />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-500">
            <Plus size={14} /> إضافة منتج
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              activeCategory === c
                ? "bg-violet-600 text-white"
                : "bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/80"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-white/[0.06] text-xs text-white/35">
              <th className="pb-3 font-medium">المنتج</th>
              <th className="pb-3 font-medium">الفئة</th>
              <th className="pb-3 font-medium">السعر</th>
              <th className="pb-3 font-medium">المخزون</th>
              <th className="pb-3 font-medium">المبيعات</th>
              <th className="pb-3 font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-white/[0.04] text-sm last:border-0 hover:bg-white/[0.02]">
                <td className="py-3.5 font-medium text-white">{p.name}</td>
                <td className="py-3.5 text-white/50">{p.category}</td>
                <td className="py-3.5 text-white/70">{p.price} ر.س</td>
                <td className="py-3.5 text-white/70">{p.stock}</td>
                <td className="py-3.5 text-white/70">{p.sold}</td>
                <td className="py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle[p.status]}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-sm text-white/30">
                  لا توجد منتجات مطابقة لبحثك
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CampaignsPanel() {
  const [list, setList] = useState(campaigns);

  const toggleStatus = (id) => {
    setList((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: c.status === "نشطة" ? "موقوفة" : "نشطة" } : c
      )
    );
  };

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#15151c] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">الحملات الإعلانية</h3>
        <button className="flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/[0.09]">
          <Plus size={14} /> حملة جديدة
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {list.map((c) => {
          const pct = Math.min(100, Math.round((c.spent / c.budget) * 100));
          const active = c.status === "نشطة";
          return (
            <div
              key={c.id}
              className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition hover:border-white/[0.1]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      active ? "bg-violet-500/15 text-violet-400" : "bg-white/[0.05] text-white/30"
                    }`}
                  >
                    <Megaphone size={15} />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white">{c.name}</div>
                    <div className="text-[11px] text-white/40">{c.channel}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden items-center gap-1.5 text-xs text-white/50 sm:flex">
                    <MousePointerClick size={13} /> {c.clicks.toLocaleString("ar")}
                  </div>
                  <div className="hidden items-center gap-1.5 text-xs text-white/50 sm:flex">
                    <Users size={13} /> {c.conv}
                  </div>
                  <button
                    onClick={() => toggleStatus(c.id)}
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                      active
                        ? "bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
                        : "bg-white/[0.06] text-white/40 hover:bg-white/[0.12]"
                    }`}
                  >
                    {active ? <Pause size={11} /> : <Play size={11} />}
                    {c.status}
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className={`h-full rounded-full ${pct > 90 ? "bg-amber-400" : "bg-violet-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="whitespace-nowrap text-[11px] text-white/40">
                  {c.spent.toLocaleString("ar")} / {c.budget.toLocaleString("ar")} ر.س
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- المكون الرئيسي ----------

export default function MarketPro() {
  return (
    <div dir="rtl" className="min-h-screen w-full bg-[#0b0b0f] font-sans text-white" style={{ fontFamily: "'Tajawal', 'Segoe UI', sans-serif" }}>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {/* الرأس */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 font-bold text-white">
              م
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">ماركت برو</h1>
              <p className="text-xs text-white/40">لوحة تحكم التسويق الإلكتروني</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-white/70">
            مرحبًا، أشرف
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              أ
            </span>
          </div>
        </header>

        {/* بطاقات الإحصاءات */}
        <section className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={DollarSign} label="إجمالي المبيعات" value="412,300 ر.س" delta="+18.2%" positive accent="#8b5cf6" />
          <StatCard icon={Package} label="الطلبات" value="1,847" delta="+6.4%" positive accent="#22d3ee" />
          <StatCard icon={Eye} label="ظهور الإعلانات" value="83,050" delta="+24.1%" positive accent="#f472b6" />
          <StatCard icon={TrendingDown} label="معدل الارتداد" value="38.6%" delta="-3.1%" positive={false} accent="#fb923c" />
        </section>

        {/* الرسم البياني */}
        <section className="mt-6">
          <SalesChart />
        </section>

        {/* المنتجات والحملات */}
        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <ProductsPanel />
          </div>
          <div className="xl:col-span-2">
            <CampaignsPanel />
          </div>
        </section>

        <footer className="mt-10 pb-4 text-center text-xs text-white/25">
          ماركت برو — لوحة تحكم تجريبية لإدارة التسويق الإلكتروني
        </footer>
      </div>
    </div>
  );
}
