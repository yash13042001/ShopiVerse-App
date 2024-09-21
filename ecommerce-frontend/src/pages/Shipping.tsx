import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shippinginfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippinginfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippinginfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippinginfo.state}
          onChange={changeHandler}
        />
        <select
          name="country"
          required
          value={shippinginfo.country}
          onChange={changeHandler}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
        </select>
        <input
          required
          type="number"
          placeholder="PinCode"
          name="pinCode"
          value={shippinginfo.pinCode}
          onChange={changeHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
