export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} SMARTShop. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>
      </div>
    </footer>
  );
}
