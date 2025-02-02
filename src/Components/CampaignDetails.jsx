import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-semibold mb-4">{campaign.tittle}</h1>
        <img
          src={campaign.image}
          alt={campaign.tittle}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600">{campaign.description}</p>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Category:</strong> {campaign.category}
          </p>
          <p>
            <strong>Donation Goal:</strong> ${campaign.donationAmount}
          </p>
          <p>
            <strong>Deadline:</strong>{" "}
            {new Date(campaign.deadline).toDateString()}
          </p>
          <p>
            <strong>Created by:</strong> {campaign.userName} ({campaign.email})
          </p>
        </div>
        <Link to={`/myDonations/${campaign._id}`}>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignDetails;
