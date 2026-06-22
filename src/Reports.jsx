import { useState } from "react";

const monthlyData = [
  { month: "يناير", sales: 12400, orders: 98, profit: 4100 },
  { month: "فبراير", sales: 15800, orders: 124, profit: 5300 },
  { month: "مارس", sales: 11200, orders: 87, profit: 3700 },
  { month: "أبريل", sales: 18600, orders: 152, profit: 6200 },
  { month: "مايو", sales: 21000, orders: 174, profit: 7100 },
  { month: "يونيو", sales: 19400, orders: 161, profit: 6500 },
  { month: "يوليو", sales: 23800, orders: 198, profit: 8000 },
  { month: "أغسطس", sales: 20100, orders: 167, profit: 6700 },
  { month: "سبتمبر", sales: 17500, orders: 143, profit: 5800 },
  { month: "أكتوبر", sales: 25200, orders: 210, profit: 8500 },
  { month: "نوفمبر", sales: 28900, orders: 241, profit: 9700 },
  { month: "ديسمبر", sales: 31500, orders: 263, profit: 10600 },
];

const maxSales = Math.max(...monthlyData.map((d) => d.sales));

export default function Reports() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [exported, setExported] = useState(false);

  const filters = ["الكل", "ربع سنوي", "نصف سنوي"];

  const getFilteredData = () => {
    if (activeFilter === "ربع سنوي") return monthlyData.slice(9, 12);
    if (activeFilter === "نصف سنوي") return monthlyData.slice(6, 12);
    return monthlyData;
  };

  const filtered = getFilteredData();
  const totalSales = filtered.reduce((s, d) => s + d.sales, 0);
  const totalOrders = filtered.reduce((s, d) => s + d.orders, 0);
  const totalProfit = filtered.reduce((s, d) => s + d.profit, 0);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  };

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f1117",
        color: "#e2e8f0",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", margin: 0, color: "#f1f5f9" }}>
            التقارير
          </h1>
          <p style={{ fontSize: "13px", color: "#64748b", margin: "4px 0 0" }}>
            تحليل الأداء والمبيعات
          </p>
        </div>

        <button
          onClick={handleExport}
          style={{
            backgroundColor: exported ? "#16a34a" : "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {exported ? "✓ تم التصدير" : "⬇ تصدير التقرير"}
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: "7px 16px",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: activeFilter === f ? "#6366f1" : "#1e293b",
              backgroundColor: activeFilter === f ? "#6366f1" : "#1e293b",
              color: activeFilter === f ? "#fff" : "#94a3b8",
              fontSize: "13px",
              cursor: "pointer",
              fontWeight: activeFilter === f ? "600" : "400",
              transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        {[
          { label: "إجمالي المبيعات", value: `${totalSales.toLocaleString()} ر.س`, icon: "💰", color: "#6366f1" },
          { label: "إجمالي الطلبات", value: totalOrders.toLocaleString(), icon: "📦", color: "#0ea5e9" },
          { label: "صافي الأرباح", value: `${totalProfit.toLocaleString()} ر.س`, icon: "📈", color: "#10b981" },
        ].map((card) => (
          <div
            key={card.label}
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "14px",
              padding: "20px",
              borderTop: `3px solid ${card.color}`,
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{card.icon}</div>
            <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>
              {card.label}
            </div>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#f1f5f9" }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div
        style={{
          backgroundColor: "#1e293b",
          borderRadius: "14px",
          padding: "24px",
          marginBottom: "28px",
        }}
      >
        <h2 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "20px", color: "#f1f5f9" }}>
          المبيعات الشهرية
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "8px",
            height: "160px",
            overflowX: "auto",
            paddingBottom: "8px",
          }}
        >
          {monthlyData.map((d) => {
            const height = Math.round((d.sales / maxSales) * 140);
            const isInFilter = filtered.includes(d);
            return (
              <div
                key={d.month}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  minWidth: "36px",
                  flex: "1",
                }}
                title={`${d.month}: ${d.sales.toLocaleString()} ر.س`}
              >
                <div
                  style={{
                    width: "100%",
                    height: `${height}px`,
                    backgroundColor: isInFilter ? "#6366f1" : "#334155",
                    borderRadius: "6px 6px 0 0",
                    transition: "background-color 0.3s",
                  }}
                />
                <span style={{ fontSize: "10px", color: "#64748b", whiteSpace: "nowrap" }}>
                  {d.month.slice(0, 3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          backgroundColor: "#1e293b",
          borderRadius: "14px",
          padding: "24px",
          overflowX: "auto",
        }}
      >
        <h2 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "16px", color: "#f1f5f9" }}>
          تفاصيل التقرير
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "400px" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              {["الشهر", "المبيعات", "الطلبات", "الأرباح"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "10px 12px",
                    textAlign: "right",
                    fontSize: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={row.month}
                style={{
                  borderBottom: "1px solid #0f1117",
                  backgroundColor: i % 2 === 0 ? "transparent" : "#162032",
                }}
              >
                <td style={{ padding: "10px 12px", fontSize: "13px", color: "#cbd5e1" }}>
                  {row.month}
                </td>
                <td style={{ padding: "10px 12px", fontSize: "13px", color: "#a78bfa", fontWeight: "600" }}>
                  {row.sales.toLocaleString()} ر.س
                </td>
                <td style={{ padding: "10px 12px", fontSize: "13px", color: "#38bdf8" }}>
                  {row.orders}
                </td>
                <td style={{ padding: "10px 12px", fontSize: "13px", color: "#34d399" }}>
                  {row.profit.toLocaleString()} ر.س
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: "2px solid #334155" }}>
              <td style={{ padding: "12px", fontSize: "13px", fontWeight: "700", color: "#f1f5f9" }}>
                الإجمالي
              </td>
              <td style={{ padding: "12px", fontSize: "13px", fontWeight: "700", color: "#a78bfa" }}>
                {totalSales.toLocaleString()} ر.س
              </td>
              <td style={{ padding: "12px", fontSize: "13px", fontWeight: "700", color: "#38bdf8" }}>
                {totalOrders}
              </td>
              <td style={{ padding: "12px", fontSize: "13px", fontWeight: "700", color: "#34d399" }}>
                {totalProfit.toLocaleString()} ر.س
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
