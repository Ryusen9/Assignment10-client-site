import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../Context/Context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { user } = useContext(ContextProvider);
  const uid = user?.uid;
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4980/myCampaign/${uid}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        Swal.fire({
          title: "Error fetching data!",
          text: error.message,
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  const handleDelete = (campaignId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:4980/deleteCampaign/${campaignId}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) throw new Error("Failed to delete");

          setAllData((prevData) =>
            prevData.filter((item) => item._id !== campaignId)
          );

          Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", `Failed to delete campaign. ${error}`, "error");
        }
      }
    });
  };

  if (!uid) return <p className="text-center">Loading...</p>;

  return (
    <div className="min-h-screen p-12 md:p-24 font-Grotesk">
      <p className="text-center text-2xl font-semibold">My Campaigns</p>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto">
          {allData.length > 0 ? (
            allData.map((card) => (
              <div
                key={card._id}
                className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
              >
                <h1 className="text-3xl font-semibold mb-4">{card.tittle}</h1>
                <img
                  src={card.image}
                  alt={card.tittle}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">{card.description}</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Category:</strong> {card.category}
                  </p>
                  <p>
                    <strong>Donation Goal:</strong> ${card.donationAmount}
                  </p>
                  <p>
                    <strong>Deadline:</strong>{" "}
                    {new Date(card.deadline).toDateString()}
                  </p>
                  <p>
                    <strong>Created by:</strong> {card.userName} ({card.email})
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Link to={`/updateCampaign/${card._id}`}>
                    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(card.UID)}
                    className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No campaigns found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
