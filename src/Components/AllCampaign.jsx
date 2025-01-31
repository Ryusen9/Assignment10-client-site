import { FaRegUser } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom"

const AllCampaign = () => {
    const campaigns = useLoaderData();
  return (
    <div className="min-h-screen w-full p-16 md:p-20 lg:p-24">
        <p className="text-center font-semibold text-2xl md:text-4xl">Explore All the Campaigns</p>
        <div className="mt-4 p-6 h-full w-full">
        <div className="md:p-5 w-full md:w-11/12 mx-auto mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((card) => (
          <div key={card._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {card.tittle}
                <div className="badge badge-secondary bg-purple-300 border-none">
                  Trending 🔥
                </div>
              </h2>
              <p>{card.description}</p>
              <div className="flex flex-col gap-2">
                <p className="flex items-center text-sm">
                  <GiTakeMyMoney /> Donation Amount:{" "}
                  <span className="font-semibold ml-1">
                    {card.donationAmount}
                  </span>
                </p>
                <p className="flex items-center text-sm">
                  <SlCalender /> Deadline:{" "}
                  <span className="font-semibold ml-1">{card.deadline}</span>
                </p>
                <p className="flex items-center text-sm">
                  <FaRegUser /> Posted by :{" "}
                  <span className="font-semibold ml-1">{card.userName}</span>
                </p>
                <p className="flex items-center text-sm">
                  <MdOutlineAlternateEmail /> Email :{" "}
                  <span className="font-semibold ml-1">{card.userName}</span>
                </p>
              </div>
              <div className="card-actions justify-between items-center">
                <Link to={`/campaignDetails/${card._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
                <div className="badge badge-outline">{card.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default AllCampaign