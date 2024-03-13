import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resData from "../../utils/restaurantCardMockData";
import "@testing-library/jest-dom";

it("Should Render Restaurant Card Component", () => {
  render(<RestaurantCard resData={resData} />);

  const nameOfRes = screen.getByText(resData.info.name);

  expect(nameOfRes).toBeInTheDocument();
});
