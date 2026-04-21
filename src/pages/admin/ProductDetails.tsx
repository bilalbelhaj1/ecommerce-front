import { useState } from "react";
import { 
  ArrowLeft, 
  Edit3, 
  Trash2, 
  ChevronRight, 
  Package, 
  Calendar, 
  Tag, 
  ShieldCheck 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [product] = useState({
    id: 1,
    name: "Premium Smart Watch",
    category: "Tech",
    price: 299,
    description: "Experience the next generation of wearable technology. This smart watch features a high-resolution retina display, advanced health tracking sensors, and a battery life that lasts up to 72 hours. Perfect for fitness enthusiasts and professionals alike.",
    stock: 42,
    image: "https://www.apple.com/assets-www/en_WW/watch/og/watch_og_1ff2ee953.png",
    createdAt: "Oct 24, 2023"
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      console.log("Deleting product...", product.id);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <button 
            onClick={() => navigate("/admin/products")}
            className="hover:text-blue-600 transition flex items-center gap-1"
          >
            <Package size={16} /> Inventory
          </button>
          <ChevronRight size={14} />
          <span className="text-gray-900 dark:text-white font-medium">Product Details</span>
        </nav>

        <div className="flex items-center gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium">
            <Edit3 size={18} className="text-blue-600" />
            Edit
          </button>
          <button 
            onClick={handleDelete}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 transition font-medium"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="p-8 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={product.image} 
                alt={product.name}
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-600">${product.price}</span>
                <span className="text-gray-400 line-through text-lg">$399</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-800 pb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 space-y-1">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Tag size={16} /> Stock Status
                </div>
                <p className="font-bold text-green-600">{product.stock} Units Available</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 space-y-1">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={16} /> Added On
                </div>
                <p className="font-bold">{product.createdAt}</p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <ShieldCheck size={18} className="text-blue-500" />
                Verified Inventory Item
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Package size={18} className="text-blue-500" />
                SKU: PRD-0001-DW
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center pt-4">
        <button 
          className="text-gray-500 flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition"
          onClick={() => {navigate("/admin/products")}}
        >
          <ArrowLeft size={18} /> Back to List
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;