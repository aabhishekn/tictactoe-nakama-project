export default function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-red-200">
      <div className="w-[360px] p-8 rounded-3xl shadow-2xl border border-red-300 bg-white text-center">
        <h1 className="text-3xl font-extrabold mb-3">Tailwind OK ✅</h1>
        <p className="text-gray-600">
          This card has <span className="font-semibold">rounded corners</span>,
          a <span className="font-semibold">shadow</span>, and the page has a
          <span className="font-semibold"> gray background</span>.
        </p>
      </div>
    </div>
  );
}
