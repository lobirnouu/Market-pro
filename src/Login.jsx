import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-400">ماركت برو</h1>
          <p className="text-gray-400 text-sm mt-2">تسجيل الدخول</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 block mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">كلمة المرور</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-2 text-gray-400 text-xs"
              >
                {showPassword ? "إخفاء" : "إظهار"}
              </button>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold transition"
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-gray-400 hover:text-white text-sm transition"
          >
            العودة إلى الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
}
