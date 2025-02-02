import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Context/Context";
import Swal from "sweetalert2";

const DonationPage = () => {
  const { user } = useContext(ContextProvider);
  const { id } = useParams();
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const uid = user.uid;
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          `https://crowdcube-three.vercel.app/campaignDetails/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch campaign details");
        const data = await response.json();
        setCampaign(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDonation = (e) => {
    e.preventDefault();

    const donationAmount = e.target.amount.value;

    fetch(`https://crowdcube-three.vercel.app/users/${uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ donationAmount }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Donation Successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error Donating!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Continue",
        });
      });
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen p-12 md:p-24 font-Grotesk w-[90%] mx-auto">
      <p className="text-2xl md:text-4xl font-semibold text-center">
        Donate Now
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h1 className="text-3xl font-semibold mb-4">
            {campaign?.tittle || "No Title"}
          </h1>
          <img
            src={campaign?.image}
            alt="No Image"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">
            {campaign?.description || "No Description Available"}
          </p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Category:</strong> {campaign?.category || "N/A"}
            </p>
            <p>
              <strong>Donation Goal:</strong> ${campaign?.donationAmount || "0"}
            </p>
            <p>
              <strong>Deadline:</strong>{" "}
              {campaign?.deadline
                ? new Date(campaign.deadline).toDateString()
                : "No Deadline"}
            </p>
            <p>
              <strong>Created by:</strong> {campaign?.userName || "Unknown"} (
              {campaign?.email || "No Email"})
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleDonation}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-8"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              Make a Donation
            </h2>

            <label className="block mb-2 font-medium">
              Donation Amount ($)
            </label>
            <input
              type="number"
              name="amount"
              className="w-full p-2 border rounded-lg mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
