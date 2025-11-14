import Image from "next/image";
import NavigationButtons from "@/components/NavigationButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-pulse">
            🚀 Next.js 16.0.3
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 mb-4">
            Programmatic Navigation
          </h2>
          <p className="text-xl text-gray-300">
            Belajar navigasi halaman secara programatis!
          </p>
        </div>
        {/* Info Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            📚 Cara Kerja
          </h3>
          <div className="text-left text-gray-200 space-y-3">
            <p className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <span>Klik salah satu tombol di bawah</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <span>Halaman akan pindah secara <strong>otomatis</strong> (tanpa reload)</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <span>Coba tekan tombol <strong>Back</strong> di browser untuk kembali</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <span>Buka <strong>Console</strong> (tekan F12) untuk lihat log!</span>
            </p>
          </div>
        </div>
        {/* Navigation Buttons Component */}
        <div className="flex justify-center">
          <NavigationButtons />
        </div>
        {/* Footer Info */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>💡 Port: <strong>{process.env.PORT || '1981'}</strong></p>
          <p className="mt-2">Tekan <kbd className="px-2 py-1 bg-gray-700 rounded">F12</kbd> untuk buka Developer Console</p>
        </div>
      </div>
    </div>
  );
}
