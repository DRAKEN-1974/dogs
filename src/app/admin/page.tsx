"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface TableData {
  contacts: any[];
  ai_interactions: any[];
  dog_profiles: any[];
  appointments: any[];
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('contacts');
  const [data, setData] = useState<TableData>({
    contacts: [],
    ai_interactions: [],
    dog_profiles: [],
    appointments: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const timestamp = '2025-04-30 09:28:48';
      const userId = 'draken197413';

      let { data: tableData, error } = await supabase
        .from(activeTab)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setData(prev => ({
        ...prev,
        [activeTab]: tableData
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const { error } = await supabase
          .from(activeTab)
          .delete()
          .match({ id });

        if (error) throw error;
        
        fetchData();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete item');
      }
    }
  };

  const filteredData = data[activeTab as keyof TableData]?.filter((item: any) =>
    Object.values(item).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) || [];

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <p>User: {process.env.NEXT_PUBLIC_USER_ID}</p>
            <p>Last Updated: {process.env.NEXT_PUBLIC_TIMESTAMP}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-4">
          {Object.keys(data).map((table) => (
            <button
              key={table}
              onClick={() => {
                setActiveTab(table);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === table 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {table.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full p-2 bg-gray-800 rounded-lg"
          />
        </div>

        {/* Data Table */}
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  {paginatedData[0] && Object.keys(paginatedData[0]).map((key) => (
                    <th key={key} className="p-3 text-left">
                      {key.replace('_', ' ').toUpperCase()}
                    </th>
                  ))}
                  <th className="p-3 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800"
                  >
                    {Object.entries(item).map(([key, value]) => (
                      <td key={key} className="p-3">
                        {typeof value === 'object' 
                          ? JSON.stringify(value) 
                          : String(value)}
                      </td>
                    ))}
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 
                    ? 'bg-blue-600' 
                    : 'bg-gray-800'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
              className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}