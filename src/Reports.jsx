import React from "react";

const monthlyData = [
  { month: "يناير", value: 42 },
  { month: "فبراير", value: 58 },
  { month: "مارس", value: 51 },
  { month: "أبريل", value: 67 },
  { month: "مايو", value: 73 },
  { month: "يونيو", value: 88 },
];

const topProducts = [
  { name: "سماعات لاسلكية برو", percent: 32 },
  { name: "ساعة ذكية رياضية", percent: 24 },
  { name: "حقيبة ظهر جلدية", percent: 18 },
  { name: "عطر خشبي فاخر", percent: 14 },
];

export default function Reports() {
  const max = Math.max(...monthlyData.map((d) => d.value));

  return (
    <div dir="rtl" style={{ minHeight: "100vh", width: "100%", background: "#0F1115", fontFamily: "'IBM Plex Sans Arabic', sans-serif", padding: 24, color: "#F5F6F8" }}>

      <h1 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>التقارير</h1>
      <p style={{ fontSize: 13, color: "#7C8597", margin: "0 0 24px" }}>تحليل أداء متجرك خلال الأشهر الستة الماضية</p>
