import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 9H1sfgRp5FWOaVpj2bsxY-stszUPMNMG2BWrDMAJSxvkjlI7j7_xwubWHUAOfK_BJTa0rm9QnEY1MdzpvllJpAw-cOTraBChOo0sSfpr5oyyAWxgn2VD1et658u4ZXYx",
  },
});
