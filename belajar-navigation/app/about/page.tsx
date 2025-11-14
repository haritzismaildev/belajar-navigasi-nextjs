import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                {/* Header */}
                <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-purple-600 mb-2">
                    ℹ️ About
                </h1>
                <p className="text-gray-600 text-lg">
                    Tentang aplikasi ini
                </p>
                </div>
                
                {/* Content */}
                <div className="space-y-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-purple-600 mb-3">
                    Next.js 15 Navigation Demo
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                    Aplikasi ini dibuat untuk belajar <strong>Programmatic Navigation</strong> 
                    di Next.js 15 menggunakan <code className="bg-purple-100 px-2 py-1 rounded">useRouter</code> hook.
                    </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Fitur yang Dipelajari:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                    <li>✅ router.push() - Navigate dengan history</li>
                    <li>✅ router.replace() - Navigate tanpa history</li>
                    <li>✅ router.back() - Kembali ke halaman sebelumnya</li>
                    <li>✅ router.refresh() - Refresh data</li>
                    </ul>
                </div>
                </div>
                
                {/* Success Message */}
                <div className="bg-purple-100 border-2 border-purple-400 text-purple-800 p-4 rounded-lg mb-6">
                <p className="font-semibold">
                    ✅ Navigasi Berhasil!
                </p>
                <p className="text-sm">
                    Kamu berhasil pindah ke About menggunakan <code className="bg-purple-200 px-2 py-1 rounded">router.push()</code>
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