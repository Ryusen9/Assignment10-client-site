import PropTypes from "prop-types";
import { FaRegUser } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Button from "./Button";
import { Link } from "react-router-dom";
const Trending = ({ data }) => {
  return (
    <div className="md:w-4/5 mx-auto flex flex-col font-Grotesk items-center justify-center h-full">
      <p className="text-xl md:text-4xl font-semibold text-center">
        Explore Trending Campaigns
      </p>
      <div className="md:p-5 w-full md:w-11/12 mx-auto mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((card) => (
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
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{card.category}</div>
              </div>
              <div>
                <Link to={`/campaignDetails/${card._id}`}>
                  <Button
                    text="Details"
                    classList={
                      "border-2 px-3 md:px-6 py-[10px] text-slate-600 hover:text-slate-200 text-sm md:text-base rounded-xl mt-3 text-white hover:bg-purple-500 duration-300"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link>
          <Button text="See More"
                    classList={
                      "border-2 px-3 md:px-6 py-[10px] text-slate-600 hover:text-slate-200 text-sm md:text-base rounded-xl mt-3 text-white hover:bg-purple-500 duration-300"} />
        </Link>
      </div>
    </div>
  );
};

Trending.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Trending;
