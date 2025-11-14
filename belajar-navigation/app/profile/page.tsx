import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                {/* Header */}
                <div className="text-center mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl">👤</span>
                </div>
                <h1 className="text-5xl font-bold text-green-600 mb-2">
                    Profile
                </h1>
                <p className="text-gray-600 text-lg">
                    Halaman profil pengguna
                </p>
                </div>
                
                {/* Profile Info */}
                <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Nama</p>
                    <p className="text-xl font-semibold">John Doe</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-xl font-semibold">john@example.com</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="text-xl font-semibold">Admin</p>
                </div>
                </div>
                
                {/* Success Message */}
                <div className="bg-green-100 border-2 border-green-400 text-green-800 p-4 rounded-lg mb-6">
                <p className="font-semibold">
                    ✅ Navigasi Berhasil!
                </p>
                <p className="text-sm">
                    Kamu berhasil pindah ke Profile menggunakan <code className="bg-green-200 px-2 py-1 rounded">router.push()</code>
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