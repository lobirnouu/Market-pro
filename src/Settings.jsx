import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [name, setName] = useState("أحمد العلي");
  const [email, setEmail] = useState("ahmed@store.com");

  const Toggle = ({ on, onClick }) => (
    <button onClick={onClick} style={{ width: 44, height: 26, borderRadius: 999, border: "none", cursor: "pointer", background: on ? "#2DD4A7" : "#252932", position: "relative", padding: 0, transition: "background 0.2s" }}>
      <span style={{ position: "absolute", top: 3, [on ? "right" : "left"]: 3, width: 20, height: 20, borderRadius: "50%", background: "#F5F6F8", transition: "all 0.2s" }} />
    </button>
  );

  return (
    <div dir="rtl" style={{ minHeight: "100vh", width: "100%", background: "#0F1115", fontFamily: "'IBM Plex Sans Arabic', sans-serif", padding: 24, color: "#F5F6F8" }}>

      <h1 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>الإعدادات</h1>
      <p style={{ fontSize: 13, color: "#7C8597", margin: "0 0 24px" }}>إدارة حسابك وتفضيلاتك</p>

      <div style={{ background: "#181B21", border: "1px solid #252932", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>معلومات الحساب</p>

        <label style={{ display: "block", fontSize: 12, color: "#7C8597", marginBottom: 6 }}>الاسم الكامل</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", background: "#0F1115", border: "1px solid #252932", borderRadius: 10, padding: "10px 12px", color: "#F5F6F8", fontSize: 13, marginBottom: 14, outline: "none" }} />

        <label style={{ display: "block", fontSize: 12, color: "#7C8597", marginBottom: 6 }}>البريد الإلكتروني</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", background: "#0F1115", border: "1px solid #252932", borderRadius: 10, padding: "10px 12px", color: "#F5F6F8", fontSize: 13, outline: "none" }} />
      </div>

      <div style={{ background: "#181B21", border: "1px solid #252932", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>التفضيلات</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 14, marginBottom: 14, borderBottom: "1px solid #21252C" }}>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>الإشعارات</p>
            <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "#7C8597" }}>تنبيهات الطلبات والحملات</p>
          </div>
          <Toggle on={notifications} onClick={() => setNotifications((v) => !v)} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>الوضع الداكن</p>
            <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "#7C8597" }}>تفعيل المظهر الداكن للوحة</p>
          </div>
          <Toggle on={darkMode} onClick={() => setDarkMode((v) => !v)} />
        </div>
      </div>

      <button style={{ width: "100%", background: "#2DD4A7", color: "#0F1115", border: "none", borderRadius: 12, padding: "13px 0", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
        حفظ التغييرات
      </button>

    </div>
  );
}
