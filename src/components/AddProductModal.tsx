
import { useState, type ChangeEvent, type FormEvent } from "react";
import { X, Upload, Package, DollarSign, Tag, Archive, AlignLeft, AlertCircle } from "lucide-react";
import CustomeSelect from "./ui/CustomeSelect";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "watch",
    description: "",
    image: "",
  });
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("New Product Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in duration-200">
       {error && (
        <div className="flex items-center gap-3 p-4 mb-4 text-sm text-red-800 border border-red-200 rounded-2xl bg-red-50 dark:bg-red-900/10 dark:text-red-400 dark:border-red-800/50 animate-in fade-in slide-in-from-top-1">
            <AlertCircle size={18} className="shrink-0" />
            <p className="font-medium">{error}</p>
        </div>
        )}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Product</h2>
            <p className="text-sm text-gray-500">Fill in the details to expand your inventory.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Package size={16} className="text-blue-500" /> Product Name
              </label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. iPhone 15 Pro"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Tag size={16} className="text-blue-500" /> Category
              </label>
              <CustomeSelect 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
              >
                <option value="watch">Watch</option>
                <option value="phone">Phone</option>
                <option value="laptop">Laptop</option>
              </CustomeSelect>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <DollarSign size={16} className="text-blue-500" /> Price
              </label>
              <input
                required
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Stock */}
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Archive size={16} className="text-blue-500" /> Stock Quantity
              </label>
              <input
                required
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="e.g. 50"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <AlignLeft size={16} className="text-blue-500" /> Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell customers more about this product..."
              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Upload size={16} className="text-blue-500" /> Image URL
            </label>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/20 transition active:scale-95"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;