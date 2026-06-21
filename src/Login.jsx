import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div dir="rtl" style={{ minHeight: "100vh", width: "100%", background: "#0F1115", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>

      <div style={{ width: "100%", maxWidth: 400, background: "#181B21", border: "1px solid #252932", borderRadius: 24, padding: "36px 28px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#2DD4A7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#0F1115", fontSize: 17 }}>م</div>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#F5F6F8" }}>ماركت برو</p>
            <p style={{ margin: 0, fontSize: 11, color: "#7C8597" }}>لوحة تحكم البائع</p>
          </div>
        </div>

        <h1 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 800, color: "#F5F6F8" }}>مرحباً بعودتك</h1>
        <p style={{ margin: "0 0 28px", fontSize: 13, color: "#7C8597" }}>سجّل الدخول لمتابعة أداء متجرك وحملاتك</p><form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12.5, fontWeight: 600, color: "#C2C8D3" }}>
            البريد الإلكتروني
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@store.com" style={{ background: "#0F1115", border: "1px solid #252932", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#F5F6F8", outline: "none", width: "100%" }} />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12.5, fontWeight: 600, color: "#C2C8D3" }}>
            كلمة المرور
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ background: "#0F1115", border: "1px solid #252932", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#F5F6F8", outline: "none", width: "100%" }} />
          </label>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input type="checkbox" />
              <span style={{ fontSize: 12, color: "#7C8597" }}>تذكّرني</span>
            </label>
            <a href="#" style={{ fontSize: 12, color: "#2DD4A7", fontWeight: 600 }}>نسيت كلمة المرور؟</a>
          </div>

          <button type="submit" style={{ marginTop: 4, background: "#2DD4A7", color: "#0F1115", border: "none", borderRadius: 12, padding: "13px 0", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
            تسجيل الدخول
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 12.5, color: "#7C8597" }}>
          ليس لديك حساب؟ <a href="#" style={{ color: "#2DD4A7", fontWeight: 700 }}>أنشئ حساباً جديداً</a>
        </p>

      </div>
    </div>
  );
}
