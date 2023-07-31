export const createTransaction = (req, res) => {
    const { amount, postId } = req.body;
    const token = req.cookies.accessToken;
  
    if (!token) {
      return res.status(401).json("Not logged in!");
    }
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
  
      const userId = userInfo.id;
      const payerId = userId;
      const transactionTime = moment().format("YYYY-MM-DD HH:mm:ss");
  
      const query = "INSERT INTO transaction (amount, UserId, PostId, payerId, transAt) VALUES (?, ?, ?, ?, ?)";
      const values = [amount, userId, postId, payerId, transactionTime];
  
      db.query(query, values, (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }
  
        return res.status(200).json("Transaction created successfully.");
      });
    });
  };
  