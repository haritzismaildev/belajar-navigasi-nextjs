'use client';

import { useRouter } from "next/navigation";

export default function NavigationButtons() {
    const router = useRouter();

    const goToDashboard = () => {
        console.log('🚀 Navigating to dashboard...');
        router.push('/dashboard');
    };

    const goToProfile = () => {
        console.log('🚀 Navigating to profile...');
        router.push('/profile');
    };

    const goToAbout = () => {
        console.log('🚀 Navigating to about...');
        router.push('/about');
    };

    const goToContact = () => {
      console.log('🚀 Navigating to contact...');
      router.push('contact');  
    };

    return (
        <div className="flex flex-col gap-4 w-full max-w-md">
            {/* Tombol ke Dashboard */}
            <button
                onClick={goToDashboard}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            >
                📊 Ke Dashboard (Programmatic)
            </button>
            
            {/* Tombol ke Profile */}
            <button
                onClick={goToProfile}
                className="px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg"
            >
                👤 Ke Profile (Programmatic)
            </button>
            
            {/* Tombol ke About */}
            <button
                onClick={goToAbout}
                className="px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold shadow-lg"
            >
                ℹ️ Ke About (Programmatic)
            </button>

            {/* Tombol ke Contact */}
            <button
                onClick={goToContact}
                className="px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold shadow-lg"
            >
                ℹ️ Ke Contact (Programmatic)
            </button>
            
            {/* Info box */}
            <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                💡 <strong>Tips:</strong> Buka Console (F12) untuk lihat log saat navigasi!
                </p>
            </div>
        </div>
    );
}