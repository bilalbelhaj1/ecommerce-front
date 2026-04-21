import { useMemo, useState, type ChangeEvent } from "react";
import {
  Plus,
  Grid3X3,
  List,
  Eye,
} from "lucide-react";
import SearchBox from "../../components/ui/SearchBox";
import CustomeSelect from "../../components/ui/CustomeSelect";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

const mockProducts: Product[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["watch", "phone", "laptop"][i % 3],
  price: Math.floor(Math.random() * 500) + 50,
  image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80`,
}));

const Products = () => {
  const [view, setView] = useState<"table" | "cards">("cards");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const itemsPerPage = 8;

  const filtered = useMemo(() => {
    return mockProducts.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleView = (id: number) => {
    console.log(`Navigating to product details for ID: ${id}`);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6 text-gray-900 dark:text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Inventory</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your store items and view details.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>
    
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-2 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <SearchBox search={search} onChange={handleSearch}/>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <CustomeSelect value={category} onChange={handleCategoryChange}>
            <option value="watch">Watch</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
          </CustomeSelect>

          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-lg transition-all ${view === "table" ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600" : "text-gray-400"}`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setView("cards")}
              className={`p-2 rounded-lg transition-all ${view === "cards" ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600" : "text-gray-400"}`}
            >
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>
      </div>

      {view === "cards" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginated.map((p) => (
            <div key={p.id} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-40 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg leading-tight">{p.name}</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">${p.price}</span>
                </div>
                <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {p.category}
                </span>
                <button 
                  onClick={() => handleView(p.id)}
                  className="w-full mt-2 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 rounded-xl text-sm font-medium transition"
                >
                  <Eye size={16} /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 uppercase tracking-wider">
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {paginated.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition">
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {p.category}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-blue-600">${p.price}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleView(p.id)}
                      className="text-gray-500 hover:text-blue-600 transition"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center gap-2 pt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition ${page === i + 1 ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {
        modalOpen && <h1>Do something</h1>
      }
    </div>
  );
};

export default Products;