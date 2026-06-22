import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("ar");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-400">ماركت برو</h1>
        <nav className="flex items-center gap-4 text-sm">
          <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white">الرئيسية</button>
          <button onClick={() => navigate("/reports")} className="text-gray-400 hover:text-white">التقارير</button>
          <button className="text-indigo-400 font-semibold">الإعدادات</button>
          <button onClick={() => navigate("/login")} className="text-gray-400 hover:text-white">تسجيل الدخول</button>
        </nav>
      </header>

      <main className="p-6 max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">الإعدادات</h2>

        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 space-y-5">
          <h3 className="text-lg font-semibold text-gray-300">الحساب</h3>
          <div>
            <label className="text-sm text-gray-400 block mb-1">الاسم</label>
            <input
              type="text"
              defaultValue="أشرف"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              defaultValue="ashraf@marketpro.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 space-y-4">
          <h3 className="text-lg font-semibold text-gray-300">التفضيلات</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm">الإشعارات</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition ${notifications ? "bg-indigo-600" : "bg-gray-700"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition transform ${notifications ? "-translate-x-1" : "translate-x-6"}`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">الوضع الداكن</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition ${darkMode ? "bg-indigo-600" : "bg-gray-700"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition transform ${darkMode ? "-translate-x-1" : "translate-x-6"}`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">اللغة</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-sm outline-none"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold transition">
          حفظ التغييرات
        </button>
      </main>
    </div>
  );
}
