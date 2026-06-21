import React, { useState } from "react";

const stats = [
  { label: "إجمالي المبيعات", value: "128,450 ر.س", delta: "+12.4%", up: true },
  { label: "زيارات المتجر", value: "42,310", delta: "+8.1%", up: true },
  { label: "معدل التحويل", value: "3.8%", delta: "-1.2%", up: false },
  { label: "تكلفة الإعلان", value: "9,640 ر.س", delta: "+4.6%", up: true },
];

const campaigns = [
  { name: "تخفيضات الصيف الكبرى", status: "نشطة", spent: 3120, budget: 5000 },
  { name: "إطلاق المجموعة الجديدة", status: "نشطة", spent: 2890, budget: 3200 },
  { name: "عروض نهاية الأسبوع", status: "متوقفة", spent: 1800, budget: 1800 },
  { name: "حملة العملاء الجدد", status: "مجدولة", spent: 0, budget: 2500 },
];

const products = [
  { name: "سماعات لاسلكية برو", price: 349, stock: 128 },
  { name: "ساعة ذكية رياضية", price: 599, stock: 64 },
  { name: "حقيبة ظهر جلدية", price: 219, stock: 8 },
  { name: "عطر خشبي فاخر", price: 175, stock: 0 },
];

const statusColor = {
  "نشطة": "#3DD68C",
  "متوقفة": "#8B92A3",
  "مجدولة": "#E8B84B",
};

export default function App() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div dir="rtl" style={{ minHeight: "100vh", background: "#15171C", color: "#EDEFF2", fontFamily: "Tajawal, sans-serif", padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>ماركت برو</h1>
        <p style={{ color: "#8B92A3", fontSize: 13 }}>لوحة تحكم المبيعات والإعلانات</p>
      </header>

      <nav style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[
          { id: "dashboard", label: "نظرة عامة" },
          { id: "campaigns", label: "الحملات" },
          { id: "products", label: "المنتجات" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "none",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
              background: tab === t.id ? "#3DD68C" : "#1B1F26",
              color: tab === t.id ? "#0E1410" : "#9CA3B3",
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {tab === "dashboard" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#1B1F26", border: "1px solid #262B33", borderRadius: 16, padding: 16 }}>
              <p style={{ color: "#8B92A3", fontSize: 12, margin: "0 0 8px" }}>{s.label}</p>
              <p style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>{s.value}</p>
              <span style={{ fontSize: 12, fontWeight: 700, color: s.up ? "#3DD68C" : "#FF6B5E" }}>{s.delta}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "campaigns" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {campaigns.map((c) => (
            <div key={c.name} style={{ background: "#1B1F26", border: "1px solid #262B33", borderRadius: 14, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: statusColor[c.status] }}>{c.status}</span>
              </div>
              <div style={{ height: 6, background: "#262B33", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(c.spent / c.budget) * 100}%`, background: "#3DD68C" }} />
              </div>
              <p style={{ fontSize: 11, color: "#8B92A3", margin: "6px 0 0" }}>
                {c.spent.toLocaleString("ar")} / {c.budget.toLocaleString("ar")} ر.س
              </p>
            </div>
          ))}
        </div>
      )}

      {tab === "products" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#1B1F26", border: "1px solid #262B33", borderRadius: 14, padding: 14 }}>
              <p style={{ fontSize: 13, fontWeight: 600, margin: "0 0 8px" }}>{p.name}</p>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#3DD68C", margin: "0 0 8px" }}>{p.price} ر.س</p>
              <p style={{ fontSize: 11, color: p.stock === 0 ? "#FF6B5E" : "#8B92A3", margin: 0 }}>
                {p.stock === 0 ? "نفدت الكمية" : `${p.stock} متبقٍ`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
