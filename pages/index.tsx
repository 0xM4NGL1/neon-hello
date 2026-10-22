export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a1a] to-[#0f0f2a]">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neonPink via-neonBlue to-neonGreen drop-shadow-[0_0_30px_rgba(255,0,204,0.8)] animate-pulse">
          Hello World
        </h1>
        <p className="text-xl text-neonBlue drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] tracking-widest uppercase">
          Neon • Minimal • Next.js
        </p>
        <div className="h-1 w-64 mx-auto bg-gradient-to-r from-neonPink via-neonBlue to-neonGreen rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
      </div>
    </main>
  );
}
