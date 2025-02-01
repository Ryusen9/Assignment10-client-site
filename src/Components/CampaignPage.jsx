import { useContext } from "react";
import Swal from "sweetalert2";
import { ContextProvider } from "../Context/Context";

const CampaignPage = () => {
  const { user } = useContext(ContextProvider);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const image = formData.get("image");
    const tittle = formData.get("tittle");
    const category = formData.get("type");
    const description = formData.get("description");
    const donationAmount = formData.get("donation");
    const deadline = formData.get("deadline");
    const userName = formData.get("username");
    const email = formData.get("email");
    const UID = user.uid;

    const newCampaign = {
      UID,
      image,
      tittle,
      category,
      description,
      donationAmount,
      deadline,
      userName,
      email,
    };
    fetch("crowdcube-three.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Campaign Created Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error Creating Campaign!",
          icon: "error",
          text: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="min-h-screen w-full font-Grotesk p-20">
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          Add Your Campaign
        </h1>
        <p className="text-center">
          Start something innovative, by sharing your ideas here!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-full w-full gap-4 mt-5 p-4 flex flex-col items-center justify-between"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-32">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Image Link
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
                name="image"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Campaign Tittle:</span>
              </div>
              <input
                type="text"
                name="tittle"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[189px] content-center mx-auto">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Campaign Category:</span>
              </div>
              <select name="type" className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Personal Issue</option>
                <option>Startup</option>
                <option>Business</option>
                <option>Creative Ideas</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description:</span>
              </div>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Enter your campaign description"
              ></textarea>
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Donation Amount</span>
            </div>
            <input
              type="number"
              name="donation"
              placeholder="Enter your donation amount"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Deadline</span>
            </div>
            <input
              type="date"
              name="deadline"
              placeholder="Enter a deadline"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="username"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              placeholder="daisy@site.com"
              name="email"
            />
          </label>
        </div>

        <button type="submit" className="btn mt-5">
          Add
        </button>
      </form>
    </div>
  );
};

export default CampaignPage;
