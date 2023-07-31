import React from "react";
import { useParams } from "react-router-dom";

const TransPage = () => {
  const { userId, postId } = useParams();

  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to store the amount in the database
      await makeRequest.post("/money", { amount });
      // Redirect to the below page without using useHistory
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="home">
        <div>
      <h1>Hello Transaction</h1>
      <p>User ID: {userId}</p>
      <p>Post ID: {postId}</p>
        </div>
        <form onSubmit={handleSubmit}>
        <label>
          Enter Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default TransPage;
