"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DateReserve from "@/components/DateReserve";
import getShops from "@/libs/getShops";
import createReservation from "@/libs/createReservation";
import { MassageItem } from "../../../../interface";
import dayjs, { Dayjs } from "dayjs";

export default function Reservation() {
  const [shops, setShops] = useState<MassageItem[]>([]);
  const [selectedShop, setSelectedShop] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchShops = async () => {
      try {
        const data = await getShops();
        setShops(data.data);
      } catch (error) {
        console.error("Failed to fetch shops:", error);
      }
    };

    fetchShops();
  }, [router]);

  const handleReservation = async () => {
    const token = localStorage.getItem("token");
    if (!selectedShop || !selectedDate || !token) {
      alert("Please select both a shop and a date.");
      return;
    }

    try {
      const result = await createReservation({
        massageShopId: selectedShop,
        reservationDate: selectedDate.toISOString(),
        token,
      });

      alert("Reservation successful!");
      router.push("/");
    } catch (err: any) {
      console.error("Error making reservation:", err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-4 w-full">
          <label className="block text-lg font-semibold mb-2 w-full">
            Date Reservation
          </label>
          <DateReserve selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Massage Shop
          </label>
          <select
            className="w-full border rounded-lg p-3 bg-gray-50"
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
          >
            <option value="">Select Massage Shop</option>
            {shops.map((shop) => (
              <option key={shop._id} value={shop._id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleReservation}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
        >
          Make a reservation
        </button>
      </div>
    </div>
  );
}
