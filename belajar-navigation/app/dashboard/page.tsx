import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                    {/* Header */}
                    <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-blue-600 mb-2">
                        📊 Dashboard
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Selamat datang di halaman Dashboard!
                    </p>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <p className="text-3xl font-bold text-blue-600">1,234</p>
                        <p className="text-gray-600">Total Users</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <p className="text-3xl font-bold text-green-600">$45,678</p>
                        <p className="text-gray-600">Revenue</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                        <p className="text-3xl font-bold text-purple-600">789</p>
                        <p className="text-gray-600">Orders</p>
                    </div>
                    </div>
                    
                    {/* Success Message */}
                    <div className="bg-green-100 border-2 border-green-400 text-green-800 p-4 rounded-lg mb-6">
                    <p className="font-semibold">
                        ✅ Navigasi Berhasil!
                    </p>
                    <p className="text-sm">
                        Kamu berhasil pindah ke Dashboard menggunakan <code className="bg-green-200 px-2 py-1 rounded">router.push()</code>
                    </p>
                    </div>
                    
                    {/* Back Button */}
                    <Link 
                    href="/"
                    className="block w-full text-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                    >
                    ← Kembali ke Home
                    </Link>
            </div>
        </div>
    );
}